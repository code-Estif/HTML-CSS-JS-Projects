const data = [
    {
      id:1,
      title:"Spiced Lentil Stew",
      category:"Dinner",
      image:"recipes/lentil.jpg",
      time:"40 mins",
      serves:4,
      ingredients:[
        "1 cup red lentils",
        "1 onion, chopped",
        "2 garlic cloves",
        "1 tsp turmeric",
        "2 cups vegetable stock"
      ],
      steps:[
        "Rinse lentils.",
        "Sauté onion and garlic.",
        "Add spices and lentils.",
        "Pour stock and simmer 20-25 mins."
      ]
    },
    {
      id:2,
      title:"Avocado Toast",
      category:"Breakfast",
      image:"recipes/avocado.jpg",
      time:"10 mins",
      serves:1,
      ingredients:[
        "1 slice wholegrain bread",
        "1/2 ripe avocado",
        "Salt and pepper",
        "Chili flakes (optional)"
      ],
      steps:[
        "Toast the bread.",
        "Mash avocado with salt.",
        "Spread on toast and sprinkle flakes."
      ]
    },
    {
      id:3,
      title:"Tomato Basil Pasta",
      category:"Lunch",
      image:"recipes/pasta.jpg",
      time:"25 mins",
      serves:2,
      ingredients:[
        "200g pasta",
        "2 cups cherry tomatoes",
        "1 handful basil",
        "2 tbsp olive oil"
      ],
      steps:[
        "Cook pasta.",
        "Sauté tomatoes in oil.",
        "Toss pasta with tomatoes and basil."
      ]
    },
    {
      id:4,
      title:"Chocolate Banana Smoothie",
      category:"Snack",
      image:"recipes/smoothie.jpg",
      time:"5 mins",
      serves:1,
      ingredients:[
        "1 banana",
        "1 cup milk",
        "1 tbsp cocoa powder",
        "Ice"
      ],
      steps:[
        "Combine all in blender.",
        "Blend until smooth."
      ]
    }
  ];
  
  const cardsEl = document.getElementById('cards');
  const filterSelect = document.getElementById('filterSelect');
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearBtn');
  const gridSection = document.getElementById('gridSection');
  const detailSection = document.getElementById('detailSection');
  const backBtn = document.getElementById('backBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  const detailTitle = document.getElementById('detailTitle');
  const detailImage = document.getElementById('detailImage');
  const detailCaption = document.getElementById('detailCaption');
  const meta = document.getElementById('meta');
  const timeEl = document.getElementById('time');
  const servesEl = document.getElementById('serves');
  const catEl = document.getElementById('cat');
  const ingredientsList = document.getElementById('ingredientsList');
  const stepsList = document.getElementById('stepsList');
  
  let currentIndex = 0;
  let filtered = [...data];
  
  function populateFilters(){
    const cats = Array.from(new Set(data.map(r=>r.category)));
    cats.forEach(c=>{
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      filterSelect.appendChild(opt);
    });
  }
  
  function renderCards(list){
    cardsEl.innerHTML = '';
    if(list.length===0){
      cardsEl.innerHTML = '<li style="padding:20px;color:#6b7280">No recipes found.</li>';
      return;
    }
    list.forEach((r,idx)=>{
      const li = document.createElement('li');
      li.className = 'card';
      li.tabIndex = 0;
      li.setAttribute('data-index', idx);
      li.innerHTML = `
        <figure>
          <img src="${r.image}" alt="${r.title}">
        </figure>
        <div class="card-body">
          <h3 class="title">${r.title}</h3>
          <p class="meta">${r.time} • ${r.serves} servings</p>
          <div class="tags"><span class="tag">${r.category}</span></div>
        </div>
      `;
      li.addEventListener('click', ()=> openDetail(idx));
      li.addEventListener('keydown', (e)=> { if(e.key==='Enter') openDetail(idx) });
      cardsEl.appendChild(li);
    });
  }
  
  function openDetail(idx){
    currentIndex = idx;
    const item = filtered[idx];
    detailTitle.textContent = item.title;
    detailImage.src = item.image;
    detailImage.alt = item.title;
    detailCaption.textContent = item.title;
    meta.textContent = `${item.time} • ${item.serves} servings`;
    timeEl.textContent = item.time;
    servesEl.textContent = item.serves;
    catEl.textContent = item.category;
    ingredientsList.innerHTML = item.ingredients.map(i=>`<li>${i}</li>`).join('');
    stepsList.innerHTML = item.steps.map(s=>`<li>${s}</li>`).join('');
    gridSection.classList.add('hidden');
    detailSection.classList.remove('hidden');
    detailSection.setAttribute('aria-hidden','false');
    window.scrollTo({top:0,behavior:'smooth'});
  }
  
  function goBack(){
    detailSection.classList.add('hidden');
    gridSection.classList.remove('hidden');
    detailSection.setAttribute('aria-hidden','true');
  }
  
  function showNext(){
    if(filtered.length===0) return;
    currentIndex = (currentIndex + 1) % filtered.length;
    openDetail(currentIndex);
  }
  
  function showPrev(){
    if(filtered.length===0) return;
    currentIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    openDetail(currentIndex);
  }
  
  function applyFilters(){
    const q = searchInput.value.trim().toLowerCase();
    const cat = filterSelect.value;
    filtered = data.filter(r=>{
      const matchQ = r.title.toLowerCase().includes(q) || r.ingredients.join(' ').toLowerCase().includes(q);
      const matchCat = cat==='all' ? true : r.category===cat;
      return matchQ && matchCat;
    });
    renderCards(filtered);
  }
  
  filterSelect.addEventListener('change', ()=> { applyFilters(); });
  searchInput.addEventListener('input', ()=> { applyFilters(); });
  clearBtn.addEventListener('click', ()=> { searchInput.value=''; filterSelect.value='all'; applyFilters(); });
  backBtn.addEventListener('click', goBack);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  
  populateFilters();
  renderCards(filtered);
  