import "./app-filter.css";

const AppFilter = props =>  {
    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'raised', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'}
    ]


    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name
        const classes = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button"
                    className={`btn ${classes}`}
                    key={name}
                    onClick={() => props.onFilterEmps(name)}
            >
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
