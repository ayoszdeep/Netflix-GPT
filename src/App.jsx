
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import './App.css';
import Browse from './components/Browse.jsx';
import Login from './components/Login.jsx';


const Body = () => {


  return <RouterProvider router={appRouter} />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browser",
    element: <Browse />
  }
]);

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
