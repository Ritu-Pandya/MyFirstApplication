module.exports = app => {

    const tutorials = require("../controllers/tutorial.controller");

    var router = require("express").Router();

         // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
    router.put("/:id",tutorials.update);
    router.delete("/:id",tutorials.delete);

  app.use('/api/tutorials',router)
}