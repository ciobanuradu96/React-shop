
import Product from './Product'

const Products = ({ products, onFavorite, onAddToCart }) => {

    return (

        <>
            { products.map((product, id) => (
                <Product product={product} key={id} onFavorite={onFavorite} onAddToCart={onAddToCart} />
            ))}

        </>
    )
}

export default Products
