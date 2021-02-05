---
layout: default
title: Home
---
<div class="container work-container">
    <div class="project-row grid">
        <div class="project-row-subtitle"><h3>Hello!</h3></div>
        <div class="project-row-headline">
            <h1 class="text-preset-hero">Studio Upleft is the design practice of <a href="#" style="text-decoration-color:#FEA200">Joe Shoop</a>, a digital designer based in Seattle, WA.</h1>
        </div>
        <div class="project-row-copy">
            <p>Recent work includes a platform to help people shop local from home, <a href="/work/dailynumber/" style="text-decoration-color:rgba(251,214,3,1)">a daily fantasy sports game</a>, a design system for a business analytics tool, <a href="/work/shoreline/" style="text-decoration-color:rgba(0,194,120,1)">a website and design guidelines for a community college</a>, <a href="/work/eatthismuch/" style="text-decoration-color:rgba(240,117,79,1)">product design for a meal planner app</a>, an interface for an in-flight entertainment system, design for a retail inventory tracking app, and many more.</p>
            <p>I am particularly interested in the incredible potential of digital interfaces as tools—practical, useful, outcome-based tools that empower people to more effectively do their thing, whatever that thing may be.</p>
        </div>
    </div>
    <div>
        <h2>Case Studies</h2>
    </div>
    <div class="artifacts grid">
        {% assign sorted_projects = site.work | sort: "order","last" %}
        {% for project in sorted_projects %}
            <div class="project grid">
            <div class="project-meta {{project.slug}}-meta">
                <a href="{{project.url}}">
                    <div class="project-meta-title">
                        <h2>{{project.subtitle}}</h2>
                    </div>
                    <div class="project-meta-subtitle">
                        <p style="text-decoration-color:{{project.highlight-color}}">{{project.title}}<span class="project-meta-index text-preset-smallcaps">{{ forloop.index }}</span></p>
                    </div>
                    <!-- <div class="project-meta-button" style="background:{{project.background-color}}; color:{{project.foreground-color}};">View Case Study</div> -->
                </a>
            </div>
            {% for artifact in project.featured %}
            <div class="artifact {{artifact.type}} {{project.slug}} {{artifact.id}} rellax" style="order:{{artifact.priority | default: 0 }}" data-rellax-speed="{{artifact.speed}}" data-rellax-zindex="{{artifact.speed}}" data-background="{{project.background-color}}" data-slug="{{project.slug}}">
                <div class="artifact-wrapper">
                    <a href="{{project.url | remove: 'index.html'}}">
                        <div class="artifact-image">
                            <img 
                            srcset="{{project.url | remove: 'index.html'}}{{artifact.url}} {{artifact.width}}"
                            src="   {% if artifact.url-type == 'absolute' %}
                                        {{ artifact.url }}
                                    {% else %}
                                        {{project.url | remove: 'index.html'}}{{artifact.url}}
                                    {% endif %}"
                            alt="{{artifact.alt}}" />
                            <div class="artifact-meta">
                                <h3>{{artifact.title}}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            {% endfor %}
            </div>
        {% endfor %}
    </div>
</div>