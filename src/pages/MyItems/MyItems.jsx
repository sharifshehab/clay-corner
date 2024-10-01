import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/UserContext";
import separator from '../../assets/separator.png';
import Item from "./Item";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyItems = () => {
    const { user } = useContext(AuthContext);  // Access authenticated user
    const [myItems, setMyItems] = useState([]);  // State to hold user's items
    const [loading, setLoading] = useState(true);  // Loading state
    const axiosSecure = useAxiosSecure();  // Custom secure Axios hook

    // Fetch URL
    const url = `http://localhost:5000/crafts?email=${user?.email}`;

    // Fetch user items
    useEffect(() => {
        if (user?.email) {
            setLoading(true);  // Start loading
            axiosSecure.get(url)
                .then(data => setMyItems(data.data))
                .catch((err) => {
                    console.error('Error fetching items:', err);
                    window.location.reload();  // Reload the page on error
                })
                .finally(() => {
                    setLoading(false);  // Stop loading
                });
        }
    }, [user?.email, axiosSecure]);


    return (
        <section className="my-items-wrapper container mx-auto">
            <div className="sec-heading">
                <h2>{user?.email} - Uploaded Products</h2>
                <img src={separator} alt="Section separator" />
            </div>

            {loading ? (
                <p>Loading items...</p>  // Show loading message
            ) : (
                    <div className="my-items grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20 justify-center items-center min-h-[300px]">
                    {myItems.length > 0 ? (
                        myItems.map(item => <Item key={item._id} item={item} />)  // Render items
                    ) : (
                        <span className="loading loading-spinner loading-lg"></span> // No items message
                        )}
                </div>
                    
            )}
        </section>
    );
};


export default MyItems;