import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', /* base url */
    withCredentials: true            /* for "JWT" API protection */
});

const useAxiosSecure = () => {

    // "interceptor" is used for to do somthing if token has a problem
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user');
                signOut(auth)
                    .then(() => {
                        navigate('/login');       //----> user will be redirected to login page after the have log-out
                    })
                    .catch((error) => {
                        console.error(error)
                    });
            }
        });

    }, []);

    return axiosSecure;
};

export default useAxiosSecure;