import React, {Component} from 'react';
import styles from './DragItem.scss';


class DragItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightHover: false,
    }

  }

  onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", this.props.index);
    e.dropEffect = "move";
  }

  onDrop = (e) => {
    e.preventDefault();
    console.log('drop')
    let dragIndex = e.dataTransfer.getData("text/plain");

    this.props.setSort(dragIndex, this.props.index)
    this.setState({rightHover: false})
  }

  onDragOver = (e) =>{
    console.log('enter')
    e.preventDefault();
   
  }

  onDragLeave = (e) => {
    e.preventDefault();
    console.log('leave')
    this.setState({rightHover: false})
  }

  onDragEnter = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    this.setState({rightHover: true})
  }

  onDragEnd = (e) => {
    // console.log('end')
    // e.preventDefault();
    // let dragIndex = e.dataTransfer.getData("text/plain");
    // console.log(e.dataTransfer.getData())
    // this.props.setSort(dragIndex, this.props.index)
    // this.setState({rightHover: false})
    // // this.setState({rightHover: false})
  }

  render() {
    let className = styles.box;
    if (this.state.rightHover) {
      className += ' ' + styles.hover
    }
    return (
      <div
        draggable
        // onDragEnd ={this.onDragEnd}
        onDrop={this.onDrop}
        onDragLeave={this.onDragLeave}
        onDragOver={this.onDragOver}
        onDragStart={this.onDragStart}
        className={className}>
        {this.props.item.text}
      </div>
    );
  }
}      
           

export default DragItem;