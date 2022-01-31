import React from 'react';
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SillToolTip = styled.span`
	  font-size: 0.8rem;
      background: #3a3a3a;
      color: #fff;
      padding: 4px 8px;
      border-radius: 4px;
      position: absolute;
      bottom: 20px;
      z-index: 2;
      right: ${props => 10 - props.pushLevel}0%;
	  transform: translateX(30%);
      display: inline-block;
	  opacity:0;
      transition: 0.5s;
	  &::after {
        content: "";
        width: 6px;
        height: 6px;
        position: absolute;
        background: #3a3a3a;
        bottom: 0;
        left: 27px;
        z-index: 1;
        transform: translateY(3px) rotate(45deg);
        display: inline-block;
      }
`

const SkillProgressBar = ({ skill, level }) => {

  return <div className={ ( level > 0) & level < 11 ? 'skill-progress-bar level-' + level : 'skill-progress-bar'}>
	  <p className="skill">{skill}</p>
	  <motion.div 
	  initial={{ width:0 }} 
	  animate={{ width: '100%' }} 
	  transition={{ delay: 0.5, duration: 1 }} 
	  className="level"
	  >
		  <SillToolTip
		  pushLevel={level}
		  >
			  {level}0%
		</SillToolTip>
	</motion.div>
  </div>;
};

export default SkillProgressBar;
