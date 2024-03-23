import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Work from '../src/Pages/Work';
import Works from '../works.json';
import Footer from './Components/Footer';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/work/:id' element={<Work datas={Works} />} />
      </Routes>
      <Footer/>
    </Router>
  
  )
}

export default App;
