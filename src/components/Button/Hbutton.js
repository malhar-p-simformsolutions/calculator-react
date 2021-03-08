import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from "../../store/actions/actions";
import { addition } from "../../store/actions/actions";
import { equal } from "../../store/actions/actions";


class Hbutton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.display(this.props.value);
    }

    render() {
        return(
            <button
                id={this.props.id}
                value={this.props.value}
                onClick={this.handleClick}            
            >
                {this.props.button}</button>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    display: display => dispatch(updateDisplay(display)),
});

export default connect(null, mapDispatchToProps)(Hbutton);