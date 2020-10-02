  
import React, {useState} from 'react';

const NoMatch = (props) => {
    const [location] = useState(props.location);

    return (
        <div className="flex-fill">
            <div className="text-center error-404-container jumbotron">
            <h1 className="error-404-heading">404</h1>
            <h2>No match found for <code>{location.pathname}</code></h2>
            </div>
        </div>
    )
}

export default NoMatch;