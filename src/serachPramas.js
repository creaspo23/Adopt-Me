import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
const SearchPramas = () => {

    const [location, setLocation] = useState('Seattle,WA');
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);




    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="location" onChange={e => setLocation(e.target.value)} />
                    <AnimalDropdown />
                <BreedDropdown />

                    <button>submit</button>
                </label>
                

            </form>
        </div>
    );
};

export default SearchPramas;