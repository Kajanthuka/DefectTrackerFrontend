import React from 'react'
import './newDefect.css';
import {Publish} from '@material-ui/icons';

export default function NewDefect() {
  return (
    <div className='newDefect'>
        <div className="defectBottom">
        <h1 className="defectTitle">Add New Defect </h1>
            <form  className="defectForm">
                <div className="defectFormLeft">
                    <label >Defect Name</label>
                    <input type="text"  placeholder='Defect 01'/>
                    <label >Defect Description</label>
                    <input type="text-box"  placeholder='Defect 01'/>
                    <label >Defect Type</label>
                    <select name="type" id="idType">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <label >Defect Status</label>
                    <select name="status" id="idStatus">
                    <option value="open">Open</option>
                    <option value="fixed">Fixed</option>
                    <option value="closed">Closed</option>
                    <option value="re-open">Re-open</option>
                    </select>
                    <label >Assigned to </label>
                    <input type="text"  placeholder='Defect 01'/>
                    <label >Assignee </label>
                    <input type="text"  placeholder='Defect 01'/>



                </div>
                <div className="defectFormRight">
                    <div className="defectUpload">
                        <img src="https://images.pexels.com/photos/2058147/pexels-photo-2058147.jpeg?cs=srgb&dl=pexels-oleg-magni-2058147.jpg&fm=jpg" alt="" className="defectUploadImg" />
                        <label for="file" >
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="defectButton">Create Defect</button>
                </div>
            </form>
        </div>
    
    
    
    </div>
  )
}
