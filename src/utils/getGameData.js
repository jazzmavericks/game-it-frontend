export async function GetGameData(searchTerm, setSearchResults, selectedOption) {
    try {
        const res2 = await fetch(`https://rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}`);
        const data2 = await res2.json();
        console.log(data2);

        const res4 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&search=${searchTerm}`);
        const data4 = await res4.json();
        console.log(data4);
        setSearchResults(data4);


        // Set ordering to alphabetical
        if (selectedOption === "alphabeticalA2Z") {
            const res5 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&ordering=name`);
            const data5 = await res5.json();
            console.log(data5);
            setSearchResults(data5);
            }
            else
        // Set ordering to reverse alphabetical
        if (selectedOption === "alphabeticalZ2A") {
            const res6 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&ordering=-name`);
            const data6 = await res6.json();
            console.log(data6);
            setSearchResults(data6);
        }
        else

        // Set ordering to best rated
        if (selectedOption === "rating") {
            const res7 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&ordering=rating`);
            const data7 = await res7.json();
            console.log(data7);
            setSearchResults(data7);
        }
        else

        // Set ordering to Metacritic rating
        if (selectedOption === "metacritic") {
            const res8 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&ordering=metacritic`);
            const data8 = await res8.json();
            console.log(data8);
            setSearchResults(data8);
        }
        else

        // Set ordering to recently released
            if (selectedOption === "releaseDate") {
            const res9 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&ordering=released`);
            const data9 = await res9.json();
            console.log(data9);
            setSearchResults(data9);
        }
        else

        // Filter by Platform: Playstation 5
            if (selectedOption === "playstation5") {
            const res10 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=0`);
            const data10 = await res10.json();
            console.log(data10);
            setSearchResults(data10);
        }
        else

        // Filter by Platform: Xbox Series S/X
            if (selectedOption === "xboxSX") {
            const res11 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=1`);
            const data11 = await res11.json();
            console.log(data11);
            setSearchResults(data11);
        }
        else

        // Filter by Platform: PC
            if (selectedOption === "PC") {
            const res12 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=2`);
            const data12 = await res12.json();
            console.log(data12);
            setSearchResults(data12);
        }
        else

        // Filter by Platform: Playstation 4
            if (selectedOption === "playstation4") {
            const res13 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=3`);
            const data13 = await res13.json();
            console.log(data13);
            setSearchResults(data13);
        }
        else

        // Filter by Platform: Playstation 3
            if (selectedOption === "playstation3") {
            const res14 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=4`);
            const data14 = await res14.json();
            console.log(data14);
            setSearchResults(data14);
        }
        else

        // Filter by Platform: Xbox 360
            if (selectedOption === "xbox360") {
            const res15 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=5`);
            const data15 = await res15.json();
            console.log(data15);
            setSearchResults(data15);
        }
        else

        // Filter by Platform: Xbox One
            if (selectedOption === "xboxOne") {
            const res16 = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}&parent_platforms=6`);
            const data16 = await res16.json();
            console.log(data16);
            setSearchResults(data16);
            }

    } catch (error) {
        console.log(error);
    }
}
