import React, { Component } from 'react';
import logo from './logo.svg';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
                  

                  primaryColor : 'brown',
                  randomQuote:'Every strike brings me closer to the home run',
                  randomAuthor:'Pavan'

                  
    }

      this.setRandomQuoteFromApi = this.setRandomQuoteFromApi.bind(this);

  }



  setRandomQuoteFromApi = async() =>{
    
    let raw_response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    let response = await raw_response.json();
    let quotes_list = response.quotes;

    let lenght_quotes_list = quotes_list.length;

    let randomIndex = Math.floor( Math.random()*(lenght_quotes_list-1)+1 ); 

    console.log("Index is - ",randomIndex);
   
    this.setState({
      randomQuote:quotes_list[randomIndex].quote,
      randomAuthor:quotes_list[randomIndex].author
    })


  }
      

  render(){
    
    
   
    
    return (<div className="container-fluid vh-100" style={{backgroundColor:this.state.primaryColor}}>

      <div className="bg-black rounded mx-auto text-center p-3 bg-white" style={{height:'25%',width:'30%',position:'relative',top:'37%'}}>
      
        <p className="col-md-12">
          <i className="fa fa-quote-left" style={{fontSize:'1.5rem',color:this.state.primaryColor}} />
          <span className='h2 p-4' style={{color:this.state.primaryColor}}>{this.state.randomQuote}</span>
          <i className="fa fa-quote-right" style={{fontSize:'1.5rem',color:this.state.primaryColor}} />

        </p>
        
        <p className='float-right pr-4 font-weight-normal' style={{position:'relative',bottom:'1rem',color:this.state.primaryColor}}>-{this.state.randomAuthor}</p>
        
        <br />

        <div className='btn-group w-100'>
          <button className="btn-dark rounded ml-2 p-0" style={{width:'8%',backgroundColor:this.state.primaryColor}}><i className="fa fa-twitter" style={{fontSize:'1.5rem',color:'white'}}></i></button>
          <button className="btn-dark rounded ml-2 p-0" style={{width:'8%',backgroundColor:this.state.primaryColor}}><i className="fa fa-tumblr" style={{fontSize:'1.5rem',color:'white'}}></i></button>
          <button className="btn-dark float-right ml-auto px-2 py-1 mr-2 rounded" style={{width:'20%',backgroundColor:this.state.primaryColor}} onClick={this.setRandomQuoteFromApi}><span className="align-center">New Quote</span></button>
        </div>
      </div>
      
      </div>);
  }
}


export default App;
