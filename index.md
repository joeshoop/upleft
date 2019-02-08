---
layout: default
title: Home
---

{:.text-l .lead}
# **Studio Upleft** is the work of Seattle-based digital product designer Joe Shoop. He specializes in interface design for screens of all shapes and sizes, and works with people and companies who are making good&nbsp;things.

<ul class="projects">

{% assign sorted = site.projects | sort: 'year-start' | reverse %}
{% for project in sorted %}
{% assign projectClass = project.url | remove: "index.html" | remove: "/projects/" | remove: "/" %}
    <li class="project project-{{ projectClass }}">
        <a href="{{ project.url | remove: "index.html" }}">
            <div class="project-title-group">
                <p class="text-label">{{ project.tagline }}</p>
                <h3>
                    {{ project.title }}
                </h3>
            </div>
            <div class="project-thumbnail">
                <img src="{{ project.url | remove: 'index.html'}}{{ project.thumbnail }}" />
            </div>
        </a>
    </li>		
{% endfor %}
    <li class="project-background"></li>
</ul>
