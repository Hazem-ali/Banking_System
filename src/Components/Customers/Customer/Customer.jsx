import React from 'react';

const Customer = (props) => {
    return (
        <tr onClick={props.clicked}>
            <th scope="row"> {props.id} </th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.balance}</td>
        </tr>
    );
}

export default Customer;
