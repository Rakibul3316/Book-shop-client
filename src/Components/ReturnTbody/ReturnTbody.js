import React from 'react';
import deleteIcon from './Group 33150.png'

const ReturnTbody = (props) => {
    const { bookName, addPrice, authorName, _id } = props.book;

    const deleteBook = (id) => {
        console.log(id)
        fetch(`/deleteBook/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log("deleted success"))

    }
    return (
        <>
            <tr>
                <td> {bookName} </td>
                <td> {authorName} </td>
                <td>$ {addPrice} </td>
                <td><img onClick={() => deleteBook(_id)} style={{ width: "20%", cursor: "pointer" }} src={deleteIcon} alt="" /></td>
            </tr>
        </>
    );
};

export default ReturnTbody;