// ProductList.tsx
import type { ReactElement } from "react"
import type { Product } from '../types/Product'
import { RenderProduct } from "./RenderProduct"
import "./ProductList.css";

type Props = {
    products: Product[],
    title: string
}

export const ProductList = (props: Props): ReactElement => {
    const listOfProducts = props.products;
    return (
        <div className="product-list-container">
            <h1 className="product-list-title">{props.title}</h1>
            <div className="products-grid">
                {listOfProducts.map((product, index) => (
                    <RenderProduct key={product.id || index} product={product} />
                ))}
            </div>
        </div>
    )
}