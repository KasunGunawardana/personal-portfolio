import React from 'react'
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg'
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg'
import { NavLink } from 'react-router-dom'

const casesList = [
	{
		id: 1,
		subtitle: 'About Me',
		title: "",
		img: "about-me",
		path: 'about'
	},
	{
		id: 2,
		subtitle: 'Skills',
		title: "Lumin is a famous brand for best camera lenses",
		img: "skills",
		path: 'skills'
	},
	{
		id: 3,
		subtitle: 'Work',
		title: "Open space floor plans for you next venture",
		img: "work",
		path: 'work'
	}
]

const Cases = () => {
	return (
		<section className="cases">
			<div className="container-fluid">
				{/* <div className="cases-navigation">
					<div className="cases-arrow prev disabled">
						<CasesPrev />
					</div>
					<div className="cases-arrow next">
						<CasesNext />
					</div>
				</div> */}
				<div className="row">
					{
						casesList.map((caseItem) => (
							<div className="case" key={caseItem.id}>
								<NavLink to={caseItem.path} exact>
									<div className="case-details">
										<span>{caseItem.subtitle}</span>
										<h2>{caseItem.title}</h2>
									</div>
									<div className="case-image">
										<img src={require(`../assets/${caseItem.img}.png`)} alt={caseItem.subtitle} />
									</div>
								</NavLink>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}

export default Cases
