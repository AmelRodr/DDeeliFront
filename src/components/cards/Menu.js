import React, { Component } from 'react';
import { Card, Layout } from 'antd';
import Nab from '../home/Nab';
import Foter from '../home/Foter'
import { getUserPlatillos, getPlatillos } from '../../services/userService'
import toastr from 'toastr'
import CardsUser from './CardsUser';

const { Meta } = Card;
const { Content } = Layout;
class Menu extends Component {
  state = {
    rut: false,
    user: {},
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

    const { rut, user, platillos } = this.state
    const { location, match } = this.props
    return (
      <div>

        {location.pathname === '/' ? '' : <Nab {...this.props} />}
        <Layout className="layout">
          <Content style={{ padding: '0 10px' }}>

            <CardsUser platillos={platillos} />


          </Content>

          <Foter />

        </Layout>
      </div>
    )
  }
}


export default Menu