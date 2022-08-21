import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import './design.css';
import axios from 'axios';
function Register(){
    const API_url = "http://127.0.0.1:3000/profile";
    const navigate = useNavigate();
    const [firstname,changefirstname]=useState("")
    const [lastname,changelastname]=useState("")
    const [email,changemail]=useState("")
    const [password,changepassword]=useState("")
    const [bio,changebio]=useState("")
    const setfirstname=(event)=>{
        changefirstname(event.target.value)
    }
    const setlastname=(event)=>{
        changelastname(event.target.value)
    }
    const setemail=(event)=>{
        changemail(event.target.value)
    }
    const setpassword=(event)=>{
        changepassword(event.target.value)
        //console.log(password)
    }
    const setbio=(event)=>{
        changebio(event.target.value)
    }
    const registerpage=(event)=>{
       // console.log(password)
        changefirstname("")
        changelastname("")
        changemail("")
        changepassword("")
        changebio("")
        //SEND DATA TO THE DATABASE FROM HERE
    }
    const formHandler=async (event)=>{
        event.preventDefault();
        console.log("form submitted")

        let data ={
            Name: firstname,
            Email: email,
            Password: password,
            Bio: bio
        }
        changefirstname(""); changemail(""); changepassword(""); changebio(""); changelastname("");

        let response = await axios.post(API_url,data)
        if(response.status === 200){
            navigate("/blogs",{replace:true})
        }else{

        }
        console.log("Responses---------",response.status)
    }
    return(
        <div className="container-fluid">
            <div className="row bg">
                <div className="col-6">
                    <h1 class="text-center">Register</h1>
                <form onSubmit={formHandler}>
                    <div className="container-fluid">
                    <div className="row">
                    <div className="col-6">
                      <label><span className="formtext">First Name</span></label>
                      <input value={firstname} onChange={setfirstname} className="form-control" placeholder='First Name'></input>
                    </div>
                    <div className="col-6">
                        <label><span className="formtext">Last Name</span></label>
                        <input value={lastname} onChange={setlastname} className="form-control" placeholder='Last Name'></input>
                      </div></div>
                      <div className="row">
                        <div className="col-6">
                          <label><span className="formtext">Email id</span></label>
                          <input value={email} onChange={setemail} className="form-control" placeholder='xyx@abc.com'></input>
                        </div>
                        <div className="col-6">
                            <label><span className="formtext">Password</span></label>
                            <input value={password} onChange={setpassword} className="form-control"  type="password" placeholder="********"></input>
                          </div></div>
                          <div className="row">
                            <div className="col-12">
                              <label><span className="formtext">Bio</span></label>
                              <input value={bio} onChange={setbio} className="form-control"  placeholder='Whatever you want to display on profile'></input>
                          </div>
                        </div>
                        <div className="row submit">
                            <div className="col-6">
                                <Link to={{pathname:`/blogs`}}><button type="submit" className="submitbutton" onClick={registerpage}>Submit</button></Link>
                                </div>
                            <div class="col-6"><Link to={{pathname: `/`}}>Already have an account: Sign in</Link></div>
                        </div>
                        </div>
                  </form>
                </div>
            </div>
        </div>
    )

}
export default Register