import React, { useEffect, useState } from 'react';
import axios from '../../axios-customers';
import Customer from './Customer/Customer';


const Customers = (props) => {

    const [customers, setCustomers] = useState([]);
    let customersData=[]
    useEffect(() => {
        axios.get("/customers.json").then((response) => {
            // console.log(response.data)

            
            setCustomers(response.data.map((element) => {
                //   console.log(element)
                customersData.push(response.data)
                const name = element.name
                const id = element.id
                const balance = element.balance
                const email = element.email
                return (<Customer id={id} name={name} email={email} balance={balance}
                    clicked={(e) => {
                        customerClickHandler(e, id)
                    }}
    
                >
    
                </Customer>)
    
            }))
        }).catch((error) => {
            console.log(error)

        })

        

        return () => {


        };



    }, [])


    const customerClickHandler = (e, id) => {

        props.history.push({
            pathname: '/customers/' + id,
            state: { id: id, customersData: customersData[0] }
        })
    }



    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>



                <tbody>

                    {customers}


                </tbody>

            </table>


        </div>
    );
}

export default Customers;
