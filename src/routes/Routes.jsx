import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddItem from "../pages/AddItem/AddItem";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyItems from "../pages/MyItems/MyItems";
import PrivateRoute from "./PrivateRoute";
import AllItems from "../pages/AllItems/AllItems";
import RouterWrapper from "../components/RouterWrapper";
import RouteWrapper from "../components/RouterWrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: async () => {
        
            // Fetch the latest 4 items
            const craftFourResponse = await fetch('http://localhost:5000/crafts?limit=4');
            const craftFourData = await craftFourResponse.json();
            
            // Fetch only the category names
            const craftCategoryResponse = await fetch('http://localhost:5000/crafts?category=category');
            const craftCategoryData = await craftCategoryResponse.json();

            // Fetch all items
            const craftAllResponse = await fetch('http://localhost:5000/crafts');
            const craftAllData = await craftAllResponse.json();
            
            return { craftFourData, craftAllData, craftCategoryData };
        },

        children: [
            { path: "/", element: <RouteWrapper element={Home} title={"Clay Corner - The Handcrafters Sanctuary"} /> },
            { path: "home", element: <RouteWrapper element={Home} title={"Clay Corner - The Handcrafters Sanctuary"} /> },
            { path: "all-items", element: <RouterWrapper element={AllItems} title={"Clay Corner | All Items"} /> },
            {
                path: "my-items",
                element: 
                    (
                    <PrivateRoute>
                            <RouteWrapper element={MyItems} title={"Clay Corner | My Items"} />
                    </PrivateRoute>
                ),
            },
            {
                path: "add-item",
                element: (
                    <PrivateRoute>
                        <RouteWrapper element={AddItem} title={"Clay Corner | Add Items"} />
                    </PrivateRoute>
                ),
            },
            { path: "login", element: <RouterWrapper element={Login} title={"Clay Corner | Login "} /> },
            { path: "register", element: <Register /> },
        ],
    },
]);
