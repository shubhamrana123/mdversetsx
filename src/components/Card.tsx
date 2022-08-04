import React from 'react'
import { ICardProps } from '../types/common.type'
import { cardsTypes } from '../types/enum'

function Card(props: ICardProps) {

  console.log(props.cardInfo)
  return (
    <>

      <div className="card">
        <div className="card-icons">
          {`><`}
        </div>
        <div className="card-inner">
          <div className="card-title color-lightblue">{props.Heading}</div>
          {props.type == cardsTypes.Observation &&
            <ul className="custom-list">
              {props.cardInfo.map((item: any) => (
                <li key={item.cardContent.id}> {item.cardContent.details}</li>
              ))}
            </ul>
          }

          {props.type == cardsTypes.Procedures &&

            props.cardInfo.map((item: any) => (
              <p> {item.cardContent.details}</p>
            ))
          }
          {props.type == cardsTypes.Images &&
            props.cardInfo.map((item: any) => (
           
              <div>{item.images.map((item:any)=>(
              // <tr>  <td>  <img src={item.img} height="100" width="100" key ={1}/></td></tr>
                 <span> <img src={item.img} height="100" width="100"/> </span> 
                 ))}</div>
              // <div>{item.images.map((item:any)=>(
                
              // <span> <img src={item.img} height="100" width="100"/> </span> 
              // ))} </div>
            ))

          }
          {props.type == cardsTypes.CarePlans &&
            props.cardInfo.map((item: any) => (
              <div>{item.tabs.tab}</div>
            ))

          }


        </div>
      </div>
    </>
  )
}

export default Card