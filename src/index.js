import React from 'react';
import { BrowserRouter , Route , Routes} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from "./App";
ReactDOM.render(<BrowserRouter>
 <App />
 </BrowserRouter>
,
  document.getElementById('root')
);