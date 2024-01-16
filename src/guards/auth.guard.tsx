import { PublicRoutes, User } from "@/models";
import { UserSelectorState } from "@/redux/store";
import { Outlet, Navigate } from "react-router-dom";

export const AuthGuard = () => {
  const user: User = UserSelectorState();

  if (user.id === 0) {
    return <Navigate replace to={PublicRoutes.LOGIN} />;
  }
  return <Outlet />;
}

export default AuthGuard;