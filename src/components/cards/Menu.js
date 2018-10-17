import React, { Component } from 'react';
import { Card, Layout } from 'antd';
import Nab from '../home/Nab';
import Foter from '../home/Foter'
import {getUserPlatillos} from '../../services/userService'
import toastr from 'toastr'
import CardsUser from './CardsUser';

const { Meta } = Card;
const { Content } = Layout;
class Menu extends Component {
  state={
    rut:false,
    user:{},
    platillos:[]
  }
  componentWillMount(){
    /*console.log('props',this.props.history.location.pathname) 
    const ruta = this.props.history.location.pathname
    console.log(this.state.rut,ruta)
    if(ruta ==="/ourmenu") {
    this.setState({rut:true})
    }
    console.log(this.state.rut)*/
    const user = JSON.parse(localStorage.getItem('user'))
    this.setState({user})
    console.log('*******user',user)
  //   //pedimos las fotos correspondientes al usuario
  //  // this.getPics()
   this.getPlatillos()
  }
   
  getPlatillos = () => {
    getUserPlatillos()
    .then(platillos => {
      this.setState({platillos})
    })
    .catch(e => toastr.error('No pude traer los platillos'))
  }
 

  render() {
    
   const {rut,user,platillos} = this.state

    return (
      <div>

    <Nab />
        <Layout className="layout">
          <Content style={{ padding: '0 10px' }}>

          <CardsUser  platillos={platillos}  />

            <div style={{ margin: '30px 30px 30px 30px', display: 'flex', justifyContent: 'space-around' }}>




              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>        

            </div>
          </Content>

          <Foter />

        </Layout>
      </div>
    )
  }
}


export default Menu