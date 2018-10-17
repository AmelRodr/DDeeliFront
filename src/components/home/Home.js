import React, { Component } from 'react'
import { Layout} from 'antd';
//import logo from '../../logo.png'
//import uno from '../../ddeeliGallery/1.jpg'
import dos from '../../ddeeliGallery/2.jpg'
import tres from '../../ddeeliGallery/3.jpg'
import cuatro from '../../ddeeliGallery/4.jpg'
//import cinco from '../../ddeeliGallery/5.jpg'
import Menu1 from '../cards/Menu';
import { UncontrolledCarousel, Button } from 'reactstrap';
import Foter from './Foter';
import Nab from './Nab';



const items = [
  {
    src: cuatro,
    altText: '',
    caption: <div style={{ paddingBottom: '45%' }}> <Button href='/signup' color="info" >Localiza tu chef</Button> </div>,
    header: <div style={{ paddingBottom: '15%' }}> <h1>Pide tu comida a chefs independientes</h1> </div>
  },
  {
    src: dos,
    altText: 'Slide 2',
    caption: <div style={{ paddingBottom: '45%' }}> <Button href='/signup' color="info" >Localiza tu chef</Button> </div>,
    header: <div style={{ paddingBottom: '15%' }}> <h1>La comida mas sabrosa</h1> </div>
  },
  {
    src: tres,
    altText: 'Slide 3',
    caption: <div style={{ paddingBottom: '45%' }}> <Button href='/signup' color="info" >Localiza los chefs cerca de ti</Button> </div>,
    header: <div style={{ paddingBottom: '15%' }}> <h1>Descubre a tu chef favorito</h1> </div>
  }
];

const { Content } = Layout;

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
    console.log(this.props)
    return (

      <div>

        <Nab {...this.props}/>
        <Layout className="layout">
          <Content style={{ padding: '0 10px' }}>

            <UncontrolledCarousel items={items} />

            <Menu1 {...this.props} />

          </Content>

          <Foter />

        </Layout>
      </div>
    )

  }
}
export default Home