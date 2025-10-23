
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice.js';
import appStore from './utils/appStore.js';
import './App.css';
import Browse from './components/Browse.jsx';
import Login from './components/Login.jsx';


const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName
        }));
      } else {
        dispatch(removeUser());
      }
    });

    
    return () => unsubscribe();
  }, [dispatch]);

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
