import React from 'react';
import Card from './Card';
const CardList = (props) => {

     return(
       
       <div >
           {props.robots.map( (el,i) => {
               return <Card key={i} obj = {el}/>
           })}
       </div>
     )
}
export default CardList;