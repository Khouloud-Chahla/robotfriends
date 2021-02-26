import React from 'react';

const Card = (props) => {
    return(
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src= {`https://robohash.org/${props.obj.id}`} alt='photo'/>
            <h6>{props.obj.name}</h6>
            
            <p>{props.obj.email}</p>

        </div>
    )
}

export default Card