import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import Swal from 'sweetalert2';

const Register = () => {
    const { handleRegister, handleNameAndPhoto } = useContext(AuthContext);
    const [error, setError] = useState("");  // To show error messages
    const [success, setSuccess] = useState(false); // To show success message

    // Show success alert when `success` state changes to true
    useEffect(() => {
        if (success) {
            Swal.fire({
                title: "<strong>Registration Successful</strong>",
                icon: "success",
                html: `
                    <b>Your account has been created successfully.</b>
                    <br />
                     <p>You can now login to your account.</p>
                `,
                showCloseButton: false,
                confirmButtonText: 'OK',
                focusConfirm: false,
            }).then(() => {
                // Optionally handle what happens after the alert is closed
                setSuccess(false); // Reset success state
            });
        }
    }, [success]);

  
    const registerInput = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photo = form.photo.value; // URL of the photo

        // Clear previous success state when a new submission is made
        setSuccess(false);

        // match both password
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        handleRegister(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Clear any previous errors when submission is ok
                setError("");

                // Update profile with name and photo URL
                handleNameAndPhoto(name, photo)
                    .then(() => {
                        // Set success state to show SweetAlert2
                        setSuccess(true);
                        form.reset();
                    })
                    .catch((error) => {
                        // An error occurred while updating profile
                        console.error(error);
                        setError("Error updating profile. Please try again.");
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                // Handle specific Firebase errors
                if (error.code === "auth/email-already-in-use") {
                    setError("This email is already in use. Please try another email address.");
                } else if (error.code === "auth/invalid-email") {
                    setError("Invalid email. Please try another email address.");
                } else {
                    setError(errorMessage); // Display any other errors
                }
            });
    };

    return (
        <div className='py-20'>
            <form className="w-full max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg" onSubmit={registerInput}>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Register</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name Field */}
                    <div className="relative">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Password Field */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirmPassword"
                            className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                </div>

                {/* Photo URL Field */}
                <div className="grid grid-cols-1 mb-6">
                    <div className="relative">
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-600 mb-2">Photo URL</label>
                        <input
                            type="url"
                            id="photo"
                            name="photo"
                            className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                            placeholder="Enter your photo URL"
                            required
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-200"
                    >
                        Register
                    </button>
                </div>

                <div className="flex items-center justify-center my-3">
                    <a href="#" className="text-sm text-secondary hover:underline">
                        <Link to='/login'>Already have an account? Login here</Link>
                    </a>
                </div>

                {/* Show error message */}
                {error && <div role="alert" className="alert alert-warning mt-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{error}</span>
                </div>}
            </form>
        </div>
    );
};

export default Register;
