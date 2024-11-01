import { useContext } from "react";
import RoutesOpen from "./routesOpen.js";
import RoutesPrivate from "./routesPrivate.js";
import { AuthContext } from "../context/Auth.js";

function Routes() {
  const { user } = useContext(AuthContext);

  return user.token ? <RoutesPrivate /> : <RoutesOpen />
}

export default Routes;
