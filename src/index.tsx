import React from 'react';
import {createRoot} from 'react-dom/client';
import "./sass/reset.scss";
import "./index.scss";
import App from "./pages/app";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

