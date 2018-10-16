import React, { Component } from 'react'
import Nab from '../home/Nab';
import Foter from '../home/Foter';
import { Grid,Container } from 'semantic-ui-react'
import { Layout} from 'antd';
import MenuFeed from './MenuFeed';
import MenuDescription from './MenuDescription';
const { Content } = Layout;

class MenuDetail extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                <Nab/>
            


                    <Content style={{ padding: '0 10px' }}>
                        <Grid centered columns={3}>
                            <Grid.Column width={12}>
                                <Container>
                                    <div style={{width:'100px', height:'100px'}}>
                                        hola
                                    </div>
                                    <MenuDescription />
                                    <MenuFeed />
                                </Container>
                            </Grid.Column>
                        </Grid>
                    </Content>
                    
              

                    
                    <Foter/>
                </Layout>               
            </div>
        )
    }
}

export default MenuDetail