import React from 'react'

const url = 'http://localhost:3000'
//const url = 'https://integration1.herokuapp.com'

const ImageCard = ({caption, _id, link, user, likes}) => <img height="200" width="200" src={`${url}${link}`} alt={caption} />

const Gallery = ({pics=[]}) => {
    if(pics.length < 1) return <h1>No hay fotos</h1>
    return(
        <div style={{display:"flex", flexWrap:"wrap"}}>
            {/*pics.map((pic,i)=><ImageCard key={i} {...pic} />)*/}
        </div>
    )
}

export default Gallery