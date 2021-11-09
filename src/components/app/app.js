import {Component} from 'react'
import nextId from "react-id-generator";

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Сергей С.', salary: 800, increase: false, raise: true, id: nextId()},
                {name: 'Андрей Р.', salary: 400, increase: true, raise: false, id: nextId()},
                {name: 'Николай В.', salary: 2000, increase: false, raise: false, id: nextId()},
            ],
            term: '',
            filter: ''
        }
    }

    deleteItem = id => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        if (name.length > 3 && salary) {
            this.setState(({data}) => {
                const newData = data.concat()
                newData.push({
                    name,
                    salary,
                    increase: false,
                    id: nextId()
                })
                return {
                    data: newData
                }
            });
        }
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }

    onToggleRaise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, raise: !item.raise}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items

        return items.filter(item => item.name.indexOf(term) > -1)
    }

    onUpdateSearch = term => {
        this.setState({term})
    }

    filterEmps = (items, filter) => {
        switch (filter) {
            case 'raised':
                return items.filter(item => item.raise)
            case 'salary':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterEmps = filter => {
        this.setState({filter})
    }

    onChangeSalary = (id, value) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: value}
                }
                return item
            })
        }))

    }


    render() {
        const {data, term, filter} = this.state
        const filteredData = this.filterEmps(data, filter)
        const visibleData = this.searchEmp(filteredData, term)

        return (
            <div className="app">
                <AppInfo
                    employeesNumber={data.length}
                    increasedEmployeesNumber={data.filter(item => item.increase).length}
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterEmps={this.onFilterEmps}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRaise={this.onToggleRaise}
                    onChangeSalary={this.onChangeSalary}
                />
                <EmployeesAddForm
                    onAdd={this.addEmployee}
                />
            </div>
        );
    }
}

export default App;
