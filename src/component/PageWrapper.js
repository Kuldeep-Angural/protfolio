import { ThemeProvider } from "@emotion/react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Paper, createTheme } from "@mui/material";
import { useState } from "react";

export const PageWrapper = (props) => {
  const { children } = props;

  const [darkMode, setDarkMode] = useState(false);

   const theme = createTheme({
    palette:{
        primary:{main:'#9E9999'},
        secondary:{ main:'#312F2F'},
        mode:darkMode?'dark':'light'
    }
})
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "100vh" }}>
          <div className="page-wrapper__content">
            <NavBar chacked={darkMode} onChange={()=>setDarkMode(!darkMode)} />
            <div className="page-wrapper__content-inner">{children}</div>
          </div>
          <Footer />
        </Paper>
      </ThemeProvider>
    </>
  );
};
