import React, { useState } from 'react';
import './Admin.css'
import gridImg from './grid 1.png'
import plusicon from "./plus 1.png"
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);

    // Form Sumitted Fuction
    const onSubmit = data => {
        const bookData = {
            bookName: data.bookName,
            authorName: data.authorName,
            addPrice: data.addPrice,
            image: imageURL,
        }
        console.log(bookData)

        const url = 'http://localhost:5000/addBook'

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log("server side respons", res))
    };

    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a0adeb1188d74c4f681f8191e61684e1');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(respons => setImageURL(respons.data.data.display_url))
    }

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
                            <h3>Add Book</h3>
                        </div>
                        <div className="add-book-wrapper"></div>
                        <div className="add-book-input">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="add-book-input-left">
                                            <label htmlFor="book-name">Book Name</label>
                                            <p><input ref={register} type="text" name="bookName" placeholder="Enter Name" /></p>

                                            <label htmlFor="add-price">Add Price</label>
                                            <p><input ref={register} type="number" name="addPrice" placeholder="Add Price" /></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="add-book-input-right">
                                            <label htmlFor="author-name">Author Name</label>
                                            <p><input ref={register} type="text" name="authorName" placeholder="Enter Author Name" /></p>

                                            <label htmlFor="add-price">Add Book Cover Photo</label>
                                            <p><input type="file" name="image" onChange={handleImageUpload} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="add-book-submit-btn">
                                    <button type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;