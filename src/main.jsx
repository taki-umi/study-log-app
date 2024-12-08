import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              width: "100%",
              maxWidth: 600,
            }}
          >
            <App />
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  </StrictMode>
);
