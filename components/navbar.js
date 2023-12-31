import {Nav, Navbar} from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar
      bg='light'
      expand='lg'
      className='rounded py-0 navi shadow-sm'
      sticky='top'>
      <div className='container-fluid col-lg-10 col-xxl-8 p-0'>
        <Navbar.Brand href='/' className='text-dark p-0'>
          <img
            src='/kslogo-navbar-graphic1.svg'
            className='d-inline-block img-fluid' height='64px' width='240px' alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <div className='justify-content-end lead'>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto bg-light px-4'>
              <Nav.Link href='/profile'>Profile</Nav.Link>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/'>Resources</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}
