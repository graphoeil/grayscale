// Imports
import { observable, makeObservable, action } from 'mobx';

// Classe
class GrayStore{

	// Constructeur
	constructor(){
		// Variables observables
		makeObservable(this,{
			loaderVisible:observable,
			isTouch:observable,
			zoneActive:observable,
			headerFixe:observable
		});
	};

	// Variables
	//
	// Loader
	loaderVisible = true;
	// Touch
	isTouch = false;
	// Navigation
	zoneActive = '';
	headerFixe = false;

	// Méthodes
	//
	// Loader
	hideLoader = action(() => {
		this.loaderVisible = false;
	});
	// Touch
	toggleTouch = action(() => {
		this.isTouch = true;
	});
	// Navigation
	setZoneActive = action((zoneActive) => {
		this.zoneActive = zoneActive;
	});
	setHeaderFixe = action((val) => {
		this.headerFixe = val;
	});

};


// Export
export default GrayStore;