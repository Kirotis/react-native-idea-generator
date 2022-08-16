export const loadIdea = () =>
    fetch("https://xeculus.pythonanywhere.com/generate", {
        method: "GET",
    }).then((responce) => responce.text());

// export const translate = async (text, token) => {
//     return fetch("https://api.translate.com/translate/v1/mt", {
//         method: "POST",
//         body: JSON.stringify({
//             text,
//             source_language: "en",
//             translation_language: "**",
//         }),
//         headers: {
//             "Content-Type": "application/json",
//             authorization: `Bearer ${token}`,
//         },
//     }).then(async (responce) => {
//         const text = await responce.text();
//         if (responce.status >= 400) {
//             throw new Error("error translate");
//         }
//         const json = JSON.parse(text);
//         if (!json?.data?.translation) {
//             throw new Error("error translate");
//         }
//         return json?.data?.translation;
//     });
// };

// export const getToken = () => {
//     return fetch("https://api.translate.com/translate/v1/login", {
//         method: "POST",
//         body: JSON.stringify({
//             email: "**********",
//             password: "*********",
//         }),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then(async (responce) => {
//         const text = await responce.text();
//         if (responce.status >= 400) {
//             throw new Error("error getToken");
//         }
//         const json = JSON.parse(text);
//         if (!json?.data?.token) {
//             throw new Error("error getToken");
//         }
//         return json.data.token;
//     });
// };
