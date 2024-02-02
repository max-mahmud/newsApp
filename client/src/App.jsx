import { Routes, Route, Navigate } from "react-router-dom";
import Login from './dashboard/pages/Login';
import ProtectDashboard from './middleware/ProtectDashboard';
import MainLayout from './dashboard/layout/MainLayout';
import Unable from './dashboard/pages/Unable';
import News from './dashboard/pages/News';
import ProtectRole from './middleware/ProtectRole';
import AdminIndex from './dashboard/pages/AdminIndex';
import AddWriter from './dashboard/pages/AddWriter';
import Writers from './dashboard/pages/Writers';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />} >
          <Route path='' element={<MainLayout />}>
            <Route path='' element={<Navigate to='/dashboard/admin' />} />
            <Route path='unable-access' element={<Unable />} />
            <Route path='news' element={<News />} />
            <Route path='' element={<ProtectRole role='admin' />} >
              <Route path='admin' element={<AdminIndex />} />
              <Route path='writer/add' element={<AddWriter />} />
              <Route path='writers' element={<Writers />} />
            </Route>
          </Route>
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
