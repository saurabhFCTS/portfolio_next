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
        fontSize: 12
    }, 
    palette: {
        background: {
            default: "#FF00FF"
        }
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