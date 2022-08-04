import React from 'react'
import { INotesProps } from '../types/common.type';
import PatientCondition from './home/PatientCondition'

function Notes(props:INotesProps) {
    const doctorsName = [{ id: 1, name: "ALL",className:'pills bordered active' },{ id: 2, name: "Dr. Bennete",className:'pills bordered' }, { id: 3, name: "Dr. Lisa",className:'pills bordered' },
    { id: 4, name: "Dr. Aaron",className:'pills bordered' }, { id: 5, name: "Dr. Mason" ,className:'pills bordered'}];
  return (
   <>
   <div className="left-sidebar-wrapper notes-wrapper">
		<div className="info-heading mt-0">Notes</div>
<PatientCondition disease={doctorsName}></PatientCondition>
	

		<div className="notes-chat-wrapper">

            {props.noteInfo.map((item:any)=>(
                <div className="notes-chat">
				<div className="notes-chat-pic">
					<div className="notes-chat-pic-inner"><span>{item.noteChatPics}</span></div>
				</div>
				<div className="notes-chat-text">
				{item.noteChatTexts}
				</div>
			</div>

            ))}
			
		


			<div className="notes-chat-write">
				<textarea placeholder="Note..."></textarea>
				<div className="notes-chat-write-info">Press enter to send</div>
			</div>
		</div>
	</div>

   </>
  )
}

export default Notes