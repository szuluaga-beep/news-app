import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewCard from './NewCard/NewCard'

const News = () => {
     const [newsData, setNewsData] = useState([])

     const fetchNews = async () => {
          try {
               const response = await axios.get("http://localhost:8000/news")
               setNewsData(response.data)
          } catch (error) {
               console.log(error);
          }

     }
     useEffect(() => {
          fetchNews()
     }, [])

     return (
          <div >
               <div className='text-center' >
                    <h1>Noticias</h1>

               </div>
               <div className='container mt-5 d-flex text-center flex-wrap '>

                    {
                         newsData.length === 0 ? <h1>No hay noticias</h1> :
                              newsData.map((newData) => (
                                   <div key={newData.id} className="col-sm-3 mt-3">
                                        <NewCard newData={newData} />
                                   </div>
                              ))
                    }
               </div>
          </div>
     )
}

export default News