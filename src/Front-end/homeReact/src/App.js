import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Header from './Components/Header';
import Home from './Pages/Home';
import Instituto from './Pages/Instituto';
import Apoie from './Pages/Apoie';
import Contato from './Pages/Contato';
import Perfil from './Pages/Perfil';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import GlobalStyles from './Styles/GlobalStyles';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

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


  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/instituto" element={<Instituto />} />
          <Route path="/apoie" element={<Apoie />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/perfil" element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          } />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
