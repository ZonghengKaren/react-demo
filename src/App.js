import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import TodoList from './TodoList';

class App extends Component {
    render() {
        return (
            <Router >
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/todolist" component={TodoList} />
                </div>
            </Router>
        )
    }
}
export default App;
