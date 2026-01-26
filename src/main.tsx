import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import "./styles/resume.css";
import "./styles/index.css";

import App from "./App";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/UnderConstruction";

// project-specific pages
import Proofmint from "./pages/Proofmint";
import ProofmintDemo from "./pages/ProofmintDemo";
import Sakura from "./pages/Sakura";
import SolanaHello from "./pages/SolanaHello";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Resume /> },
      { path: "projects", element: <Projects /> },
      { path: "demo", element: <ProofmintDemo videoId="CatHeV8tclI" externalLabel="Watch on YouTube" /> },
      { path: "blog", element: <Blog /> },
      { path: "proofmint", element: <Proofmint /> },
     // { path: "proofmint-demo", element: <ProofmintDemo /> },
      { path: "sakura", element: <Sakura /> },
      { path: "solana", element: <SolanaHello /> },
      { path: "under-construction", element: <UnderConstruction /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

console.log("App version:", __APP_VERSION__);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
