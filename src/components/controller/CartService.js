import React, { Component } from 'react';

class CartService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/brankostancevic/products')
            .then(res => res.json())
            .then((data) => {
                this.setState({ items: data })
            })
            .catch(console.log(data))
    }
}

export default CartService;