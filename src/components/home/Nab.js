
import React, { Component } from 'react';
import logo from '../../logo.png'
import Login from '../auth/Login';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button } from 'reactstrap';

class Nab extends Component {
  constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle (){
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      logout= ()=> {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
         
      }
      onOurMenu= ()=> {
          this.props.history.push('/ourmenu')
      }
      onSignup = () =>{
        this.props.history.push('/signup')
    }
    
    render() {
    console.log(this.props)
    const islogged = localStorage.getItem('token')
    console.log('isloged',islogged)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"> <img src={logo} width='130' style={{ borderRadius: '10%' }} alt='' /> </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div style={{ marginRight: '50px' }}>
                                   {!islogged? '': <Button onClick={this.onOurMenu} outline color="success">Nuestro Menu</Button> } 
                                </div>
                            </NavItem>
                            <NavItem>
                                <div style={{ marginRight: '50px' }}>
                                   {!islogged? <Button onClick={this.onOurMenu} outline color="success">our Menu</Button>: <Button onClick={this.onOurMenu} outline color="success">Quieres ser chef?</Button> } 
                                </div>
                            </NavItem>
                            <NavItem>
                                <div style={{ marginRight: '5px' }}>
                                {!islogged ? <Login {...this.props} /> :<Button href='/profile' color="info" >Profile</Button>  }
                                
                                </div>
                            </NavItem>
                            <NavItem>
                              { !islogged ? <Button onClick={this.onSignup} color="info" >Signup</Button>  : <Button href='/' onClick={this.logout} color="danger" >Logout</Button> }   
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Nab
