import React, { useEffect, useState } from 'react';
import SingleBook from '../SingleBook/SingleBook';
import './Home.css'


const Home = () => {

    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://murmuring-beyond-31979.herokuapp.com/books")
            .then(res => res.json())
            .then(data => setBooks(data))
        setLoading(true)
    }, [])


    return (
        <div className="book-wrapper">
            <div className="container">
                <div className="row">
                    {
                        loading ? books.map(book => <SingleBook key={book._id} book={book}></SingleBook>) :
                            <div className="spinner text-center">
                                <div className="spinner-border spinner" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;