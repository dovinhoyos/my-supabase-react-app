import { useState, useEffect } from 'react';
import { supabase } from './supabase/supabaseClient';
import Account from './pages/Account'; // Componente de ejemplo para usuario logueado [11]
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [session, setSession] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    // Obtener la sesión actual [13]
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Escuchar cambios en el estado de autenticación [13]
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      <Row>
        <Col>
          {!session ? (
            showSignUp ? (
              <>
                <SignUp />
                <div className="w-100 text-center mt-2">
                  ¿Ya tienes cuenta?{' '}
                  <a href="#" onClick={() => setShowSignUp(false)}>
                    Inicia Sesión
                  </a>
                </div>
              </>
            ) : (
              <>
                <Login />
                <div className="w-100 text-center mt-2">
                  ¿Necesitas una cuenta?{' '}
                  <a href="#" onClick={() => setShowSignUp(true)}>
                    Regístrate
                  </a>
                </div>
              </>
            )
          ) : (
            // Muestra la página de la cuenta si hay una sesión activa [13]
            // Puedes usar el componente Account de la documentación como base [11]
            <Account key={session.user.id} session={session} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
