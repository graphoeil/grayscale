// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import $ from 'jquery';

// Variables
const gsap = window.gsap;
const SplitText = window.SplitText;

// Classe
class Home extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.articleRef = React.createRef();
	};

	// Render
	render(){
		// LoaderOut
		if (!this.props.grayStore.loaderVisible){ this.animeHome(); }
		// Return
		return(
			<section id="home" ref={ this.props.homeRef }>
				<div className="fond"></div>
				<article ref={ this.articleRef }>
					<h1 className="animate">Grayscale</h1>
					<p className="animate">Un thème Bootstrap gratuit</p>
					<p className="animate">Revisité avec React et MobX</p>
					<a href="#aPropos" id="btnCommencer" className="animate" onClick={ this.goToAPropos.bind(this) }>Commencer</a>
				</article>
			</section>
		)
	};

	// Animation
	animeHome(){

		// Variables
		const $article = $(this.articleRef.current);
		const $titre = $article.children('h1');
		const $p1 = $article.children('p').eq(0);
		const $p2 = $article.children('p').eq(1);
		const $btn = $article.children('a');
		const tlHome = gsap.timeline({ onComplete:this.boucleTitre.bind(this) });

		// Split
		const titreSplit = new SplitText($titre, { type:'chars' });
		titreSplit.split({ type:'chars' });

		// Animation
		tlHome
		.set(titreSplit.chars,{ scale:2, opacity:0 })
		.set($titre,{ opacity:1 })
		.set($p1,{ x:'-=100' })
		.set($p2,{ x:'+=100' })
		.set($btn,{ y:'+=100' })
		.to(titreSplit.chars,{ opacity:1, scale:1, duration:0.5, ease:'power1.inOut', stagger:{ each:0.1 } })
		.to($p1,{ opacity:1, x:0, duration:0.5, ease:'power1.inOut' },'-=0.2')
		.to($p2,{ opacity:1, x:0, duration:0.5, ease:'power1.inOut' },'-=0.2')
		.to($btn,{ opacity:1, y:0, duration:0.5, ease:'power1.inOut' },'-=0.2');

	};

	// Boucle sur le titre
	boucleTitre(){

		// Variables
		const $article = $(this.articleRef.current);
		const $titre = $article.children('h1');
		const tlBoucle = gsap.timeline({ repeat:-1, repeatDelay:4 });

		// Split
		const titreSplit = new SplitText($titre, { type:'chars' });
		titreSplit.split({ type:'chars' });

		// Animation
		tlBoucle
		.to(titreSplit.chars,{ scale:1.1, duration:0.3, ease:'power1.inOut', stagger:{ each:0.1, yoyo:true, repeat:1 } });

	};

	// Click sur le bouton commencer
	goToAPropos(e){
		e.preventDefault();
		const href = $(e.target).attr('href');
		const $sectionToGo = $(href);
		gsap.to($('body, html'),{ duration:1, ease:'power1.inOut', scrollTop:($sectionToGo.offset().top - 70) });
	};

};

// Export
export default inject('grayStore')(observer(Home));