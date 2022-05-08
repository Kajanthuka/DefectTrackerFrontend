import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/charts/Chart';
import './defect.css'
import {defectData} from '../../dummyData';
import {Publish} from '@material-ui/icons';



export default function Defect() {
  return (
    <div className='defect'>
        <div className="defectTitleContainer">
            <h1 className="defectTitle">Defect </h1>
                <Link to="/newDefect">
                     <button className="defectAddButton"> AddDefect</button>
                </Link>
        </div>
        <div className="defectTop"> 
            <div className="defectTopLeft">
                <Chart data={defectData} dataKey="Defect" title="Defect varient"/>
            </div>
            <div className="defectTopRight">
                <div className="defectInfoTop">
                    <img src="https://images.pexels.com/photos/2058147/pexels-photo-2058147.jpeg?cs=srgb&dl=pexels-oleg-magni-2058147.jpg&fm=jpg" alt="" className="defectInfoImg" />
                    <span className="defectName">
                        Side bar Button Alignment 
                    </span>
                </div>
                <div className="defectInfoBottom">
                    <div className="defectInfoItem">
                        <span className="defectInfoKey">id:</span>
                        <span className="defectInfoValue">18</span>
                    </div>
                    <div className="defectInfoItem">
                        <span className="defectInfoKey">defectType:</span>
                        <span className="defectInfoValue">Medium</span>
                    </div>
                    <div className="defectInfoItem">
                        <span className="defectInfoKey">defect status:</span>
                        <span className="defectInfoValue">severity</span>
                    </div>
            
                   
                 </div>
            </div>
        </div>
        <div className="defectBottom">
            <form  className="defectForm">
                <div className="productFormLeft">
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
                <div className="productFormRight">
                    <div className="defectUpload">
                        <img src="https://images.pexels.com/photos/2058147/pexels-photo-2058147.jpeg?cs=srgb&dl=pexels-oleg-magni-2058147.jpg&fm=jpg" alt="" className="defectUploadImg" />
                        <label for="file" >
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="defectButton">Update</button>
                </div>
            </form>
        </div>
        </div>
  )
}

