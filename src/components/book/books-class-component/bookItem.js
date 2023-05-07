import React, { Component } from "react";
class BookItem extends Component {
  state = {};
  render() {
    console.log("props:", this.props);
    return (
        
      <React.Fragment>
        <tr key={this.props.data.id}>
          <td>{this.props.data.id}</td>
          <td>
            <img
              src={this.props.data.bookImageUrl}
              alt="tejas"
              width="150px"
              height="100px"
            ></img>
          </td>
          <td>{this.props.data.bookTitle}</td>
          <td>{this.props.data.bookAuthor}</td>
          <td>{this.props.data.bookGenre}</td>
          <td>{this.props.data.bookCost}</td>
          <td><button type="button" className="btn btn-danger  btn-sm" onClick={()=>this.props.onDelete(this.props.data.id)}>Delete</button></td>
        </tr>
      </React.Fragment>
    );
  }
}

export default BookItem;
