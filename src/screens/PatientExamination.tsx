import React from 'react'
import ProfileInfo from '../components/home/ProfileInfo'
import PageHeading from '../components/layout/PageHeading'
import PatientCondition from '../components/home/PatientCondition'
function PatientExamination() {
    const conditions = [{ id: 1, name: "Pre-Diabetes" }, { id: 2, name: "HyperTension" }];
    const profileInfo = [
        { id: 1, profileInfoTitle: "Residence", profileInfoDesc: "Billerica, Masachussets, US" },
        { id: 2, profileInfoTitle: "Name", profileInfoDesc: "Dr. Bennett Breitenberg" },
        { id: 3, profileInfoTitle: "Hospital/Practice", profileInfoDesc: "Morton Hospital" }
    ]
    return (
        <>
            <div className="panel-body encounter-page sidebar-250">
                <div className="panel-container">

                    <PageHeading></PageHeading>
                    {/* <ProfileInfo></ProfileInfo> */}
                    <div className="panel-box profile-page">
                        <div className="panel-sidebar">
                            <div className="profile-info">
                                <div className="profile-info-title">Conditions</div>
                                <PatientCondition disease={conditions}></PatientCondition>
                            </div>
                            <ProfileInfo profileInfo={profileInfo}></ProfileInfo>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientExamination