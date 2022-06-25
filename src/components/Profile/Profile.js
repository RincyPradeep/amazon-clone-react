import React,{useState,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import sweetalert from 'sweetalert'

import './Profile.css'
import AuthContext from '../../context/AuthContext';


const Profile = () => {

  const {authTokens,user,getProfile,name,address,pincode,mobile,setName,setAddress,setPincode,setMobile} = useContext(AuthContext)

  const navigate = useNavigate();
  let userid = user.user_id

  const [errMessage,setErrMessage] = useState(null)
  
  const updateProfile=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/v1/auth/update_profile/${userid}/`,{
       "name" : name, "address" : address,"pincode" : parseInt(pincode),"mobile" : mobile
            },{
            headers : {
                'Authorization':'Bearer ' + String(authTokens.access)
            },           
        }).then(response=>{
          if(response.data.status_code === 6000)
          {
            sweetalert("Good","Profile Updated","success")
            navigate('/')
          }else{
            setErrMessage(response.data.error) 
          }
        }).catch(error=>{
          alert(error)
        })
  }

  useEffect(()=>{
    getProfile(userid)
  },[])

  return (
    <section id="profile" className="wrapper">
        <form className="content" onSubmit={updateProfile} >
            <h1>Profile</h1>
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' id='name' value={name}
                  onChange={(e)=>setName(e.target.value)} required/>

                <label htmlFor='address'>Address</label>
                <textarea type="text" rows='3' name='address' id='address' value={address}
                  onChange={(e)=>setAddress(e.target.value)} />

                <label htmlFor='pincode'>Pincode</label>
                <input type="text" id='pincode' value={pincode}
                  onChange={(e)=>setPincode(e.target.value)} />

                <label htmlFor='mobile'>Mobile</label>
                <input type="text" name='mobile' id='mobile' value={mobile}
                  onChange={(e)=>setMobile(e.target.value)} required/>

                <p className='error'>{errMessage && errMessage}</p>
                   
            <button type="submit">Update Profile</button>
        </form>
    </section>
  )
}

export default Profile