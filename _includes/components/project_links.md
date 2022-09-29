<div class="link-container">
    {%- assign this_path = page.path | remove: 'index.md' -%}

    {% for proj in site.projetos %}
        {%- assign proj_path_remove = proj.path | split: '/' | last -%}
        {%- assign proj_path = proj.path | remove: proj_path_remove -%}

        {%- assign nome = proj.path | split: '/' | last | split: '.' | first -%}

        {% if proj_path == this_path and nome != 'index' %}

        <a href="{{ proj.url | prepend: site.baseurl }}" alt="{{proj.nome}}" >
            {%- include {{ proj.icon }} -%}
        </a>
    
        {% endif %}
    {% endfor %}
</div>