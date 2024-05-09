import StandartPage from 'components/StandartPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<StandartPage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='*' element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
