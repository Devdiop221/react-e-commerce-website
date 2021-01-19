import React from 'react';
import { Typography, Card, Button, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './style';

const CartItem = ({ item ,onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="h5">{item.line_total.formatted_with_code}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small"onClick={() => onUpdateCartQty(item.id, item.quantity -1)}>-</Button>
                        <Typography>{item.quantity}</Typography>
                        <Button type="button" size="small"onClick={() => onUpdateCartQty(item.id, item.quantity +1)}>+</Button>
                    </div>
                    <Button variant="contained" type="button" color="secondary" onClick={()  => onRemoveFromCart(item.id)} >Retirer</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CartItem
