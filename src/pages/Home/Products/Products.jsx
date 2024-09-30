import Product from "./Product";
import separator from '../../../assets/separator.png';
import { useOutletContext } from "react-router-dom";

const Products = () => {
    const { craftFourData } = useOutletContext();
    return (
        <section className="products-wrapper container mx-auto">
            <div className="sec-heading">
                <h2>Trending Products</h2>
                <img src={separator} alt="" />
            </div>
            <div className="products grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    craftFourData?.map(item => <Product key={item._id} item={item}></Product>)
                }
            </div>{/* products */}
        </section> /* products-wrapper */
    );
};

export default Products;