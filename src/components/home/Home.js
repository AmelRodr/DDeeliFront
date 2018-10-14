import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb,Carousel } from 'antd';
import logo from '../../logo.png'
import uno from '../../ddeeliGallery/1.jpg'
import dos from '../../ddeeliGallery/2.jpg'
import tres from '../../ddeeliGallery/3.jpg'
import cuatro from '../../ddeeliGallery/4.jpg'
import cinco from '../../ddeeliGallery/5.jpg'

   import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledCarousel,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';
import Cards from '../cards/Cards';


const items = [
    {
      src:cuatro,
      altText: '',
      caption:<div style={{paddingBottom:'45%'}}> <Button href='/signup' color="info" >Localiza tu chef</Button> </div>,
      header: <div style={{paddingBottom:'15%'}}> <h1>Pide tu comida a chefs independientes</h1> </div>
    },
    {
      src:dos,
      altText: 'Slide 2',
      caption:<div style={{paddingBottom:'45%'}}> <Button href='/signup' color="info" >Localiza tu chef</Button> </div>,
      header: <div style={{paddingBottom:'15%'}}> <h1>La comida mas sabrosa</h1> </div>
    },
    {
      src: tres,
      altText: 'Slide 3',
      caption:<div style={{paddingBottom:'45%'}}> <Button href='/signup' color="info" >Localiza los chefs cerca de ti</Button> </div>,
      header: <div style={{paddingBottom:'15%'}}> <h1>Descubre a tu chef favorito</h1> </div>
    }
  ];

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

               <Layout  className="layout">
                    <Content style={{ padding: '0 10px' }}>
        
                    
                    <UncontrolledCarousel items={items} />
                       
                    <Cards/>

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