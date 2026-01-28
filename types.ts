import { ALL_CATEGORIES_QUERY_RESULT, FEATURED_PRODUCTS_QUERY_RESULT, FILTER_PRODUCTS_BY_NAME_QUERY_RESULT } from "./sanity.types";

export type FeaturedProduct = FEATURED_PRODUCTS_QUERY_RESULT[number]; // number refers to a singular instance of the type array

export type FeaturedSlideProps = {
  product: FeaturedProduct;
}

export type FeaturedCarouselProps = {
  products: FEATURED_PRODUCTS_QUERY_RESULT;
}

export type CategoryTilesProps = {
  categories: ALL_CATEGORIES_QUERY_RESULT;
  activeCategory?: string;
}

export type ProductSectionProps = {
  categories: ALL_CATEGORIES_QUERY_RESULT;
  products: FILTER_PRODUCTS_BY_NAME_QUERY_RESULT;
  searchQuery: string;
}

export type ProductFiltersProps = {
  categories: ALL_CATEGORIES_QUERY_RESULT;
}

export type ProductGridProps = {
  products: FILTER_PRODUCTS_BY_NAME_QUERY_RESULT;
}

type Product = FILTER_PRODUCTS_BY_NAME_QUERY_RESULT[number];

export type ProductCardProps = {
  product: Product;
}