import React from 'react'
import './user.css' 
import {Link} from 'react-router-dom'
import {PermIdentity,CalendarToday,PhoneAndroid,MailOutline,LocationOn,Publish

} from '@material-ui/icons';


export default function User() {
  return (

    <div className='user'>
        
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
            
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/2467389/pexels-photo-2467389.jpeg?cs=srgb&dl=pexels-samantha-garrote-2467389.jpg&fm=jpg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Kajanthuka Ulaganathan</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details </span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon'/>
                            <span className="userShowInfoTitle">Kajanthu99</span>
                        </div>  
                        <div className="userShowInfo">
                            <CalendarToday
 className='userShowIcon'/>
                            <span className="userShowInfoTitle">10.12.1997</span>
                        </div> 

                        <span className="userShowTitle">Contact Details </span>
                        <div className="userShowInfo">
                            <PhoneAndroid
 className='userShowIcon'/>
                            <span className="userShowInfoTitle">+94 770056345</span>
                        </div> 
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon'/>
                            <span className="userShowInfoTitle">Kajanthu99@gmail.com</span>
                        </div> 
                        <div className="userShowInfo">
                            <LocationOn className='userShowIcon'/>
                            <span className="userShowInfoTitle">Jaffna| Srilanka</span>
                        </div> 
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateleft">
                        <div className="userUpdateItem">
                            <label >UserName</label>
                            <input type="text" placeholder='Kajanthu99' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label >Full Name</label>
                            <input type="text" placeholder='Kajanthuka Ulaganathan' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label >Email</label>
                            <input type="text" placeholder='Kajanthu99' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label >Phone Number</label>
                            <input type="text" placeholder='+94 770056345' className='userUpdateInput' />
                        </div>
                     
                        <div className="userUpdateItem">
                            <label >Address</label>
                            <input type="text" placeholder='Jaffna| Srilanka' className='userUpdateInput' />
                        </div>

                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className='userUpdateImg' src="https://images.pexels.com/photos/2829064/pexels-photo-2829064.jpeg?cs=srgb&dl=pexels-lisa-fotios-2829064.jpg&fm=jpg" alt="" />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file"  id="file" style={{display:"none"}}/> 
                        </div>
                         <button className="userUpdateButton">
                             Update
                         </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
