export const API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { minPopulation: "1000000", namePrefix: "Bel" },
    headers: {
        "X-RapidAPI-Key": "2938e45f69msh65c2c8e195eccc6p1adf44jsn5db029051aef",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
};
