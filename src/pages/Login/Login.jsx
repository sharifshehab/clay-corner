import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";


const Login = () => {
    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    const handleSign = (e) => {
        e.preventDefault();

        const form = e.target;        
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    
        form.reset();
    }

    return (
        <div className='py-20'>
            <form className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg" onSubmit={handleSign}>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Login</h2>

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-600 mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full border-b border-gray-300 bg-transparent focus:outline-none focus:border-primary transition duration-200 py-2 px-4"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-200"
                    >
                        Login
                    </button>
                </div>
                <div className="flex items-center justify-center my-3">
                    <a
                        href="#"
                        className="text-sm text-secondary hover:underline"
                    >
                        <Link to='/register'>Don't have an account? Register here</Link>
                    </a>
                </div>
            </form>

        </div>
    );
};

export default Login;