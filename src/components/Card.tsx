import React from 'react'
import { ICardProps } from '../types/common.type'

function Card(props:ICardProps) {
  return (
    <>
    {props.cardInfo.map((item)=>(
        							<div className="card">
                                    <div className="card-icons">
                                        {`><`}
                                    </div>
                                    <div className="card-inner">
                                        <div className="card-title color-lightblue">Observation</div>
                                        <ul className="custom-list">
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis.</li>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis.</li>
                                        </ul>
                                    </div>
                                </div>
    ))}
    </>
  )
}

export default Card