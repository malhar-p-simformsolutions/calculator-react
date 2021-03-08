import react, { Component } from 'react';

class Display extends Component {
    render() {
        return (
            <div>
                {this.props.display}
            </div>
        );
    }
}

export default Display;