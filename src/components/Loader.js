// Imports
import React from 'react';
import { inject } from 'mobx-react';
import $ from 'jquery';

// Variables
const gsap = window.gsap;

// Classe
class Loader extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.loaderRef = React.createRef();
	}

	// Render
	render(){
		return(
			<div className="loader" ref={ this.loaderRef }>
				<div className="conteneurLoader">
					<div className="carreRebond"></div>
				</div>
			</div>
		)
	};

	// Animation et chargement de l'image d'accueil
	componentDidMount(){

		// Variables
		const $loader = $(this.loaderRef.current);
		const $carre = $loader.find('.carreRebond');
		const tlLoader = gsap.timeline();

		// Animation
		tlLoader
		.to($carre,{ duration:2, rotation:-360, ease:'none', repeat:-1 },0)
		.fromTo($carre,{ y:-100 },{ y:0, duration:1, ease:'bounce.out', repeat:-1, yoyo:true },0);

		// Chargement image
		const image = new Image();
		const $image = $(image);
		$image.attr('src','http://www.graphoeilmultimedia.com/reactDev/grayscale/imagesWWW/bg-masthead.jpg').on('load', function(){
			$loader.fadeOut(1000, function(){
				tlLoader.kill();
				this.props.grayStore.hideLoader();
			}.bind(this));
		}.bind(this));

	};

};

// Export
export default inject('grayStore')(Loader);