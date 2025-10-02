import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';
import { Form, Button, Card, Alert } from 'react-bootstrap';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // 1. Registrar al usuario en Supabase Auth
    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 2. Si el registro es exitoso, insertar el perfil en la tabla 'profiles'
    const { error: profileError } = await supabase.from('profiles').insert({
      id: user.id,
      username: username,
      full_name: fullname, // Asegúrate que tu columna se llame así
      website: website,
      updated_at: new Date(),
    });

    if (profileError) {
      setError(profileError.message);
    } else {
      setSuccess(
        '¡Registro exitoso! Revisa tu correo para verificar tu cuenta.'
      );
    }

    setLoading(false);
  };

  return (
    <Card className="p-4">
      <Card.Body>
        <h2 className="text-center mb-4">Registro</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleSignUp}>
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
          <Form.Group id="username">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="fullname">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Form.Group>
          <Form.Group id="website">
            <Form.Label>Sitio Web</Form.Label>
            <Form.Control
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </Form.Group>
          <Button disabled={loading} className="w-100 mt-3" type="submit">
            {loading ? 'Cargando...' : 'Registrarse'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
