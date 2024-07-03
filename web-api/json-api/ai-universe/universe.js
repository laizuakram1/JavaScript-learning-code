
const searchText = ()=>{
    const searchField = document.getElementById('search-id');
    const searchId = searchField.value;
    loadAi(searchId)
}

//load single data
const loadAi = async(id)=>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url)
    const data = await res.json()
    const aiData = data.data;
    
    
    displayAi(aiData)
}


const displayAi = (data)=>{
    const aiContainer = document.getElementById('ai-container');
    aiContainer.innerText = '';
    // data.map((ai) => console.log(ai))
    
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl');

        aiDiv.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${data.tool_name}</h2>
                <p>${data.description}</p>
            </div>
                 <figure>
                      <img
                        src="${data.image_link[0]}"
                        alt="ai" />
                </figure>
        `
        aiContainer.append(aiDiv)
    
}

//load all and display all data
const loadAllAi = async()=>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json()
    const allData = data.data.tools;
    
    displayAllAi(allData)
    
    
}

const displayAllAi = (data)=>{

    const aiContainer = document.getElementById('ai-container');
    aiContainer.innerText = '';
    // data.map((ai) => console.log(ai))
    
        

        data.map((tool) => {
                
            const aiDiv = document.createElement('div');
            aiDiv.classList.add('card', 'bg-base-100', 'w-96', 'shadow-xl');

            aiDiv.innerHTML = `
            <div class="card-body">
                <h2 class="card-title">${tool.name}</h2>
                <p>${tool.description}</p>
            </div>
                 <figure>
                      <img
                        src="${tool.image}"
                        alt="ai" />
                </figure>
            <button onclick="toolDetails('${tool.id}')" class="btn btn-outline btn-info">Details</button>
        `
        aiContainer.append(aiDiv)

        })
}


//show tool details
const toolDetails = async (id)=>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url)
    const data = await res.json()
    const tool = data.data;

    toolModals(tool);

}


//tool details modals
const toolModals = (data)=>{
    tool_details_modals.showModal();
    
    
}