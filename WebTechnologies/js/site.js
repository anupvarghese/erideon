
var lis = document.getElementById("menu").getElementsByTagName('li');
for (var i=0; i<lis.length; i++) {
	lis[i].addEventListener('click', showAlert, false);
}
function showAlert() {
	$(this).siblings("li").css("fontWeight", "normal");
	$(this).css("fontWeight", "bold");
	alert(this.innerHTML );
}
