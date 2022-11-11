import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
          <div>
               {
                    newsData.map(newData => (
                         <div key={newData.id}>
                              <h1>
                                   {newData.title}
                              </h1>
                              <img src={newData.imageUrl} />
                         </div>
                    ))
              }
          </div>
     )
}

export default News