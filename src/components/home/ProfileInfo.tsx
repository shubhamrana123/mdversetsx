import PatientCondition from "./PatientCondition"
import { IProfileInfoProps } from "../../types/common.type";
const ProfileInfo = (props: IProfileInfoProps) => {

	return (
		<>
			<div className="info-heading">Conditions</div>
			{props.profileInfo.map((item: any) => (
				
				<div className="profile-info">
					<div className="profile-info-title">{item.profileInfoTitle}</div>
					<div className="profile-info-desc">{item.profileInfoDesc}</div>
				</div>
				
			))}
			{/* <div className="profile-info">
						<div className="profile-info-title">Medical Record Number</div>
						<div className="profile-info-desc">54s5ag-uyast-asdf4-sd4jh</div>
					</div>

					<div className="profile-info">
						<div className="profile-info-title">Residence</div>
						<div className="profile-info-desc">Billerica, Masachussets, US</div>
					</div>
                    <div className="info-heading">Primary Physician</div>

					<div className="profile-info">
						<div className="profile-info-title">Name</div>
						<div className="profile-info-desc">Dr. Bennett Breitenberg</div>
					</div>

					<div className="profile-info">
						<div className="profile-info-title">Hospital/Practice</div>
						<div className="profile-info-desc">Morton Hospital</div>
					</div>

					<div className="profile-info">
						<div className="profile-info-title">Address</div>
						<div className="profile-info-desc">88, Washington Street, Taunton, MA, US</div>
					</div>
                    <div className="info-heading">Conditions</div> */}
			{/* <PatientCondition disease={conditions}/> */}
		</>
	)
}
export default ProfileInfo