function SingleProductComponent() {
    return (
        <div className="h-fit w-[10rem] bg-orange-200 flex flex-col items-center justify-center py-4 rounded-lg">
            
                <img className="w-[5rem] h-[5rem]" alt="eCommProductImage" src="https://ishantecommerce.s3.eu-north-1.amazonaws.com/file-1727936688715.jfif" />
            
            <p>Product Name</p>
            <p>Description</p>
            <p>Price</p>
            <p>Category</p>
            <p>Brand</p>
            <p>Stock</p>
    
        </div>
    )
}

export default SingleProductComponent;