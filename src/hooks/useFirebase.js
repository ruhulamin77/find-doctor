import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../firebase/firebase.init";

initializationAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [doctors, setDoctors] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    //  loading all data from database
    useEffect(() => {
        fetch('/doctorsData.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);

    const signInUsigGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
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
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };
    // retuen all functionalities and states
    return {
        user,
        doctors,
        isLoading,
        signInUsigGoogle,
        logOut
    }
}

export default useFirebase;
