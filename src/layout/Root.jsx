
import Header from '../components/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    const { craftFourData, craftAllData, craftCategoryData, craftCountData } = useLoaderData();
    return (
        <>
            <Header></Header>
            <Outlet context={{ craftFourData, craftAllData, craftCategoryData, craftCountData }}></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;