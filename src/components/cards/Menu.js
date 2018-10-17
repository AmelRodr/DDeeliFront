import React, { Component } from 'react';
import { Card, Layout } from 'antd';
import Nab from '../home/Nab';
import Foter from '../home/Foter'

const { Meta } = Card;
const { Content } = Layout;
class Menu extends Component {
  state={
    rut:false,
    user:{},
    pics:[]
  }
  componentWillMount(){
    /*console.log('props',this.props.history.location.pathname) 
    const ruta = this.props.history.location.pathname
    console.log(this.state.rut,ruta)
    if(ruta ==="/ourmenu") {
    this.setState({rut:true})
    }
    console.log(this.state.rut)*/
    // const user = JSON.parse(localStorage.getItem('user'))
    // if(!user) return this.props.history.push('/')
    // this.setState({user})
    // console.log('*******user',user)
    //pedimos las fotos correspondientes al usuario
   // this.getPics()
  }
   
 

  render() {
    
   const {rut} = this.state

    return (
      <div>

    <Nab />
        <Layout className="layout">
          <Content style={{ padding: '0 10px' }}>

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