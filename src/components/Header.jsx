import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // Sign out handler
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.error('Sign out error', error));
  };

  // Listen for auth state and manage userData
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
        navigate('/browser');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 px-7 py-3 flex justify-between items-center h-16 border-b border-neutral-800 shadow">
      {/* Left: Logo */}
      <img
        className="h-9 sm:h-11 cursor-pointer transition-transform hover:scale-110"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Header Logo"
        onClick={() => navigate('/browser')}
      />

      {/* Right: User & Auth Buttons */}
      {user ? (
        <div className="flex items-center gap-4 text-white">
          {user.displayName && (
            <span className="hidden sm:inline font-medium text-sm tracking-wide">
              {user.displayName}
            </span>
          )}

          {/* User Avatar or Placeholder */}
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="avatar"
              className="h-9 w-9 rounded-full object-cover border border-white/20 shadow-md"
            />
          ) : (
            <div className="h-9 w-9 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xl">
              {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
            </div>
          )}

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md text-sm font-medium shadow-sm border border-red-700 transition-all"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate('/')}
          className="bg-white text-black rounded px-4 py-1 font-medium hover:bg-gray-200 transition shadow"
        >
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
