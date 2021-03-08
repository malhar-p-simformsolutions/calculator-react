import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateDisplay } from "../../store/actions/actions";
import { clearDisplay } from "../../store/actions/actions";
import { subtraction } from "../../store/actions/actions";
import { multiplication } from "../../store/actions/actions";
import { division } from "../../store/actions/actions";


class Sbutton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.props.id === "clear") {
            this.props.clear();
        }
        else if(this.props.id === "subtract") {
            this.props.subtract(this.props.display);
        }
        else if(this.props.id === "multiply") {
            this.props.multiply(this.props.display);
        }
        else if (this.props.id === "divide") {
            this.props.divide(this.props.display);
        }
        else {
            this.props.updateDisplay(this.props.button);
        }
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
    updateDisplay: display => dispatch(updateDisplay(display)),
    subtract: display => dispatch(subtraction(display)),
    multiply: display => dispatch(multiplication(display)),
    divide: display => dispatch(division(display)),
    clear: display => dispatch(clearDisplay(display))
});

export default connect(null, mapDispatchToProps)(Sbutton);