import React, {Component} from 'react';
import DragItem from "./DragItem";

let array = [
  {id: '1', text: '1'},
  {id: '2', text: '2'},
  {id: '3', text: '3'},
  {id: '4', text: '4'},
  {id: '5', text: '5'},
  {id: '6', text: '6'},
  {id: '7', text: '7'},
  {id: '8', text: '8'},
  {id: '9', text: '9'},
]

class Drag extends Component {
  state = {
    list: array,
    dragId: ''
  }

  startMove = (dragId) => {
    this.setState({dragId})
  }

  setSort = (dragIndex, moveIndex) => {
    let list = this.state.list;
    list.splice(moveIndex,0, ...list.slice(dragIndex,1));
    if (dragIndex >= moveIndex) {
      list.splice(dragIndex+1,1)
    } else {
      list.splice(dragIndex,1)
    }
    this.setState({list});
  }

  render() {
    return (
      <div style={{width:420}}>
        {
          array.map((item, index) => <DragItem
            setSort={this.setSort}
            startMove={this.startMove}
            id={item.id}
            index={index}
            key={item.id}
            item={item}/>)
        }
      </div>
    );
  }
}

export default Drag;