/* @author : Florian COLLIN
 */
/* var donnees = {
	author: "Florian COLLIN",
	date: "",
	update: "1er janvier 2021",
	version: "1.1.4"
};
*/
function annee() {
	var anneeEnCours = new Date();
	window.document.write(anneeEnCours.getFullYear());
}

function version() {
	var version = "v1.2.0";
	window.document.write(version);
}
/* Store */
var ifsd_search = document.getElementById('ifsd_search');
var link_edge = "";

ifsd_search.onclick = function(){
	window.document.write("<ul><li><a href=\""+link_edge+"\">Microsoft Edge</a></li></ul>")
}
