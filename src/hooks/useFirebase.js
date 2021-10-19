import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [doctors, setDoctors] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    //  loading all data from database
    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .then(() => {
                setIsLogin(true)
            })
            .finally(() => setIsLoading(false));
    };

    // observer of states
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, []);

    // logging out
    const logOut = () => {
        setIsLogin(false)
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };

    const handleRegistration = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setError('')
                updateUserName()
                // setSuccess('Registration Successfull')

            })
            .then(() => {
                setIsLogin(false)
            })
            .then(() => {
                setEmail('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
                setSuccess('')
            });
    }

    const handleLoginUsingEmailAndPassword = (e) => {

        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setError('')
                console.log(user);
            })
            .then(() => {
                setIsLogin(true)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const updateUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {
                // Profile updated!
                // ...
            }).catch((error) => {
                // An error occurred
                // ...
            });
    }

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }



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
        success,
        handleLoginUsingEmailAndPassword,
        isLogin

    }
}

export default useFirebase;
