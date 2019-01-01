import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
            <tr>
            <td>
                {this.props.obj.employee_name}
            </td>
            <td>
                {this.props.obj.project_name}
            </td>
            <td>
                {this.props.obj.employee_id}
            </td>
            <td>
                <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                {/* <button className="btn btn-primary">Edit</button> */}
            </td>
            <td>
                <button className="btn btn-danger">Delete</button>
            </td>
            </tr>
    );
  }
}

export default TableRow;