var complimentToFriends = require("/data/complimentToFriends");

$.goButton.addEventListener('click', function(e)
{
	var userName = $.nameUser.value;
	var userSex = $.pickerSex.getSelectedRow(0).title;

	//Si l'user a bien rentré un nom.
	if (userName.length > 0) 
	{
		Alloy.createController('vibrate', {user: userName, sex: userSex}).getView().open();
	}
	//Sinon une alert().
	else
	{
		alert("Veuillez renseigner votre nom !");
	}
	
});

var complimentFriends = complimentToFriends[Math.floor(Math.random() * complimentToFriends.length)];

//Connexion à Facebook
var facebook = Alloy.Globals.Facebook;
facebook.appid = '1424716047769821';
//Les permissions
facebook.permissions = ['read_stream', 'publish_stream', 'status_update', 'publish_actions'];
facebook.forceDialogAuth = true;
facebook.authorize();
//Le style du bouton Facebook
$.fbButton.style = facebook.BUTTON_STYLE_WIDE;

//La post du message au moment du click sur le bouton.
$.goFacebook.addEventListener('click', function(e){
	facebook.requestWithGraphPath('me/feed', {message: complimentFriends}, 
         "POST", function(e) {
    if (e.success) {
        alert("Compliment posté !");
    } else {
        if (e.error) {
            alert(e.error);
        } else {
            alert("Unkown result");
        }
    }
});
});


$.index.open();
