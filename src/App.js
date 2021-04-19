import React from 'react';
import {useState,useEffect} from 'react'
import useStyles from "./styles"
import Header from "./components/Header"
import Grid from '@material-ui/core/Grid'

import Products from './components/Products';




function App() {

  const [products,setProducts]=useState([])
  const classes = useStyles();

  useEffect(()=>{
    const getProducts= async ()=>{
      const productsFromServer= await fetchProducts()
        setProducts(productsFromServer)
      }
      getProducts()
      
    },[]
  )

  const fetchProducts= async()=>{
    const res=await fetch ('http://localhost:5000/products')
    const data=await res.json()
    return data
  }

  return (
    <>
      
      <Header/>
      <Grid container spacing={1} className={classes.container}>
        <Grid item md={2}/>
        <Grid item md={2}>MeNU</Grid>
        <Grid item md={6} container spacing={3} justify="center">
          
         <Products products={products}></Products>
        
        </Grid>
        <Grid item md={2}/>
      </Grid>

   
    </>

  );
}

export default App;
