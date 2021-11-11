import './search-panel.css';
import React, {Component} from "react";
import {OnUpdateSearchFunc} from '../app/app'

interface SearchPanelProps {
    onUpdateSearch: OnUpdateSearchFunc
}

class SearchPanel extends Component<SearchPanelProps, {}>  {
    state = {
        term: ''
    }


    onUpdateSearchInput = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({term: e.currentTarget.value})
        this.props.onUpdateSearch(e.currentTarget.value)
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
