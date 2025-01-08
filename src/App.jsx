
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './componenets/login';
import Page1 from './Pages/page1';


function App() {
  return (
    <Router>
  
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Page1" element={<Page1 />} />
     
      </Routes>
    </Router>
  );
}

export default App;
