import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init'; // Import the Firebase app configuration
import { createContext, useEffect, useState } from 'react';

// Create a context for authentication state and functions
export const AuthContext = createContext();

// Initialize Firebase Authentication
const auth = getAuth(app);

const UserContext = ({ children }) => {
    // To hold the current user data
    const [user, setUser] = useState();

    // State to manage loading state during async operations
    const [loading, setLoading] = useState(true);

    // Function to handle user registration with email and password
    const handleRegister = (email, password) => {
        setLoading(true); // Set loading state to true while registering
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to update the user's profile with name and photo URL
    const handleNameAndPhoto = (name, photo) => {
        // Ensure user is logged in before updating profile
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    // Function to handle user login with email and password
    const handleLogin = (email, password) => {
        setLoading(true); // Set loading state to true while logging in
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Function to handle user logout
    const handleLogOut = () => {
        setLoading(true); // Set loading state to true while logging out
        signOut(auth);
    }

    // Effect to listen for authentication state changes and update user state accordingly
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); // Update user state with current user
            setLoading(false); // Set loading state to false once authentication state is resolved
        });

        // Cleanup subscription on component unmount
        return () => {
            unsubscribe();
        }
    }, []);

    // Object containing authentication state and functions to be provided to context consumers
    const authInfo = { user, loading, handleRegister, handleNameAndPhoto, handleLogin, handleLogOut };

    // Provide the auth context to child components
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
