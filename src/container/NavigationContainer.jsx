import React from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as menuActions from './../actions';

class NavigationContainer extends React.Component {
    render() {
        return (
            <div>
                <Link to="/lista">Lista z Home</Link>
                <hr />
                {this.props.menu.map(el => (
                    <div key={el}>
                        <Link to="/lista">{el}</Link>
                    </div>
                ))}

                <input type="button" value="Add" onClick={() => this.props.actions.addMenuElement('random')} />
                <input type="button" value="Remove" onClick={() => this.props.actions.removeMenuElement()} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.menu
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(menuActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);