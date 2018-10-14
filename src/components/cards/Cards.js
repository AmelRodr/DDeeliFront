import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';

const { Meta } = Card;
const Cards = ()=>{
    return (
        <div style={{margin:'30px 30px 30px 30px', display:'flex', justifyContent:'space-around'}}>
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
      
      </div>
    )
}

export default Cards