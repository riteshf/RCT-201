### Create a movie rating app using nextjs

- create a db.json file and use this as a database {https://gist.github.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4}

- Use any Chakra-UI to provide a better UI to it.
- Create 3 Routes:
  - "/" renders all the movie data in form of a card. [Make a separate card component]
  - "/:id" renders one single movie's data. Also, make sure to add one Button with the label "Add to watchlist" that adds a specific movie to the watchlist. Create a separate key as "watchlists" where you will add all the movies. Reference: https://chakra-templates.dev/templates/page-sections/productDetails/simple
  - "/watchlist" renders all the movies that are in your watchlist in form of a table. Add a column as removed from the watchlist.
  - Remove from a watchlist will have a button, clicking on which the respective movie will be deleted from the db.json
