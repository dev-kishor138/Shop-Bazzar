import { getCategoriesFromDb } from "@/services/category.services";
import { cache } from "react";
import "server-only";

const getCategories = cache(() => {
  return getCategoriesFromDb();
});

export default getCategories;
