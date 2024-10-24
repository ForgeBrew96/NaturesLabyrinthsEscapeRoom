document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const teamName = document.getElementById('teamName').value;

    const teamData = {
        userName: username,
        passWord: password,
        teamName: teamName,
        memberCount: 1,
        playerNames: [],
        hintsLeft: 3,
        inventory: [],
        roomsCompleted: []
    };

    try {
        const response = await fetch('http://localhost:3001/team', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teamData)
        });

        if (response.ok) {
            alert('Account created successfully!');
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while creating the account.');
    }
});