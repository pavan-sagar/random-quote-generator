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
                  randomAuthor:'Pavan',
                  quoteStyle: "h3 p-4 bg-transition",
                  openingQuoteMarkStyle: "fa fa-quote-left bg-transition",
                  closingQuoteMarkStyle: "fa fa-quote-right bg-transition",
                  authorStyle: "float-right pr-4 pt-2 font-weight-normal bg-transition"
                  
                }

      this.setRandomQuoteFromApi = this.setRandomQuoteFromApi.bind(this);
      this.setRandomBackgroundColor = this.setRandomBackgroundColor.bind(this);
      this.callToSetRandomQuoteAndColor = this.callToSetRandomQuoteAndColor.bind(this);

  }

  

// Fetch quotes from API and set a random one to the state
  setRandomQuoteFromApi = async() =>{
    
    let raw_response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    let response = await raw_response.json();
    let quotes_list = response.quotes;

    let lenght_quotes_list = quotes_list.length;

    let randomIndex = Math.floor( Math.random()*(lenght_quotes_list-1)+1 ); 

    
   
    this.setState({
      randomQuote:quotes_list[randomIndex].quote,
      randomAuthor:quotes_list[randomIndex].author
    })


  }
      

  // Create a random hsl color code and set it to the state
  setRandomBackgroundColor(){

    let hue = Math.random()*360;
    let saturation = '70%';
    let lightness =  '50%';

    let colorString = 'hsl('+hue+','+saturation+','+lightness+')';

    this.setState({primaryColor:colorString}) 

  }

  // When the 'New Quote' button is clicked, it will internally call the get quote and get random color functions and update the state.
  // We are also adding the transition class to have the fade effect and removing the class after animation completes via setTimeout
  callToSetRandomQuoteAndColor(){
    
    // Add transition class to the ui objects like quotation mark, quote and author
    this.setState({
      quoteStyle:this.state.quoteStyle+' quote-transition',
      openingQuoteMarkStyle:this.state.openingQuoteMarkStyle+' quote-transition',
      closingQuoteMarkStyle:this.state.closingQuoteMarkStyle+' quote-transition',
      authorStyle:this.state.authorStyle+' quote-transition',
  
  })

  // Once the fade animation completes, we are removing the transition class in the state.
  // This is required to achieve the toggle fade effect on every 'New Quote' button click.
    setTimeout(()=>{this.setState({

      quoteStyle: "h3 p-4 bg-transition",
      openingQuoteMarkStyle: "fa fa-quote-left bg-transition",
      closingQuoteMarkStyle: "fa fa-quote-right bg-transition",
      authorStyle: "float-right pr-4 pt-2 font-weight-normal bg-transition"

    })},2200)

    this.setRandomQuoteFromApi(); 
    this.setRandomBackgroundColor();
      
  }


  render(){
    
    
    return (
    
    <div className="container-fluid vh-100 bg-transition" style={{backgroundColor:this.state.primaryColor}}>

      <div className="col-sm-12 col-lg-4 bg-black rounded mx-auto text-center p-3 bg-white quote-container" id="quote-box" style={{height:'auto',position:'relative',top:'37%'}}>
      
        <p className="col-md-12">

          {/* Opening quotation mark */}
          <i className={this.state.openingQuoteMarkStyle} style={{fontSize:'1.5rem',color:this.state.primaryColor}} />
          
          {/* Quote */}
          <span className={this.state.quoteStyle} style={{color:this.state.primaryColor}} id="text" >{this.state.randomQuote}</span>
       
          {/* Closing quotation mark */}
          <i className={this.state.closingQuoteMarkStyle} style={{fontSize:'1.5rem',color:this.state.primaryColor}} />
       </p>
        

        {/* Author Name */}
        <p className={this.state.authorStyle} id="author" style={{position:'relative',bottom:'1rem',color:this.state.primaryColor}}>-{this.state.randomAuthor}</p>
        
        <br />

        {/* Buttons */}
        <div className='btn-group w-100'> 
          {/* Twitter button */}
          <button  className="rounded ml-2 p-0 bg-transition" style={{width:'3rem',backgroundColor:this.state.primaryColor}}><a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.randomQuote}`}><i className="fa fa-twitter" style={{fontSize:'1.5rem',color:'white'}}></i></a></button>
          
          {/* Tumblr button */}
          <button className="rounded ml-2 p-0 bg-transition" style={{width:'3rem',backgroundColor:this.state.primaryColor}}><a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Jesus&content=${this.state.randomQuote}buttons&shareSource=tumblr_share_button`}><i className="fa fa-tumblr" style={{fontSize:'1.5rem',color:'white'}}></i></a></button>
          
          {/* New Quote button  */}
          <button id="new-quote" className="float-right ml-auto px-2 py-1 mr-2 rounded bg-transition" style={{width:'6.5rem',backgroundColor:this.state.primaryColor,color:'white'}} onClick={this.callToSetRandomQuoteAndColor}><span className="align-center">New Quote</span></button>
        </div>
      </div>
      
    </div>);
  }
}


export default App;
