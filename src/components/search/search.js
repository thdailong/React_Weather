import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { API_URL, options } from "../api";
import axios from "axios";

const Search = ({ onSearchChange }) => {
    const [search, setsearch] = useState(null);

    const handleOnChange = (searchData) => {
        setsearch(searchData);
        onSearchChange(searchData);
    };

    const loadOptions = (inputValue) => {
        let optionAPI = options;
        optionAPI.url = API_URL;
        optionAPI.params = {
            minPopulation: "1000000",
            namePrefix: inputValue,
        };
        return axios
            .request(optionAPI)
            .then(function (response) {
                return {
                    options: response.data.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;
