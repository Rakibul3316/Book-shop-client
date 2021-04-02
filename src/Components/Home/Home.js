import React, { useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import './Home.css'


const Home = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/books")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className="book-wrapper">
            <div className="container">
                <div className="row">
                    {
                        books.map(book => <SingleBook key={book._id} book={book}></SingleBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;