import React from "react";
import NavigationContainer from "./NavigationContainer";
import {Link} from "react-router-dom";

class HomeContainer extends React.Component {
    render() {
        return (
        <>
            HOME
            <NavigationContainer>
                <Link to="/">Linkuj do mnie</Link>
                <Link to="/">Linkuj do mnie</Link>
                <Link to="/">Linkuj do mnie</Link>
                <Link to="/">Linkuj do mnie</Link>
                <Link to="/">Linkuj do mnie</Link>
                <Link to="/">Linkuj do mnie</Link>
                <Link to="/">Linkuj do mnie</Link>
            </NavigationContainer>
        </>
        );
    }
}

export default HomeContainer;