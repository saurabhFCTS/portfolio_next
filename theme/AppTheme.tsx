"use client"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['300' , '400' , '500' , '700'],
  style: ["normal" , "italic"],
  subsets: ['latin'],
  display: 'swap',
})


const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: roboto.style.fontFamily,
        fontSize: 12,
      h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    button: {
      textTransform: "none", // Prevents uppercase by default on buttons
    },
    }, 
    palette: {
     primary: {
      main: "#1976d2", // Custom primary color
    },
     secondary: {
      main: "#9c27b0", // Custom secondary color
    },}
        background: {
            default: "#FF00FF"
        }
     , text: {
      primary: "#333333", // Text color for primary text
      secondary: "#555555", // Text color for secondary text
    },
    }
};

const theme = createTheme(themeOptions);

export default function AppTheme({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
