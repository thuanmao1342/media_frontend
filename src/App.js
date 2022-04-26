import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';

const Login = lazy(() => import('./pages/login/Login'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
