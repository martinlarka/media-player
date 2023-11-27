import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PlaylistContextProvider from "./Context/PlaylistContext.tsx";
import PlayerContextProvider from "./Context/PlayerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PlaylistContextProvider>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </PlaylistContextProvider>
  </React.StrictMode>
);
