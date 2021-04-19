import React from 'react'
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
const Product = ({product}) => {
    return (
        <Grid item md={3}>
            <Card> 
                <CardMedia square style = {{ height: 0, paddingTop: '100%',marginTop:'30px'}}
                title={product.name}
                image={product.img}
                />
                <CardContent>
                    <Typography variant="h6" color="initial">{product.name} </Typography> 
                    {product.price}
                    {product.category}
                </CardContent>
               
            </Card>
      </Grid>
    )
}

export default Product
