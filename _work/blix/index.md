---
layout: project
order: "4"

background-color: "rgba(255,85,0,1)"
foreground-color: "rgba(255,255,255,1)"
logo-color: "rgba(255,85,0,1)"
highlight-color: "rgba(255,85,0,1)"

slug: blix
title: Blix
client: Blix
client-short: Blix
subtitle: Bookmark Your Favorite Places.
details:
    - UX/UI Design
    - Identity Design

header-under: "background-image: url('/work/blix/blix-header@2x.jpg')"


featured: 
    - artifact: 
      url: 'blix-featured-map'
      imagetype: jpg
      type: phone-5s
      title: 'My places map'
      id: 'blix-map'
      alt: 'An iPhone screenshot of the map view for the Blix app.'
      speed: '-1'
    - artifact: 
      url: 'blix-featured-detail'
      imagetype: jpg
      type: phone-5s
      title: 'Location detail'
      id: 'blix-detail'
      alt: 'An iPhone screenshot of the detail view for the Blix app.'
      speed: '1'
    - artifact:
      url: 'blix-featured-icon'
      imagetype: png
      type: icon
      title: 'Identity'
      id: 'blix-identity'
      alt: 'App icon with a bright orange background and a white logo that says Blix'
      speed: '3'
    - artifact: 
      url: 'blix-featured-addtags'
      imagetype: jpg
      type: phone-5s
      title: 'Location Tagging'
      id: 'blix-tagging'
      alt: 'An iPhone screenshot of the add tags view for the Blix app.'
      speed: '2'
---
<div class="container project-container">
<div class="header-over">
    {% include project-image.html alt="Blix featured image" image="blix-header-over" type="jpg" %}
</div>
<div class="grid-row project-intro grid">
  <div class="grid-row-headline">
    <p>Blix</p>
    <h1>
      Most mapping apps are focused on place names and addresses. Often, the location on the map is an entrance, an arbitrary geographical center, or just isn’t the interesting part.
    </h1>
    <p>
      Blix is for when the place worth bookmarking isn’t just a beach, but is the precise location of the best breaks. Or when it isn’t just a park, but is an old bench up on the bluff trail with an incredible view.
    </p>
    <p>
      I worked with the team to design a mobile app. Later, I designed a logo, a brochure website, and several prototypes for a future desktop version of the app.
    </p>
  </div>
</div>

  <div class="grid-row grid">
    <div class="grid-row-copy">
      <h3>Map View</h3>
      <h2>Find it on the map</h2>
      <p>For an app all about places, the map should be at the center of the app. From here, users can see nearby locations, pinch and zoom around the map, or swipe up the list view to see a searchable and sortable list.</p>
      <p>"My Places" is the default scope for the map, but it can be switched to "Public Places" to see everything, or "Shared with Me" to see what has been shared directly with you.</p>
      <p>In the list, select multiple places at once to remove, add tags, or share.</p>
    </div>
  </div>
<div class="full-width mobile-slide">
  {% include project-image.html alt="Map, Detail, and List" image="blix-01" type="jpg" size="100vw" %}
  {% include project-image.html alt="List swiped, and multiselect" image="blix-02" type="jpg" size="100vw" %}
</div>
</div>
<!-- 
Start Fancy Background Box
 -->
<div class="project-section project-section-blix" style="background:rgba(243,250,246,1); color:rgba(0,0,0,1);">
<div class="container project-container">
  <div class="grid-row grid">
    <div class="grid-row-copy">
      <h3>New Blix</h3>
      <h2>Save a new location</h2>
      <p>
        Because saving locations is the central feature of the app, we put it front and center. When the map is moved around, the New Blix pin floats in the middle of the screen, marking the spot a new Blix will be created when the button is tapped.
      </p>
      <p>
        When that big center button is tapped, a modal opens where users can name the location if they want, add some tags to help find it again later, and add some photos, notes, and set the privacy (private by default).
      </p>
    </div>
  </div>

  <div class="full-width mb-6 mobile-slide">
    {% include project-image.html alt="Create, Edit and Detail" image="blix-03" type="jpg" size="100vw" %}
  </div>

  <div class="grid-row grid">
    <div class="grid-row-copy">
      <h3>Tagging</h3>
      <h2>Adding and editing tags</h2>
      <p>While creating a new Blix or editing an existing one, users can add custom tags for easy retrieval later.  Quick add from a sorted list of existing tags, or start typing to search tags or create a new&nbsp;one.</p>
    </div>
  </div>

  <div class="full-width mb-6 mobile-slide">
    {% include project-image.html alt="Edit tags, Search tags by keyword, and in=progress search" image="blix-04" type="jpg" size="100vw" %}
  </div>

  <div class="grid-row grid">
      <div class="grid-row-copy">
          <h3>Search</h3>
          <h2>Find it again later</h2>
          <p>After a user has saved some locations, they can see them all on the map, but they might want to filter it down a bit and pull up a more specific list. Breweries in Seattle, for example, or places with a patio that are good for groups.</p>
          <p>Filter by keyword, city, tags, and more.</p>
      </div>
  </div>

  <div class="full-width mb-6 mobile-slide">
    {% include project-image.html alt="Search Your Places, Recent Searches, and Search autocomplete" image="blix-05" type="jpg" size="100vw" %}
    {% include project-image.html alt="In-progress search" image="blix-06" type="jpg" size="100vw" %}
  </div>

  <div class="project-bigimage">
    {% include project-image.html alt="Blix logo" image="blix-logo" type="png" size="100vw"%}
    <p class="caption">The New Blix pin and X from the map view also appear in the logo.</p>
  </div>
  <div class="grid-row grid">
    <div class="grid-row-copy">
      <p>
        {% include project-image.html alt="Blix Business Cards" image="blix-businesscards" type="png" %}
      </p>
      <p class="caption">Business Cards</p>
    </div>
  </div>

  <div class="grid-row grid">
    <div class="grid-row-copy">
      <h3>Desktop Prototype</h3>
      <h2>Looking to larger screens</h2>
      <p>While the initial design work for the app was wrapping up, we started thinking about how Blix might later scale up to bigger screens, and I built an html prototype to help visualize this exploration.</p>
      <!-- TODO: link to prototype -->
      <p><a target="_blank" href="/work/blix/blixmap/">See the prototype</a></p>
      <!-- TODO: export a better screenshot of the prototype -->
      <p><a target="_blank" href="/work/blix/blixmap/">{% include project-image.html alt="Screenshot of a desktop web prototype" image="blix-prototype" type="jpg" size="100vw" %}</a></p>
      <p class="caption">Desktop Interaction Prototype. HTML/CSS/Javascript</p>
    </div>
  </div>

  <div class="grid-row grid">
    <div class="grid-row-copy">
      <h3>Marketing Website</h3>
      <h2>A place on the web</h2>
      <p>I also designed and built a basic one-page website to promote the app and direct people to the appropriate app stores.</p>
      <p><a href="#">See the Website</a></p>
      <!-- TODO: link to website -->
    </div>
  </div>

  <div class="full-width pb-6">
    {% include project-image.html alt="Screenshot of blix marketing website" image="blix-website" type="jpg" size="100vw" %}
  </div>
</div>
</div>