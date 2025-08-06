import type { ReactElement } from "react";
import type { Product } from "../types/Product";

type Props = {
    product: Product;
};

export const RenderProduct = ({ product }: Props): ReactElement => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>In Stock:</strong> {product.on_hand}</p>
            <p><strong>Categories:</strong> {product.categories.join(", ")}</p>
            <p><strong>Description:</strong> {product.description}</p>
        </div>
    );
};
