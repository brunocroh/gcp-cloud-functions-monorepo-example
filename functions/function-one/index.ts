import * as functions from "firebase-functions";

export const functionOne = functions.https.onRequest((request, response) => {
  response.send("Hello! I'm function one! 😀");
});
