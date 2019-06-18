import React, { useState } from "react";

import Todo from "./components/Todo";
import Header from "./components/Header";
import Auth from "./components/Auth";
import AuthContext from "./auth-context";

const App = () => {
  const [page, setPage] = useState("Auth");
  const [authStatus, setAuthStatus] = useState(false);

  const switchPage = pageName => {
    setPage(pageName);
  };

  const login = () => {
    setAuthStatus(true);
  };

  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      <div className="App">
        <Header
          onLoadTodos={switchPage.bind(this, "Todos")}
          onLoadAuth={switchPage.bind(this, "Auth")}
        />
        <hr />
        {page === "Auth" ? <Auth /> : <Todo />}
      </div>
    </AuthContext.Provider>
  );
};
export default App;
