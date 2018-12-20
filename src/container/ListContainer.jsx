import React from "react";
import ListItem from "../component/ListItem";

class ListContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            edited: 0
        }
    }

    handleChange = () => {
        this.setState({
            edited: this.state.edited + 1
        })
    }

    render() {
        return (
        <div>
            Zeedytowano: {this.state.edited}
            <ul>
                <ListItem
                    handleChange={this.handleChange.bind(this)}
                    name="Maciej"
                />
                <ListItem
                    handleChange={this.handleChange.bind(this)}
                    name="Kuba"
                />
                <ListItem
                    handleChange={this.handleChange.bind(this)}
                    name="Mateusz"
                />
                <ListItem
                    handleChange={this.handleChange.bind(this)}
                    name="Joanna"
                />
                <ListItem
                    handleChange={this.handleChange.bind(this)}
                    name="Cokolwiek"
                />
            </ul>
        </div>
        );
    }
}

export default ListContainer;