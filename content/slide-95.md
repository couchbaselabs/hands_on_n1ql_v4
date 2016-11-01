# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Search for a value within ANY field of an array.

<pre>
select COUNT(1)
FROM system:dual
WHERE ANY v WITHIN 
  {  "a":1, 
     "b": { 
          "x": "Mercury", 
          "y": "Venus", 
          "z": "Earth"
          }
  }
           SATISFIES v = "Earth" END;
</pre>

<pre id="example"> 
/* Scroll down to see the full query */
SELECT COUNT(1)
FROM system:dual
WHERE ANY v WITHIN 
  {  "a":1, 
     "b": { 
          "x": "Mercury", 
          "y": "Venus", 
          "z": "Earth"
          }
  }
  SATISFIES v = "Earth" END;
</pre>
