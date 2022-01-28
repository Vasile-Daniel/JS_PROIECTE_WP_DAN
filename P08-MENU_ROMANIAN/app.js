const menu = [
  {
    id: 1,
    title: "ciorba de perisoare",
    category: "ciorba",
    price: 4.99,
    img: "./images/ciorba1_perisoare.jpg",
    desc: `Romanian traditional sour soup with meatballs. Perishoare are meatballs usually made with minced pork meat, mixed with rice and spices and boiled in a ciorba. `,
  },
  {
    id: 2,
    title: "sarmale",
    category: "lunch",
    price: 10.99,
    img: "./images/principal1_sarmale.jpg",
    desc: `A type of dolma (comprising grapevine, cabbage, monk's rhubarb, kale or chard leaves rolled around a filling of grains (like bulgur or rice), minced meat, or both). `,
  },
  {
    id: 3,
    title: "Minciunele (Angel wings)",
    category: "desert",
    price: 3.99,
    img: "./images/desert1_minciunele.jpg",
    desc: `angel wings are a traditional sweet crisp pastry made out of dough that has been shaped into thin twisted ribbons, deep-fried and sprinkled with powdered sugar..`,
  },
  {
    id: 4,
    title: "ciorba de burta",
    category: "ciorba",
    price: 6.99,
    img: "./images/ciorba3_burta.jpg",
    desc: `Tripe soup, tripe stew or tripe chorba is a soup or stew made with tripe (cow or lamb/mutton stomach). `,
  },
  {
    id: 5,
    title: "piftie (Aspic)",
    category: "lunch",
    price: 22.99,
    img: "./images/principal2_piftie.jpg",
    desc: `savoury gelatin made with a meat stock or broth, set in a mold to encase other ingredients. These often include pieces of meat, seafood, vegetable, or eggs. `,
  },
  {
    id: 6,
    title: "sarailii",
    category: "desert",
    price: 7.99,
    img: "./images/desert2_sarailii.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Gulash",
    category: "ciorba",
    price: 8.99,
    img: "./images/ciorba2_gulas.jpg",
    desc: `Goulash is a soup or stew of meat and vegetables seasoned with paprika and other spices. Originating in Hungary, goulash is a common meal predominantly eaten in Central Europe.  `,
  },
  {
    id: 8,
    title: "Ciulama",
    category: "lunch",
    price: 12.99,
    img: "./images/principal3_ciulama.jpg",
    desc: `a dish of eastern origin consisting of chicken and or mushrooms cooked in white sauce (with flour). `,
  },
  {
    id: 9,
    title: "baclava",
    category: "desert",
    price: 9.99,
    img: "./images/desert3_baclava.jpg",
    desc: `Baklava is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey. It was one of the most popular sweet pastries of Ottoman cuisine.`,
  },
  {
    id: 10,
    title: "Grasă de Cotnari",
    category: "vinuri",
    price: 9.99,
    img: "./images/vin1_cotnari.jpg",
    desc: `Romanian wine variety associated with the Cotnari wine region, in Iași County (historical region of Moldavia), where it has been grown ever since the rule of Prince Stephen the Great (1457–1504).`,
  },
  {
    id: 11,
    title: "Jidvei",
    category: "vinuri",
    price: 9.99,
    img: "./images/vin2_jidvei.jpg",
    desc: `Jidvei wines are nurtured in Romania, within the Târnave wine region, along the two Târnave rivers: Târnave Mica and Târnava Mare. The Târnave region is situated in Jidvei, Alba County..`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll('.filter-btn');

// load items 
window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menu);
});


// filter items 
filterBtn.forEach(function(btn){
btn.addEventListener('click', function(e){
  const category = e.currentTarget.dataset.id; 
  console.log(e.currentTarget.dataset.id);
  const menuCategory = menu.filter(function(menuItem){
    if(menuItem.category === category){
          return menuItem;
    }
  });
  // console.log(menuCategory);
  if (category === 'all'){
    displayMenuItems(menu);
  }
  else {
    displayMenuItems(menuCategory);
  }
});
});



function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
      // console.log(item);
      return `<article class="menu-item">
                  <img src= ${item.img} class = "photo" alt=${item.title}>
                  <div class = "item-info">
                    <header> 
                        <h4> ${item.title} </h4>
                        <h4 class="price"> £${item.price} </h4>
                    </header>
                    <p class = "item-text"> ${item.desc}</p>
                  </div>
              </article>`; 
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}