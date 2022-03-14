import './login-page.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <div className="container">
      <div className="small-container">
          <h1 className="h1-text">WebApp Demo</h1>
          <Box pt={3} >
              <TextField
                  required
                  sx={{
                      '& label.Mui-focused': {
                          color: '#ffffff',
                      },
                      '& .MuiInput-underline:after': {
                          borderBottomColor: '#ffffff',
                      },
                  }}
                  id="standard-required"
                  label="Username"
                  variant="standard"
              />
          </Box>
          <Box pt={2}>
              <TextField
                  required
                  sx={{
                      '& label.Mui-focused': {
                          color: '#ffffff',
                      },
                      '& .MuiInput-underline:after': {
                          borderBottomColor: '#ffffff',
                      },
                      }}
                  id="standard-required"
                  label="Password"
                  variant="standard"
              />
          </Box>
          <div className={"text-link"}>
              <a href="/" >forgot password?</a>
          </div>

          <Box pt={7}>
              <Button
                  sx={{
                  color: '#312113',
                  backgroundColor: '#ab7343',
                  minWidth: '200px',
                  minHeight:'50px',
                  "&:hover":{
                      backgroundColor: '#b37a4a'
                  },
                  }}>login</Button>

          </Box>

          <div className={"text-link text-link2"}>
              <a href="/" >don't have an account? sign up here</a>
          </div>

      </div>
    </div>
  );
}

export default Login;
