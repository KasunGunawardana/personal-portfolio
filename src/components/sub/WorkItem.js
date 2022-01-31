import React from 'react';
import styled from 'styled-components';

const Box = styled.li`
width: 500px;
height: 40vh;
`

const WorkItem = ({name}) => {
  return <Box>
	  <div className="slider-wrapper">
		  <div className="slider-contenr">

		  </div>
		  <div className="slider-image">
			  
		  </div>
	  </div>
	  <h2>{name}</h2>
	  </Box>;
};

export default WorkItem;
