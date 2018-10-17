import React from 'react'

const url = 'http://localhost:3000'
//const url = 'https://integration1.herokuapp.com'

const ImageCard = ({title,price,description,date,horario,pictures}) => <h1> {title} </h1>

const CardsUser = ({platillos=[]}) => {
    if(platillos.length < 1) return <h1>No hay Platillos</h1>
    return(
        <div>
            {platillos.map((platillo,i)=><ImageCard key={i} {...platillo} />)}
        </div>
    )
}

export default CardsUser