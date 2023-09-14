import getSingleProduct from "@/utils/getSingleProduct";

export const revalidate = 0;

const ProductDetails = async ({ params: { id } }) => {
    const product = getSingleProduct(id);
    return (
        <div>
            <h2>{product.title}</h2>
        </div>
    );
};

export default ProductDetails;