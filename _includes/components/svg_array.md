<div class="link-container">

    {% for item in page[include.lista] %}
        {% if {{item.link}} != "#" %}
            {% if {{item.external}} == true %}
                <a href="{{item.link}}" alt="{{item.nome}}" target="_blank" >
                    {%- include {{ item.img }} -%}
                </a>
            {% else %}
                <a href="/informacao{{item.link}}" alt="{{item.nome}}" >
                    {%- include {{ item.img }} -%}
                </a>
            {% endif %}
        {% else %}
            <a href="#" alt="{{item.nome}}" class="not-link" >
                {%- include {{ item.img }} -%}
            </a>
        {% endif %}
    {% endfor %}

</div>