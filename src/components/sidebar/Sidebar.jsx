import React from 'react'
import './sidebar.css'
import {LineStyle,Timeline,BarChart ,TrendingUp,PersonOutline,AccountTree,BugReport,Autorenew,MailOutline
,Forum,ChatBubbleOutline,Work} from "@material-ui/icons"
import { Link } from 'react-router-dom'



export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline />
                        Analitics  
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp/>
                        Status
                    </li>
                </ul>
            </div>
        </div>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                    <li className="sidebarListItem active">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                    </li>
                    </Link>
                    <Link to="/project" className='link'>
                    <li className="sidebarListItem">
                        <AccountTree  className='sidebarIcon'/>
                        Project  
                    </li>
                    </Link>
                    <Link to="/defects" className='link'>
                    <li className="sidebarListItem">
                        <BugReport className='sidebarIcon'/>
                        Defect
                    </li>
                    </Link>
                    <Link to="/defectstatus" className='link'>
                    <li className="sidebarListItem">
                        <Autorenew  className='sidebarIcon'/>
                        Defect status
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notification</h3>
                <ul className="sidebarList">
                    
                    <li className="sidebarListItem active">
                        <MailOutline className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Forum  className='sidebarIcon'/>
                        Feedback  
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
        </div>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Employee  </h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Work className='sidebarIcon'/>

                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <BarChart  className='sidebarIcon'/>
                        Analitics  
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
