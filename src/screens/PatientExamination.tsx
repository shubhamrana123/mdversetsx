import React from 'react'
import ProfileInfo from '../components/home/ProfileInfo'
import PageHeading from '../components/layout/PageHeading'
import PatientCondition from '../components/home/PatientCondition'
import Card from '../components/Card';
import xray from '../assets/img/doctor.jpg';
import { cardsTypes } from '../types/enum';
import BasicTabs from '../components/layout/TabPanel';
function PatientExamination() {
    const conditions = [{ id: 1, name: "Pre-Diabetes" ,className:'pills solid'}, { id: 2, name: "HyperTension" ,className:'pills solid'}];
    const profileInfo = [
        { id: 1, profileInfoTitle: "Residence", profileInfoDesc: "Billerica, Masachussets, US" },
        { id: 2, profileInfoTitle: "Name", profileInfoDesc: "Dr. Bennett Breitenberg" },
        { id: 3, profileInfoTitle: "Hospital/Practice", profileInfoDesc: "Morton Hospital" }
    ]
    const ObservationData = [
        { id: 1, cardContent: { id: 1, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis" } },
        { id: 2, cardContent: { id: 1, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis" } },
        { id: 3, cardContent: { id: 1, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis" } }
    ]
    const procedureData = [
        { id: 1, cardContent: { id: 1, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis. Maecenas luctus elit sit amet mi viverra volutpat. Praesent sagittis, augue sit amet molestie dictum, est ante cursus enim, at ultricies eros nisl id ex. Sed vel mauris eu velit pretium vulputate" } }

    ]
    const imagesData = [
        {
            id: 1,
            images: [{ id: 1, img: xray },{ id: 2, img: xray },
                { id: 3, img: xray },{ id: 4, img: xray },
                { id: 5, img: xray },{ id: 6, img: xray }],
            cardContent: { id: 1, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin urna nec finibus lobortis. Maecenas luctus elit sit amet mi viverra volutpat. Praesent sagittis, augue sit amet molestie dictum, est ante cursus enim, at ultricies eros nisl id ex. Sed vel mauris eu velit pretium vulputate" }
        }
    ]
    const carePlansData = [
        {
            id: 1, cardContent: { id: 1, details: "Tabs will come here" },
            tabs: { id: 1, tab: <BasicTabs></BasicTabs> }
        }
    ]

    return (
        <>
            <div className="panel-body encounter-page sidebar-250">
                <div className="panel-container">

                    <PageHeading></PageHeading>

                    {/* <img src={xray}/> */}
                    {/* <ProfileInfo></ProfileInfo> */}
                    <div className="panel-box profile-page">
                        <div className="panel-sidebar">
                            <div className="profile-info">
                                <div className="profile-info-title">Conditions</div>
                                <PatientCondition disease={conditions}></PatientCondition>
                            </div>
                            <ProfileInfo profileInfo={profileInfo}></ProfileInfo>
                        </div>


                        <div className="panel-content">
                            <div className="row">
                                <div className="col-6">
                                    <Card type={cardsTypes.Observation} Heading='ObserVation' cardInfo={ObservationData}></Card>
                                    <Card type={cardsTypes.Procedures} Heading='Procedures' cardInfo={procedureData}></Card>

                                </div>
                                <div className="col-6">
                                    <Card type={cardsTypes.Images} Heading='Images' cardInfo={imagesData}></Card>
                                    <Card type={cardsTypes.CarePlans} Heading='Care plans' cardInfo={carePlansData}></Card>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientExamination