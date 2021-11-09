import './search-panel.css';
import {Component} from "react";

class SearchPanel extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearchInput = e => {
        this.setState({term: e.target.value})
        this.props.onUpdateSearch(e.target.value)
    }

    render () {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearchInput}
            />
        )
    }

}

export default SearchPanel;
