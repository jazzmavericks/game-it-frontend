export async function GetGameData() {
    try {
        const res1 = await fetch(`https://rawg.io/api/games/grand-theft-auto-v?token&key=${process.env.REACT_APP_RAWG_KEY}`)
        const data1 = await res1.json()
        console.log(data1)
        const res2 = await fetch(`https://rawg.io/api/games?token&key=${process.env.REACT_APP_RAWG_KEY}`)
        const data2 = await res2.json()
        console.log(data2)
        console.log(data2.results[0].id)
        const res3 = await fetch(`https://rawg.io/api/games/3498?token&key=${process.env.REACT_APP_RAWG_KEY}`)
        const data3 = await res3.json()
        console.log(data3)
    } catch (error) {
        console.log(error);
    }
};

