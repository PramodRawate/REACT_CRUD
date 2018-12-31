import React, {Component} from 'react';
import axios from 'axios';

export class Index extends Component {
    constructor(props) {
        super(props);

        this.state= {employees:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employees')
            .then(response => {
                this.setState({employees:response.data});
            })
    }
    
    render() {
        return (
            <div>
                <p>Welcome to Index Component</p>
            </div>
        );
    }
}

export default Index;