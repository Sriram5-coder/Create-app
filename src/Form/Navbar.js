import React from 'react';
import {Link} from 'react-router-dom';

function Navbarr(){
    return(
        <div>
            <ul>
            <Link to='/'><li>Add</li></Link>
                <Link to='/details'><li>Details</li></Link>
                <Link to='/edit'><li>Edit</li></Link>
            </ul>
        </div>
    )
}
export default Navbarr