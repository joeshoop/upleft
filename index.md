---
layout: default
title: Home
---
<div class="container work-container">
    <div class="grid-row intro grid">
        <div class="grid-row-copy-intro">
            <p class="text-preset-mono">Studio Upleft is the independent design practice of <a target="_blank" href="http://www.joeshoop.com"><span class="underliner">Joe&nbsp;Shoop</span></a>, a digital product designer based in Seattle,&nbsp;WA.</p>
            <p class="text-preset-mono">Recent work includes a platform to help people shop local from home, <a href="/work/dailynumber/"><span class="underliner" style="--link-background-color:#fbd603;">a daily fantasy sports game</span></a>, a design system for a business analytics tool, <a href="/work/shoreline/"><span class="underliner" style="--link-background-color:#00c278;">a website and design guidelines for a community college</span></a>, <a href="/work/eatthismuch/"><span class="underliner" style="--link-background-color:#f0754f;">product design for a meal planner app</span></a>, an interface for an in-flight entertainment system, design for a retail inventory tracking app, and many more.</p>
            <p class="text-preset-mono">Currenly available for new projects.</p>
            <p class="text-preset-mono">Contact: 
                <!-- <a href="javascript:location='mailto:\u006a\u006f\u0065\u0040\u0075\u0070\u006c\u0065\u0066\u0074\u002e\u0063\u006f\u006d';void 0">
                    <span class="underliner">
                    <script type="text/javascript">
                    obscureThatThing = function(){document.write('\u006a\u006f\u0065\u0040\u0075\u0070\u006c\u0065\u0066\u0074\u002e\u0063\u006f\u006d')};
                    obscureThatThing();
                    </script>
                    </span>
                </a> -->
                <a href="mailto:joe@upleft.com"><span class="underliner">joe@upleft.com</span></a>
            </p>
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
                        <h2 class="text-preset-header-l">
                            {{project.subtitle}}
                        </h2>
                    </div>
                    <div class="project-button">
                        <h3 class="underliner" style="--link-background-color:{{ project.highlight-color }}">View Case Study</h3>
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