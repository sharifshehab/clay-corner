import separator from '../../../assets/separator.png';
import Category from './Category';
import firstCat from '../../../assets/cate-1.png';
import secondCat from '../../../assets/cate-2.png';
import thirdCat from '../../../assets/cate-3.png';
import forthCat from '../../../assets/cate-4.png';
import { useOutletContext } from 'react-router-dom';

const Categories = () => {
    const { craftCategoryData } = useOutletContext();
    return (
        <section className="categories-wrapper container mx-auto">
            <div className="sec-heading">
                <h2>Specific Categories</h2>
                <img src={separator} alt="" />
            </div>
            <div className="categories grid grid-rows-2 grid-flow-col gap-4">    
                <Category dimension="row-span-2" cateImage={firstCat} cateName={craftCategoryData[0]}></Category>
                <Category cateImage={secondCat} cateName={craftCategoryData[1]}></Category>
                <Category dimension="col-span-2" cateImage={forthCat} cateName={craftCategoryData[2]}></Category>
                <Category cateImage={thirdCat} cateName={craftCategoryData[3]}></Category>
            </div>{/* categories */}
        </section>/* categories-wrapper */
    );
};

export default Categories;