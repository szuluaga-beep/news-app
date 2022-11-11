import React,{useState} from 'react'

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
                 {/* <a href="#" className="btn btn-primary">Ver Noticia</a> */}
            </div>
       </div>
  )
}

export default NewCard