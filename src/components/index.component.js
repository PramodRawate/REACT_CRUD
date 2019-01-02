import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export class Index extends Component {
    constructor(props) {
        super(props);

        this.state= {
            employees:[],
            update:true
        };
    }

    componentWillMount() {
        axios.get('http://localhost:4000/employees')
        .then(response => {
            console.log('ComponentWillMount - calling GET');
            this.setState({employees:response.data});
        })
        .catch(err => {
            console.log(err);
        })
    }

    tabRow() {
        return this.state.employees.map((object,i) => {
            return <TableRow obj={object} key={i} />
        })
    };
    
    render() {
        return (
            <div>
                <h3 align="center">Employees List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                <tr>
                    <th>Person</th>
                    <th>Project</th>
                    <th>Employee Id</th>
                    <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                { this.tabRow() }
                </tbody>
            </table>
            </div>
        );
    }
}

export default Index;