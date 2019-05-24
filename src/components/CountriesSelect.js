import React, { Component } from 'react';
import './main.css'

class CountriesSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      filterLetter: null
    }
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSelectLetter = this.handleSelectLetter.bind(this);
  }

  handleSelectChange(evt) {
    this.setState({selectedIndex: evt.target.value});
    this.props.handleSelectedCountry(evt.target.value);
  }

  createOptions() {
    if (this.state.filterLetter == null) {
      return this.props.countriesData.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>
      });
    } else {
      let countriesArray = []
      for (var i = 0; i < this.props.countriesData.length; i++) {
        let name = this.props.countriesData[i].name.slice(0,1)
        if (name == this.state.filterLetter) {
          let country = {name: this.props.countriesData[i], index: i}
          countriesArray.push(country)
        }
      }
      for (let country of this.props.countriesData) {

      }
      return countriesArray.map((country) => {

        return <option value={country.index} key={country.index}>{country.name.name}</option>
      });
    }
  }

  createLetters() {
    let letters=("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("")
    return letters.map((letter, index) => {
      return <option value={letter} key={index} onClick={this.handleSelectLetter}>{letter}</option>
    });
  }

  handleSelectLetter(evt) {
    this.setState({filterLetter: evt.target.value});
  }

  render() {
    return (
      <>
      <div className='flex'>
        {this.createLetters()}
      </div>

      <select value={this.state.selectedIndex} onChange={this.handleSelectChange}>
        {this.createOptions()}
      </select>
      </>
    )
  }

}

export default CountriesSelect;
