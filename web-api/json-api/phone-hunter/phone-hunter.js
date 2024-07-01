
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
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `
        
        phonesContainer.appendChild(phoneDiv);
    })
    loadingSpinner(false);
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