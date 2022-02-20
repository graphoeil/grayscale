// Imports
import React from 'react';

// Classe
class Projets extends React.Component{

	// Render
	render(){
		return(
			<section id="projets" ref={ this.props.projetsRef }>
				
				{/* Projet */}
				<figure className="first">
					<div className="imgProjet">
						<img src="http://www.graphoeilmultimedia.com/reactDev/grayscale/imagesWWW/bg-masthead.jpg" alt="montagnes" />
					</div>
					<figcaption>
						<h3>Shoreline</h3>
						<p>Grayscale est open source et sous licence MIT. Cela signifie que vous pouvez l'utiliser pour n'importe quel projet, 
							même des projets commerciaux ! Téléchargez-le, personnalisez-le et publiez votre site Web !</p>
					</figcaption>
				</figure>
				{/* Projet */}

				{/* Projet */}
				<figure className="inner">
					<div className="imgProjet">
						<img src="http://www.graphoeilmultimedia.com/reactDev/grayscale/imagesWWW/demo-image-01.jpg" alt="montagnes" />
					</div>
					<figcaption>
						<h3>Misty</h3>
						<p>Un exemple d'endroit où vous pouvez mettre une image d'un projet, ou n'importe quoi d'autre, avec une description.</p>
					</figcaption>
				</figure>
				{/* Projet */}

				{/* Projet */}
				<figure className="inner">
					<div className="imgProjet">
						<img src="http://www.graphoeilmultimedia.com/reactDev/grayscale/imagesWWW/demo-image-02.jpg" alt="montagnes" />
					</div>
					<figcaption>
						<h3>Mountains</h3>
						<p>Un autre exemple de projet avec sa description respective. Ces sections fonctionnent également bien de manière réactive, essayez ce thème sur un petit écran !</p>
					</figcaption>
				</figure>
				{/* Projet */}

			</section>
		)
	};

};

// Export
export default Projets;