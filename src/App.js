// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import $ from 'jquery';
import './css/displayMain.css';
import Loader from './components/Loader';
import Header from './components/Header';
import Home from './components/Home';
import APropos from './components/APropos';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Variables
const Modernizr = window.Modernizr;

// Classe
class App extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.homeRef = React.createRef();
		this.aProposRef = React.createRef();
		this.projetsRef = React.createRef();
	};

	// Render
	render(){
		return(
			<React.Fragment>

				{/* Loader */}
				{
					this.props.grayStore.loaderVisible && <Loader/>
				}
				{/* Loader */}

				{/* Header */}
				<Header/>
				{/* Header */}

				{/* Home */}
				<Home homeRef={ this.homeRef }/>
				{/* Home */}

				{/* A propos */}
				<APropos aProposRef={ this.aProposRef }/>
				{/* A propos */}

				{/* Projets */}
				<Projets projetsRef={ this.projetsRef }/>
				{/* Projets */}

				{/* Contact */}
				<Contact/>
				{/* Contact */}

				{/* Footer */}
				<Footer/>
				{/* Footer */}

			</React.Fragment>
		)
	};

	// isTouch et scrollEvent
	componentDidMount(){

		// isTouch ?
		if (Modernizr.touchevents){ this.props.grayStore.toggleTouch(); }

		// Scroll
		let timerScroll, scrollVal;
		const $home = $(this.homeRef.current);
		const $aPropos = $(this.aProposRef.current);
		const $projets = $(this.projetsRef.current);
		const $window = $(window);
		$window.on('scroll', function(){
			if (timerScroll){ clearTimeout(timerScroll); }
			timerScroll = setTimeout(() => {
				scrollVal = $window.scrollTop();
				// Header fixe
				if (scrollVal === 0){
					this.props.grayStore.setHeaderFixe(false);
				}
				if (scrollVal > 1){
					this.props.grayStore.setHeaderFixe(true);
				}
				// Home
				if (scrollVal <= $home.height()){
					this.props.grayStore.setZoneActive('home');
				}
				// A propos, on sort de Home
				if (scrollVal >= $home.height() - 170){
					this.props.grayStore.setZoneActive('aPropos');
				}
				// Projets, on sort de A propos
				if (scrollVal >= ($aPropos.offset().top + $aPropos.height() - 170)){
					this.props.grayStore.setZoneActive('projets');
				}
				// Contact, on sort de Projets
				if (scrollVal >= ($projets.offset().top + $projets.height() - 170)){
					this.props.grayStore.setZoneActive('contact');
				}
			},1);
		}.bind(this));

	};

};

// Export
export default inject('grayStore')(observer(App));