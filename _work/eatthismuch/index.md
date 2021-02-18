---
layout: project
order: "3"

slug: eatthismuch
project: Eat This Much
title: Eat This Much
client: Eat This Much
client-short: Eat This Much
subtitle: Automatic, Custom Meal Plans.
details:
    - UI & UX Design
    - Native app & Web&nbsp;app
    - Design System
    - 2018-2019
background-color: "rgba(237,233,230,1)"
foreground-color: "rgba(45,48,60,1)"
logo-color: "rgba(45,48,60,1)"
highlight-color: "rgba(240,117,79,1)"

header-under: "background-image: url('/work/eatthismuch/etm-header-bg@2x.jpg')"

featured: 
    - artifact: 
      url: 'etm-featured-mealplan'
      imagetype: png
      type: phone-x
      title: 'Weekly Meal Plan'
      id: 'etm-mealplan'
      alt: 'A screenshot of a meal plan for the Eat This Much mobile app'
      speed: '-1'
    - artifact: 
      url: 'etm-featured-editmealtype'
      imagetype: png
      type: phone-x
      title: 'Meal Settings'
      id: 'etm-mealsettings'
      alt: 'A screenshot of the meal settings for the Eat This Much mobile app'
      speed: '1'
    #   offsetX: '5%'
    - artifact: 
      url: 'etm-featured-primarydiet'
      imagetype: png
      type: phone-x
      title: 'Diet Options'
      id: 'etm-dietoptions'
      alt: 'A screenshot of the primary diet options for the Eat This Much mobile app'
      speed: '3'

---
<div class="container project-container">
<div class="header-over">
    {% include project-image.html alt="Eat This Much featured image" image="eatthismuch-header-over" type="png" %}
</div>
<div class="grid-row project-intro grid">
    <div class="grid-row-headline">
        <p>Eat This Much</p>
        <h1>Eat This Much is a meal planning service that generates a personalized weekly plan based on your diet, fitness goals, food preferences, and even what you already have in your&nbsp;pantry.</h1>
    </div>
</div>
<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Challenge</h3>
        <p>Eat This Much is feature-rich and UI-heavy. The existing mobile app was packed with features, but it had an unclear information architecture, and a lot of unintuitive interaction patterns:</p>
        <p> {% include project-image.html alt="The old Eat Ths Much app" image="etm-oldapp" type="jpg" %}</p>
        <h3>Objective</h3>
        <p>I worked with the the team at Eat This Much to redesign much of the existing web app, and to do a full redesign to improve the mobile app, with a goal to maintain feature parity between the two. This case study is specific to the work done for the mobile app.</p>
    </div>
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Foundation</h3>
        <h2>Foundations of a design system</h2>
        <p>For a large project like this, it is critical to maintain consistency and allow for quick iteration across hundreds of screens and multiple files. I adopted a DRY approach and established an atomic system of styles and components which can be combined in various ways to make a wide variety of UI. Every bit of UI is built with these basic building blocks.</p>
    </div>
</div>

<div class="full-width">
    {% include project-image.html alt="A sample of components" image="etm-components" type="png" size="100vw" %}
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Meal Plan</h3>
        <h2>The meal plan</h2>
        <p>The meal plan is the central feature of Eat This Much. This is where users find what they’ll be eating for each meal over the next week.</p>
        <p>The Today tab is all about what is planned for today, while the Meal Plan tab is a more compact overview of the whole week, focusing more on planning and comparing days.</p>
    </div>
</div>

<div class="full-width mobile-slide">
    {% include project-image.html alt="Meal plan" image="etm-mealplan" type="jpg" size="100vw" %}
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Fine Tune</h3>
        <h2>Fine-tuning the generator to individual tastes</h2>
        <p>Meal plans are generated based on personalized settings, but users often like to do a little editing to finalize their menu for the week.</p>
        <p>These manual overrides are empowered in a number of ways:</p>
        <h3>1—Regenerate</h3>
        <p>Opt to regenerate parts of the plan at any level, from the entire week, all the way down to a single recipe. Regenerating is fairly smart about what it picks, and it is nearly instant, but it doesn't offer much control.</p>
        <p>{% include project-image.html alt="Regenerate by week, day, meal or recipe" image="etm-regenerate-levels" type="png" %}</p>
        <h3>2—Swap</h3>
        <p>To give users a little more control while still making it quick and easy to modify the plan, we designed a menu where the user can choose a new meal from a small set of options. These options are framed based on attributes like "Faster", "Cheaper", "More Unique", "Healthier", and more. The idea being, if a user is uninterested in the current meal, maybe seeing that a new meal is healthier or cheaper will help make the decision easier.</p>
        <p>{% include project-image.html alt="Swap meal menu" image="etm-swap" type="jpg" %}</p>
        <h3>3—Add</h3>
        <p>You can also manually override the plan by finding a specific recipe and scheduling it for a future meal, which brings us to…</p>
    </div>
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Search & Browse</h3>
        <h2>Foods, recipes, and collections.</h2>
        <h3>Foods</h3>
        <p>Foods are the basic ingredients that make up a recipe. A banana, or yogurt, for example.</p>
        <h3>Recipes</h3>
        <p>Recipes make up your meal plan. A recipe can be scheduled for a future meal, set to repeat, or be added to a collection.</p>
        <h3>Collections</h3>
        <p>Collections are groups of recipes - kind of like a playlist. They can be added to a meal type, such as "Breakfast", and future breakfasts will be generated from recipes in the attached collection. Add that ”High Protein Breakfast Ideas” collection to breakfast if you’re looking to start the day off with some energy.</p>
    </div>
</div>

<div class="full-width mb-6 mobile-slide">
    {% include project-image.html alt="Search and Browse part 1" image="etm-browse-01" type="jpg" size="100vw" %}
    {% include project-image.html alt="Search and Browse part 2" image="etm-browse-02" type="jpg" size="100vw" %}
    {% include project-image.html alt="Search and Browse part 3" image="etm-browse-03" type="jpg" size="100vw" %}
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Create new Recipes</h3>
        <h2>Create and customize recipes</h2>
        <p>If users have some favorite recipes they can't find in the database, they can add them here, adding photos, detailed instructions, and all of the necessary ingredients.</p>
        <p>Alternatively, any recipe can be copied and edited to suit an individual users needs. Maybe you love that Syrian Spaghetti, but want to use gluten-free pasta instead. Customizing a recipe will adjust the nutrition tracking to accurately reflect any substitutions.</p>
    </div>
</div>

<div class="full-width mobile-slide">
    {% include project-image.html alt="Create Recipe" image="etm-createrecipe" type="jpg" size="100vw" %}
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>User Profile</h3>
        <h2>Extensive Personalization</h2>
        <p>Whether a user is a macro-obsessed bodybuilder, or they just want to cook more, their meal plan generator can be endlessly tuned and tweaked to fit their specific needs.</p>
        <p>Select a primary diet, exclude common allergens, fine-tune nutrition targets, schedule as many breakfasts as you want, add cheat meals, recovery meals, or auto-track that daily Oatmilk Latte.</p>
    </div>
</div>
<!-- TODO: Show more of the flow and IA here. Hard to parse from the screenshots. -->
<div class="full-width mb-6 mobile-slide">
    {% include project-image.html alt="Eat This Much Preferences" image="etm-preferences-01" type="jpg" size="100vw" %}
     {% include project-image.html alt="Eat This Much Preferences" image="etm-preferences-02" type="jpg" size="100vw" %}
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
    <!-- TODO: finish writing this -->
        <p>A closing statement about the project should go here. It doesnt have to be very long, just something to help emphasize that this is the end of the case study.</p>
    </div>
</div>

<div class="grid-row grid">
    <div class="project-credits">
        <h3>Credits</h3>
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