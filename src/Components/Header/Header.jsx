import React from 'react';
import { withRouter } from 'react-router-dom'
const Header = (props) => {

    const viewCustomersHandler = (event) => {
        // this code pevents from going to another page
        event.preventDefault()
        console.log("Customersss")
        props.history.push('/customers')
        
    }
    const viewHomeHandler = (event) => {
        // this code pevents from going to another page
        event.preventDefault()
        props.history.push('')
        

    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active" >
                            <a class="nav-link"  onClick={viewHomeHandler}>Home <span class="sr-only">(current)</span></a>
                        </li>
                        
                        <li class="nav-item active">
                            <a class="nav-link" onClick={viewCustomersHandler}>View Customers <span class="sr-only">(current)</span></a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Header);
