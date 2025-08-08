---
layout: page
title: "Categories"
permalink: /categories/
---

Below are the categories that appear on this site. Categories are generated automatically from your posts.

<ul>
{% for category in site.categories %}
  <li><a href="{{ site.baseurl }}/categories/{{ category[0] | slugify }}/">{{ category[0] }} ({{ category[1].size }})</a></li>
{% endfor %}
</ul>

