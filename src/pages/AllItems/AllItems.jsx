
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
    const [search, setSearch] = useState('');

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

    /* for search  */
    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText);
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/crafts?page=${currentPage}&size=${itemsPerPage}&search=${search}`)
            .then(data => setAllData(data.data))
    }, [currentPage, itemsPerPage, search]);
    


    return (
        <section className="all-items-wrapper container mx-auto">
            <div className="search-area mt-10">
                <form action="#" onSubmit={handleSearch}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            name="search"
                            placeholder="Search"
                        />
                        <button type="submit" className="flex items-center justify-center h-8 w-8 opacity-70">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </label>
                </form>
            </div>{/* search-area */}
            <div className="sec-heading">
                <h2>All Products</h2>
                <img src={separator} alt="" />
            </div>
            <div className="all-items grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
                {
                    allData.map(item =>  <SingleItem  key = { item._id } item = { item } ></SingleItem>)
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