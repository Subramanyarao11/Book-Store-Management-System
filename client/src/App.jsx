import React from 'react';
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import { AuthenticationGuard } from "./auth/authentication-guard";

function App() {
  return (
   <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route
        path="/products"
        element={<AuthenticationGuard component={Products} />}
      />
    </Routes>
  )
}

export default App
