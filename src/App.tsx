import { ConfigProvider } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute, routes } from "routes";
import "./index.scss";

const App = () => {
  const renderRoute: any = (route: any, key: number) => (
    <Route
      path={route.path}
      key={key}
      element={
        <ProtectedRoute isPrivate={route.isPrivate}>
          {route.element}
        </ProtectedRoute>
      }
    >
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
