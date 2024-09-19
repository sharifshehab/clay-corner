
import { useOutletContext } from 'react-router-dom';
import separator from '../../assets/separator.png';
import SingleItem from './SingleItem';

const AllItems = () => {
    const { craftAllData } = useOutletContext();
    return (
        <section className="all-items-wrapper container mx-auto">
            <div className="sec-heading">
                <h2>All Products</h2>
                <img src={separator} alt="" />
            </div>
            <div className="all-items grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
                {
                    craftAllData.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>{/* products */}
        </section> /* products-wrapper */
    );
};

export default AllItems;