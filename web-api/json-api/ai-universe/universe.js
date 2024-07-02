
const searchText = ()=>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    console.log(searchText)
}

const loadAi = async()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url)
    const data = await res.json()
    const aiData = data.data.tools
    // console.log(data.data.tools)
    displayAi(aiData)
}

const displayAi = (data)=>{

    const aiContainer = document.getElementById('ai-container');
    // data.map((ai) => console.log(ai))
    data.forEach((ai) => {
        console.log(ai)
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl');

        aiDiv.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${ai.name}</h2>
                <p>${ai.features[2]}</p>
            </div>
                 <figure>
                      <img
                        src="${ai.image}"
                        alt="ai" />
                </figure>
        `
        aiContainer.append(aiDiv)
    })
}