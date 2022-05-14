import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Navigation";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
       <Routes>
      {/* //nested routes
      <Route path="/" element={}>
        <Route path="expenses" element={} />
        <Route path="invoices" element={} />
  </Route>*/}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
