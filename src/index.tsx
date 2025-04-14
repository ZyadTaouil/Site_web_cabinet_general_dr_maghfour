import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { App } from "./App";


const container = document.getElementById("root");
// Make sure container exists before creating root
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode> {/* Optional: Keep StrictMode if you had it */}
      <HelmetProvider> {/* Wrap App with HelmetProvider */}
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}