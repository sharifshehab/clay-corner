import Categories from "./Categories/Categories";
import Companies from "./Companies/Companies";
import Products from "./Products/Products";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <main>
            <Slider></Slider>
            <Products></Products>
            <Categories></Categories>
            <Testimonial></Testimonial>
            <Companies></Companies>
        </main>
    );
};

export default Home;