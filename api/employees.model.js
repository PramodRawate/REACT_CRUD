const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Employee = new Schema({
  employee_name: {
    type: String
  },
  project_name: {
    type: String
  },
  employee_id: {
    type: Number
  }
},{
    collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);