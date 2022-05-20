import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import BackDrop from './pages/notfound/Backdrop';

const Login = lazy(() => import('./pages/auth/login/Login'));
const NotFound = lazy(() => import('./pages/notfound/NotFound'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Suspense fallback={<BackDrop />}><Layout /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<BackDrop />}><Login /></Suspense>} />
        <Route
          path="*"
          element={<Suspense fallback={<BackDrop />}><NotFound /></Suspense>}
        />
      </Routes>
    </div>
  );
}

export default App;
