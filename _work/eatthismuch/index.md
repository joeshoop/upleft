---
layout: project
order: "3"

slug: eatthismuch
project: Eat This Much
title: Eat This Much
client: Eat This Much
subtitle: Automatic, custom meal&nbsp;plans
details:
    - UI & UX Design
    - Native app & Web&nbsp;app
    - Design System
    - 2018-2019
background-color: "rgba(237,233,230,1)"
foreground-color: "rgba(45,48,60,1)"
logo-color: "rgba(45,48,60,1)"
highlight-color: "rgba(240,117,79,1)"

header-under: "background: url('/work/eatthismuch/etm-header-bg@2x.jpg') center center no-repeat; background-size:cover;"

featured: 
    - artifact: 
      url: 'etm-mealplan-featured@2x.png'
      type: phone-x
      title: 'Weekly Meal Plan'
      id: 'etm-mealplan'
      alt: 'A screenshot of a meal plan for the Eat This Much mobile app'
      speed: '-1'
    - artifact: 
      url: 'etm-editmealtype@2x.png'
      type: phone-x
      title: 'Meal Settings'
      id: 'etm-mealsettings'
      alt: 'A screenshot of the meal settings for the Eat This Much mobile app'
      speed: '1'
    #   offsetX: '5%'
    - artifact: 
      url: 'etm-primarydiet@2x.png'
      type: phone-x
      title: 'Diet Options'
      id: 'etm-dietoptions'
      alt: 'A screenshot of the primary diet options for the Eat This Much mobile app'
      speed: '3'

---
<div class="container project-container">

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Overview</h3></div>
    <div class="project-row-headline">
        <h2>Eat This Much is an automated meal planning service that generates weekly meal plans unique to your diet, fitness goals, food preferences, and even what you already have in your&nbsp;pantry.</h2>
    </div>
</div>
<div class="project-row grid">
    <div class="project-row-copy">
        <h3>Challenge</h3>
        <p>Eat This Much is feature-rich and UI-heavy. The existing mobile app was packed with features, but it had an unrefined look, an unclear information architecture, and a lot of unintuitive interaction patterns:</p>
        <img src="/work/{{page.slug}}/etm-oldapp@2x.png" alt="The old Eat Ths Much app" />
        <h3>Objective</h3>
        <p>I worked with the the team at Eat This Much to redesign much of the existing web app, and to do a full redesign to improve the mobile app, with a goal to maintain feature parity between the two. This case study is specific to the work done for the mobile app.</p>
    </div>
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Foundation</h3></div>
    <div class="project-row-copy">
        <h2>Foundations of a design system</h2>
        <p>For a large project like this, it is critical to maintain consistency and allow for quick iteration across hundreds of screens and multiple files. I adopted a DRY approach and established an atomic system of styles and components which can be combined in various ways to make a wide variety of UI. Every bit of UI is built with these basic building blocks.</p>
    </div>
</div>

<div class="full-width">
    <img src="/work/{{page.slug}}/etm-components@2x.png" alt="A sample of components" />
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Meal Plan</h3></div>
    <div class="project-row-copy">
        <h2>You have a plan</h2>
        <p>The meal plan is the central feature of Eat This Much. This is where you find what you’ll be eating for each meal over the next week.</p>
        <p>The Today tab is all about what you’ll be eating today, while the Meal Plan tab is a more compact overview of your week, focusing more on planning and comparing days.</p>
    </div>
</div>

<div class="full-width">
    <img src="/work/{{page.slug}}/etm-mealplan@2x.png" />
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Fine Tune</h3></div>
    <div class="project-row-copy">
        <h2>Fine-tuning the generator to individual tastes</h2>
        <p>Meal plans are generated based on personalized settings, but users often like to do a little editing to finalize their menu for the week.</p>
        <p>These manual overrides are empowered in a number of ways:</p>
        <h3>1—Regenerate</h3>
        <p>Opt to regenerate parts of the plan at any level, from the entire week, all the way down to a single recipe. Regenerating is fairly smart about what it picks, and while it is nearly instant, it doesn't offer much control.</p>
        <p><img src="/work/{{page.slug}}/etm-regenerate-levels@2x.png" /></p>
        <h3>2—Swap</h3>
        <p>To give users a little more control while still prioritizing speed, we designed a menu where the user can choose a new meal from a small set of options. These options are framed based on attributes like "Faster", "Cheaper", "More Unique", "Healthier", and more. The idea being, if a user is uninterested in the current meal, maybe seeing that a new meal is healthier or cheaper will help make the decision easier.</p>
        <p><img src="/work/{{page.slug}}/etm-swap@2x.png" /></p>
        <h3>3—Add</h3>
        <p>Search or browse for a specific recipe, and schedule it for a future meal, or add it to a collection, which brings us to…</p>
    </div>
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Search & Browse</h3></div>
    <div class="project-row-copy">
        <h2>Search or browse for foods, recipes, and collections.</h2>
        <h3>Foods</h3>
        <p>Foods are the basic ingredients that make up a recipe. A banana, or yogurt, for example.</p>
        <h3>Recipes</h3>
        <p>Recipes can be scheduled for a future meal, set to repeat, or be added to a collection.</p>
        <h3>Collections</h3>
        <p>Collections can be added to a meal type, such as "Breakfast", and future breakfasts will be generated from recipes in that collection. Add that ”High Protein Breakfast Ideas” collection to breakfast if you’re looking to start the day off with some energy.</p>
    </div>
</div>

<div class="full-width mb-6">
    <img src="/work/{{page.slug}}/etm-browse-01@2x.png" />
</div>

<div class="full-width mb-6">
    <img src="/work/{{page.slug}}/etm-browse-02@2x.png" />
</div>

<div class="full-width">
    <img src="/work/{{page.slug}}/etm-browse-03@2x.png" />
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Create new Recipes</h3></div>
    <div class="project-row-copy">
        <h2>Create and customize recipes</h2>
        <p>If users have some favorite recipes they can't find in the database, they can add them here, adding photos, detailed instructions, and all of the necessary ingredients.</p>
        <p>Alternatively, any recipe can be copied and edited to suit an individual users needs. Maybe you love that Syrian Spaghetti, but want to use gluten-free pasta instead. Customizing a recipe will adjust the nutrition tracking to accurately reflect any substitutions.</p>
    </div>
</div>

<div class="full-width">
    <img src="/work/{{page.slug}}/etm-createrecipe@2x.png" />
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Profile</h3></div>
    <div class="project-row-copy">
        <h2>Extensive Personalization</h2>
        <p>Whether a user is a macro-obsessed bodybuilder, or they just want to cook more, their meal plan generator can be endlessly tuned and tweaked to fit their specific needs.</p>
        <p>Select a primary diet, exclude common allergens, fine-tune nutrition targets, schedule as many breakfasts as you want, add cheat meals, recovery meals, or auto-track that daily Oatmilk Latte.</p>
    </div>
</div>

<div class="full-width mb-6">
    <img src="/work/{{page.slug}}/etm-preferences-01@2x.png" />
</div>

<div class="full-width">
    <img src="/work/{{page.slug}}/etm-preferences-02@2x.png" />
</div>

<div class="project-row grid">
    <div class="project-row-credits">
        <p>A closing statement about the project should go here. It doesnt have to be very long, just something to help emphasize that this is the end of the case study.</p>
    </div>
</div>

<div class="project-row grid">
    <div class="project-row-subtitle"><h3>Credits</h3></div>
    <div class="project-row-credits">
        <ul class="credits">
            <li class="credit">
                <p class="name">Louis DeMenthon</p>
                <p class="role">Project Owner</p>
            </li>
            <li class="credit">
                <p class="name">Andy Fitzgerald</p>
                <p class="role">Information Architecture</p>
            </li>
            <li class="credit">
                <p class="name">Joe Shoop</p>
                <p class="role">Visual & UX Design</p>
            </li>
        </ul>
    </div>
</div>

</div>