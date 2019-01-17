import React from 'react'
import './style.css'

const ImageCard = props => (

        <div className="img-container" key={props.id} onClick={() => props.handleClick(props.id)}>
            <img alt='' className="img-thumbnail" src={props.image} />
        </div>

)



export default ImageCard