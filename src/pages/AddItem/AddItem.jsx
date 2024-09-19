import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/UserContext';

const AddItem = () => {
    const { user } = useContext(AuthContext)
    const currentEmail = user?.email;

    const addCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.itemName.value;
        const email = form.email.value;
        const condition = form.condition.value;
        const category = form.category.value;
        const price = form.price.value;
        const image = form.image.value;
        const craft = { name, email, condition, category, price, image }

        fetch('http://localhost:5000/crafts',
            {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(craft)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "New Item Added",
                        text: "",
                        icon: "success"
                    });
                }
                form.reset();
            })
        
        // console.log(craft)
    }
    return (
        <div className='py-20'>
            <form className="w-2/3 mx-auto p-8 bg-white rounded-lg shadow-lg" onSubmit={addCraft}>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Add New Item</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Item Name */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            id="item-name"
                            name="itemName"
                            className="peer w-full border-b border-primary bg-transparent focus:outline-none focus:border-gray-300 transition duration-200 py-4"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="item-name"
                            className="absolute left-0 -top-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Item Name
                        </label>
                    </div>

                    {/* Email */}
                    <div className="relative mb-6">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="peer w-full border-b border-primary bg-transparent focus:outline-none focus:border-gray-300 transition duration-200 py-4"
                            placeholder=" "
                            defaultValue={currentEmail}
                            readOnly  // Make the input field read-only
                            required
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-0 -top-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Email
                        </label>
                    </div>

                    {/* Condition */}
                    <div className="relative mb-6">
                        <select
                            id="condition"
                            name="condition"
                            className="peer w-full border-b border-primary bg-transparent focus:outline-none focus:border-gray-300 transition duration-200 py-4"
                            required
                        >
                            <option value="">Select Condition</option>
                            <option value="new">New</option>
                            <option value="used-like-new">Used - Like New</option>
                            <option value="used-good">Used - Good</option>
                            <option value="used-fair">Used - Fair</option>
                        </select>
                        <label
                            htmlFor="condition"
                            className="absolute left-0 -top-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Condition
                        </label>
                    </div>

                    {/* Categories */}
                    <div className="relative mb-6">
                        <select
                            id="category"
                            name="category"
                            className="peer w-full border-b border-primary bg-transparent focus:outline-none focus:border-gray-300 transition duration-200 py-4"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="home-decor">Home Decor</option>
                            <option value="kitchenware">Kitchenware</option>
                            <option value="planters">Planters</option>
                            <option value="art-collectibles">Art & Collectibles</option>
                        </select>
                        <label
                            htmlFor="condition"
                            className="absolute left-0 -top-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Condition
                        </label>
                    </div>

                    {/* Price */}
                    <div className="relative mb-6">
                        <input
                            type="number"
                            id="price"
                            name="price"
                            min="0"
                            step="0.01"
                            className="peer w-full border-b border-primary bg-transparent focus:outline-none focus:border-gray-300 transition duration-200 py-4"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="price"
                            className="absolute left-0 -top-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Price ($)
                        </label>
                    </div>

                    {/* Image Upload */}
                    <div className="relative mb-6">
                        <input
                            type="url"
                            id="image"
                            name="image"
                            
                            className="peer w-full border-b border-primary bg-transparent focus:outline-none focus:border-gray-300 transition duration-200 py-4"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="image"
                            className="absolute left-0 -top-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary"
                        >
                            Image
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full cc-btn"
                    >
                        Submit
                    </button>
                </div>
            </form>


        </div>
    );
};

export default AddItem;