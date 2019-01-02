import React, {Component} from 'react';
import axios from 'axios';

export class Create extends Component {
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

        axios.post('http://localhost:4000/employees/add',obj)
            .then(res => console.log('Successfully added Employee Data',res))
            .catch(err => console.log(err));
            this.props.history.push('/index');
        this.setState({
          employee_name: '',
          project_name: '',
          employee_id: ''
        })
      }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add Employee Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Employee Name:  </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.employee_name}
                            onChange={this.onChangeEmployeeName} />
                    </div>
                    <div className="form-group">
                        <label>Add Project Name: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.project_name}
                            onChange={this.onChangeprojectName} />
                    </div>
                    <div className="form-group">
                        <label>Add Employee ID: </label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={this.state.employee_id}
                            onChange={this.onChangeEmployeeId} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Employee" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Create;