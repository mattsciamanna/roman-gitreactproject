import React from 'react';
import './App.css';
// to render our filetree
import { FileTree } from './components/file-tree/file-tree.component';
import { data } from './components/file-tree/file-tree.fixture';

// the minimize function changes state from 
class App extends React.Component {
  // constructor allows our react app to think about its state
  constructor(props) {
    super(props);
    this.state = {mode:'fullwidth'}; //'normal'
    // need to bind all functions to the object to let them be callable from wherever in the app.
    this.handleExpand = this.handleExpand.bind(this);
    this.handleMin = this.handleMin.bind(this);
  }

  // the user has pressed the expand button
  handleExpand() {
    this.setState({mode: 'normal'});
    window.expandClick("uselesstrash")
  }

  // the user has pressed the minimize button in file-tree.component.tsx
  handleMin(value) {
    this.setState({mode: value});
  }
  
  render () {
    if(this.state.mode === 'normal') {
      return (
        <div className="mjrcontainer">
                    <div className="fileTreeContainer">
                      {/* note that we add the function as a prop to work on it here.  */}
                        <FileTree data={data} handleMin={this.handleMin}/>
                    </div>
                    <div id='wbvwdiv'><h1>mattttttttttrrrrrrrrrrrrrhdhskskdajnkskkdjsdnjsdkdnjasknfuasiuebueiubebvksjfkbajv</h1></div>
        </div>
      );
  }else if (this.state.mode === 'fullwidth') {
    return (
      // <div class='sub'>

      <React.Fragment>
      <div className="mjrcontainer">
                  <div className="fileTreeContainer" >
                    {/* make this a react component eventually */}
                    {/* <i src="../public/images/arrows.png" id="arrows"></i> */}
                    <button onClick={this.handleExpand}>
                      EXPAND
                    </button>
                  </div>
      </div>
      <webview id="wbv" src="https://www.github.com/"></webview>  
      </React.Fragment>
    );
  }
}
// componentDidMount() {
//   this.element.current.addEventListener('click', this)
// }


}




export default App;
