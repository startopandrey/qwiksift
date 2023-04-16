import React, { Fragment, useEffect, useState } from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

const Layout = (props) => {
  const [mode, setMode] = useState("dark");
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
      setMode(selectedTheme);
    } else {
      setMode("dark");
      localStorage.setItem("selectedTheme", "dark");
    }
  }, []);

  const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode !== "dark"
        ? {
            // palette values for light mode
            background: {
              default: "#F9FAFC",
              paper: "#F4FBFC",
            },
            text: {
              primary: "#000",
              secondary: "#65748B",
              disabled: "rgba(55, 65, 81, 0.48)",
            },
            divider: "#E6E8F0",
            primary: {
              main: "#0049ff",
              light: "#828DF8",
              dark: "#3832A0",
              contrastText: "#FFFFFF",
            },
            theme: {
              light: "#161A42",
            },
            secondary: {
              main: "#232966",
              light: "#161A42",
              dark: "#0B815A",
              contrastText: "#FFFFFF",
            },
          }
        : {
            // palette values for dark mode
            neutral: {
              100: "#F3F4F6",
              200: "#E7E7E7;",
              300: "#D1D5DB",
              400: "#9CA3AF",
              500: "#6B7280",
              600: "#4B5563",
              700: "#374151",
              800: "#1F2937",
              900: "#111827",
            },
            background: {
              default: "#0B0D21",
              paper: "#161A42",
              light: "#161A42",
            },
            theme: {
              light: "#161A42",
            },
            divider: "#E6E8F0",
            primary: {
              main: "#FFFFFF",
              light: "#161A42",
              dark: "#3832A0",
              contrastText: "#FFFFFF",
            },
            text: {
              primary: "#fff",
              secondary: "#65748B",
              disabled: "rgba(55, 65, 81, 0.48)",
            },

            secondary: {
              main: "#232966",
              light: "#161A42",
              dark: "#0B815A",
              contrastText: "#FFFFFF",
            },
            typography: {
              button: {
                fontWeight: 600,
              },
              fontFamily: '"Lato", sans-serif',
            },
          }),
    },
  });

  const theme = () => createTheme(getDesignTokens(mode));
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital@1&family=Inter:wght@600;700&family=Lato:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        {/* <Header /> */}
        <div>{props.children}</div>
        {/* <Footer /> */}
      </ThemeProvider>
    </Fragment>
  );
};

export default Layout;
