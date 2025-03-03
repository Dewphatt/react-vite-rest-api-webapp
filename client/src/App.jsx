import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductProvider } from "./components/ProductContext";
import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct";

function App() {
  const [count, setCount] = useState(0)
  const [refresh, setRefresh] = useState(false);
  const apiUrl = "http://localhost:5000";

  return (
    <ProductProvider>
      <div>
        <h1>ร้านค้าสินค้าออนไลน์</h1>
        <AddProduct apiUrl={apiUrl} onProductAdded={() => setRefresh(!refresh)} />
        <ProductList apiUrl={apiUrl} key={refresh} />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ProductProvider>
  )
}

export default App
