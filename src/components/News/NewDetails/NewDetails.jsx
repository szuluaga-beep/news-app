import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const NewDetails = () => {
     const { id } = useParams()
     const [newData, setnewData] = useState({})

     const fetchNewById = async (idNew) => {
          try {
               const response = await axios.get(`http://localhost:8000/news/${idNew}`)
               setnewData(response.data)
          } catch (error) {
               console.log(error);
          }
     }
     useEffect(() => {
          fetchNewById(id)
     }, [])

     return (
          <div className='container mt-5'>

          <div className="card mb-12" style={{maxWidth:'540px'}}>
               <div className="row w-100">
                    <div className="col-md-12">
                         <img src={newData.imageUrl} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-12">
                         <div className="card-body">
                              <h5 className="card-title">{newData.title}</h5>
                              <p className="card-text">{newData.description}</p>
                              <p className="card-text"><small className="text-muted">{newData.date}</small></p>
                         </div>
                    </div>
               </div>
          </div>
          </div>
     )
}

export default NewDetails