import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../action/action'
// import products from '../../db/products';

import './Home.css';
class Home extends Component {

    // add selected product to cart
    addItemToCart = (id) => {
        this.props.addItemToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (

                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div className="card m-3 shadow bg-white rounded" key={item.id}>
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <div className="row justify-content-start mb-1">
                                <div className="col-8 text-left h4">{item.title}</div>
                                <div className="col-4 text-right h4 home__price">{item.price}$</div>
                            </div>
                            <div className="row">
                                <div className="col-12 card-text text-left">{item.description}</div>
                            </div>
                        </div>
                        <button className="btn text-light" onClick={() => { this.addItemToCart(item.id) }}>Add to Cart</button>
                    </div>
                </div>

            );
        });

        return (
            <div className="container mt-3">
                <div className="row justify-content-md-center">
                    {itemList}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addItemToCart: (id) => { dispatch(addItemToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);