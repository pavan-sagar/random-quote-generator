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
    return (<div className="container vh-100">

      <div className="bg-black w-80 mx-auto p-5">
      
        <span className="col-md-12">
          <i className="fa fa-quote-left mr-2" style={{fontSize:'1.5rem',color:'brown'}} />
          <span className='h2 p-4'>{this.state[1].quote}</span>
          <i className="fa fa-quote-right ml-2" style={{fontSize:'1.5rem',color:'brown'}} />

        </span>
        <br />
        <span className='float-right mr-5 py-2'>-{this.state[1].author}</span>
        
        <br />


        <button className="btn btn-dark"><i className="fa fa-twitter" style={{fontSize:'1.5rem',color:'white'}}></i></button>
        <button className="btn btn-dark ml-2" style={{width:'7%'}}><i className="fa fa-tumblr" style={{fontSize:'1.5rem',color:'white'}}></i></button>
        <button className="btn btn-dark float-right"> New Quote</button>
      </div>
      
      </div>);
  }
}


export default App;
