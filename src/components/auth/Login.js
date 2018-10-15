import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {Input, Button, Modal,Form, Icon, Checkbox} from 'antd'
import axios from 'axios'
import toastr from 'toastr'

const url = 'http://localhost:3000/login'
const FormItem = Form.Item;

class NormalLoginForm  extends Component{

    state = {
        auth:{},
        loading:false,
        visible: false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.state
        axios.post(url, auth)
        .then(res=>{
            console.log(res)
            toastr.success("Bienevenido")
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            this.setState({loading:false})
            const bonito = this.props.history
            bonito.push('/profile')

        })
        .catch(e=>{
            toastr.error("Usuario o contraseña incorrectas")
            this.setState({loading:false})
            
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[field] = value
        this.setState({auth})
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

    render(){
        const {auth, loading} = this.state
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
            
              <Button type="primary" onClick={this.showModal}>
              Open Modal
            </Button>

            <Modal
              title="Login"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >

                    <Form onSubmit={this.login} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input type="email" name='email' onChange={this.onChange} value={auth.email} prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input type='password' name="password"  onChange={this.onChange}
                                value={auth.password} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>


                    <form onSubmit={this.login} style={{ width: 600, margin: "0 auto", padding: 20 }}>
                        <h2>Inicia sesión mijo</h2>
                        <p>
                            <Input
                                name="email"
                                type="email"
                                onChange={this.onChange}
                                value={auth.email}
                                placeholder="Tu correo"
                            />
                        </p>
                        <p>
                            <Input
                                name="password"
                                type="password"
                                onChange={this.onChange}
                                value={auth.password}
                                placeholder="Tu Password"
                            />
                        </p>
                        <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
                    </form>


          
            
            </Modal>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

///ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('container'));
const Login = WrappedNormalLoginForm
export default Login