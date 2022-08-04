import React from 'react'
import ProfileInfo from '../home/ProfileInfo'
import DataTable from './DataTable'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function RightSidebar() {
    const profileInfo1 = [ 
        {id:1,profileInfoTitle:"Current Physician",profileInfoDesc:"Dr Mason Quitzon"},
        {id:2,profileInfoTitle:"Medications",profileInfoDesc:"Metformin"},
       
      ] 
      const profileInfo2 = [
        {id:1,profileInfoTitle:"Date of Diagonis",profileInfoDesc:"12/07/1997"},
        {id:2,profileInfoTitle:"Devices",profileInfoDesc:"NA"}
      ]
      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
  return (
<>

<div className="right-sidebar-wrapper condition-info">
		<div className="profile-info">
			<div className="profile-info-title">Residence</div>
			<div className="info-heading mt-0">Pre-Diabetes</div>
		</div>
		<div className="condition-info-details mt-20">
			<div className="row">
				<div className="col-6">
					<ProfileInfo profileInfo={profileInfo1}></ProfileInfo>
				</div>
				<div className="col-6">
                <ProfileInfo profileInfo={profileInfo2}></ProfileInfo>
				</div>
			</div>

			<div className="info-heading-small">
				Encounters
			</div>
			<div className="table-wrapper">
			<DataTable columnData={columns} rowData={rows} ></DataTable>
			</div>
		</div>
	</div>


</>
  )
}

export default RightSidebar