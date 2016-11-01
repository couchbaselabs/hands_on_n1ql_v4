# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Querying Objects

 Objects can be compared as a whole as well.

<pre>
select name, city from `travel-sample` h where geo = {
      "accuracy": "ROOFTOP",
      "lat": 37.7634,
      "lon": -122.435
    };
</pre>

<pre id="example"> 
select name, city from `travel-sample` h where geo = {
      "accuracy": "ROOFTOP",
      "lat": 37.7634,
      "lon": -122.435
    };
</pre>
