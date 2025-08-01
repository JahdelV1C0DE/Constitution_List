"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Jahdel White
      Date:   9/17/23
      Filename: project05-03.js
*/

//create variables for source dog and pre existing code in html
let sourceDoc = document.getElementById("source_doc");

let toc = document.getElementById("toc");

let headingCount = 1;

const heading = 'H2';

//create a for loop that loopp that loops through until their is a null or the program attempts to show more rights than needed

for (let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
	if (n.tagName === heading){
			let anchor = document.createElement('a');
			anchor.setAttribute('id', 'doclink' + headingCount);
			//
			n.insertBefore(anchor, n.firstElementChild);
			
			
			//table of contents entry
			let listItem = document.createElement("li");
			let link = document.createElement('a');
			
			listItem.appendChild(link);
			
			link.textContent = n.textContent;
			
			
			link.setAttribute('href', "#doclink" + headingCount);
			
			toc.appendChild(listItem);
			//adds to the heading coutn each time it loops through
			headingCount++;
			
	}
	
		}
			
	
	



