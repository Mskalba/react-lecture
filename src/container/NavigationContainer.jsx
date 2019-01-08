import React from "react";
import {Link} from 'react-router-dom';

class NavigationContainer extends React.Component {
    render() {
        return (
        <div>
            <Link to="/lista">Lista z Home</Link>
            {this.props.children}
        </div>
        );
    }
}

export default NavigationContainer;