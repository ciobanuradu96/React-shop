import React from 'react';
import { useState, useEffect } from 'react'
import useStyles from "./styles"
import Header from "./components/Header"
import Grid from '@material-ui/core/Grid'

import Products from './components/Products';




function App() {

  const [products, setProducts] = useState([])
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const [cartItems, setCartItems] = useState([])
  const classes = useStyles();

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()

  }, []
  )

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    return data
  }
  const favoriteItem = (product) => {

    setFavoriteProducts([...favoriteProducts, product])

  }

  const addItemToCart = (product) => {
    setCartItems([...cartItems, product])
  }


  return (
    <>

      <Header favoriteProducts={favoriteProducts} cartItems={cartItems} />
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8} container spacing={3} justify="center" >
          <Products products={products} onFavorite={favoriteItem} onAddToCart={addItemToCart} onAddToCart={addItemToCart}></Products>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>


    </>

  );
}

export default App;
