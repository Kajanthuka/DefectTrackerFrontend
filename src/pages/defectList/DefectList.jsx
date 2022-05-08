import React from 'react'
import './defectList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons';
import {defectRows} from '../../dummyData';
import {Link} from 'react-router-dom';
import {useState} from 'react'



export default function DefectList() {
    const [data,setData] = useState(defectRows)

    const handleDelete= (id) =>{
        setData(data.filter(item=>item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'defect', headerName: 'Defect ', width: 200, renderCell:(params)=>{
            return(
                <div className='defectListUser'>
                    <img className='defectListImg' src={params.row.avatar} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'defectStatus',
            headerName: 'Defect Status',
            width: 180,
          },
        {
            field:"action",
            headerName: "Action",
            width:150,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={"/defect/"+params.row.id}>
                        <button className="defectListEdit">Edit</button>
                    </Link>
                      <DeleteOutline  className="defectListDelete" onClick={()=>handleDelete(params.row.id)}/>  

                    </>
                )
            }
        }
        
      ];

  return (
    <div className='defectList'> 
        DefectList
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]}  checkboxSelection/>
        </div>
  )
}
