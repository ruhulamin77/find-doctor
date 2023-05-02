import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import initializationAuthentication from '../firebase/firebase.init';

initializationAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [specialist, setSpecialist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successRegistration, setSuccessRegistration] = useState('');
  const [successLogin, setSuccessLogin] = useState('');

  const auth = getAuth();

  //  loading all data from database
  useEffect(() => {
    fetch('/doctorsData.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    fetch('/doctorsData2.json')
      .then((res) => res.json())
      .then((data) => setSpecialist(data));
  }, []);

  // observer of states
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in user
        const user = result.user;
        setError('');
        updateUserName();
        window.location.reload();
        setSuccessRegistration('Registration Successfull');
        regModal();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        setSuccessRegistration('');
      });
  };

  const handleLoginUsingEmailAndPassword = (history, location) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        const uri = location?.state?.from || '/';
        history.push(uri);
        setError('');
        setSuccessLogin('Login Successfull');
        loginModal();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        errorModal();
      });
  };

  const updateUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const signInUsingGoogle = (location, history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const uri = location?.state?.from || '/';
        history.push(uri);
        setUser(result.user);
        loginModal();
      })
      .catch((error) => {
        setError(error.message);
        errorModal();
      })
      .finally(() => setIsLoading(false));
  };

  // logging out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        logoutModal();
      })
      .finally(() => setIsLoading(false));
  };

  const regModal = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registration Successfull',
      showConfirmButton: false,
      timer: 2000,
    });
  };
  const loginModal = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Successful',
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const logoutModal = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Logout Successful',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorModal = () => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Oops...',
      text: 'Sign in failed ! Please try again later',
    });
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  // retuen all functionalities and states
  return {
    user,
    doctors,
    isLoading,
    signInUsingGoogle,
    logOut,
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    handleRegistration,
    error,
    successRegistration,
    successLogin,
    handleLoginUsingEmailAndPassword,
    specialist,
  };
};

export default useFirebase;
