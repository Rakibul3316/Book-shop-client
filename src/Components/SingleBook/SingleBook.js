import React from 'react';
import './SingleBook.css'
import { Link } from 'react-router-dom';

const SingleBook = (props) => {
    const { image, authorName, bookName, addPrice, _id } = props.book
    return (
        <div className="col-md-4">
            <div className="single-book">
                <div className="single-book-img">
                    <img src={image} alt="" />
                </div>
                <div className="single-book-content">
                    <div className="single-book-detail">
                        <h3> {bookName} </h3>
                        <p> {authorName} </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single-book-price">
                                ${addPrice}
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <Link to={`/checkOut/${_id}`} className="buy-btn">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;