import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);        
    
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeprojectName = this.onChangeprojectName.bind(this);
    this.onChangeEmployeeId = this.onChangeEmployeeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        employee_name: '',
        project_name: '',
        employee_id:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/employees/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                employee_name: response.data.employee_name, 
                project_name: response.data.project_name,
                employee_id: response.data.employee_id });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeEmployeeName(event) {
        this.setState({
            employee_name: event.target.value
        });
    }

    onChangeprojectName(event) {
        this.setState({
            project_name: event.target.value
        });
    }

    onChangeEmployeeId(event) {
        this.setState({
            employee_id: event.target.value
        })
    }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        employee_name: this.state.employee_name,
        project_name: this.state.project_name,
        employee_id: this.state.employee_id
    };
    console.log(this.props.match.params.id);
    axios.post('http://localhost:4000/employees/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.employee_name}
                      onChange={this.onChangeEmployeeName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.project_name}
                      onChange={this.onChangeprojectName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.employee_id}
                      onChange={this.onChangeEmployeeId}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}