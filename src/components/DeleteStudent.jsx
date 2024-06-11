import React, { useState } from 'react'
import NavBar from './NavBar'

const DeleteStudent = () => {
    const[data,setdata]=useState({
        
        "adm":""
        
    
    
})
const inputhandler =(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
}
const raedValue = ()=>{
    console.log(data)
}
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                            <label htmlFor="" className="form-label">ADMISSION NO</label>
                            <input type="text" className="form-control" name='adm' value={data.adm} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
                            <button className="btn btn-danger" onClick={raedValue}>DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteStudent