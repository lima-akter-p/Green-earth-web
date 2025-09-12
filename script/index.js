
const loadAllPlant= () => {
fetch("https://openapi.programming-hero.com/api/plants")
.then((res) => res.json())
.then((json) => diplayLoadPlant(json.plants));
}






const  diplayLoadPlant = (plants) => { 
  const allplanContainer = document.getElementById("allPlantContainer") 
     allplanContainer.innerHTML = "";

     

      for(let plant of plants){
      console.log(plants);
      const tolDiv = document.createElement("div");
      
      tolDiv.innerHTML = `
            
            
            
           
            <div class="bg-white rounded-lg shadow-lg w-80 p-2 space-y-4">
              <img class="w-80 h-40"  src=${plant.image}  "./fruit tree.jpg"> 
              <h2 class="text-xl font-semibold">${plant.name}</h2>
              <p class="pe-2">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green
              ${plant.description}</p>
                <div class="flex gap-40 mt-2 text-center">
                <button onclick="loadLevelCard(${category.id})" class="btnt">
                  ${category.category_name} </button>
                 
                  <p class="font-semibold">${plant.price}</p>
                  </div>
                  <button class="bg-green-900 p-1 rounded-xl w-full mt-2 text-white hover:bg-sky-300">Add to Cart</button>
               </div>
       
      `;
      allplanContainer.append(tolDiv);
     
  }
};
    
  
   loadAllPlant();

const loadCategories = () => {
    fetch(" https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displyCategory(json.categories));
};

const loadLevelCard = (id) => {
  
  const url = `https://openapi.programming-hero.com/api/category/${id}`;

   fetch(url)
  .then(res => res.json())
  .then(data=>displyPlant (data.plants));
};


  
const displyPlant = (plants) => {
  const plantContainer = document.getElementById ("plant-container");
  plantContainer.innerHTML = "";
 plants.forEach((plant) => {
    console.log(plant);
    const card = document.createElement("div");
    
    
    card.innerHTML = `

          

          <div class="bg-white rounded-lg shadow-lg w-80 p-2 space-y-4">
              <img class="w-80 h-40"  src=${plant.image}  "./fruit tree.jpg"> 
              <h2 class="text-xl font-semibold">${plant.name}</h2>
              <p class="pe-2">A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green
              ${plant.description}</p>
                <div class="flex gap-40 mt-2 text-center">
                  <button class="bg-green-50 p-1 rounded-xl ">${plant.category}</button>
                  <p class="font-semibold">${plant.price}</p>
                </div>
                <button class="bg-green-900 p-1 rounded-xl w-full mt-2 text-white hover:bg-sky-300">Add to Cart</button>
            </div>


    `;
      plantContainer.append(card);
     

  });

};

//  category function


const displyCategory = (categories) => {
  const categoryContainer = document.getElementById("category-level");
   categoryContainer.innerHTML = "";
   for(category of categories){
     console.log(category);
     const namDiv = document.createElement("div");
    namDiv.innerHTML = `<button onclick="loadLevelCard(${category.id})" class="btnt">
       ${category.category_name} </button>
       
     


    `;
    categoryContainer.append(namDiv);
  }
}

loadCategories();




             




                                                                








  


