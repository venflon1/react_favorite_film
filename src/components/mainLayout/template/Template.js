import React,{Component} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Template extends Component{

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );

  }
}

export default Template;
