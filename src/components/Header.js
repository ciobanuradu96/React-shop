import React from 'react'
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from "../styles"
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          bMAG </Typography>
        <IconButton variant="text" color="default" >
          <FavoriteIcon></FavoriteIcon>
        </IconButton>
        <IconButton variant="text" color="default">
          <ShoppingBasketIcon></ShoppingBasketIcon> </IconButton>
        <IconButton variant="text" color="default">
          <PersonIcon></PersonIcon> </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
