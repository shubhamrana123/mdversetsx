import doctor from '../../assets/img/doctor.jpg'
const ProfileImage = () =>{

    return  (
        <>
        	<div className="profile-sec">
						
                        <span className="profile-pic" style={{backgroundImage: `url(${doctor})`}}></span>
						<span className="profile-name">Kimberely Jones</span>
					</div>
        </>
    )
}
export default ProfileImage
