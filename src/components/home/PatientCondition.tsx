import React from 'react'
import { IConditionProps } from '../../types/common.type'

function PatientCondition(props: IConditionProps) {
	return (
		<>
			{/* <div className="info-heading">Conditions</div> */}
			<div className="pills-wrapper">
			
				{
					props.disease.map((item: any) => (
						<div className=	{item.className} key={item.id}>{item.name}	</div>
					))}

			</div>

		</>

	)
}

export default PatientCondition