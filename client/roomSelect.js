document.addEventListener('DOMContentLoaded', async () => {
    const gollumsCaveLink = document.getElementById('gollumsCaveLink');
    const tooltip = document.getElementById('tooltip');

    const fetchRoomData = async () => {
        try {
            const response = await fetch('http://localhost:3001/room'); 
            if (!response.ok) throw new Error('Network response was not ok');
            const rooms = await response.json();
            console.log('Rooms data:', rooms);
            return rooms.find(room => room.name === "Escaping Gollums Cave");
        } catch (error) {
            console.error('Error fetching room data:', error);
        }
    };

    const showTooltip = (event, roomData) => {
        if (!roomData) {
            console.error('No room data found');
            return;
        }
        tooltip.innerHTML = `
            <strong>Room Name:</strong> ${roomData.name}<br>
            <strong>Description:</strong> ${roomData.themeDescription}<br>
            <img src="${roomData.backGroundIMG}" alt="${roomData.name}" style="max-width: 100px; max-height: 100px;">
        `;
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
        tooltip.style.display = 'block';
    };

    gollumsCaveLink.addEventListener('mouseover', async (event) => {
        const roomData = await fetchRoomData();
        console.log('Room data for tooltip:', roomData); 
        showTooltip(event, roomData);
    });

    gollumsCaveLink.addEventListener('mousemove', (event) => {
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    });

    gollumsCaveLink.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const rainThunderSound = document.getElementById('rainThunderSound');
    rainThunderSound.play();
});
