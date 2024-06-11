import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
    const[data,setdata]=useState({
        
        "name":""
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg -12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label"><b>STUDENT NAME</b></label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputhandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={raedValue}>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent