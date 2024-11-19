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
import Aula from './Pages/Aula';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './Styles/GlobalStyles';
import { AuthProvider, useAuth } from './AuthContext';
import Footer from './Components/Footer';
import ScrolltoTop from './Pages/ScrolltoTop'; 


function PrivateRoute({ children }) {
  const { user } = useAuth(); 
  return user ? children : <Navigate to="/Signin" />;
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <Banner />
        <ScrolltoTop /> {/* Ajustado para ser uma tag de autoconclusão */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Instituto' element={<Instituto />} />
          <Route path='/Apoie' element={<Apoie />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Perfil' element={<PrivateRoute><Perfil /></PrivateRoute>} /> {/* Uso da rota privada */}
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Senha' element={<Senha />} />
          <Route path='*' element={<Navigate to="/" />} /> {/* Redireciona para Home se a rota não existir */}
          <Route path='/Aula' element={<Aula />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
