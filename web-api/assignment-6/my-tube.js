
const loadData = async ()=>{
    const url = 'https://openapi.programming-hero.com/api/videos/category/1000'
    const res = await fetch(url)
    const result = await res.json()
    const data = result.data;
    
    displayData(data);
}
loadData();

const displayData = (data)=>{
    const displayContainer = document.getElementById('display')
    
    data.map((ele) => {
        console.log(ele)
        const card = document.createElement('div')
        card.innerHTML = `
            <img src='${ele.thumbnail}'/>
            <h2>${ele.title}</h2>
        `
        displayContainer.appendChild(card)
    })
}