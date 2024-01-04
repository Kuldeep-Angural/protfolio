import { ThemeProvider } from "@emotion/react";
import { CssBaseline, Paper, createTheme } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
  
import { useState } from "react";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Landing from "../pages/Landing";
const App = () => {

  const [darkMode, setDarkMode] = useState(false);


 
  const theme = createTheme({
    palette:{
        primary:{main:'#9E9999'},
        secondary:{ main:'#312F2F'},
        mode:darkMode?'dark':'light',
        
    }
})

  return (
   
    <div className="App" >
      <ThemeProvider theme={theme} >
      <CssBaseline />
      <Paper style={{ height: "100vh" }}>
      <NavBar chacked={darkMode} onChange={()=>setDarkMode(!darkMode)} />
      <Landing/>
      <Footer />
      </Paper>
      </ThemeProvider>
    </div>
   
  );
};

export default App;
