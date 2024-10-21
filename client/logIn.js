const getEscapeRoomData = async () => {
    try {
        const responseplayer = await fetch('http://localhost:3001/player');
        const players = await responseplayer.json();
 
        const responseTeams = await fetch('http://localhost:3001/team');
        const teams = await responseTeams.json();
    
        const responsePuzzles = await fetch('http://localhost:3001/puzzle');
        const puzzles = await responsePuzzles.json();

        const responseRooms = await fetch('http://localhost:3001/room');
        const rooms = await responseRooms.json();

        console.log({ players, teams, puzzles, rooms });

        return { players, teams, puzzles, rooms };

    } catch (error) {
        console.error('Error fetching escape room information:', error);
    };
};

getEscapeRoomData().then(data => {
    const { players, teams, puzzles, rooms } = data;
    console.log(players) 
    console.log(teams) 
    console.log(puzzles) 
    console.log(rooms) 
})