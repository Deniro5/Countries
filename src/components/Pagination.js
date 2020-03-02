import React, { Component, Fragment} from 'react';
import {withRouter} from 'react-router'

class Pagination extends Component {

  pageChange = (newpage) => {
    this.props.history.push(newpage)
  }



  render() {
    var pages = [];

    if (this.props.currPage <= 4) {
      pages.push(<p onClick={() => { this.props.history.push("/1") }} className={"page " + (this.props.currPage === 1 ? 'selected' : '')} > 1 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/2") }} className={"page " + (this.props.currPage === 2 ? 'selected' : '')} > 2 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/3") }} className={"page " + (this.props.currPage === 3 ? 'selected' : '')} > 3 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/4") }} className={"page " + (this.props.currPage === 4 ? 'selected' : '')} > 4 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/" + (+this.props.currPage+1).toString())}} className= "page" > {">"} </p>)
      pages.push(<p onClick={() => { this.props.history.push("/" + this.props.maxPage) }} className="page"> {this.props.maxPage} </p>)
    }
    else if (this.props.currPage >= 18) {

      pages.push(<p onClick={() => { this.props.history.push("/1") }} className={"page " + (this.props.currPage === 1 ? 'selected' : '')} > 1 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/" + (this.props.currPage-1).toString())}} className= "page" > {"<"} </p>)
      pages.push(<p onClick={() => { this.props.history.push("/18") }} className={"page " + (this.props.currPage === 18 ? 'selected' : '')} > 18 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/19") }} className={"page " + (this.props.currPage === 19 ? 'selected' : '')} > 19 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/20") }} className={"page " + (this.props.currPage === 20 ? 'selected' : '')} > 20 </p>)
      pages.push(<p onClick={() => { this.props.history.push("/21") }} className={"page " + (this.props.currPage === 21 ? 'selected' : '')} > 21 </p>)
    }
    else {
      pages.push(
        <Fragment>
        <p onClick={() => { this.props.history.push("/1") }} className="page"> 1 </p>
        <p onClick={() => { this.props.history.push("/" + (this.props.currPage-1).toString())}} className= "page" > {"<"} </p>
        <p onClick={() => { this.props.history.push("/" + (this.props.currPage-1).toString()) }} className="page"> {this.props.currPage-1} </p>
        <p onClick={() => { this.props.history.push("/" + this.props.currPage.toString()) }} className="selected page"> {this.props.currPage}</p>
        <p onClick={() => { this.props.history.push("/" + (+this.props.currPage+1).toString())   }} className="page"> {+this.props.currPage+1}  </p>
        <p onClick={() => { this.props.history.push("/" + (+this.props.currPage+1).toString())}} className= "page" > {">"} </p>
        <p onClick={() => { this.props.history.push("/" + this.props.maxPage) }} className="page"> {this.props.maxPage} </p>
        </Fragment>
      )
    }
    

    return (
      <div className="pageContainer">
        {pages}
      </div>

    );
  }
}

export default withRouter(Pagination);
