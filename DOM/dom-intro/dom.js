



const sectionContainer = document.getElementById('section-container');

//manually create and add a new section
// const newSection = document.createElement('section');
// const h1 = document.createElement('h1');
// h1.innerText = 'Marketing Team';

// const newUl = document.createElement('ul');
// const li = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// const li4 = document.createElement('li');

// li.innerText = 'Laizu';
// li2.innerText = 'Nabiha';
// li3.innerText = 'Arafat';
// li4.innerText = 'Nasir';

// newUl.appendChild(li);
// newUl.appendChild(li2)
// newUl.appendChild(li3)
// newUl.appendChild(li4)

// newSection.appendChild(h1);
// newSection.appendChild(newUl);

// sectionContainer.appendChild(newSection)

//smart way to create and add new section
const newSection2 = document.createElement('section');
 newSection2.innerHtml = `
    <h1>my team</h1>
    <ul>
        <li>Laizu</li>
        <li>Afra</li>
        <li>Nasir</li>
        <li>Najmin</li>
    </ul>
    
`
console.log(newSection2);

//set color by using querysector
const sectionAll = document.querySelectorAll('section');
// console.log(sectionAll);


for(section of sectionAll){
    section.style.backgroundColor = 'orange';
}










