import React from 'react';
import { IconButton, Button, Container, CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from "./styles"



function App() {
  const classes = useStyles();
  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" className={classes.title}>
            Test </Typography>
          <IconButton variant="text" color="default" >
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
          <IconButton variant="text" color="default">
            <ShoppingBasketIcon></ShoppingBasketIcon> </IconButton>
          <IconButton variant="text" color="default">
            <PersonIcon></PersonIcon> </IconButton>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h1" color="initial" align="center" gutterBottom>
              Tittle
              </Typography>
          </Container>
        </div>
      </main>
    </>

  );
}

export default App;
