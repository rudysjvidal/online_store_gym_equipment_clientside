import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import type { Product } from './types/Product'

let products: Product[] = [
  {
    "id": "1",
    "name": "Classic T-Shirt",
    "price": 19.99,
    "categories": [
      "clothing",
      "casual",
      "cotton"
    ],
    "on_hand": 50,
    "description": "Comfortable cotton t-shirt available in multiple colors"
  },
  {
    "id": "2",
    "name": "Wireless Headphones",
    "price": 99.99,
    "categories": [
      "electronics",
      "audio",
      "wireless"
    ],
    "on_hand": 25,
    "description": "High-quality wireless headphones with noise cancellation"
  },
  {
    "id": "3",
    "name": "Running Shoes",
    "price": 89.99,
    "categories": [
      "footwear",
      "sports",
      "running"
    ],
    "on_hand": 30,
    "description": "Lightweight running shoes with excellent cushioning"
  },
  {
    "id": "4",
    "name": "Coffee Mug",
    "price": 12.99,
    "categories": [
      "kitchenware",
      "ceramic",
      "drink"
    ],
    "on_hand": 100,
    "description": "Ceramic coffee mug perfect for your morning brew"
  },
  {
    "id": "5",
    "name": "Bluetooth Speaker",
    "price": 59.99,
    "categories": [
      "electronics",
      "audio",
      "portable"
    ],
    "on_hand": 15,
    "description": "Portable Bluetooth speaker with excellent sound quality"
  }]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Online Store App</h1>
      <ProductList products={products} title='Productsfr' />
    </>
  )
}

export default App
