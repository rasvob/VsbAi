  
import React from 'react';
import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NoMatch extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          location: props.location
      };
    };
    
    render() {return (
        <div className="text-center error-404-container jumbotron">
            <h1 className="error-404-heading">404 <FontAwesomeIcon icon={faSadTear}/></h1>
            <h2>No match found for <code>{this.state.location.pathname}</code> </h2>
        </div>
    )};
};

export default NoMatch;