import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageHeading() {
let navigate = useNavigate()
	const onClickHandler = () =>{
navigate('/home')
	}
  return (
   <>
   <div className="page-heading-wrapper">
				<div className="page-heading-back-btn" onClick={onClickHandler}>
					{'<'}
				</div>
				<div className="page-heading-inner">
					<p className="page-heading-title">General examination of Patient</p>
					<p className="page-heading-subtitle">10/05/22 | Dr. Mason Quitzon </p>
				</div>
			</div>

   </>
  )
}

export default PageHeading