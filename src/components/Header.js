import React from 'react'
import { IconButton, AppBar, Toolbar, Typography, Badge, Menu, MenuItem } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from "../styles"
function Header({ favoriteProducts, cartItems }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" >
      <Toolbar >
        <Typography variant="h4" className={classes.title}>
          bMAG </Typography>
        <IconButton onMouseOver={handleClickListItem}>
          <Badge variant="circle" badgeContent={favoriteProducts.length} color="secondary" >
            <FavoriteIcon></FavoriteIcon>
          </Badge>
        </IconButton>

        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onMouseLeave={handleClose}
        >
          {favoriteProducts.map((product, index) => (
            <MenuItem
              key={index}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {product.name}
            </MenuItem>
          ))}
        </Menu>


        <IconButton>
          <Badge variant="circle" badgeContent={cartItems.length} color="secondary" >
            <ShoppingBasketIcon></ShoppingBasketIcon> </Badge>
        </IconButton>
        <IconButton variant="text" color="default">
          <PersonIcon></PersonIcon> </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
