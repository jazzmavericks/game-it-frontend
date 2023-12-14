export async function GetGameData(searchTerm, setSearchResults, selectedOption) {
    try {
        let apiUrl = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}`;
        console.log(selectedOption)
        // Add sorting options based on selectedOption
        if (selectedOption === "alphabeticalA2Z") {
            apiUrl += "&ordering=name";
        } else if (selectedOption === "alphabeticalZ2A") {
            apiUrl += "&ordering=-name";
        } else if (selectedOption === "rating") {
            apiUrl += "&ordering=rating_top";
        } else if (selectedOption === "metacritic") {
            apiUrl += "&ordering=metacritic";
        } else if (selectedOption === "releaseDate") {
            apiUrl += "&ordering=released";
        } else {
            apiUrl += "&ordering=rating_top";
        }

        // Add filtering options based on selectedOption
        // if (selectedOption === "playstation5") {
        //     apiUrl += "&parent_platforms=187";
        // } else if (selectedOption === "xboxSX") {
        //     apiUrl += "&parent_platforms=186";
        // } else if (selectedOption === "PC") {
        //     apiUrl += "&platforms=4";
        // } else if (selectedOption === "playstation4") {
        //     apiUrl += "&parent_platforms=18";
        // } else if (selectedOption === "playstation3") {
        //     apiUrl += "&parent_platforms=16";
        // } else if (selectedOption === "xbox360") {
        //     apiUrl += "&parent_platforms=15";
        // } else if (selectedOption === "xboxOne") {
        //     apiUrl += "&parent_platforms=1";
        // }

        // Add search term if present
        if (searchTerm) {
            apiUrl += `&search=${searchTerm}`;
        }
        console.log(apiUrl)
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        setSearchResults(data);
    } catch (error) {
        console.log(error);
    }
}
