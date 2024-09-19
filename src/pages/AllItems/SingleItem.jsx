

const SingleItem = ({ item }) => {
    const { name, image, category, condition, price } = item;
    return (
        <div className="card shadow-lg rounded-none">
            <span className="indicator-item badge bg-primary text-white rounded-none absolute right-0">{condition}</span>
            <figure className="py-24 border-b border-b-inherit mx-4">
                <img
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body ">
                <p className="text-center">{name}</p>
                <h2 className="card-title justify-center mb-0">
                    ${price}
                </h2>
                <div className="badge badge-outline border-primary font-semibold capitalize mx-auto mt-1">{category}</div>
            </div>{/* card-body */}
        </div>/* card */
    );
};

export default SingleItem;