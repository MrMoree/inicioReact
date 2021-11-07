import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


class CartWidget extends React.Component {
    render() {
        return (
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 3 new items in cart"
                    color="inherit"
                >
                    <Badge badgeContent={3} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Carrito</p>
            </MenuItem>
        )
    }
}
export default CartWidget;


export class CartWidget2 extends React.Component {
    render() {
        return (
            <IconButton
                size="large"
                aria-label="show 3 new items in cart"
                color="inherit"
            >
                <Badge badgeContent={3} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </IconButton>
        )
    }
}