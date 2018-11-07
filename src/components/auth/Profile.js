import React, { Component } from 'react'
import axios from 'axios'
import toastr from 'toastr'
import { uploadPic, getUserPics } from '../../services/userService'
import { Layout, Menu, Icon } from 'antd';
import ProfileDisplay from './ProfileDisplay';
import Comida from '../Comidas/Comida';
import Nab from '../home/Nab'
import Foter from '../home/Foter'
import Menu1 from '../cards/Menu'

const { Content, Sider } = Layout;
const { SubMenu } = Menu;


class Profile extends Component {

    state = {
        user: {},
        pics: [],
        current: '1'
    }

    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        if (!user) return this.props.history.push('/login')
        this.setState({ user })
        //pedimos las fotos correspondientes al usuario
        this.getPics()
    }

    getPics = () => {
        getUserPics()
            .then(pics => {
                this.setState({ pics })
            })
            .catch(e => toastr.error("no pude traer tus pics"))
    }


    getPrivateInfo = () => {
        axios.get('http://localhost:3000/private', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(e => toastr.error("algo falló", e.message))
    }

    uploadPhoto = () => {
        this.refs.input.click()
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        uploadPic(e.target.files[0])
            .then(pic => console.log(pic))
            .catch(e => toastr.error('Error'))
    }

    menuItem = (e) => {
        this.setState({ current: e.key })
    }

    render() {
        const { current, user, pics } = this.state
        console.log(current)
        let contenedor;
        if (current == 1) {
            contenedor = <Content style={{ padding: '0 24px', minHeight: 280 }}> <ProfileDisplay {...this.props} user={user} /> </Content>
        } else if (current == 2) {

            contenedor = <Content style={{ padding: '0 24px', minHeight: 280 }}><Menu1 {...this.props} /> <Comida {...this.props} /> </Content>
        } else if (current == 3) {

            contenedor = <Content style={{ padding: '0 24px', minHeight: 280 }}>Sin compras</Content>
        } else if (current == 4) {

            contenedor = <Content style={{ padding: '0 24px', minHeight: 280 }}>Sin mensajes </Content>
        }
        return (
            <Layout>

                <Nab />

                <Content style={{ padding: '0 50px' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                                onClick={this.menuItem}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />{user.username}</span>}>
                                    <Menu.Item key="1">Perfil</Menu.Item>
                                    <Menu.Item key="2">Productos</Menu.Item>
                                    <Menu.Item key="3">Recibos</Menu.Item>
                                    <Menu.Item key="4">Mensajes</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>

                        {contenedor}
                    </Layout>
                </Content>

                <Foter />

            </Layout>
        )
    }
}

export default Profile