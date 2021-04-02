import React, { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { BookCotext } from '../../App';
import './Orders.css'

const Orders = () => {

    const { value, value2 } = useContext(BookCotext)
    const [loggedInUser, setLoggedInUser] = value;
    const [book, setBook] = value2;
    const history = useHistory()

    const [order, setOrder] = useState({
        userName: "",
        userEmail: "",
        bookName: "",
        authorName: "",
        quantiry: 1,
        totalPrice: "",
        ordarTime: ""
    })

    console.log(order)

    const palceOrder = () => {
        const newOrder = {
            userName: loggedInUser.name,
            userEmail: loggedInUser.email,
            bookName: book.bookName,
            authorName: book.authorName,
            quantiry: 1,
            totalPrice: book.addPrice,
            orderTime: new Date()
        }
        setOrder(newOrder)

        fetch("https://murmuring-beyond-31979.herokuapp.com/addOrder", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Your data placed successfully")
                }
            })
    }

    const backToHome = () => {
        history.push("/")
    }



    return (
        <div className="container">
            <div className="order-area">
                <h3 className='text-center mt-3'>Order Procced</h3>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="order-details">
                            <p>Purchaser Name : {loggedInUser.name} </p>
                            <p>Purchaser Email : {loggedInUser.email} </p>
                            <p>Book Name : {book.bookName} </p>
                            <p>Author Name : {book.authorName} </p>
                            <p>Quantity : 1 </p>
                            <h5>Total : {book.addPrice} </h5>
                        </div>
                        <div className="order-confirm-btn text-center">
                            <button onClick={palceOrder}>Confirm Order</button>
                            <button onClick={backToHome}>Back To Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;