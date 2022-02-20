// Imports
import React from 'react';
import $ from 'jquery';
import * as classNames from 'classnames';

// Classe
class Contact extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.state = { email:'', emailValide:false, checkVisible:false, formulaireEnvoye:false, merciVisible:false };
		this.formRef = React.createRef();
	}

	// Render
	render(){

		// Classes dynamiques
		const merciClass = classNames({
			'formMerci':true,
			'visible':this.state.merciVisible
		});

		// Check email
		const checkEmail = () => {
			if (this.state.emailValide){
				return <i className="far fa-check"></i>
			} else {
				return <i className="far fa-times"></i>
			}
		};

		// Return
		return(
			<section id="contact">
				<div className="fond"></div>
				<article>
					<i className="fal fa-paper-plane"></i>
					<h2>Inscrivez-vous</h2>
					<p>Mise à jour, newsletter, actus, promos...</p>
					<div className="formContainer">
						{
							!this.state.formulaireEnvoye
							? <form onSubmit={ this.handleSubmit.bind(this) } ref={ this.formRef }>
								<div className="inputContainer">
									<div className="check">{ checkEmail() }</div>
									<input type="text" id="email" name="email" placeholder="Votre e-mail" value={ this.state.email }
										onChange={ this.handleChange.bind(this) } autoComplete="off"/>
								</div>
								<div className="submitContainer">
									<input type="submit" id="btnSubmit" name="btnSubmit" disabled={ !this.state.emailValide } 
										value="S'inscrire"/>
								</div>
							</form>
							: <div className={ merciClass }>
								Merci, vous êtes inscrit <i className="fas fa-badge-check"></i>
							</div>
						}
					</div>
				</article>
				<article className="coordonnees">
					
					{/* Adresse */}
					<div className="blocCoordonnees">
						<i className="fas fa-map-marked-alt"></i>
						<div className="titreCoordonnees">Adresse</div>
						<span></span>
						<div className="texteCoordonnees">25 rue Archereau, 75019 Paris</div>
					</div>
					{/* Adresse */}

					{/* Email */}
					<div className="blocCoordonnees">
						<i className="fas fa-envelope"></i>
						<div className="titreCoordonnees">Email</div>
						<span></span>
						<div className="texteCoordonnees">
							<a href="mailto:graphoeil@gmail.com">graphoeil@gmail.com</a>
						</div>
					</div>
					{/* Email */}

					{/* Telephone */}
					<div className="blocCoordonnees">
						<i className="fas fa-mobile"></i>
						<div className="titreCoordonnees">Téléphone</div>
						<span></span>
						<div className="texteCoordonnees">+33600000000</div>
					</div>
					{/* Telephone */}

				</article>
			</section>
		)

	};

	// Email
	handleChange(e){
		e.persist();
		if (!this.state.checkVisible){ this.setState({ checkVisible:true }); }
		this.setState({ email:e.target.value }, function(){
			let emailValide = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
			this.setState({ emailValide });
		});
	};

	// Envoi du formulaire
	handleSubmit(e){
		e.preventDefault();
		const $form = $(this.formRef.current);
		const donnees = { email:this.state.email };
		$.post('http://www.graphoeilmultimedia.com/reactDev/grayscale/utilsWWW/envoiMail.php', donnees).promise().done(function(){
			$form.slideUp(function(){
				this.setState({ formulaireEnvoye:true }, function(){
					setTimeout(() => {
						this.setState({ merciVisible:true });
					},500);
				});
			}.bind(this));
		}.bind(this)).fail(function(){
			console.log('Erreur d\'envoi du formulaire');
		});
	};

};

// Export
export default Contact;