import ProfileInfo from '../home/ProfileInfo'
import PatientCondition from '../home/PatientCondition'
import ProfileImage from '../home/ProfileImage'



function Sidebar() {
  const conditions = [{id : 1, name :"Pre-Diabetes" ,className:'pills solid'},{id : 2, name :"HyperTension",className:'pills solid'},
  {id : 3, name :"Cardiac Arrest",className:'pills solid'},{id : 4, name :"Sleep Apnea",className:'pills solid'}];
  const profileInfo = [ 
    {id:1,profileInfoTitle:"Residence",profileInfoDesc:"54s5ag-uyast-asdf4-sd4jh"},
    {id:2,profileInfoTitle:"Name",profileInfoDesc:"Dr. Bennett Breitenberg"},
    {id:3,profileInfoTitle:"Hospital/Practice",profileInfoDesc:"Morton Hospital"},
    {id:3,profileInfoTitle:"Address",profileInfoDesc:"88, Washington Street, Taunton, MA, US"}
  ]
  return ( 
    <>
      <ProfileImage></ProfileImage>
      <ProfileInfo profileInfo={profileInfo}></ProfileInfo>
      <div className="info-heading">Conditions</div>
      <PatientCondition disease={conditions}></PatientCondition>


    </>

  )
}

export default Sidebar