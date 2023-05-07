import React from 'react'

function BookItemFunction(props) {
    return ( 

        <React.Fragment>
        <tr key={props.data.id}>
          <td>{props.data.id}</td>
          <td>
            <img
              src={props.data.bookImageUrl}
              alt="tejas"
              width="150px"
              height="100px"
            ></img>
          </td>
          <td>{props.data.bookTitle}</td>
          <td>{props.data.bookAuthor}</td>
          <td>{props.data.bookGenre}</td>
          <td>{props.data.bookCost}</td>
          <td><button type="button" className="btn btn-danger  btn-sm" onClick={()=>props.onDelete(props.data.id)}>Delete</button></td>

          <td><button type="button" className="btn btn-warning  btn-sm" onClick={()=>props.onView(props.data.id)}>view</button></td>
        </tr>
      </React.Fragment>
     );
}

export default BookItemFunction;