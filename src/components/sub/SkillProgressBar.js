import React from 'react';

const SkillProgressBar = ({ skill, level }) => {
  return <div className={ ( level > 0) & level < 11 ? 'skill-progress-bar level-' + level : 'skill-progress-bar'}>
	  <p className="skill">{skill}</p>
	  <div className="level"></div>
  </div>;
};

export default SkillProgressBar;
