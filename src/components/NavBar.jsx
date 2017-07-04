import React from 'react';
import Bio from './Bio.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';

const NavBar = (props) => {
  const content = [
    <Bio />,
    <Project projectListState={props.projectListState} toggleProjects={props.toggleProjects} />,
    <Contact />
  ];

  const navBarItems = props.navBarState.map((element, index) => {
    for (let item in element) {
      if (element[item]) {
        return (
          <div key={index} className='navItem'>
            <div>
              <button className={Object.keys(element)[0] + 'Button'} onClick={() => { props.toggleTabs(Object.keys(element)[0]) }}>{Object.keys(element)[0]}</button>
            </div>
            {content[index]}
          </div>
        )
      } else {
        return (
          <div key={index} className='navItem'>
            <div>
              <button className={Object.keys(element)[0] + 'Button'} onClick={() => { props.toggleTabs(Object.keys(element)[0]) }}>{Object.keys(element)[0]}</button>
            </div>
          </div>
        )
      }
    }
  })

  return (
    <div id='navbar'>
      {navBarItems}
    </div>
  )
}

export default NavBar;