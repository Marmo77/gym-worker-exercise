// import fetch from "node-fetch";

// const API_KEY = "cEbgcZlfhl6NiwXZS1AlSw==4ZMYtbkvwhWvtzj5";
// const muscle = "biceps";
// const apiUrl = `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`;

// export async function getExercises() {
//   try {
//     const response = await fetch(apiUrl, {
//       method: "GET",
//       headers: {
//         "X-Api-Key": API_KEY,
//       },
//     });

//     if (!response.ok) {
//       console.error("Error:", response.status, await response.text());
//       return;
//     }

//     const exercises = await response.json();
//     console.log("Exercises:", exercises);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// }

// getExercises();
