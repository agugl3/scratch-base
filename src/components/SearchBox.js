import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputClick = this.handleInputClick.bind(this);

        this.state = {
            inputValue: ""
        }
    }
    handleInputClick(e) {
        const inputValue = e.target.value;
        this.setState({
            inputValue
        })
    }
    render() {
        const { inputValue } = this.state;
        const { handleSearchSubmit } = this.props;
        return (
            <div className="search-box col-6 float-left">
                <p>Search By Name</p>
                <input type="text" onChange={this.handleInputClick} />
                <input type="button" value="Search" onClick={() => handleSearchSubmit(inputValue)} />
            </div>
        )
    }
}

export default SearchBox;
