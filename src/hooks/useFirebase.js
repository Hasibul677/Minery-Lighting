import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [admin, setAdmin]=useState(false);
    const [token, setToken]= useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registrationWithEmail = (email, password, name, history, location) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                //save user to the database
                saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setError('');
                }).catch((error) => {
                    setError(error.message)
                });
                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setLoading(false));;
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken);
                })
                setError('')
            } else {
                setUser({})
                setError('')
            }
            setLoading(false)
        });
        return () => unSubscribe;
    }, [auth]);

    const loginWithEmail = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user =result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/dashboard';
                history.push(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setLoading(false));
    };

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({});
            setError('')
        }).catch((error) => {
            setError(error.message);
        }).finally(() => setLoading(false));

    };

    const googleSignIn = (history, location) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user =result.user
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/dashboard';
                history.push(destination);
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setLoading(false));

    };

    const saveUser=(email, displayName, method)=>{
            const user={email, displayName};
            fetch('https://salty-taiga-52197.herokuapp.com/users',{
                method: method,
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then()
    };

    useEffect(()=>{
        fetch(`https://salty-taiga-52197.herokuapp.com/users/${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            setAdmin(data.admin)
        })
    },[user.email])

    return {
        user,
        admin,
        token,
        setUser,
        error,
        setError,
        isLoading,
        setLoading,
        registrationWithEmail,
        loginWithEmail,
        logOut,
        googleSignIn
    }
};

export default useFirebase;