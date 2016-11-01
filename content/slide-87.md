# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Object and array nesting.
### Nested objects and arrays in hotel document.

hotel.geo is a simple nested object.
hotel.reviews is array of review objects.
Each review object itself embeds ratings object

    {
      "hotel": {
        "address": "321 Castro St",
        "alias": null,
        "checkin": null,
        "checkout": null,
        "city": "San Francisco",
        "country": "United States",
        "description": "An upscale bed and breakfast in a restored house.",
        "directions": "at 16th",
        "email": "Innkeeper@innoncastro.com",
        "fax": null,
        "free_breakfast": false,
        "free_internet": true,
        "free_parking": true,
        "geo": {
          "accuracy": "ROOFTOP",
          "lat": 37.7634,
          "lon": -122.435
        },
        "id": 25390,
        "name": "Inn on Castro",
        "pets_ok": true,
        "phone": "+1 415 861-0321",
        "price": "$95–$190",
        "public_likes": [],
        "reviews": [
          {
            "author": "Mason Koepp",
            "content": "Disappointing Having read some of the reviews on TripAdvisor, I was prepared for the problems we encountered at The Mark Hopkins but had still hoped for a good experience. Like other reviewers, we had a disappointingly small room and tiny bathroom, but the main issue was noise. Like some other reviewers we were in a room with an interconnecting door to the next room, which increased the transfer of noise that was loud enough coming through the walls - we could hear every conversation (and 3 a.m. argument) of our fellow guests. The little things also disappointed: frayed bath towels, the closet door not opening fully as it was up against the bed, and not the view of the financial district we had been promised. For $220 all this was just not good enough; all in all an old hotel trading on its reputation not the reality.",
            "date": "2012-08-23 16:57:56 +0300",
            "ratings": {
              "Business service": -1,
              "Check in / front desk": 3,
              "Cleanliness": 3,
              "Location": 4,
              "Overall": 2,
              "Rooms": 2,
              "Service": -1,
              "Value": 2
            }
          }
        ],
        "state": "California",
        "title": "San Francisco/Castro-Noe Valley",
        "tollfree": null,
        "type": "hotel",
        "url": "http://www.innoncastro.com/",
        "vacancy": false
      },
      "id": "hotel_25390"
    }


<pre id="example"> 
SELECT meta().id, hotel FROM `travel-sample` hotel USE KEYS "hotel_25390";

</pre>

