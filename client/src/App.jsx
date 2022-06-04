import React,{ useState, useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import {getMyGames,getGames} from "./api/api.js";
import NavBar from "./components/NavBar/NavBar.jsx";
import Table from "./components/Table/Table.jsx"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[],
      view: 'home',
      update:false,
      fullset:[]

    }

    this.changeView = this.changeView.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this)
  }
  componentDidMount(){
    getMyGames().then((res)=>{
      this.setState({data:res.data})
    }).catch(err=>console.log(err))
    getGames().then((res)=>{
      this.setState({fullset:res.data})
    }).catch(err=>console.log(err))
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.update!==this.state.update){
      getMyGames().then((res)=>{
      this.setState({data:res.data})
    }).catch(err=>console.log(err))
    }
    
  }
  changeView(option) {
    this.setState({
      view: option
    });
    this.handleUpdate()
  }
  handleUpdate(){
    this.setState({update:!this.state.update})
  }
 
  renderView() {
    const {view} = this.state;

    if (view === 'home') {
      return <List handleClick={(home) => this.changeView('home',home)} data={this.state.data} update={this.handleUpdate}/>
    } 
    else if(view === 'add'){
      return <Form data={this.state.fullset} update={this.handleUpdate}/>
    }
    else if(view === 'fullset'){
      return <Table />
    }
    
  }
  render() {
    return (
      <div>
        <NavBar view={this.changeView}/>

        <div className="main">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
