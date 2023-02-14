import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';

const Navigation = () =>  {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Bookstache</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;













// const Navbar = () =>{
//     return(
//         <>
//             <div className="container">
//               <ul>
//                 <li className='nav-list'>
//                     <Link to='/'>
//                         Home
//                     </Link>
//                 </li>
//                 <li className='nav-list'>
//                     <Link to='/about'>
//                         About
//                     </Link>
//                 </li>
//               </ul>
//             </div>
//         </>
//     )
// }

// export default Navbar