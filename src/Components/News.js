import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
      constructor() {
        super();
        this.state = 
        {articles:[],
        loading:true,
        page:1
        }
        }
        async componentDidMount(){
          console.log('cdm');
          let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=a772d2376948427889557948bc6094b8&page=1&pageSize=${this.props.pageSize}`;
          this.setState({ loading :true});
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
            this.setState({articles:parsedData.articles,
              totalResults:parsedData.totalResults,
              loading:false
          })
            
          
        }
        handlePreClick= async()=>{
          console.log("Pre");
          let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=a772d2376948427889557948bc6094b8&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
          this.setState({ loading :true});
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({
            page: this.state.page- 1,
            articles: parsedData.articles,
            loading:false
          })

        }
        handleNextClick= async ()=>{
          console.log("Next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=a772d2376948427889557948bc6094b8&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
         this.setState({ loading :true});
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({
            page:this.state.page+1,
            articles:parsedData.articles,
            loading:false
          })
        }
        }

  render() {
    return (
      
      <div className='container my-3'>  
        <h2 className="text-center">NewsRabbit -Top Headlines</h2>
        {this.state.loading &&<Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
          return  <div className='col-md-4' key={element.url}>
        <NewsItem author={element.author?element.author:""} title={element.title?element.title.slice(0,45):""} publishedAt={element.publishedAt?element.publishedAt:""} newsUrl={element.url}/>
          </div>
         })}
         </div>  
       
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePreClick}>&larr; Previous</button>
         <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
        
     </div>
    )
  }
}
