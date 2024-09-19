import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/UserContext";
import separator from '../../assets/separator.png';
import Item from "./Item";


const MyItems = () => {
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);
    
    useEffect(() => {
        if (user?.email) {
            // Fetch items associated with the logged-in user
            fetch(`http://localhost:5000/crafts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data);

                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, []); 
    
    return (
        <section className="my-items-wrapper container mx-auto">
            <div className="sec-heading">
                <h2> {user?.email} - Uploaded Products</h2>
                <img src={separator} alt="" />
            </div>
            <div className="my-items grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
                {
                    myItems.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>{/* products */}
        </section> /* products-wrapper */
    );
};

export default MyItems;