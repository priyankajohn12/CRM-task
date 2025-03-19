import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes'; 
const App = () => {
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;

