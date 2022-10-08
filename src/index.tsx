import React from 'react';
import {createRoot} from 'react-dom/client';
import "./reset.scss";
import "./index.scss";
import App from "./components/app";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

