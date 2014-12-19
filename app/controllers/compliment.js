var args = arguments[0] || {};
var complimentToUserMale = require("/data/complimentToUserMale");
var complimentToUserFemale = require("/data/complimentToUserFemale");

//Si l'user est un homme, on prend un compliment random dans le tableau correspondant
if (args.sex == "Un homme") 
{
	var complimentUser = complimentToUserMale[Math.floor(Math.random() * complimentToUserMale.length)];
}
//Si l'user est une femme
else
{
	var complimentUser = complimentToUserFemale[Math.floor(Math.random() * complimentToUserFemale.length)];
}

$.complimentUser.text = complimentUser;

//Si l'user veut un autre compliment, on le redirige vers la page du shake
$.retryButton.addEventListener('click', function(e){
	Alloy.createController('vibrate', {user: args.user, sex: args.sex}).getView().open();
});