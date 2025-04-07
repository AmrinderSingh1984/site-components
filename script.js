// Get the parent element (in this case, a div)
let parentDiv = document.getElementById('main2');

// Create a new <p> element
let newParagraph = document.createElement('div');
let newParagraph2 = document.createElement('div');


newParagraph.innerHTML = '<h3 id="c2">OFF-ROAD parts</h3> <p id="d2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, velit cumque praesentium nesciunt officiis, obcaecati cum vel adipisci dolor, nihil ipsa perspiciatis? Numquam ex sint quo placeat voluptates quae! Accusantium!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur libero nihil animi, odit nostrum laboriosam harum dolores iure hic repudiandae possimus? Nesciunt assumenda et ipsum, perferendis harum asperiores placeat explicabo? </p> <button class="b1">Get it!</button> <button class="b2">Learn More</button>';


newParagraph.classList.add('content');
newParagraph2.classList.add('contenti');
newParagraph2.classList.add('c2');

c=document.getElementById("c2")

d=document.getElementById("d2")

// Append the new paragraph inside the div
// parentDiv.appendChild(newParagraph);
// parentDiv.appendChild(newParagraph2);


function runBasedOnScreenSize() {
    if (window.innerWidth < 600) {
        parentDiv.appendChild(newParagraph2);
        parentDiv.appendChild(newParagraph);
        
     
    } else {
        parentDiv.appendChild(newParagraph);
        parentDiv.appendChild(newParagraph2);
        
    }
  }
  
  // Run on page load
  runBasedOnScreenSize();
  
  // Run on window resize
  window.addEventListener('resize', runBasedOnScreenSize);
  