import React, { useEffect } from 'react';
import './CheckOut.css'
import { useHistory, useParams } from 'react-router';
import { useContext } from 'react';
import { BookCotext } from '../../App';

const CheckOut = () => {

    const { value, value2 } = useContext(BookCotext)
    const [book, setBook] = value2
    const { bookId } = useParams();
    const history = useHistory()

    useEffect(() => {
        fetch(`https://murmuring-beyond-31979.herokuapp.com/book/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setBook(data[0])
            })
    }, [setBook, bookId])

    const goToOrders = () => {
        history.push("/orders")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="chechout-area">
                    <h2>Checkout</h2>
                    <div className="calculate-checkout">
                        <div className="calculate-checkout-heading">
                            <div className="row">
                                <div className="col-md-8"><p>Description</p></div>
                                <div className="col-md-2 text-center"><p>Quantity</p></div>
                                <div className="col-md-2 text-center"><p>Price</p></div>
                            </div>
                        </div>
                        <div className="calculate-checkout-detail">
                            <div className="row">
                                <div className="col-md-8"><p> {book.bookName} </p></div>
                                <div className="col-md-2 text-center"><p>1</p></div>
                                <div className="col-md-2 text-center"><p>{book.addPrice}</p></div>
                            </div>
                        </div>
                        <div className="calcutate-checkout-total mt-3">
                            <div className="row">
                                <div className="col-md-10">
                                    <b><p>total</p></b>
                                </div>
                                <div className="col-md-2 text-center"><p> {book.addPrice} </p></div>
                            </div>
                        </div>
                    </div>
                    <button onClick={goToOrders} className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;