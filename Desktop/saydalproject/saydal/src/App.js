import Register from "./auth/Register";
import { Route, Routes } from "react-router-dom";
import LogOut from "./pharmacy/LogOut";
import Products from "./pharmacy/Products";

import Reports from "./pharmacy/Reports";
import SelAndPur from "./pharmacy/SelAndPur";
import Services from "./pharmacy/Services";
import Setting from "./pharmacy/Setting";

import Layout from "./layout/Layout";
function App() {
  const pageLayout = (Component) => {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/Products" element={pageLayout(Products)} />
        <Route path="/selAndPur" element={pageLayout(SelAndPur)} />
        <Route path="/Reports" element={pageLayout(Reports)} />
        <Route path="/Services" element={pageLayout(Services)} />
        <Route path="/Settings" element={pageLayout(Setting)} />
        <Route path="/LogOut" element={pageLayout(LogOut)} />
      </Routes>
    </div>
  );
}

export default App;
