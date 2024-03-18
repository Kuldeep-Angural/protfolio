import { CircularProgress, CssBaseline, Paper, Stack, ThemeProvider, createTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import Landing from '../pages/Landing';
import { addDelay, isDarkMode } from '../util/util';

const AppHelper = () => {
  const [darkMode, setDarkMode] = useState(isDarkMode());
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    palette: {
      primary: { main: '#9E9999' },
      secondary: { main: '#000000' },
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    let randomNumber = Math.random() + 3000;
    addDelay(randomNumber).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading === true ? (
        <div className="d-flex justify-content-center align-item-center" style={{ backgroundColor: darkMode ? 'black' : 'white', height: '100vh', transition: 'ease-in-out' }}>
          <Stack sx={{ color: 'inherit', display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={2} direction="column">
            <CircularProgress color="inherit" thickness={10} size={100} style={{}} />
          </Stack>
        </div>
      ) : (
        <ThemeProvider theme={theme}>
            {/* <NavBar chacked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
            <Landing chacked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <CssBaseline />
          <Paper>
          </Paper>
        </ThemeProvider>
      )}
    </>
  );
};

export default AppHelper;
