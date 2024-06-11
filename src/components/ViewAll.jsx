import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedata]=useState([])
   
    const fetchdata = () =>{
        axios.get("http://localhost:8080/view").then(
            (response)=>
                {
                    changedata(response.data)
                }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
        
    }
    useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                          {data.map(
                            (value,i) =>
                                {
                                    return   <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div className="card" >
                                        <img src="data:image/png;base64,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" className="card-img-top" alt="..." height="250px">
                                        </img>
                                        <div className="card-body">
                                            <h5 className="card-title">{value.name}</h5>
                                            <p className="card-text">{value.adm}</p>
                                            <p className="card-text">{value.rollno}</p>
                                            <p className="card-text">{value.college}</p>
                                            <p className="card-text">{value.pn}</p>
                                            <a href="#" className="btn btn-primary">CLICK HERE</a>
                                        </div>
    
                                    </div>
                                </div>
                                }

                          )
                          }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewAll