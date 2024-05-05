import { DASHBOARD_PAGE, PRODUCT_PAGE } from "../constants";
import { Product, Dashboard } from "../pages";
import Layout from "./../layouts";

const routes: { path: any; element: any; children: any }[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: DASHBOARD_PAGE,
        name: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: PRODUCT_PAGE,
        name: "Product",
        element: <Product />,
      },
    ],
  },
];

export default routes;
