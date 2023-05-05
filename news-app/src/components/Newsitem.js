import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,mode} = this.props
        return (
            <div>
                <div className="card newsCard form-control" style={{width: '18 rem' }} >
                    <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202111/stock-market-1_1-sixteen_nine.jpg?size=948:533":imageUrl} className="imgcard img-top cardImg" alt="..." />
                    <div className="card-body "  style={{backgroundColor:mode==='light'?'white':'#13466e' , color:mode==='light'?'black':'white'}}>
                        <h5 className="card-title">{title}</h5>
                        
                        <a id="description" href={newsUrl} target="_blank" rel="noreferrer"><p className="card-text" style={{color:mode==='light'?'#0000ee':'#acaccd'}}>{description}</p></a>
                       
                        <p className="authorpublished"><strong>AUTHOR:{!this.props.author?'Unknown':this.props.author}</strong></p>
                        <p className="authorpublished"><strong>PUBLISHED ON:{new Date(this.props.publishedAt).toUTCString()}</strong></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
