
import { Card, CardContent, CardMedia, Typography, IconButton, CardActions } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from '../styles'



const Product = ({ product, onFavorite, onAddToCart }) => {
    const classes = useStyles()

    return (
        <Grid item xs={12} md={3} >
            <Card className={classes.fullHeightCard}>
                <CardMedia className={classes.media}
                    title={product.name}
                    image={product.img}
                />
                <CardContent>
                    <Typography variant="h6" color="initial">{product.name} </Typography>
                    <Typography color="initial">{product.price}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={() => onFavorite(product)}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton onClick={() => onAddToCart(product)} >
                        <ShoppingBasketIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product
