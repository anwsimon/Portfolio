import React from "react";
import AppRoutes from "./store/routes";
import ResponsiveAppBar from "./components/Navbar";
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@mui/material';

const theme = createTheme();

const App = () => {
  return (
    <div>
       <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <AppRoutes />
      </ThemeProvider>
    </div>
  )
}

export default App
