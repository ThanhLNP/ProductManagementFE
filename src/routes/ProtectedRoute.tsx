import { LOGIN_PAGE } from "constants";
import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "services";

interface ProtectedRouteProps {
  children: ReactNode;
  isPrivate?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isPrivate = false,
}) => {
  if (!isPrivate) return children;

  const { currentUser } = useContext(AuthContext) || {};

  if (!currentUser) {
    return <Navigate to={LOGIN_PAGE} replace />;
  }

  return children;
};

export default ProtectedRoute;
