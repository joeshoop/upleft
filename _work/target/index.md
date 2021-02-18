---
layout: project

background-color: "rgba(255,255,255,1)"
foreground-color: "rgba(0,0,0,1)"
logo-color: "rgba(204,0,0,1)"
highlight-color: "rgba(204,0,0,1)"

slug: target
client: Target
title: Target
client-short: Target
subtitle: Browse the Weekly Ad.
details:
    - UI Design
    - iPad
    - iPhone
    - 2010-2011

header-under: "background-image: url('/work/target/target-header@2x.jpg')"

featured: 
  - artifact: 
    url: 'target-featured-ipad-icon'
    imagetype: jpg
    type: icon
    title: 'iPad icon'
    id: 'target-ipadappicon'
    alt: 'A skeuomorphic app icon with a white target logo on a red wood texture background.'
    speed: '3'
  - artifact: 
    url: 'target-featured-ipad-home'
    imagetype: jpg
    type: tablet
    title: 'iPad app'
    id: 'target-ipadapp'
    alt: 'A screenshot of the main menu of an iPad app for Target'
    speed: '-1'
  - artifact: 
    url: 'target-featured-iphone-drawer'
    imagetype: jpg
    type: phone-old
    title: 'iPhone app'
    id: 'target-iphoneapp'
    alt: 'A screenshot of the main menu of an iPhone app for Target'
    speed: '1'
---
<div class="container project-container">
<div class="header-over">
    {% include project-image.html alt="Target featured image" image="target-header-over" type="jpg" %}
</div>
<div class="grid-row project-intro grid">
    <div class="grid-row-headline">
    <p>Target</p>
    <h1>In 2010, shortly after Apple announced the original iPad, Target and Übermind* worked together to design and launch the first ever Target iPad app, and later, a redesign for&nbsp;iPhone.</h1>
    <p>I worked as the Visual Designer for these projects.</p>
    <p class="caption">*My Employer at the time, now known as Deloitte Digital</p>
    </div>
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>iPad App</h3>
        <h2>Target’s Weekly Ad on your iPad</h2>
        <h3>Challenge</h3>
        <p>At the time, Target was working on a big internal update to their product APIs, so we couldn’t design for anything related to browsing, product details, searching, or other things one would typically expect to see in an app for a retailer. Fortunately, there were some other APIs that were not impacted by these updates—namely the Weekly Ad, Store Details, and Seasonal Sales.</p>
        <h3>Objective</h3>
        <p>The plan for iPad was to recreate the Target Weekly Ad in the form of an app, complete with finger-tracked animated page turning, a coffee table metaphor, and all of the funky skeuomorphic design that was so popular at the time.</p>
    </div>
</div>

<div class="full-width">
    {% include project-image.html alt="Target iPad weekly ad cover" image="target-ipad-01" type="jpg" size="100vw" %}
    {% include project-image.html alt="Target iPad weekly ad open" image="target-ipad-02" type="jpg" size="100vw" %}
    {% include project-image.html alt="Target iPad list" image="target-ipad-03" type="jpg" size="100vw" %}
</div>

<div class="grid-row grid">
    <!-- <div class="grid-row-label"><h3>iPad App Icon</h3></div> -->
    <div class="grid-row-copy">
        <p>The iPad app icon echoed the heavily skeuomorphic style of the app, emphasizing the wood grain background of the app’s home screen with dramatic shading and Target’s classic color scheme.</p>
        <p>{% include project-image.html alt="Target iPad icon" image="target-ipad-icon" type="jpg" %}</p>
    </div>
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>Lessons Learned</h3>
        <h2>When skeuomorphism reigned</h2>
        <p>People much more eloquent than I have written at great length about the many very real issues with skeuomorphic design, which I experienced first-hand working on this project. It is fun to look back and remember how much time was spent trying to stick with the visual metaphors we had imposed on ourselves. Textures had to look realistic, shadows and highlights had to consistently appear to come from an imagined off-screen light source, and the objects on screen had to adhere to the physical properties of the real-world analogues we were emulating. These on-screen objects couldn’t pop into existence, scale up or down, or fade away, because that is not how things behave in the real world.</p>
        <p>I remember many conversations about how things should work - not because of any UX best practice, but because of the self-imposed limitations of maintaing the skeuomorphic metaphor.</p>
        <p>I have to laugh a bit at how silly much of this app looks now 10 years later. Yet, I still find that shadow, depth, and movement in interface design can help a great deal in directing attention, creating hierarchy, and establishing a sense of space. These things are best used as tools when appropriate, and with intention, rather than as a foundation to build upon.</p>
    </div>
</div>

<div class="grid-row grid">
    <div class="grid-row-copy">
        <h3>iPhone App</h3>
        <h2>A new Target app for iPhone, too</h2>
        <p>We also worked with Target to update and redesign their iPhone app, which included some new (at the time) features like shopping lists and a store finder. </p>
        <p>We designed a custom navigation drawer, which allowed for six sections, one more than would be possible on the standard iOS tab bar. At the time, hamburger menus were just starting to appear in other apps, but we felt that enforcing an upper limit of six was a better solution because it would help keep the app more focused.</p>
        <p>In 2012, the Target iPhone app earned <a href="https://www.webbyawards.com/press/press-releases/the-16th-annual-webby-awards-winners-announced-2/">a Webby award</a> for Best Shopping mobile app.</p>
    </div>
</div>

<div class="full-width mb-6 mobile-slide">
    {% include project-image.html alt="Target iPhone featured, navigation, and store finder" image="target-iphone-01" type="jpg" size="100vw" %}
    {% include project-image.html alt="Target iPhone list, electronics, and weekly ad" image="target-iphone-02" type="jpg" size="100vw" %}
</div>

</div>