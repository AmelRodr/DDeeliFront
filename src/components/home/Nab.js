
import React, { Component } from 'react';
import logo from '../../logo.png'
import Login from '../auth/Login';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

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

    logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')

    }

    render() {    
        const islogged = localStorage.getItem('token')       
        return (
            <div>
                <Navbar color="light" light expand="md">
                <Link to='/' > <NavbarBrand> <img src={logo} width='130' style={{ borderRadius: '10%' }} alt='' /> </NavbarBrand></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

  
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div style={{ marginRight: '50px' }}>
                                    {!islogged  ? '' : <Link to='/ourmenu' ><Button outline color="success">Nuestro Menu</Button>  </Link>}
                                </div>
                            </NavItem>
                            <NavItem>
                                <div style={{ marginRight: '50px' }}>
                                    {!islogged ? <Link to='/ourmenu' ><Button outline color="success">our Menu</Button> </Link> :<Link to='/ourmenu' > <Button outline color="success">Quieres ser chef?</Button></Link>}
                                </div>
                            </NavItem>
                            <NavItem>
                                <div style={{ marginRight: '5px' }}>
                                    {!islogged ? <Login {...this.props} /> :<Link to='/profile' > <Button  color="info" >Profile</Button></Link>}

                                </div>
                            </NavItem>
                            <NavItem>
                                {!islogged ? <Link to='/signup' ><Button color="info" >Signup</Button></Link> :<Link to='/' >  <Button href='/' onClick={this.logout} color="danger" >Logout</Button></Link>}
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}

export default Nab
