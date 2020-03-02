import React, { Component} from 'react';
import Country from './Country'
import Grid from '@material-ui/core/Grid';
import Pagination from './Pagination'



class Home extends Component {

  state = {
    items: []
  }

  componentWillMount = () => {
    fetch("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;region;flag;population;languages;area")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
  }

  pageChange = (newpage) => {
    this.props.history.push(newpage)
  }

  render() {
    var countries = [];
    var count = 0;
    var boundary = 12;
    if (this.props.match.params.page) {
      count = 12 * (this.props.match.params.page-1);
      boundary = count + 12;
    }
    while (count < this.state.items.length && count < boundary) {
      countries.push(
        <Country name = {this.state.items[count].name} continent = {this.state.items[count].region} flag = {this.state.items[count].flag} population = {this.state.items[count].population} capital = {this.state.items[count].capital} area = {this.state.items[count].area} currency = {this.state.items[count].currencies[0].name} language = {this.state.items[count].languages[0].name}  />
      )
      count++;
    }


    return (
        <div className = "homeContainer">
            <div className = "headerContainer"> 
            <Grid container spacing={3} alignItems="center">
              <Grid item md={6} xs = {12}>
                <div className = "pageInfoContainer">
                  <p className = "title"> 248 Countries </p> 
                  <p className = "pageCount"> Page {this.props.match.params.page || 1}/21 </p>
                </div>
              </Grid>
              <Grid item md={6} xs = {12}>
                <Pagination currPage = {this.props.match.params.page || 1} maxPage = {21} />
              </Grid>
            </Grid>
            </div>
            {countries}
        </div>
    );
  }
}

export default Home;
