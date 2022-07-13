import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
const SearchPramas = () => {

    const [location, setLocation] = useState('Seattle,WA');
    const [animal, setAnimal] = useState("dog");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="location" onChange={e => setLocation(e.target.value)} />
                    <label htmlFor="animal">
                    Animal
                    <select id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}

                    >
                        <option value="" key="">All</option>
                        {ANIMALS.map(animal => (
                            <option value={animal}>{animal}</option>
                        ))}

                    </select>
                </label>
                    <button>submit</button>
                </label>

          
            </form>
        </div>
    );
};

export default SearchPramas;