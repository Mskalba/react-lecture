import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
    constructor() {
        console.log('Constructor');
        super();
        this.state = {
            isEdited: false
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount- Ajax');
        window.addEventListener('resize', function() {

        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps- zmiana stanu w oparciu o propsy');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // if(jedyna rzecz ktora sie zmienila to state.isEdited) {
        //     return false;
        // }
        console.log('shouldComponentUpdate');

        return true;
    }

    componentWillUpdate(nextProps) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount- czyszczenie przegladarki po nasyzm komponencie');
    }

    handleChange = () => {
        if(!this.state.isEdited) {
            this.props.handleChange();
            this.setState({
                isEdited: true
            })
        }
    }

    render() {
        console.log("Render");
        return (
            <li className="d-flex flex-row list-group-item">
                <div className="mr-auto  p-2">
                    {this.props.name}
                </div>
                <div className="p-2 btn-group" role="group">
                    <Button handleChange={this.handleChange.bind(this)} text="edit" />
                    <Button text="delete" />
                </div>
            </li>
        )
    }
}

export default ListItem;