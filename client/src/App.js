import React, { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import Auth from "./components/Auth";

const App = () => {
  const [page, setPage] = useState('Auth');

  const switchPage = (pageName) => {
    setPage(pageName);
  }


  return (
    <div>
      <Header 
        onLoadTodos={switchPage.bind(this, 'Todos')} 
        onLoadAuth={switchPage.bind(this, 'Auth')}
      />
      <hr />
      {page === 'Auth' ? <Auth />: <Todo />}
      
      
    </div>
  );
};
export default App;
