const app = require("./src/app"); // Your existing Express app
const connect = require("./src/connection/Connect");


connect()
  .then(() => {
    app.listen(7000, () => {
      console.log("Server is running on port 7000");
    });
  })
  .catch((error) => {
    console.log("Database connection failed", error.message);
});
