import { Navbar } from "react-bootstrap";
import React from "react";
import ProfileInfo from "../components/home/ProfileInfo";
import PatientCondition from "../components/home/PatientCondition";
import Sidebar from "../components/layout/Sidebar";
import FilterData from "../components/home/FilterData";
import DataTable from "../components/layout/DataTable";

// import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
// import DataGrid from 'react-data-grid';

const Home = () => {
    const conditions = [{id : 1, name :"Pre-Diabetes"},{id : 2, name :"HyperTension"},
    {id : 3, name :"Cardiac Arrest"},{id : 4, name :"Sleep Apnea"}];

    const moveToEncounterPage = () =>{

    }
    return (
        <>
            <div className="panel-body">
                <div className="panel-container">
                    <div className="panel-box profile-page">
                        <div className="panel-sidebar">
                            <Sidebar></Sidebar>
                        </div>

                        <div className="panel-content">

                            <div className="pills-wrapper mt-20">
                                <PatientCondition disease={conditions}></PatientCondition>
                            </div>
                            <div className="info-heading">Encounters</div>

                            <FilterData></FilterData>
                          <DataTable></DataTable>
                        </div>

                    </div>
                  
                </div>
            </div>
            <button onClick={moveToEncounterPage}>heelo</button>
        </>
    )

}
export default Home;