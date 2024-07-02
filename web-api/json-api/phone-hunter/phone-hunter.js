
const searchText = ()=>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    loadPhone(searchText)

    searchField.value = '';
}

const loadPhone = async (searchText)=>{
    loadingSpinner(true)

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url)
    const data = await res.json()
    const phones = data.data;

    displayPhones(phones)
    
    
 
}

const displayPhones = (phones) =>{
    const phonesContainer = document.getElementById('phones-container');
    const showAllBtn = document.getElementById('showAll-btn');

    // clear previous phones from phone container
    phonesContainer.innerText = '';

    //conditional showAll button
    if(phones.length > 12){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }

    //set show data limit 12
    phones = phones.slice(0, 12);
    
    //loop phones and get single phones
    phones.forEach((phone) =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('card','bg-base-100','w-96','shadow-xl')
        phoneDiv.innerHTML = `
            <figure class="px-10 pt-10">
                      <img
                        src="${phone.image}"
                        alt="phone"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions">
                        <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Details</button>
                      </div>
                    </div>
        `
        
        phonesContainer.appendChild(phoneDiv);
    })
    loadingSpinner(false);
}

//show details button
const showDetails = async (id)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const detailsData = data.data;

   
    handleModals(detailsData);
    
}
//toggle modals
const handleModals = (data)=>{
    console.log(data)
    phone_details_modals.showModal()
    
    const modalsContainer = document.getElementById('modals-container');
    modalsContainer.innerHTML = `
        <h3 class="text-lg font-bold">${data.name}</h3>
        <p class="py-4">Specificaltion:</p>
        <p class="py-4">Display:</p>
        <p class="py-4">Display:</p>
        <p class="py-4">Display:</p>
        <p class="py-4">Display:</p>

    `
   

}



//toggle loading spinner
const loadingSpinner = (isLoading)=>{
    const spinner = document.getElementById('loading-spinner')
    if(isLoading){
        spinner.classList.remove('hidden')
    }
    else{
        spinner.classList.add('hidden')
    }
}
// loadingSpinner(true);