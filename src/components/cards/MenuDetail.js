import React, { Component } from 'react'
import Nab from '../home/Nab';
import Foter from '../home/Foter';
import { Layout} from 'antd';
const { Content } = Layout;

class MenuDetail extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Content style={{ padding: '0 10px' }}>
                    <Nab/>
                     <h1>Detalle</h1>
                    
                    </Content>
                    <Foter/>
                </Layout>               
            </div>
        )
    }
}

export default MenuDetail