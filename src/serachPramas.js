import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
const SearchPramas = () => {

    const [location, setLocation] = useState('Seattle,WA');
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets() {
        const { animals } = await pet.animal({
            location,
            breed,
            type: animal,
        });
        setPets(animals || []);
    }

    useEffect(() => {
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
    }, [animal]);


    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="location" onChange={e => setLocation(e.target.value)} />
                    <AnimalDropdown />
                    <BreedDropdown />

                    <button>submit</button>
                </label>


            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchPramas;