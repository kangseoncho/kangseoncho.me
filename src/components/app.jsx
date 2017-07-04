import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarState: [
        { 'Bio': false },
        { 'Project': false },
        { 'Contact': false }
      ],
      projectListState: [
        { 'ExpressiveJS': false },
        { 'Dear Diary': false },
        { 'Easy Parking': false },
        { 'CanVue Story': false }
      ]
    };

    this.toggleTabs = this.toggleTabs.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
  }

  toggleTabs(element) {
    const initialProjectListState = [
      { 'ExpressiveJS': false },
      { 'Dear Diary': false },
      { 'Easy Parking': false },
      { 'CanVue Story': false }
    ];
    let tempNavBarState = this.state.navBarState;

    //give true value to matching element
    tempNavBarState.map((tab, index) => {
      if (Object.keys(tab)[0] === element && tab[element] === false) {
        tab[element] = true;
      }
      else {
        for (let item in tab) {
          tab[item] = false;
        }
      }
    })

    //change the state as modified above. also bring project list to initial state
    this.setState({ navBarState: tempNavBarState });
    this.setState({ projectListState: initialProjectListState });
  }

  toggleProjects(element) {
    let tempProjectListState = this.state.projectListState;

    tempProjectListState.map((tab, index) => {
      if (Object.keys(tab)[0] === element && tab[element] === false) {
        tab[element] = true;
      }
      else {
        for (let item in tab) {
          tab[item] = false;
        }
      }
    })

    this.setState({ projectListState: tempProjectListState });
  }

  render() {
    return (
      <div>
        <div>Should be my logo</div>
        <NavBar navBarState={this.state.navBarState} projectListState={this.state.projectListState}
          toggleTabs={this.toggleTabs} toggleProjects={this.toggleProjects} />
      </div>
    )
  }
}

export default App;