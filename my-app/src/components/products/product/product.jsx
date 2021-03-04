import React from 'react'
import {Card, CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core"
import {AddShoppingCart} from "@material-ui/icons";

import useStyles from './styles';

function Product({product}) {
    const classes=useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image='' title={product.name}/>
                <CardContent>
                    <div className={classes.cardContext}>
                        <Typography variant="h5" gutterBottom>
                             {product.name}
                        </Typography>
                        <Typography variant="h5" >
                             {product.price}
                        </Typography>
                    </div>
                    <Typography variant="h2" color="h2" color="textSecondary" > {product.name} </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add a cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
