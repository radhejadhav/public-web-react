import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';
import { setIsSessionValid } from './actions/LoginAction';
import './App.css';
import NavbarContainer from './containers/NavbarContainer';
import Routers from './routes/Routes';
import { UserSession } from './shared/UserSession';

function App() {

  const dispatch = useDispatch()

  let user = {
    data: {
      expiredInHr: 0,
      token: "",
      username: ""
    },
    error: "",
    isTokenValid: false,
    status: "",
    statusCode: 0
  }

  if (!sessionStorage.getItem('userSession')) {
    sessionStorage.setItem('userSession', JSON.stringify(UserSession))
  }

  let userSessions = JSON.parse(sessionStorage.getItem('userSession'));

  useEffect(() => {
    if (userSessions.isTokenValid) {
      dispatch(setIsSessionValid(true))
    }
  })

  return (
    <Container fluid>
      <ToastContainer />
      <BrowserRouter>
        <NavbarContainer />
        <Routers />
      </BrowserRouter>
    </Container>

  )
}
export default App;
