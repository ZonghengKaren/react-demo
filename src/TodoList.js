import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handBtnClick = this.handBtnClick.bind(this);
        this.onBandlDel = this.onBandlDel.bind(this);
    }
    handleInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handBtnClick() {
        console.log(this.state.inputValue)
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    onBandlDel(index){
        let list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
    render() {
        return (
            <Fragment>
                <div className="form">
                    <input type="text" value={this.state.inputValue} onChange={this.handleInput}/>
                    <button onClick={this.handBtnClick}>Add</button>
                </div>
                <div className="todolist">
                    {
                        this.state.list.map((item, index) => {
                            return (<TodoItem bandlDel={this.onBandlDel} key={index} content={item} index={index}/>)
                        })
                    }
                    <TodoItem />
                </div>
            </Fragment>
        )
    }
}
export default TodoList;
