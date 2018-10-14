import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from '../../logo.jpg'

   import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';

const { Header, Content, Footer } = Layout;

class Home extends Component {
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
                                <Button href='/login' outline color="info">Login</Button>{''}
                            </div>
                        </NavItem>
                        <NavItem>
                            <Button href='/signup' color="info" >Signup</Button>{' '}
                        </NavItem>

                    </Nav>
                    </Collapse>
                </Navbar>         

               <Layout theme="dark" className="layout">
                    <Content style={{ padding: '0 10px' }}>
                       
                        <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>Content</div>
                    </Content>
                    <Footer   style={{ textAlign: 'center' }}>
                        DDEELI ©2018 Created by Amel  
                         &nbsp;  Terms
                         &nbsp;  Privacy
                         &nbsp;  Security
                         &nbsp;  Status
                         &nbsp;  Help
                         &nbsp;  Contact ddeeli
                        
                    </Footer>
                </Layout>
            </div>
        )

    }
}
export default Home