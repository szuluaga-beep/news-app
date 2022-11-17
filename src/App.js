import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import News from './components/News/News'
import 'bootstrap/dist/css/bootstrap.css';
import NewDetails from './components/News/NewDetails/NewDetails'
import FormNew from './components/FormNews/FormNew'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='formNew' element={ <FormNew/>} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<NewDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App