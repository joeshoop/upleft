---
layout: default
title: Home
---
<div class="container work-container">
    <div class="grid-row intro grid">
        <div class="grid-row-copy-intro">
            <p class="text-preset-mono">Studio Upleft is the independent design practice of <a target="_blank" href="http://www.joeshoop.com" style="color:#E68402;"><span style="color:white">Joe&nbsp;Shoop</span></a>, a digital product designer based in Seattle,&nbsp;WA.</p>
            <p class="text-preset-mono">Recent work includes a platform to help people shop local from home, <a href="/work/dailynumber/" style="color:#fbd603;"><span style="color:white">a daily fantasy sports game</span></a>, a design system for a business analytics tool, <a href="/work/shoreline/" style="color:#00c278;"><span style="color:white">a website and design guidelines for a community college</span></a>, <a href="/work/eatthismuch/" style="color:#f0754f;"><span style="color:white">product design for a meal planner app</span></a>, an interface for an in-flight entertainment system, design for a retail inventory tracking app, and many more.</p>
            <p class="text-preset-mono">Currenly available for new projects.</p>
            <p class="text-preset-mono">Contact: <a href="#" style="color:#E68402;"><span style="color:white">joe@upleft.com</span></a></p>
        </div>
    </div>
    <div class="artifacts">
        {% assign sorted_projects = site.work | sort: "order","last" %}
        {% for project in sorted_projects %}
            <div class="project grid">
            <div class="project-meta {{project.slug}}-meta">
                <a href="{{project.url}}">
                    <div class="project-client">
                        <p>{{project.client}}</p>
                    </div>
                    <div class="project-title">
                        <h2>
                            {{project.subtitle}}
                        </h2>
                    </div>
                    <div class="project-button">
                        <h3 class="underliner-container">
                            <span class="underliner-over">View Case Study</span>
                            <span class="underliner"></span>
                        </h3>
                    </div>
                </a>
            </div>
            {% for artifact in project.featured %}
            <div
            class="artifact {{artifact.type}} {{project.slug}} {{artifact.id}} rellax" 
            style="order:{{artifact.priority | default: 0 }}" 
            data-rellax-speed="{{artifact.speed}}" 
            data-rellax-zindex="{{artifact.speed}}" 
            data-background="{{project.background-color}}" 
            data-slug="{{project.slug}}">
                <div class="artifact-wrapper">
                    <a href="{{project.url | remove: 'index.html'}}">
                        <div class="artifact-image">
                        <img 
                            alt="{{artifact.alt}}"
                            srcset="
                                /work/{{project.slug}}/{{artifact.url}}_600w.{{artifact.imagetype}} 600w,
                                /work/{{project.slug}}/{{artifact.url}}_1200w.{{artifact.imagetype}} 1200w,
                                /work/{{project.slug}}/{{artifact.url}}_2400w.{{artifact.imagetype}} 2400w"
                            sizes="{% if artifact.type == 'tablet' %}
                                (max-width: 640px) 100vw, 70vw
                                {% else %}
                                (max-width: 640px) 50vw, 20vw
                                {% endif %}"
                            src="/work/{{project.slug}}/{{artifact.url}}_600w.{{artifact.imagetype}}" />
                            <div class="artifact-label">
                                <h4>{{artifact.title}}</h4>
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