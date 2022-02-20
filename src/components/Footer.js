// Imports
import React from 'react';

// Classe
class Footer extends React.Component{

	// Render
	render(){
		return(
			<footer>
				<div className="socialFooter">
					<a href="https://twitter.com/graphoeil" title="Suivez-moi sur Twitter" rel="noreferrer noopener" target="_blank">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-hoyez-92230b222/" title="Suivez-moi sur LinkedIn" rel="noreferrer noopener" target="_blank">
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="http://www.graphoeilmultimedia.com/portfolio" title="Mon portfolio" rel="noreferrer noopener" target="_blank">
						<i className="fas fa-image"></i>
					</a>
				</div>
				<div className="copyright">
					<b>Graphoeil</b> | 2021
				</div>
			</footer>
		)
	};

};

// Export
export default Footer;