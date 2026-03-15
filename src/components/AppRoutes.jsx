import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import BoardPage from "../pages/BoardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CardPage from "../pages/CardPage";
import NewCardPage from "../pages/NewCardPage";
import ExitPage from "../pages/ExitPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = ({ isAuth, setIsAuth }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <BoardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/card/:id"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <CardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/new"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <NewCardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/exit"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <ExitPage setIsAuth={setIsAuth} />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route
        path="/register"
        element={<RegisterPage setIsAuth={setIsAuth} />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
