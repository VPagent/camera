import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./contexts/VideoContext/VideoContext";
import { PageProvider } from "./contexts/PageContext/PageContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageProvider>
      <VideoProvider>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </VideoProvider>
    </PageProvider>
  </React.StrictMode>
);
