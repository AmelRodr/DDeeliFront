import React, { Component } from 'react'
import  { Input, Button, Layout} from 'antd'
import toastr from 'toastr'
import axios from 'axios'
import Nab from '../home/Nab';
import Foter from '../home/Foter';

const { Content } = Layout;

const url = 'http://localhost:3000/signup'
//const url = 'https://integration1.herokuapp.com/signup'

class Signup extends Component {

    state = {
        signup: {},
        loading: false
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const { signup } = this.state
        signup[field] = value
        this.setState({ signup })
    }

    createUser = (e) => {
        e.preventDefault()
        const { signup } = this.state
        if (signup.password !== signup.password2) {
            return toastr.error('Constraseñas no coiciden')
        }
        axios.post(url, signup)
            .then(user => {
                console.log(user)
                toastr.success("Bienvenido")
                this.props.history.push('/')
            })
            .catch(e => toastr.error("Intenta de nuevo"))
    }

    render() {
        const { signup, loading } = this.state
        return (
            <div>
                <Layout className="layout">
                    <Nab />
                    <Content style={{ padding: '0 10px' }}>
                        <form onSubmit={this.createUser} style={{ width: 600, margin: "0 auto", padding: 20 }}>
                            <h2>Regístrate</h2>
                            <p>
                                <Input
                                    name="username"
                                    type="text"
                                    onChange={this.onChange}
                                    value={signup.username}
                                    placeholder="Tu nombre de usuario"
                                />

                            </p>
                            <p>
                                <Input
                                    name="email"
                                    type="email"
                                    onChange={this.onChange}
                                    value={signup.email}
                                    placeholder="Tu correo"
                                />
                            </p>
                            <p>
                                <Input
                                    name="password"
                                    type="password"
                                    onChange={this.onChange}
                                    value={signup.password}
                                    placeholder="Tu Password"
                                />
                            </p>
                            <p>
                                <Input
                                    name="password2"
                                    type="password"
                                    onChange={this.onChange}
                                    value={signup.password2}
                                    placeholder="Repite tu Password"
                                />
                            </p>
                            <Button loading={loading} type="primary" htmlType="submit" >Registrarme</Button>
                        </form>

                    </Content>
                    <Foter />
                </Layout>


            </div>
        )
    }
}

export default Signup