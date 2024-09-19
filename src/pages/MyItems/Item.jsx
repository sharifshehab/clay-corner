

const Item = ({ item }) => {
    const { name, image, category, condition, email, price,  } = item;
    return (
        <div className="card shadow-lg rounded-none">
            <figure className="py-24 border-b border-b-inherit mx-4">
                <img
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <p className="text-center">{name}</p>
                <h2 className="card-title justify-center mb-0">
                    ${price}
                </h2>
            </div>
        </div>
    );
};

export default Item;