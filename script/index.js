const loadAllPlant = (e = "") => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((json) => diplayLoadPlant(json.plants));

  if (e.tagName == "BUTTON") {
    const elements = e.parentNode.children;

    for (const element of elements) {
      element.classList.remove("active");
    }

    e.classList.add("active");
  }
};

const loadPlantDetail = async(id) =>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  
  const res = await fetch(url);
  const details = await res.json();
  displayPlantsDetails(details.plants);
  
};


const displayPlantsDetails = (plant) =>{
  console.log(plant);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML = `
  <div>
            <h2 class="text-2xl font-bold"> ${plant.name}</h2>
            <img class="mt-5 w-80 h-50"  src="${plant.image}">
            <h3 class="text-xl font-semibold mt-2">${plant.category}</h3>
            <h4 class="tex-xl font-bold">${plant.price}</h4>
            <p class="p-2">${plant.description} </p>
          </div>
  `
  document.getElementById("plant_modal").showModal();
    
  

};


const diplayLoadPlant = (plants) => {
  const allplanContainer = document.getElementById("allPlantContainer");
  allplanContainer.innerHTML = "";

  for (let plant of plants) {
    allplanContainer.innerHTML += `
           
      <div class="bg-white rounded-lg  shadow-lg p-2 md:w-60 sm:full  ">
        <img class="h-30 w-100 rounded-lg"  src="${plant.image}"> 
        <h2 id="loadPlantDetail()" onclick="loadPlantDetail(${plant.id})" class="text-xl font-bold">${plant.name}</h2>
        <p  class=" whitespace-normal p-5 ">${plant.description}</p>
          <div class="flex justify-between mt-2">
            <p class="font-semibold">${plant.category}</p>
            <p class="font-semibold  ">${plant.price}</p>
            </div>
            <button  class="bg-green-900 p-3 rounded-2xl sm:w-3/4   md:w-full  mt-2 text-white hover:bg-sky-300">Add to Cart</button>
          </div>
       
      `;
  }
};

loadAllPlant();









const loadCategories = () => {
  fetch(" https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displyCategory(json.categories));
};

const displyCategory = (categories) => {
  const categoryContainer = document.getElementById("category-level");

  categoryContainer.innerHTML = `<button onclick="loadAllPlant(this)" class="btnl active grid grid-cols-1 ">All Plants</button>`;

  for (category of categories) {
    categoryContainer.innerHTML += `<button onclick="loadLevelCard(${category.id},this)" class="btnt">${category.category_name}</button>
    `;
  }
};

loadCategories();

const loadLevelCard = (id, e) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => diplayLoadPlant(data.plants));

  const elements = e.parentNode.children;

  for (const element of elements) {
    element.classList.remove("active");
  }

  e.classList.add("active");
};




// Default load







 
































































































    
  





             




                                                                








  


