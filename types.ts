import { FEATURED_PRODUCTS_QUERY_RESULT } from "./sanity.types";

export type FeaturedProduct = FEATURED_PRODUCTS_QUERY_RESULT[number]; // number refers to a singular instance of the type array

export type FeaturedSlideProps = {
  product: FeaturedProduct;
}

export type FeaturedCarouselProps = {
  products: FEATURED_PRODUCTS_QUERY_RESULT;
}

