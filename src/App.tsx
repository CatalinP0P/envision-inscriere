import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<label>Error 404: Page not found</label>} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
