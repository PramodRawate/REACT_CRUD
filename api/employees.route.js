const express = require('express');
const employeesRotues = express.Router();

let Employees = require('./employees.model');

//Route for Storing data to Mongo
employeesRotues.route('/add').post((req,res) => {
    let employees = new Employees(req.body);
    employees.save()
    .then(employees => {
        res.status(200).json({'employees': 'employee is added successfully'});
    })
    .catch(err=> {
        res.status(400).send('unable to save to database');
    });
});

//Route for getting data from Mongo
employeesRotues.route('/').get((req,res) => {
    Employees.find(err,employees => {
        if(err) {
            console.log(err);
        }
        else {
            res.json(employees);
        }
    }); 
});

//Route for Editing data
employeesRotues.route('/edit/:id').get((req,res) => {
    let id = req.params.id;
    Employees.findById(id,(err,employee => {
        if(err) {
            console.log('Employee not founnd in DB');
        }
        else {
            res.json(employee);
        }
    }));
});

//Route for Editing data
employeesRotues.route('/update/:id').post((req,res) => {
    Employees.findById(req.params.id,(err,employee => {
        if(err) {
            res.status(400).send('Data not found');
        }
        else {
            employee.person_name = req.body.person_name;
            employee.project_name = req.body.project_name;
            employee.employee_id = req.body.employee_id;
            
            employee.save().then(employee => {
                res.json('Update Complete')
            })
        }
    }))
    .catch(err => {
        res.status(400).send('Unable to update the database');
    });
});

//Route for deleting/Removing data
employeesRotues.route('/delete/:id').get((req,res) => {
    Employees.findByIdAndRemove({_id:req.params.id},(err,employee =>{
        if(err) res.json(err);
        else res.json('Successfully Removed...!!!');
        })
    );
});

module.exports =employeesRotues;