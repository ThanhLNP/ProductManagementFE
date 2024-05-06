import { DASHBOARD_PAGE, LOGIN_PAGE, PRODUCT_PAGE } from "constants";
import Layout from "layouts";
import { Dashboard, Login, Product } from "pages";

const routes: {
  path: string;
  element: any;
  isPrivate?: boolean;
  children?: any;
}[] = [
  {
    path: LOGIN_PAGE,
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    isPrivate: true,
    children: [
      {
        path: DASHBOARD_PAGE,
        name: "Dashboard",
        element: <Dashboard />,
        isPrivate: true,
      },
      {
        path: PRODUCT_PAGE,
        name: "Product",
        element: <Product />,
        isPrivate: true,
      },
    ],
  },
];

export default routes;
