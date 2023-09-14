import { getProductByIdFromDb } from "@/services/product.services";
import { cache } from "react";
import "server-only";

const getSingleProduct = cache(getProductByIdFromDb);

export default getSingleProduct;
