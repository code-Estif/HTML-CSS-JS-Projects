const sampleRecipes = [
    {
        id: 1,
        name: "Classic Pancakes",
        category: "Breakfast",
        cookTime: 20,
        description: "Fluffy and delicious pancakes perfect for a weekend breakfast.",
        ingredients: "1 cup all-purpose flour\n2 tablespoons sugar\n2 teaspoons baking powder\n1/2 teaspoon salt\n1 cup milk\n1 large egg\n2 tablespoons melted butter",
        instructions: "Mix dry ingredients in a bowl.\nWhisk milk, egg, and melted butter in another bowl.\nCombine wet and dry ingredients.\nCook on a greased griddle over medium heat.\nFlip when bubbles form on the surface.",
        imageUrl: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80"
    },
    {
        id: 2,
        name: "Vegetable Stir Fry",
        category: "Dinner",
        cookTime: 25,
        description: "A quick and healthy vegetable stir fry with a savory sauce.",
        ingredients: "2 cups mixed vegetables (broccoli, bell peppers, carrots)\n2 cloves garlic, minced\n1 tablespoon ginger, grated\n2 tablespoons soy sauce\n1 tablespoon sesame oil\n1 tablespoon olive oil\n1 teaspoon honey",
        instructions: "Heat oils in a wok or large pan.\nAdd garlic and ginger, stir for 30 seconds.\nAdd vegetables and stir fry for 5-7 minutes.\nAdd soy sauce and honey, cook for another 2 minutes.\nServe hot with rice or noodles.",
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
    },
    {
        id: 3,
        name: "Chocolate Chip Cookies",
        category: "Dessert",
        cookTime: 15,
        description: "Classic chocolate chip cookies that are crispy on the outside and chewy on the inside.",
        ingredients: "2 1/4 cups all-purpose flour\n1 tsp baking soda\n1 tsp salt\n1 cup butter, softened\n3/4 cup granulated sugar\n3/4 cup packed brown sugar\n2 large eggs\n2 tsp vanilla extract\n2 cups chocolate chips",
        instructions: "Preheat oven to 375°F (190°C).\nCombine flour, baking soda, and salt in a bowl.\nIn another bowl, beat butter and sugars until creamy.\nAdd eggs and vanilla, mix well.\nGradually add flour mixture, then stir in chocolate chips.\nDrop by rounded tablespoons onto ungreased baking sheets.\nBake for 9-11 minutes or until golden brown.",
        imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        name: "Quinoa Salad Bowl",
        category: "Lunch",
        cookTime: 15,
        description: "A nutrient-packed quinoa bowl with fresh vegetables and a light lemon vinaigrette.",
        ingredients: "1 cup cooked quinoa\n1/2 cucumber, diced\n1/2 red bell pepper, diced\n1/4 cup red onion, finely chopped\n1/2 cup chickpeas, drained\n1/4 cup feta cheese, crumbled\n2 tbsp lemon juice\n1 tbsp olive oil\nSalt and pepper to taste",
        instructions: "In a large bowl, combine cooked quinoa, cucumber, bell pepper, onion, and chickpeas.\nIn a small bowl, whisk together lemon juice and olive oil.\nDrizzle dressing over the salad and toss to coat.\nTop with feta cheese and season with salt and pepper.\nServe chilled or at room temperature.",
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 5,
        name: "Berry Smoothie Bowl",
        category: "Breakfast",
        cookTime: 10,
        description: "A thick and creamy smoothie bowl topped with fresh fruit and nuts.",
        ingredients: "1 cup frozen mixed berries\n1 banana, sliced\n1/2 cup almond milk\n1/2 cup Greek yogurt\nToppings: sliced strawberries, granola, chia seeds, honey",
        instructions: "Blend frozen berries, banana, almond milk, and Greek yogurt until smooth and thick.\nPour the smoothie into a bowl.\nArrange toppings on top in neat rows or patterns.\nDrizzle with honey if desired.\nServe immediately while cold.",
        imageUrl: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=1080"
    },
    {
        id: 6,
        name: "Roasted Tomato Soup",
        category: "Lunch",
        cookTime: 40,
        description: "Warm and comforting tomato soup made from fresh roasted tomatoes and garlic.",
        ingredients: "2 lbs ripe tomatoes, halved\n1 head garlic, top removed\n2 tbsp olive oil\n1 onion, chopped\n2 cups vegetable broth\n1/4 cup fresh basil leaves\nSalt and pepper to taste",
        instructions: "Preheat oven to 400°F (200°C).\nPlace tomatoes and garlic on a baking sheet, drizzle with olive oil, and roast for 30 minutes.\nSqueeze roasted garlic out of its skin into a pot.\nAdd roasted tomatoes, onion, and broth to the pot.\nSimmer for 10 minutes, then blend until smooth.\nStir in fresh basil and season with salt and pepper.",
        imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1080"
    },
    {
        id: 7,
        name: "Garlic Butter Shrimp",
        category: "Dinner",
        cookTime: 15,
        description: "Succulent shrimp sautéed in a rich garlic butter sauce with lemon and parsley.",
        ingredients: "1 lb large shrimp, peeled and deveined\n4 tbsp butter\n4 cloves garlic, minced\n1 tsp red pepper flakes\n1 tbsp lemon juice\n2 tbsp fresh parsley, chopped\nSalt and pepper to taste",
        instructions: "Melt butter in a large skillet over medium-high heat.\nAdd garlic and red pepper flakes, cook for 1 minute until fragrant.\nAdd shrimp and cook until pink and opaque (about 2-3 minutes per side).\nStir in lemon juice and parsley.\nSeason with salt and pepper and serve immediately.",
        imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        id: 8,
        name: "Avocado Toast with Egg",
        category: "Breakfast",
        cookTime: 10,
        description: "Crispy toast topped with mashed avocado and a perfectly poached egg.",
        ingredients: "2 slices sourdough bread\n1 ripe avocado\n2 eggs\n1 tsp lemon juice\nRed pepper flakes, salt, and pepper\nOptional: microgreens for garnish",
        instructions: "Toast the bread until golden brown.\nMash avocado with lemon juice, salt, and pepper in a small bowl.\nPoach or fry the eggs to your preference.\nSpread avocado mash on the toast.\nTop with the eggs and sprinkle with red pepper flakes.",
        imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
        id: 9,
        name: "Iced Caramel Macchiato",
        category: "Beverage",
        cookTime: 5,
        description: "A sweet and refreshing iced coffee drink with layers of milk, espresso, and caramel.",
        ingredients: "1 cup milk (any kind)\n2 shots espresso (or 1/2 cup strong brewed coffee)\n1 tbsp vanilla syrup\n2 tbsp caramel sauce\nIce cubes",
        instructions: "Fill a tall glass with ice cubes.\nAdd vanilla syrup and milk to the glass.\nSlowly pour espresso over the milk to create layers.\nDrizzle caramel sauce on top.\nStir before drinking.",
        imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
        id: 10,
        name: "Healthy Fruit Skewers",
        category: "Snack",
        cookTime: 15,
        description: "Colorful and fun fruit skewers served with a light honey-lime dip.",
        ingredients: "1 cup strawberries, halved\n1 cup pineapple chunks\n1 cup grapes\n1 cup melon balls\nWooden skewers\nDip: 1/2 cup Greek yogurt, 1 tbsp honey, 1 tsp lime zest",
        instructions: "Thread the fruit onto wooden skewers in an alternating pattern.\nIn a small bowl, mix yogurt, honey, and lime zest for the dip.\nArrange skewers on a platter.\nServe immediately with the yogurt dip.",
        imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
        id: 11,
        name: "Tiramisu Cups",
        category: "Dessert",
        cookTime: 30,
        description: "Individual servings of classic Italian tiramisu with coffee-soaked ladyfingers and mascarpone.",
        ingredients: "20 ladyfinger cookies\n1 cup strong coffee, cooled\n1 cup mascarpone cheese\n1/2 cup heavy cream\n1/4 cup sugar\n1 tsp vanilla extract\nCocoa powder for dusting",
        instructions: "Whip heavy cream with sugar and vanilla until stiff peaks form.\nFold in the mascarpone cheese until smooth.\nDip ladyfingers quickly into the coffee (don't soak too long).\nLayer dipped ladyfingers in the bottom of small cups or glasses.\nTop with a layer of mascarpone mixture. Repeat layers.\nRefrigerate for at least 2 hours. Dust with cocoa powder before serving.",
        imageUrl: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    },
    {
        id: 12,
        name: "Refreshing Mint Lemonade",
        category: "Beverage",
        cookTime: 10,
        description: "A cool and zesty lemonade blended with fresh mint and lots of ice.",
        ingredients: "1/2 cup lemon juice\n1/3 cup sugar (adjust to taste)\n2 cups water\n1/4 cup fresh mint leaves\nIce cubes\nLemon slices for garnish",
        instructions: "Combine water and sugar in a pitcher and stir until sugar dissolves.\nAdd lemon juice and mint leaves.\nFor a frozen version, blend all ingredients with ice.\nOtherwise, serve over ice in glasses.\nGarnish with lemon slices and mint sprigs.",
        imageUrl: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
];
const recipesContainer = document.getElementById('recipesContainer');
const emptyState = document.getElementById('emptyState');
const recipeModal = document.getElementById('recipeModal');
const detailModal = document.getElementById('detailModal');
const recipeForm = document.getElementById('recipeForm');
const addRecipeBtn = document.getElementById('addRecipeBtn');
const closeModal = document.getElementById('closeModal');
const closeDetailModal = document.getElementById('closeDetailModal');
const cancelBtn = document.getElementById('cancelBtn');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const modalTitle = document.getElementById('modalTitle');
const recipeIdInput = document.getElementById('recipeId');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

document.addEventListener('DOMContentLoaded', function () {
    loadRecipes();
    setupEventListeners();
    initializeTheme();
});

function setupEventListeners() {
    addRecipeBtn.addEventListener('click', openAddModal);
    closeModal.addEventListener('click', closeRecipeModal);
    closeDetailModal.addEventListener('click', closeDetailModalFunc);
    cancelBtn.addEventListener('click', closeRecipeModal);
    recipeForm.addEventListener('submit', saveRecipe);
    searchInput.addEventListener('input', filterRecipes);
    categoryFilter.addEventListener('change', filterRecipes);
    themeToggle.addEventListener('click', toggleTheme);

    window.addEventListener('click', function (event) {
        if (event.target === recipeModal) {
            closeRecipeModal();
        }
        if (event.target === detailModal) {
            closeDetailModalFunc();
        }
    });
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('recipeBookTheme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
    } else if (systemPrefersDark) {
        body.setAttribute('data-theme', 'dark');
    }

    updateThemeIcon();
}

function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('recipeBookTheme', newTheme);

    updateThemeIcon();
}

function updateThemeIcon() {
    const currentTheme = body.getAttribute('data-theme');
    const icon = themeToggle.querySelector('i');

    if (currentTheme === 'light') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

function loadRecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    if (recipes.length === 0) {
        recipes = sampleRecipes;
        localStorage.setItem('recipes', JSON.stringify(recipes));
    } else {
        let updated = false;
        sampleRecipes.forEach(sample => {
            const existingIndex = recipes.findIndex(r => r.name === sample.name);
            if (existingIndex === -1) {
                recipes.push(sample);
                updated = true;
            } else {
                // Update existing default items with fixed/better image URLs
                if (recipes[existingIndex].imageUrl !== sample.imageUrl) {
                    recipes[existingIndex].imageUrl = sample.imageUrl;
                    updated = true;
                }
            }
        });

        if (updated) {
            // Update IDs to be unique after merging
            recipes.forEach((r, index) => r.id = index + 1);
            localStorage.setItem('recipes', JSON.stringify(recipes));
        }
    }

    displayRecipes(recipes);
}

function displayRecipes(recipes) {
    if (recipes.length === 0) {
        recipesContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    recipesContainer.style.display = 'grid';
    emptyState.style.display = 'none';

    recipesContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
                    <div class="recipe-image" style="background-image: url('${recipe.imageUrl || 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'}')">
                        <span class="recipe-category">${recipe.category}</span>
                    </div>
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.name}</h3>
                        <div class="recipe-meta">
                            <span><i class="fas fa-clock"></i> ${recipe.cookTime} min</span>
                            <span><i class="fas fa-utensils"></i> ${recipe.category}</span>
                        </div>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="recipe-actions">
                            <button class="btn btn-primary view-recipe" data-id="${recipe.id}">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <button class="btn btn-warning edit-recipe" data-id="${recipe.id}">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="btn btn-danger delete-recipe" data-id="${recipe.id}">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                `;

        recipesContainer.appendChild(recipeCard);
    });

    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', function () {
            const recipeId = parseInt(this.getAttribute('data-id'));
            viewRecipe(recipeId);
        });
    });

    document.querySelectorAll('.edit-recipe').forEach(button => {
        button.addEventListener('click', function () {
            const recipeId = parseInt(this.getAttribute('data-id'));
            openEditModal(recipeId);
        });
    });

    document.querySelectorAll('.delete-recipe').forEach(button => {
        button.addEventListener('click', function () {
            const recipeId = parseInt(this.getAttribute('data-id'));
            deleteRecipe(recipeId);
        });
    });
}

function openAddModal() {
    modalTitle.textContent = 'Add New Recipe';
    recipeForm.reset();
    recipeIdInput.value = '';
    recipeModal.style.display = 'flex';
}

function openEditModal(recipeId) {
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    const recipe = recipes.find(r => r.id === recipeId);

    if (recipe) {
        modalTitle.textContent = 'Edit Recipe';
        recipeIdInput.value = recipe.id;
        document.getElementById('recipeName').value = recipe.name;
        document.getElementById('recipeCategory').value = recipe.category;
        document.getElementById('cookTime').value = recipe.cookTime;
        document.getElementById('recipeDescription').value = recipe.description;
        document.getElementById('ingredients').value = recipe.ingredients;
        document.getElementById('instructions').value = recipe.instructions;
        document.getElementById('imageUrl').value = recipe.imageUrl || '';

        recipeModal.style.display = 'flex';
    }
}
function closeRecipeModal() {
    recipeModal.style.display = 'none';
}

function closeDetailModalFunc() {
    detailModal.style.display = 'none';
}

function saveRecipe(e) {
    e.preventDefault();

    const recipes = JSON.parse(localStorage.getItem('recipes'));
    const recipeId = recipeIdInput.value;

    const recipeData = {
        name: document.getElementById('recipeName').value,
        category: document.getElementById('recipeCategory').value,
        cookTime: parseInt(document.getElementById('cookTime').value),
        description: document.getElementById('recipeDescription').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        imageUrl: document.getElementById('imageUrl').value
    };

    if (recipeId) {
        const index = recipes.findIndex(r => r.id === parseInt(recipeId));
        if (index !== -1) {
            recipes[index] = { ...recipes[index], ...recipeData };
        }
    } else {
        const newId = recipes.length > 0 ? Math.max(...recipes.map(r => r.id)) + 1 : 1;
        recipeData.id = newId;
        recipes.push(recipeData);
    }

    localStorage.setItem('recipes', JSON.stringify(recipes));
    loadRecipes();
    closeRecipeModal();
}

function viewRecipe(recipeId) {
    const recipes = JSON.parse(localStorage.getItem('recipes'));
    const recipe = recipes.find(r => r.id === recipeId);

    if (recipe) {
        document.getElementById('detailTitle').textContent = recipe.name;

        const ingredientsList = recipe.ingredients.split('\n').map(ingredient =>
            `<li>${ingredient}</li>`
        ).join('');

        const instructionsList = recipe.instructions.split('\n').map((instruction, index) =>
            `<li><strong>Step ${index + 1}:</strong> ${instruction}</li>`
        ).join('');

        document.getElementById('recipeDetailContent').innerHTML = `
                    <div class="recipe-image" style="height: 250px; background-image: url('${recipe.imageUrl || 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'}'); border-radius: 8px; margin-bottom: 20px;"></div>
                    
                    <div class="recipe-meta" style="margin-bottom: 20px;">
                        <span><i class="fas fa-clock"></i> ${recipe.cookTime} minutes</span>
                        <span><i class="fas fa-utensils"></i> ${recipe.category}</span>
                    </div>
                    
                    <p style="margin-bottom: 20px;">${recipe.description}</p>
                    
                    <div style="margin-bottom: 20px;">
                        <h3 style="color: var(--primary); margin-bottom: 10px;">Ingredients</h3>
                        <ul style="padding-left: 20px;">
                            ${ingredientsList}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 style="color: var(--primary); margin-bottom: 10px;">Instructions</h3>
                        <ol style="padding-left: 20px;">
                            ${instructionsList}
                        </ol>
                    </div>
                `;

        detailModal.style.display = 'flex';
    }
}

function deleteRecipe(recipeId) {
    if (confirm('Are you sure you want to delete this recipe?')) {
        let recipes = JSON.parse(localStorage.getItem('recipes'));
        recipes = recipes.filter(r => r.id !== recipeId);
        localStorage.setItem('recipes', JSON.stringify(recipes));
        loadRecipes();
    }
}

function filterRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    let recipes = JSON.parse(localStorage.getItem('recipes'));

    if (searchTerm) {
        recipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.toLowerCase().includes(searchTerm)
        );
    }

    if (category) {
        recipes = recipes.filter(recipe => recipe.category === category);
    }

    displayRecipes(recipes);
}