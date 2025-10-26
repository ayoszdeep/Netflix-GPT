// Header.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign out error', error);
      });
  };
 

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }));
        // navigate to browser when auth state indicates a signed-in user
        navigate('/browser');
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="flex justify-between fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm w-full items-center z-20 px-6 py-3 h-16">
      <img
        className="h-14 w-auto"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Header Logo"
      />

      {user && (
        <div className="flex items-center gap-3">
          {user.displayName && <span className="text-white">{user.displayName}</span>}
          {user.photoURL ? (
            <img src={user.photoURL} alt="avatar" className="h-9 w-9 rounded-full object-cover" />
          ) : (
            <div className="h-9 w-9 rounded-full bg-gray-600 flex items-center justify-center text-white">
              {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="ml-2 bg-red-600 text-white rounded px-2 py-0.5 border"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
