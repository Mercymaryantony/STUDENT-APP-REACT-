import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setdata]=useState({
        
            "name":"",
            "adm":"",
            "rollno":"",
            "pn":"",
            "college":"",
            "dob":"",
            "em":"",
            "pass":"",
            "cp":""
        
        
    })
    const inputhandler =(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="ADD") {
                alert("SUCCESSFUL")
            } else {
                alert("ERROR")
            }
        }
    )
       
    }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>NAME</b></label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>ADMISSION NO</b></label>
                                <input type="text" className="form-control" name='adm' value={data.adm} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>ROLLNO</b></label>
                                <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label"><b>PARENT NAME</b></label>
                                <input type="text" className="form-control" name='pn' value={data.pn}onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">COLLEGE</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" name="dob" value={data.dob} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL-ID</label>
                                <input type="text" className="form-control" name='em' value={data.em} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                                <input type="password" name="pass"  value={data.pass} onChange={inputhandler} id="" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" name="cpass" value={data.cpass} onChange={inputhandler} id="" className="form-control" />
                            </div>
                          
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>REGISTER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent