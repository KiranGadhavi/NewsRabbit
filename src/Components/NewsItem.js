import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,publishedAt,newsUrl,author}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        {/* {<img src={imageUrl} alt=""/>} */}
          <div className="card-body">
           <h4 className="card-author">{author}</h4>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{publishedAt}</p>
            <a href={newsUrl}  className="btn btn-dark">Read More</a>
          </div>
       </div>
      </div>
    )
  }
}
