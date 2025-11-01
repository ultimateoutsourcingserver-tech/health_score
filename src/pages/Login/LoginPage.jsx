import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import { Alert, Box, Button, Card, CardContent, Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication
    if (email === 'admin@demo.com' && password === 'admin123') {
      // Save mock token to localStorage
      localStorage.setItem('authToken', 'mock-token-' + Date.now());
      localStorage.setItem('userEmail', email);
      navigate('/dashboard');
    } else {
      setError('Invalid email or password. Use admin@demo.com / admin123');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0070C0 0%, #4CAF50 100%)',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)' }}>
          <CardContent sx={{ p: 4 }}>
            <Stack spacing={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  HealthScore Bureau
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Health Analytics Dashboard
                </Typography>
              </Box>

              {error && <Alert severity="error">{error}</Alert>}

              <form onSubmit={handleLogin}>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@demo.com"
                    variant="outlined"
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="admin123"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small">
                            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{
                      background: 'linear-gradient(135deg, #0070C0 0%, #4CAF50 100%)',
                      fontWeight: 600,
                      mt: 2
                    }}
                  >
                    Sign In
                  </Button>
                </Stack>
              </form>

              <Box sx={{ textAlign: 'center', pt: 2 }}>
                <Typography variant="caption" color="textSecondary">
                  Demo Credentials:
                </Typography>
                <Typography variant="caption" display="block" color="textSecondary">
                  Email: admin@demo.com
                </Typography>
                <Typography variant="caption" display="block" color="textSecondary">
                  Password: admin123
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
