import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";
import propTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
  };
  // eslint-disable-next-line react/no-typos
  static propTypes = {
    country: propTypes.string,
    pagesize: propTypes.number,
    category: propTypes.string,
  };
  constructor(props) {
    super(props);
    document.title = "Newsoholic-".concat(props.category);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }
  firstCapatial=(string)=>{
    return string[0].toUpperCase()+string.slice(1);
   }
  updateNote = async () => {
    this.props.setprogress(10)
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.props.setprogress(40)
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
      totalArticles:this.state.totalArticles
    });
    this.props.setprogress(100);
  };

  async componentDidMount() {
    this.updateNote();
  }
  // handleNextclick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNote();
  // };
  // handlePrevclick = async () => {
  //   this.setState({ loading: true });

  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNote();
  // };
  fetchMoreData = async() => {
    
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({page:this.state.page+1});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
    });
  };

  render() {
    return (
      <div className="container my-3 flexbox">
        <h1 className="text-center " style={{ margin: "40px" ,marginTop:"90px"}}>
          {`Newsoholic ${this.firstCapatial(this.props.category)} Headlines `}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Loading/>}
        >

        {/* {this.state.loading && <Loading />} */}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((Element) => {
              return (
                <div className="col-md-4" key={Element.url}>
                  <Newsitem
                    title={Element.title}
                    description={Element.description}
                    imageurl={Element.urlToImage}
                    newsurl={Element.url}
                    author={Element.author}
                    date={Element.publishedAt}
                  />
                </div>
              );
            })}
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between ">  */}
          {/* <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevclick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
