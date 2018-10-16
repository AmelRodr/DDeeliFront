import React, { Component } from 'react'
import Nab from '../home/Nab';
import Foter from '../home/Foter';
import { Grid, Container, Image, Header, Button, Icon } from 'semantic-ui-react'
import { Layout } from 'antd';
import MenuFeed from './MenuFeed';
import uno from '../../ddeeliGallery/1.jpg'

const { Content } = Layout;


class MenuDetail extends Component {

    state = {
        ima: uno,
        titulo: 'Huevos Rancheros',
        precio: '$ 100',
        mapa:'http://d2yspv744gxsd1.cloudfront.net/wp-content/uploads/2016/02/11175852/mapa.pantallas-737x280.jpg'
    }

    render() {
        const { mapa,titulo, ima, precio } = this.state
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
                                                    <Image src={ima} />
                                                </Grid.Column>
                                                <Grid.Column >

                                                    <Header as='h1'>{titulo}</Header>
                                                    <Header as='h2'>{precio} </Header>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <Button  color='red' animated>
                                                        <Button.Content visible>Comprar</Button.Content>
                                                        <Button.Content hidden>
                                                            <Icon name='arrow right' />
                                                        </Button.Content>
                                                    </Button>
                                                </Grid.Column>
                                            </Grid.Row>

                                            <Grid.Row columns={2}>
                                                <Grid.Column>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                                                </Grid.Column>                                              
                                            </Grid.Row>
                                            <Grid.Row columns={1}>
                                                <Grid.Column>
                                                    <Image src={mapa} />
                                                </Grid.Column>
                                                                          
                                            </Grid.Row>

                            
                                        </Grid>


                                    </Container>
                                </Grid.Column>

                            </Grid>



                        </Content>

                    </div>


                    <Foter />

                </Layout>
            
            </div>
        )
    }
}

export default MenuDetail