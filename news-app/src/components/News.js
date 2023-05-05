import React, { Component } from 'react'
import Newsitem from '../components/Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    
    capitalize=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
   
    constructor(props){
        super(props);
        
        this.state={
            articles : [],
            page:1,
            loading :true,
            totalResults :0,
           
           
        }
        document.title = `NEWSIN - ${this.capitalize(this.props.category)}`
    }
    async updateNews(){
        
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&page=1&pageSize=${this.props.pagesize}`;
       
        let data = await fetch(url);
     
        let parsedData = await data.json()
        this.setState({
            totalResults: parsedData.totalResults,
            articles: this.state.articles.concat(parsedData.articles),
            loading:false
           
        })
        
        
    }
    async componentDidMount(){
     
        this.updateNews();
    }
    fetchMoreData = async ()=>{
        this.setState({page:this.state.page +1})
       
        this.updateNews()
    }
    
 
    render() {
        let {mode}=this.props
        return (
            <div className="container my-4 ">
                <h2 className="headline">TOP HEADLINES ON {this.props.category.toUpperCase()}</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
                <div className="row my-3 ">
                {this.state.articles.map((element)=>{
                 return   <div className="col-md-4 col-md-4-5 padding-0" key={element.url}>
                        <Newsitem mode={mode} title={element.title?element.title.slice(0,80) + "...":" "} description={element.description?element.description.slice(0,200) + "...":" "} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author}/>
                    </div>
             
                })}
              
                </div>
                </InfiniteScroll>
                
            </div>
        )
    }
}

export default News
