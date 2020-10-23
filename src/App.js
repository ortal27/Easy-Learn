import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/Navigation/SideDrawer/SideDrawer';
import MainPage from './components/MainPage/MainPage';
import { Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    showSideDrawer: false,
  }
  
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return{ showSideDrawer: !prevState.showSideDrawer };
    });
  } 
  
  render(){
    return (
        <div>
]           <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
              open={this.state.showSideDrawer} 
              closed={this.sideDrawerClosedHandler}
            />
            <Route component={MainPage}/>
        </div>
    );
  }
}

export default App;