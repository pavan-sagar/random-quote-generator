import React, { Component } from 'react';
import logo from './logo.svg';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
                  1:{quote:'Every strike brings me closer to the home run',
                author:'Pavan'},

                  2:{quote:'Enjoy life',
                  author:'Such'}
    }


  }



  render(){
    return (<div className="container-fluid vh-100 bg-warning">

      <div className="bg-black rounded mx-auto text-center p-3 bg-white" style={{height:'25%',width:'30%',position:'relative',top:'37%'}}>
      
        <p className="col-md-12">
          <i className="fa fa-quote-left" style={{fontSize:'1.5rem',color:'brown'}} />
          <span className='h2 p-4'>{this.state[1].quote}</span>
          <i className="fa fa-quote-right" style={{fontSize:'1.5rem',color:'brown'}} />

        </p>
        
        <p className='float-right pr-4 font-weight-bold' style={{position:'relative',bottom:'1rem'}}>-{this.state[1].author}</p>
        
        <br />

        <div className='btn-group w-100'>
          <button className="btn-dark rounded ml-2 p-0" style={{width:'8%'}}><i className="fa fa-twitter" style={{fontSize:'1.5rem',color:'white'}}></i></button>
          <button className="btn-dark rounded ml-2 p-0" style={{width:'8%'}}><i className="fa fa-tumblr" style={{fontSize:'1.5rem',color:'white'}}></i></button>
          <button className="btn-dark float-right ml-auto px-2 py-1 mr-2 rounded" style={{width:'20%'}}><span className="align-center">New Quote</span></button>
        </div>
      </div>
      
      </div>);
  }
}


export default App;
