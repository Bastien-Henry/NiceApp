var args = arguments[0] || {};

$.shakeLabel.text = "Allez " + args.user + " secoue moi ce téléphone pour avoir un compliment !";

//Bouton pour tester l'event "Shake"
$.complimentButton.addEventListener('click', function(e){
	Ti.Gesture.fireEvent('shake');
});

$.backButton.addEventListener('click', function(e){
	Alloy.createController('index', {user: args.user, sex: args.sex}).getView().open();
});

//Si l'user secoue son téléphone
Ti.Gesture.addEventListener('shake', function(e){
	Alloy.createController('compliment', {user: args.user, sex: args.sex}).getView().open();
});