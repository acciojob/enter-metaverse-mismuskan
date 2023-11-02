//your JS code here. If required.
var p=document.getElementById("status");
var but=document.getElementById("enterBtn");
var out=document.getElementById("out");
enterBtn.addEventListener("click",function(){
	p.textContent="Entered Metaverse";
	// out.textContentp.textContent;
	 out.textContent = ''; // Clear the text inside the <h1> element
    var h1Element = document.createElement("h1");
    h1Element.textContent = p.textContent;
    out.appendChild(h1Element);
});