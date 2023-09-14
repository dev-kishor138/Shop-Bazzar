import { getProductsFromDb } from "@/services/product.services";
import { cache } from "react";
import "server-only";

const getProducts = cache(getProductsFromDb);

export default getProducts;
