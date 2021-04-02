import React, { useEffect, useState } from 'react';
import './ManageBook.css'
import gridImg from './grid 1.png'
import plusicon from "./plus 1.png"
import { Link } from 'react-router-dom';
import ReturnTbody from '../ReturnTbody/ReturnTbody';

const ManageBook = () => {


    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("https://murmuring-beyond-31979.herokuapp.com/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className="container-fluid pl-0">
            <div className="row">
                <div className="col-md-3 pr-0">
                    <div className="admin-left-side">
                        <nav>
                            <Link to="manageBook"><img src={gridImg} alt="" />Manage Book</Link>
                            <Link to="/admin"><img src={plusicon} alt="" />Add Book</Link>
                        </nav>
                    </div>
                </div>
                <div className="col-md-9 px-0 overflow-hidden">
                    <div className="admin-right-side">
                        <div className="add-book-title">
                            <h3>Manage Book</h3>
                        </div>
                        <div className="add-book-wrapper"></div>
                        <div className="manage-table">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Author Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        books.map(book => (<ReturnTbody key={book._id} book={book}></ReturnTbody>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBook;