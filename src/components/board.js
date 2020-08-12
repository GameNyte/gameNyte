import React, { Component } from 'react';

class Board extends Component {
    render() {
        return (
            <div className="Board">
                {this.props.children}
            </div>
        );
    }
}

export default Board;