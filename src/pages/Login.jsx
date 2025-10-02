import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { Form, Button, Card, Alert } from 'react-bootstrap';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // La lógica del formulario se inspira en el componente Auth de ejemplo [12]
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <Card className="p-4">
      <Card.Body>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-3" type="submit">
            {loading ? 'Cargando...' : 'Iniciar Sesión'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
