
import { useOutletContext } from 'react-router-dom';
import separator from '../../assets/separator.png';
import SingleItem from './SingleItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllItems = () => {
    const { craftCountData } = useOutletContext();
    const [allData, setAllData] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const numberOfPages = Math.ceil(craftCountData.count / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [...Array(numberOfPages).keys()]

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/crafts?page=${currentPage}&size=${itemsPerPage}`)
            .then(data => setAllData(data.data))
    }, [currentPage, itemsPerPage]);
    


    return (
        <section className="all-items-wrapper container mx-auto">
            <div className="sec-heading">
                <h2>All Products</h2>
                <img src={separator} alt="" />
            </div>
            <div className="all-items grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
                {
                    allData.map(item => <SingleItem key={item._id} item={item}></SingleItem>)
                }
            </div>{/* products */}
            <div className="pagination flex justify-center mb-10">
                <div className="join">
                    <button className="join-item btn cc-btn" onClick={handlePrevPage}>«</button>
                    {
                        pages.map(page => <button className={`join-item btn ${currentPage === page ? 'bg-text text-primary' : undefined}`} key={page} onClick={() => setCurrentPage(page)}>{page + 1}</button>)
                    }
                    <button className="join-item btn cc-btn" onClick={handleNextPage}>»</button>
                </div>
            </div>{/* pagination */}
        </section> /* products-wrapper */
    );
};

export default AllItems;