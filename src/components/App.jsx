import React from 'react';
import NewsItem from '../containers/NewsItem';
import { connect } from 'react-redux';
import './Grid.css';
import './App.css';
import Heading from './Heading';
import FilterBox from './FilterBox';
import SelectedFilter from './SelectedFilter';
import SearchBox from './SearchBox';
import SortBox from './SortBox';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    const filterobj = [
      {
        heading: "Species",
        filterobj: [{
          label: "Human",
          id: "human",
          grpclass: "species",
        }, {
          label: "Mytholog",
          id: "mytholog",
          grpclass: "species",
        }, {
          label: "Humanoid",
          id: "humanoid",
          grpclass: "species",
        }]
      },
      {
        heading: "Gender",
        filterobj: [{
          label: "Male",
          id: "male",
          grpclass: "gender",
        }, {
          label: "Female",
          id: "female",
          grpclass: "gender",
        }]
      },
      {
        heading: "Status",
        filterobj: [{
          label: "Alive",
          id: "alive",
          grpclass: "status",
        }, {
          label: "Dead",
          id: "dead",
          grpclass: "status",
        }, {
          label: "Unknown",
          id: "unknown",
          grpclass: "status",
        }
      ]
      }
    ];

    // Don't call this.setState() here!
    this.state = {
      filterobj:filterobj,
      filters: {
        gender:"",
        status: "",
        species: ""
      }
    
    };
  }

  componentWillMount() {
    const { getList } = this.props;
    getList();
  }

  handleFilterClick(event, id, filterHeading, grpclass) {
    const isChecked = event ? event.target.checked : false;
    const { getList } = this.props;
    const { filters } = this.state;
    const category = filterHeading.toLowerCase();
    let newValue = "";
    if(isChecked){
      newValue = !!filters[category] ? filters[category] + '|' + id : id;
    } else {
      let arr = filters[category].split("|");
      arr = arr.filter(item => item !== id)
      newValue = arr.join("|");
    }
    console.log("grpClass", grpclass);

    
    
    // $('input[type="checkbox"]').each(function(){
    //   $(this).prop('checked', false);
    // });
    // $(this).prop('checked', true);
     
    this.setState({
      filters: {
        ...filters,
        [category]: newValue
      }
    }, () => {
      getList(this.state.filters);
    });
  }

  removeFilter(id, category){
    console.log("idddd", id);
    console.log("category", category);
    this.handleFilterClick(false, id, category)
    
  }
  handleSearchSubmit(inputValue) {
    console.log("handleSearchSubmit", inputValue);
    const { getList } = this.props;
    getList({name:inputValue});
  }

  render() {
    const { list, getList } = this.props;
    const { filterobj, filters } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 col-12-sm left-col">
            <Heading name="Filters" />

            {filterobj.map(({ heading, filterobj }) => (
              <FilterBox filterHeading={heading} filterobj={filterobj} handleFilterClick={this.handleFilterClick} filters={filters}/>
            ))}


          </div>
          <div className="col-9 col-12-sm right-col">
            <Heading name="Selected Filters" />
            <SelectedFilter filters={filters} removeFilter={this.removeFilter}/>

            <div className="row middle-row">
              <SearchBox handleSearchSubmit={this.handleSearchSubmit} />
              <SortBox />
            </div>
            <div className="row box-container">

              <NewsItem list={list} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.listingData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (payload) => dispatch({ type: "GET_LIST", payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
