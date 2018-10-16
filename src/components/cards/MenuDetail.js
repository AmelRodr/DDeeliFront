import React, { Component } from 'react'
import Nab from '../home/Nab';
import Foter from '../home/Foter';
// import { storiesOf } from '@storybook/react';

// import Pagination from 'react-bulma-components/lib/components/pagination';
import { Layout} from 'antd';
import MenuFeed from './MenuFeed';
const { Content } = Layout;
// storiesOf('Pagination', module)
//   .addDecorator(story => <div style={{ margin: 50 }}>{story()}</div>)
//   .add('Default', () => <Pagination current={3} total={5} delta={1} />)
class MenuDetail extends Component {
    render() {
        return (
            <div>

                 <MenuFeed/>
                <Layout className="layout">
                <Nab/>
                    <Content style={{ padding: '0 10px' }}>
                   
                     <h1>Detalle</h1>
                    
                    
                    </Content>
                    <Foter/>
                </Layout>               
            </div>
        )
    }
}

export default MenuDetail