import { Routes, Route } from "react-router-dom";

import Acerca from "./pages/Acerca";

import Tablas from "./pages/Tablas";
import Navbar from "./components/Navbar";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route path="/acerca" element={<Acerca />} />
        
        <Route path="/tablas" element={<Tablas />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </>
  );
}

export default App;