import React, { Component } from 'react';
import { Layout } from 'antd';
import Nab from '../home/Nab';
import Foter from '../home/Foter'
import { getPlatillos } from '../../services/userService'
import toastr from 'toastr'
import CardsUser from './CardsUser';

const { Content } = Layout;
class Menu extends Component {
  state = {
    platillos: []
  }
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    this.setState({ user })
    this.getPlatillos()
  }

  getPlatillos = () => {
    getPlatillos()
      .then(platillos => {
        console.log(platillos)
        this.setState({ platillos })
      })
      .catch(e => toastr.error('No pude traer los platillos'))
  }


  render() {

    const {platillos } = this.state
    const { location } = this.props
    return (
      <div>

        {location.pathname === '/' ? '' : <Nab {...this.props} />}
        <Layout className="layout">
          <Content style={{ padding: '0 10px' }}>

            <CardsUser platillos={platillos} />


          </Content>
          {location.pathname === '/' ? '' : <Foter />
          }

        </Layout>
      </div>
    )
  }
}


export default Menu