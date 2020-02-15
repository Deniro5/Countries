import React, { Component } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


class Country extends Component {

  state = {
    showExtra: false,
  }

  show = () => {
    this.setState({
      showExtra:true,
    })
  }
  
  hide = (e) => {
    this.setState({
      showExtra:false,
    })
    e.stopPropagation()
  }
  
  render() {

    var sup = "2";



    return (
      <div onClick = {this.show} className="countryContainer">
        <div className = "countryFlagContainer">
          <img src = {this.props.flag}/> 
        </div>
        <div className = "countryInfoContainer">
          <p className = "countryName"> {this.props.name} </p>
          <p className = "countryContinent"> {this.props.continent} </p>
        </div>
        <div  className = {"ExtraInfoContainer " + (this.state.showExtra ? 'show' : 'hide' )}>
          <p> <b>Capital City:</b> {this.props.capital}</p>
          <p> <b>Currency:</b> {this.props.currency}</p>
          <p> <b>Size:</b> {this.props.area + "km"}  </p>
          <p> <b>Population:</b> {this.props.population}</p>
          <p> <b>Language:</b> {this.props.language} </p>
          <ArrowDropUpIcon onClick = {this.hide.bind(this)} className = "test"  fontSize="large" />
        </div>
      </div>
    );
  }
}

export default Country;
