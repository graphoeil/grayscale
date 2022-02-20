// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import * as classNames from 'classnames';
import $ from 'jquery';

// Variables
const gsap = window.gsap;

// Classe
class Header extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.state = { menuOuvert:false }
		this.menuRef = React.createRef();
	};

	// Render
	render(){

		// Classes dynamiques
		const headerClass = classNames({
			'fixed':this.props.grayStore.headerFixe
		});
		const aProposClass = classNames({
			'navBtn':true,
			'active':this.props.grayStore.zoneActive === 'aPropos'
		});
		const projetsClass = classNames({
			'navBtn':true,
			'active':this.props.grayStore.zoneActive === 'projets'
		});
		const contactClass = classNames({
			'navBtn':true,
			'active':this.props.grayStore.zoneActive === 'contact'
		});

		// Return
		return(
			<header className={ headerClass }>
				<a href="#home" className="logoHeader" onClick={ this.scrollHome.bind(this) }>Start <span>Bootstrap</span></a>
				<div className="btnMenuMobile" onClick={ this.toggleMenuMobile.bind(this) }>
					{
						this.state.menuOuvert ? <i className="fal fa-times"></i> : <i className="fal fa-bars"></i>
					}
				</div>
				<nav ref={ this.menuRef }>
					<a href="#aPropos" className={ aProposClass } onClick={ this.scrollToSection.bind(this) }>A propos</a>
					<a href="#projets" className={ projetsClass } onClick={ this.scrollToSection.bind(this) }>Projets</a>
					<a href="#contact" className={ contactClass } onClick={ this.scrollToSection.bind(this) }>Contact</a>
				</nav>
			</header>
		)
	};

	// Ouverture / Fermeture menu mobile
	toggleMenuMobile(e){
		e.preventDefault();
		const $menu = $(this.menuRef.current);
		if (this.state.menuOuvert){
			this.setState({ menuOuvert:false });
			$menu.slideUp();
		} else {
			this.setState({ menuOuvert:true });
			$menu.slideDown();
		}
	};

	// Click sur logo header
	scrollHome(e){
		e.preventDefault();
		// Fermeture du menu mobile
		if ($(window).width() < 768){
			this.setState({ menuOuvert:false });
			$(this.menuRef.current).slideUp();
		}
		const $bodyHTML = $('body, html');
		gsap.to($bodyHTML,{ duration:1, ease:'power1.inOut', scrollTop:0 });
	};

	// Click sur les boutons du menu
	scrollToSection(e){
		e.preventDefault();
		// Fermeture du menu mobile
		if ($(window).width() < 768){
			this.setState({ menuOuvert:false });
			$(this.menuRef.current).slideUp();
		}
		// Scroll vers la section
		const $bodyHTML = $('body, html');
		const href = $(e.target).attr('href');
		const $sectionToGo = $(href);
		gsap.to($bodyHTML,{ duration:1, ease:'power1.inOut', scrollTop:($sectionToGo.offset().top - 70) });
	};

	// Resize window >= 768
	componentDidMount(){
		let timerResize;
		const $window = $(window);
		const $menu = $(this.menuRef.current);
		$window.on('resize orientationchange', function(){
			if (timerResize){ clearTimeout(timerResize); }
			timerResize = setTimeout(() => {
				if ($window.width() >= 768){
					this.setState({ menuOuvert:false });
					$menu.removeAttr('style');
				}
			},100);
		}.bind(this)).trigger('resize');
	};

};

// Export
export default inject('grayStore')(observer(Header));