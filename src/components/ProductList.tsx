import type { ReactElement } from "react"
import type { Product } from '../types/Product'
import { RenderProduct } from "./RenderProduct"

type Props = {
    products: Product[],
    title: string
}

export const ProductList = (props: Props): ReactElement => {
    const listOfProducts = props.products;
    return <div>
        <h1>{props.title}</h1>
        <pre>
            {listOfProducts.map(product => 
                { return (<RenderProduct product={product} />) })}
        </pre>
    </div>
}