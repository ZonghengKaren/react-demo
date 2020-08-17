import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

class Home extends Component {
    constructor(props) {
        super(props);
        this.goTodo = this.goTodo.bind(this);
    }
    goTodo(){
        browserHistory.push('/todolist');
    }
    render() {
        return (
            <div className="home">
                <p onClick={this.goTodo}>hello word</p>
                <Link to="/todolist/" style={{color:'black'}}>
                    <div>点击跳转到TodoList</div>
                </Link>
            </div>
        )
    }
}
export default Home;
