
const loadData = async ()=>{
    const url = 'https://openapi.programming-hero.com/api/videos/category/1000'
    const res = await fetch(url)
    const result = await res.json()
    const data = result.data;
   
    displayData(data);
}
loadData();

const musicData = async () =>{
    const url = 'https://openapi.programming-hero.com/api/videos/category/1001'
    const res = await fetch(url)
    const result = await res.json()
    const musicData = result.data;
    
    displayData(musicData)
}

const comedyData = async () =>{
    const url = 'https://openapi.programming-hero.com/api/videos/category/1003'
    const res = await fetch(url)
    const result = await res.json()
    const comedyData = result.data;
    
    displayData(comedyData)
}


const displayData = (data)=>{
    
    const displayContainer = document.getElementById('display')
    displayContainer.innerText = ''
    
    data.map((ele) => {
        // const views = ele.others.views
        // const viewsArr = []
        // viewsArr.push(views);
        // viewsArr.map((view) => console.log(view.slice(0, 3)))

        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src='${ele.thumbnail}'/>
            
            <h4>${ele.title}</h4>
        `
        displayContainer.appendChild(card)
    })
}