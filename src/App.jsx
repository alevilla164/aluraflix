import './App.css'
import { Routes, Route} from 'react-router-dom';
import Error404 from './pages/Error404';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="*" element={<Error404 />}/>
       <Route path="/video" element={<Video />}/>
       falta por hacer
      
       
    </Routes>
  )
}

export default App;