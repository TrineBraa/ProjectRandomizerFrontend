
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import{ Container, Navbar, Nav }from 'react-bootstrap';

import Main from './Pages/Main.jsx';
import Projects from './Pages/Projects.jsx';
import LongProject from './Pages/LongProjects.jsx';
import ShortProject from './Pages/ShortProject.jsx';
import RandomProject from './Pages/RandomProject.jsx';

function App() {

   getData();

  return <>
  <Container className='containerpage'>
    <BrowserRouter>
      <Navbar className='TopBar' bg="dark" variant="dark">
        <Navbar.Brand as={Link} to ="/"><Header/></Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/Projects">All Projects</Nav.Link>
        <Nav.Link as={Link} to="/LongProject">Long Projects</Nav.Link>
        <Nav.Link as={Link} to="/ShortProject">Short Projects</Nav.Link>
        <Nav.Link as={Link} to="/RandomProject">Random Projects</Nav.Link>
        </Nav>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Main />}/>
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


async function getData() {
  const url = "https://localhost:7023/Project";
  try {
    const response = await fetch(url, {headers: {'Access-Control-Allow-Origin': 'https://localhost:7023'}});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export default App