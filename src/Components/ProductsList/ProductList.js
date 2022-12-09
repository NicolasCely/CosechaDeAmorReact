import Product from "../Product/Product"

const ProductsList = ({products}) => {
    return (
        <div>
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductsList