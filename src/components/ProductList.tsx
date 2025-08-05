import type { ReactElement } from "react"
import type { Product } from '../types/Product'

type Props = {
    products: Product[],
    title: string
}

export const ProductList = (props: Props): ReactElement => {
    const listOfProducts = props.products;
    return <div>
        <h1>{props.title}</h1>
        <pre>{JSON.stringify(listOfProducts, null, 2)}</pre>
    </div>
}