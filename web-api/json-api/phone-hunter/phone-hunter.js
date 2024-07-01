
const loadPhone = async ()=>{
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
    const res = await fetch(url)
    const data = await res.json()
    const phones = data.data;

    displayPhones(phones)
    
    
 
}

const displayPhones = (phones) =>{
    const phonesContainer = document.getElementById('phones-container');

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
}
