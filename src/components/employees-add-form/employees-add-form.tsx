import React, {Component} from 'react'
import './employees-add-form.css';
import {addEmployeeFunc} from '../app/app'



interface EmployeesAddFormState {
    name: string,
    salary: number
}

interface EmployeesAddFormProps {
    onAdd: addEmployeeFunc
}

class EmployeesAddForm extends Component<EmployeesAddFormProps, EmployeesAddFormState> {
    state = {
            name: '',
            salary: 0
        }


    onValueChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            ...this.state,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }


    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.props.onAdd(name, salary)
                    }}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={name}
                        name='name'
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={salary}
                        name='salary'
                        onChange={this.onValueChange}
                    />
                    <button type="submit"
                        className="btn btn-outline-light"
                    >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
