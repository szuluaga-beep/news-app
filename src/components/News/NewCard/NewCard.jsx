import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const NewCard = ({ newData }) => {
     const [newInfo, setNewInfo] = useState(newData)
  return (
       <div className="card" style={{width:'18rem'}} >
            <img src={newInfo.imageUrl} className="img-thumbnail" alt="..."/>
            <div className="card-body">
                 <h5 className="card-title">{newInfo.title}</h5>
                 <p className="card-text">{newInfo.description}</p>
                 <span>{newInfo.author}</span>
                 <p>{newInfo.date }</p>
                 
                 <Link to={`/news/${newInfo.id}`} className="btn btn-primary">
                      Ver Noticia
                 </Link>
            </div>
       </div>
  )
}

export default NewCard