import React from 'react';
import ExpressiveJS from './projects/ExpressiveJS.jsx';
import DearDiary from './projects/DearDiary.jsx';
import EasyParking from './projects/EasyParking.jsx';
import CanVueStory from './projects/CanVueStory.jsx';

const Project = ({ projectListState, toggleProjects }) => {
  const currentProjects = [
    <ExpressiveJS />,
    <DearDiary />,
    <EasyParking />,
    <CanVueStory />
  ]

  const projects = projectListState.map((element, index) => {
    for (let item in element) {
      if (element[item]) {
        return (
          <div key={index} className='projectItem'>
            <div>
              <button className={item + 'Button'} onClick={() => { toggleProjects(item) }}>{item}</button>
            </div>
            {currentProjects[index]}
          </div>
        )
      } else {
        return (
          <div key={index} className='projectItem'>
            <div>
              <button className={item + 'Button'} onClick={() => { toggleProjects(item) }}>{item}</button>
            </div>
          </div>
        )
      }
    }
  })

  return (
    <div id='project'>
      {projects}
    </div>
  )
}

export default Project;