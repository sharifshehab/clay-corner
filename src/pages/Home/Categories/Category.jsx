

const Category = ({ dimension = '', cateImage, cateName }) => {
    return (
        <div className={`bg-red-50 ${dimension} relative`}>
            <img src={cateImage} alt="" className='w-full h-full object-cover' />
            <div className="absolute inset-0 bg-zinc-300 bg-opacity-30 flex flex-col justify-center items-center text-white">
                <h2 className="capitalize">{cateName}</h2>
                <button className="btn bg-black text-white rounded-none hover:text-secondary">Shop Now</button>                
            </div>
        </div>
    );
};

export default Category;