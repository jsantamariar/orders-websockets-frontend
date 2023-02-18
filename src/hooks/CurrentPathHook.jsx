import { matchRoutes, useLocation } from "react-router-dom";
import { routes } from "../constants";

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  const isDesktop = route.path === "/desktop";
  const isLogin = route.path === "/login";
  const isCreate = route.path === "/create";
  const isLine = route.path === "/line";

  return {
    isDesktop,
    isLogin,
    isCreate,
    isLine,
  };
};

export default useCurrentPath;
