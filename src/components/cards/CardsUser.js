import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom'
const { Meta } = Card;

const ImageCard = ({ title, price, pictures, _id }) => {

  const precio = `$${price}`
  const linkToDetail = `/detail/${_id}`
  return (
    <div>
      <div style={{ margin: '30px 30px 30px 30px', display: 'flex', justifyContent: 'space-around' }}>
        <Link to={linkToDetail} >
          <Card
            hoverable
            style={{ width: 650 }}
            cover={<img defaultValue={_id} alt="example" src={pictures[0]} />}
          >
            <Meta
              title={title}
              description={precio}
            />
          </Card>
        </Link>
      </div>
    </div>

  )

}

const CardsUser = ({ platillos = [] }) => {
  if (platillos.length < 1) return <h1>No hay Platillos</h1>
  return (
    <div>
      {platillos.map((platillo, i) => <ImageCard key={i} {...platillo} />)}
    </div>
  )
}

export default CardsUser