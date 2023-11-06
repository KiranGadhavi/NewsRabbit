import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
      constructor(props) {
        super(props);
        this.state = 
        {articles:[],
        loading:true
        }
        }
        async componentDidMount(){
          console.log('cdm');
          let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=a772d2376948427889557948bc6094b8"
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({articles: parsedData.articles});

        }

  render() {
    return (
      
      <div className='container my-3'>  
        <h2>NewsRabbit -Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return  <div className='col-md-4' key={element.url}>
        <NewsItem author={element.author?element.author:""} title={element.title?element.title.slice(0,45):""} publishedAt={element.publishedAt?element.publishedAt:""} imageURL={element.url} newsUrl={element.url}/>
          </div>
         })}
         </div>  
     </div>
    )
  }
}
