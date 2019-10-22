import React, { Component } from 'react';
import { deleteItemFromCart } from '../../action/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';

class Cart extends Component {

    //remove item product from cart list
    removeItem = (id) => {
        this.props.deleteItemFromCart(id);
    }

    render() {
        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return (
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-xs-5 col-md-2 cart__img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="col-xs-5 col-md-8 cart__desc">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="col-xs-2 col-md-2 cart__price">
                                <div className="row justify-content-center">
                                    {item.price}$
                            </div>
                                <div className="row justify-content-center">
                                    <button className="btn btn-link cart__btn" onClick={() => { this.removeItem(item.id) }}>Remove</button>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>

                )
            })
        ) :
            (
                <div>
                    <h4>CART IS EMPTY :-(</h4>
                    <h5>click on button to go shopping</h5>
                    <Link to="/" className="nav-link text-light">
                        <button className="btn text-light">SHOP</button>
                    </Link>
                </div>
            )




        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>Your Cart</h1>
                </div>
                <div className="card w-100">
                    <div className="card-body">
                        <div>{addedItems}</div>
                    </div>
                    <strong className={this.props.totalPrice === 0 ? 'hidden__totalPrice' : 'h2'}>
                        <div className="row justify-content-between mb-3">
                            <div className="col-2">Total:</div>
                            <div className="col-2">{this.props.totalPrice} $</div>
                        </div>
                    </strong>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteItemFromCart: (id) => { dispatch(deleteItemFromCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);