
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import{ Container, Navbar, Nav }from 'react-bootstrap';


import Projects from './Pages/Projects.jsx';
import LongProject from './Pages/LongProjects.jsx';
import ShortProject from './Pages/ShortProject.jsx';
import RandomProject from './Pages/RandomProject.jsx';
import getData from '../API.jsx';

function App() {

   getData();

  return <>
  <Container className='containerpage'>
    <BrowserRouter>
      <Navbar className='TopBar' bg="dark" variant="dark">
        <Navbar.Brand ><Header/></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/Projects">All Projects</Nav.Link>
        <Nav.Link as={Link} to="/LongProject">Long Projects</Nav.Link>
        <Nav.Link as={Link} to="/ShortProject">Short Projects</Nav.Link>
        <Nav.Link as={Link} to="/RandomProject">Random Projects</Nav.Link>
        </Nav>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Projects />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/LongProject" element={<LongProject />}/>
        <Route path="/ShortProject" element={<ShortProject />}/>
        <Route path="/RandomProject" element={<RandomProject />}/>
      </Routes>
        
    



      <Footer/>
    </BrowserRouter>
  </Container>
  </>;
}




export default App