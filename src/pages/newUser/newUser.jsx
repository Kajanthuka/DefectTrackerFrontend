import React from 'react'
import './newUser.css'


export default function newUser() {
  return (
    <div className='newUser'>
       <h1 className="newUserTitle"> NewUser </h1>
       <form  className="newUserForm">
           <div className="newUserItem">
               <label >UserName</label>
               <input type="text" placeholder='jhon' />
           </div>
           <div className="newUserItem">
               <label >FullName</label>
               <input type="text" placeholder='Jhon smith' />
           </div>
           <div className="newUserItem">
               <label >Email</label>
               <input type="email" placeholder='sminth@gmail.com' />
           </div>
           <div className="newUserItem">
               <label >Password</label>
               <input type="password" placeholder='' />
           </div>
           <div className="newUserItem">
               <label >Phone</label>
               <input type="text" placeholder='+94 23567 679' />
           </div>
           <div className="newUserItem">
               <label >Address</label>
               <input type="text" placeholder='Colombo | Srilanka' />
           </div>
           <div className="newUserItem">
               <label >Gender</label>
               <div className="newUserGender">
               <input type="radio" name='gender' id='male' value='male' />
               <label for="male">Male</label>
               <input type="radio" name='gender' id='female' value='female' />
               <label for="female">Female</label>
               <input type="radio" name='gender' id='other' value='other' />
               <label for="Other">Other</label>
               </div>
           </div>
        <div className="newUserItem">
        <label >Active</label>
        <select className='newUserSelect' name='active' id='active'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        </div>
        <button className="newUserButton">
            Create
        </button>
       </form>
         </div>
  )
}
