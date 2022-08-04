import React from 'react'
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
function DataTable(props:any) {

let navigate = useNavigate();

    const onClickHandler = ()=>
    {
        navigate('/details')
    }
  
  return (
<>
<div className="table-wrapper">
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={props.rowData}
                                        columns={props.columnData}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        onRowClick={onClickHandler}
                                        // checkboxSelection
                                    />
                                </div>
                            </div>
</>
  )
}

export default DataTable