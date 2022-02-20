// Imports
import React from 'react';

// Classe
class APropos extends React.Component{

	// Render
	render(){
		return(
			<section id="aPropos" ref={ this.props.aProposRef }>
				<div className="fond"></div>
				<article className="paddingPlus">
					<h2>Bootstrap revisité</h2>
					<p className="marginPlus">Grayscale est un thème Bootstrap gratuit créé par Start Bootstrap.
						Le thème est open source et vous pouvez l'utiliser à toutes fins, personnelles ou commerciales.</p>
					<h3>Revisité ?</h3>
					<p>En effet, pour parfaire mon apprentissage de React et de MobX je revisite des sites existants from-scratch, 
						en les animants et les améliorants.
					</p>
					<a id="btnTelecharger" href="https://startbootstrap.com/theme/grayscale/" target="_blank" rel="noreferrer noopener">Téléchargement</a>
				</article>
				<div className="imageFond">
					<img src="http://www.graphoeilmultimedia.com/reactDev/grayscale/imagesWWW/ipad.png" alt="un iPad" />
				</div>
			</section>
		)
	};

};

// Export
export default APropos;