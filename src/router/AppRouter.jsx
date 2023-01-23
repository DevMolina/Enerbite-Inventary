import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { InventaryPage } from '../inventary/pages/InventaryPage';
import { startLoadItems } from '../store/enerbit/thunks';

export const AppRouter = () => {

  const { status } = useSelector(state => state.auth);
  const isLogged = localStorage.getItem('isLoggedIn')
  const dispatch = useDispatch();
  const page = 0;
  const size = 10;

  useEffect(() => {
    dispatch(startLoadItems(page, size));
  }, [])


  return (
    <Routes>
      {
        (isLogged || status === 'authenticated')
          ? <Route path="/*" element={<InventaryPage />} />
          : <Route path="/login" element={<LoginPage />} />
      }
      {/* Login */}

      <Route path="/*" element={<Navigate to='/login' />} />
    </Routes>
  )
}
