import React, { Component } from 'react'

export default  class Newsitem extends Component {
 
  render() {
    let {title,description,imageurl,newsurl,author,date}=this.props;
  
    return (
      
      <div className='my-3'>
        <div  className="card" >
  <img src={imageurl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">by {!author?"unknown":author} on { new Date(date).toGMTString()}</small></p>
    <a href={newsurl} target="_blank"  rel ="noreferrer" className="btn btn-sm btn-dark ">Read more</a>
  </div>
</div>

      </div>
    )
  }
}
