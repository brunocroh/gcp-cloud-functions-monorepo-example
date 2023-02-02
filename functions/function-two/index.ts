import * as functions from "firebase-functions";

export const functionTwo = functions.https.onRequest((request, response) => {
  response.send("Hello! I'm function two! 😀");
});
