import React, {Component} from 'react';
import Masters from './Components/masters';
import AddMaster from './Components/addmaster';

class App extends Component{
  state = {
    masters : [
      {name: 'Obi Wan Kenobi', side:'light' },
      {name: 'Qui-Gon Jinn', side:'light' },
      {name: 'Darth Plaguies - The Wise', side:'dark' }
    ]
  }
  addMaster = (master) => {
      let masters = [...this.state.masters, master]
      this.setState({
        masters:masters
      })  
  }
  deleteMaster = (id) => {
    console.log(id)
    let masters = this.state.masters.filter(master => {
      return master.name !== this.state.masters[id].name
    })
    this.setState({
      masters:masters
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps,prevState){
    console.log('component updated');
    console.log(prevProps,prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>My first app.</h1>
        <p>React </p>
        <Masters deleteMaster={this.deleteMaster} masters = {this.state.masters} />
        <AddMaster addMaster={this.addMaster} />
      </div>
    );
  }
}

export default App;
