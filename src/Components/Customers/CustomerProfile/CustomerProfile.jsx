import { wait } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import axios from '../../../axios-customers';
import Customer from '../Customer/Customer';
const CustomerProfile = (props) => {
    const id = props.history.location.state.id
    const customersData = props.history.location.state.customersData
    const [customer, setCustomer] = useState([]);
    const [destinationCustomerID, setDestinationCustomerID] = useState([]);
    const [amount, setAmount] = useState([]);


    const submitHandler = (event) => {
        // this code pevents from going to another page
        event.preventDefault()

        const sourceCustomerID = id

        if (sourceCustomerID === destinationCustomerID) {
            alert("Cannot transfer to yourself")
            return
        }
        if (amount <= customersData[sourceCustomerID].balance ) {

            axios.patch('/customers/' + sourceCustomerID + '.json', { 'balance': customersData[sourceCustomerID].balance - amount })
            axios.patch('/customers/' + destinationCustomerID + '.json', { 'balance': customersData[destinationCustomerID].balance + amount })
            alert("Done")
            axios.post('/transfers.json', { 'source': sourceCustomerID, 'destination': destinationCustomerID,'amount':amount})
            props.history.push('/customers')
        }
        else
        {
            alert("Invalid amount of money")

        }




        return () => {


        };




    }
    useEffect(() => {
        axios.get("/customers/" + id + ".json").then((response) => {
            // console.log(response.data)

            const name = response.data.name
            const id = response.data.id
            const balance = response.data.balance
            const email = response.data.email
            setCustomer(<Customer id={id} name={name} email={email} balance={balance}


            >

            </Customer>)
            // console.log(response.data)

            // console.log(response.data)
        }).catch((error) => {
            console.log(error)

        })
        return () => {


        };


    }, [])

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
                {customer}

            </table>

            <div className='m-2 p-2 mx-auto' style={{ "width": "200px" }}>
                <div className="card card text-white bg-primary " style={{ "width": "18rem" }}>
                        <div class="card-header">Hello {customersData[id].name},</div>
                    <div className="card-body">
                        <h5 className="card-title">Transfer Money To</h5>
  
                        <form

                            onSubmit={submitHandler}
                        >
                            <select className="custom-select mb-3" onChange={(e) => {
                                setDestinationCustomerID(parseInt(e.target.value))


                            }} >
                                <option value="Select Customer ID" selected disabled>Select Customer ID</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>

                            <div class="input-group mb-3">

                                <input type="text" class="form-control" placeholder="Amount" onChange={(e) => {
                                    setAmount(parseInt(e.target.value))

                                }} />
                            </div>
                            <button type="submit" class="btn btn-light">Confirm Transfer</button>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CustomerProfile;
