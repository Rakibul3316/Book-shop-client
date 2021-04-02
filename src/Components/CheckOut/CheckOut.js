import React, { useEffect, useState } from 'react';
import './CheckOut.css'
import { useParams } from 'react-router';

const CheckOut = () => {

    const { bookId } = useParams();
    const [book, setBook] = useState([]);
    console.log(book)

    useEffect(() => {
        fetch(`http://localhost:5000/book/${bookId}`)
            .then(res => res.json())
            .then(data => {
                setBook(data[0])
            })
    }, [bookId])

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
                    <button className="checkout-btn">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;