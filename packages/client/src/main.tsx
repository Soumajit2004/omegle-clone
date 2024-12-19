import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router";
import App from "./App.tsx";

import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
    </Routes>
  </BrowserRouter>
);