import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import routes from "./routes/routes";

const App = () => {
  const renderRoute: any = (route: any, key: number) => (
    <Route path={route.path} key={key} element={route.element}>
      {route.children?.map((child: any, index: number) =>
        renderRoute(child, `${key}_${index}`)
      )}
    </Route>
  );

  return (
    <ConfigProvider theme={{ hashed: false }}>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => renderRoute(route, index))}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
