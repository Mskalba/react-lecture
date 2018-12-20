import React from "react";
import Button from "./Button";

class ListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isEdited: false
        }
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
        return (
            <li>
                {this.props.name}
                <Button handleChange={this.handleChange.bind(this)} text="edit" />
                <Button text="delete" />
            </li>
        )
    }
}

export default ListItem;