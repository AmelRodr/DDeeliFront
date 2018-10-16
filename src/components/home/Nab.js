
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
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    
    render() {
    console.log(this.props)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"> <img src={logo} width='130' style={{ borderRadius: '10%' }} alt='' /> </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div style={{ marginRight: '50px' }}>
                                    <Button href='ourmenu' outline color="success">our Menu</Button>{' '}
                                </div>
                            </NavItem>
                            <NavItem>
                                <div style={{ marginRight: '5px' }}>
                                    <Login />
                                </div>
                            </NavItem>
                            <NavItem>
                                <Button href='/signup' color="info" >Signup</Button>{' '}
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Nab
