import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    constructor (props) {
        super(props);
        this.state = {}
        this.bandDel = this.bandDel.bind(this)
    }
    bandDel(){
        this.props.bandlDel(this.props.index);
    }
    render() {
        return (
            <p style={{color: 'red'}} className="todoitem" onClick={this.bandDel}>{this.props.content}</p>
        )
    }
}
export default TodoItem;
