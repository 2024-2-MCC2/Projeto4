import Home from './Pages/Home';
import Instituto from './Pages/Instituto';
import Apoie from './Pages/Apoie';
import Contato from './Pages/Contato';
import Perfil from './Pages/Perfil';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Senha from './Pages/Senha';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import GlobalStyles from './Styles/GlobalStyles';
import { AuthProvider, useAuth } from './AuthContext';
import Footer from './Components/Footer';

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  
  window.addEventListener('wheel', function(event) {
    event.preventDefault();
    const scrollSpeed = 3.5;

    
    window.scrollBy({ top: event.deltaY * scrollSpeed, behavior: 'smooth' });
}, { passive: false });

  return(
    <AuthProvider>
      <Router>
        <GlobalStyles/>
        <Header/>
        <Banner/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/Instituto' element = {<Instituto/>}/>
          <Route path='/Apoie' element = {<Apoie/>}/>
          <Route path='/Contato' element = {<Contato/>}/>
          <Route path='/Perfil' element = {<Perfil/>}/>         
          <Route path='/Signin' element = {<Signin/>}/>       
          <Route path='/Signup' element = {<Signup/>}/>      
          <Route path='/Senha' element = {<Senha/>}/>      

        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
