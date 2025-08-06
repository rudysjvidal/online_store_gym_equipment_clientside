// RenderProduct.tsx
import type { ReactElement } from "react";
import type { Product } from "../types/Product";
import "./RenderProduct.css";

type Props = {
    product: Product;
};

export const RenderProduct = ({ product }: Props): ReactElement => {
    return (
        <div className="product-card">
            <div className="product-header">
                <h3 className="product-name">{product.name}</h3>
            </div>
            <div className="product-body">
                <div className="price-section">
                    <span className="price-label">Price</span>
                    <span className="price-value">${product.price}</span>
                </div>
                <div className="stock-section">
                    <span className="stock-label">In Stock</span>
                    <span className={`stock-value ${product.on_hand > 0 ? 'in-stock' : 'out-of-stock'}`}>
                        {product.on_hand}
                    </span>
                </div>
                <div className="categories-section">
                    <span className="section-label">Categories</span>
                    <div className="categories-list">
                        {product.categories.map((category, index) => (
                            <span key={index} className="category-tag">
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="description-section">
                    <span className="section-label">Description</span>
                    <p className="description-text">{product.description}</p>
                </div>
            </div>
        </div>
    );
};