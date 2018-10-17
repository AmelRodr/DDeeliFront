import React, { Component } from 'react'
import Nab from '../home/Nab';
import Foter from '../home/Foter';
import { Grid, Container, Image, Header, Button, Icon } from 'semantic-ui-react'
import { Layout } from 'antd';
import uno from '../../ddeeliGallery/1.jpg'
import Mapa from '../map/Mapa';
import { getUserPlatillo } from '../../services/userService'

const { Content } = Layout;


class MenuDetail extends Component {

    state = {
        platillo: { pictures: [] },
        ima: uno,
        titulo: 'Huevos Rancheros',
        precio: '$ 100',
        mapa: 'http://d2yspv744gxsd1.cloudfront.net/wp-content/uploads/2016/02/11175852/mapa.pantallas-737x280.jpg'
    }
    componentWillMount() {
        const { id } = this.props.match.params
        console.log(this.props)
        getUserPlatillo(id)
            .then(res => {
                this.setState({ platillo: res })
            }).catch(e => e)
    }

    render() {
        const {platillo } = this.state
        const pres= `$${platillo.price} `

        return (
            <div>
                <Layout className="layout">
                    <Nab />

                    <div style={{ marginTop: '10px' }} >

                        <Content style={{ padding: '0 10px' }}>
                            <Grid divided='vertically' centered columns={1}>
                                <Grid.Column width={13}>
                                    <Container>



                                        <Grid divided='vertically'>
                                            <Grid.Row columns={2}>
                                                <Grid.Column width={8}  >
                                                    <Image src={platillo.pictures[1]} />
                                                </Grid.Column>
                                                <Grid.Column >

                                                    <Header as='h1'>{platillo.title}</Header>
                                                    <Header as='h2'>{pres} </Header>
                                                    <br />

                                                    <br />
                                                    <br />
                                                    <br />
                                                    <Button color='red' animated>
                                                        <Button.Content visible>Comprar</Button.Content>
                                                        <Button.Content hidden>
                                                            <Icon name='arrow right' />
                                                        </Button.Content>
                                                    </Button>
                                                </Grid.Column>
                                            </Grid.Row>

                                            <Grid.Row centered columns={1}>
                                                <Grid.Column width='10' >
                                                <Header as='h1'>Descripción</Header>
                                                <Header as='h4'>{platillo.description} </Header>
                                                <Header as='h3'>Horario de atención: </Header>
                                                <Header as='h4'>{platillo.horario} </Header>

                                                    {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                                                </Grid.Column>
                                              
                                            </Grid.Row>
                                            <Grid.Row columns={1}>
                                                <Grid.Column>
                                                <Header as='h1'>Ubicación</Header>
                                                    <div style={{ height: '600px' }} >
                                                        <Mapa />
                                                    </div>
                                                    {/* <Image src={mapa} /> */}
                                                </Grid.Column>

                                            </Grid.Row>


                                        </Grid>


                                    </Container>
                                </Grid.Column>

                            </Grid>



                        </Content>

                    </div>
                    <br/>
                    <br/> 
                    <br/>
                    <br/>

                    <Foter />

                </Layout>

            </div>
        )
    }
}

export default MenuDetail