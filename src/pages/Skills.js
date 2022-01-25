import React from 'react'
import SkillProgressBar from '../components/sub/SkillProgressBar'

const Skills = () => {
	return (
	<div className='page'>
      <div className='container'>
        <div className='row'>
          <div style={{ width: '100%'}}>
            <h1>Professional Skills</h1>
            <h3>Programming</h3>
            <div className="customized-row">
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="HTML" level={9} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="CSS/Sass/Less" level={9} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Javascript (ES6)" level={8} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="PHP/Laravel/Zend" level={9} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="MySQL" level={9} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="jQuery" level={9} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Alpine.js" level={7} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="React" level={7} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Node.js" level={7} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Firebase" level={6} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Mongodb" level={6} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Flutter" level={5} />
              </div>
            </div>
            <h3>Design</h3>
            <div className="customized-row">
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Photoshop" level={8} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Illustrator" level={7} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="XD" level={5} />
              </div>
              <div className="customized-column col-lg-4 col-sm-6 col-xs-12">
                <SkillProgressBar skill="Figma" level={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

export default Skills
