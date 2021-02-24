import Link from 'next/link'

const ProductItem = ({product}) => {

    const userLink =() => {
        return(
            <>
                <Link href={`product/${product._id}`}>
                    <a className="btn btn-info"
                    style={{marginRight:'5px', flex:1}}>View</a>
                </Link>
                <button className="btn btn-success"
                style={{marginLeft:'5px', flex:1}}>
                    Buy
                </button>
            </>
        )
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={product.images[0].url} alt={product.images[0].url}/>
            <div className="card-body">
                <h5 className="card-title text-capitalize" title={product.title}>
                    {product.title}
                </h5>
                <div className="row justify-content-between">
                    <h6 className="text-danger" style={{marginRight:'5px', flex:1}}>${product.price}</h6>
                    {
                        product.inStock > 0
                        ? <h6 className="text-danger" style={{marginLeft:'5px', flex:1}}>
                            In Stock: {product.inStock}</h6>
                        : <h6 className="text-danger" style={{marginLeft:'5px', flex:1}}>
                            Out Stock</h6>
                    }
                </div>
                <p className="card-text" title={product.description}>
                {product.description}
                </p>
                <div className="row justify-content-between">
                    {userLink()}
                </div>
            </div>
        </div>
    )
}

export default ProductItem