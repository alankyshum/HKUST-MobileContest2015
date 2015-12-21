/**
 * HELPER FUNCTIONS
 * ----------------
 */
var clearPage = () => {
	Object.keys(document.getElementsByClassName('shown')).forEach((i) => {
		if (document.getElementsByClassName('shown')[i]) {
			document.getElementsByClassName('shown')[i].classList.remove('shown');
		}
	});
}
var activePage = (page) => {
	if (document.querySelector(`[data-page].active`)) document.querySelector(`[data-page].active`).classList.remove('active');
	document.querySelector(`[data-page="${page}"]`).classList.add('active');
}


/**
 * CONTROLLERS FOR DIFFERENT ROUTES
 * --------------------------------
 */

// CONTROLLER: HOME PAGE
var homeCtrl = (section) => {
	clearPage();
	if (section == 'timeline') {
		activePage('timeline');
		document.getElementById('timeline').classList.add('shown');
	} else if (section == 'event') {
		activePage('event');
		document.getElementById('event').classList.add('shown');

	} else {
		activePage('home');
		document.getElementById('event').classList.add('shown');
		document.getElementById('timeline').classList.add('shown');

	}
}

// CONTROLLER: GUIDELINE PAGE
var guideCtrl = () => {
	clearPage();
	activePage('guides');
	document.getElementById('guides').classList.add('shown');


}

// CONTROLLER: PROPOSAL UPLOAD PAGE
var proposalCtrl = () => {
	clearPage();
	activePage('proposal');
	document.getElementById('proposal').classList.add('shown');


}

// CONTROLLER: TUTORIAL PAGE
var tutorialCtrl = () => {
	clearPage();
	activePage('tutorial');
	document.getElementById('tutorial').classList.add('shown');


}


// CONTROLLER: FAQ PAGE
var faqCtrl = () => {
	clearPage();
	activePage('faq');
	document.getElementById('faq').classList.add('shown');

}


/**
 * ROUTING URL FROM CLIENT SIDE
 * ----------------------------
 */
var routes = {
	'/home': homeCtrl,
	'/home/:section': homeCtrl,
	'/guides': guideCtrl,
	'/proposal': proposalCtrl,
	'/tutorial': tutorialCtrl,
	'/faq': faqCtrl
};
var router = Router(routes);
router.init();
