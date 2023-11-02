//your JS code here. If required.
var p=document.getElementById("status");
var but=document.getElementById("enterBtn");
var out=document.getElementById("out");
enterBtn.addEventListener("click",function(){
	 // out.textContent = ''; // Clear the text inside the <h1> element
    // var h1Element = document.createElement("h1");
    // h1Element.textContent = p.textContent;
    // out.appendChild(h1Element);
	p.remove();
	 var h1Element = document.createElement("h1");
    h1Element.textContent = "Entered Metaverse";
    out.textContent = ''; // Clear any existing content in the "out" element
    out.appendChild(h1Element);
});