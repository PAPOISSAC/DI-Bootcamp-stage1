document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for robots with external image URLs
    const robots = [
        { id: 1, name: 'John Doe', image: 'images/Robot 1.jpg', info: 'Web Developer' },
        { id: 2, name: 'Jane Smith', image: 'https://example.com/jane.jpg', info: 'UX Designer' },
        { id: 3, name: 'Nicholas Johnson', image: 'https://example.com/nicholas.jpg', info: 'Data Scientist' },
        { id: 4, name: 'Emma White', image: 'https://example.com/emma.jpg', info: 'Software Engineer' },
        { id: 5, name: 'Alex Brown', image: 'https://example.com/alex.jpg', info: 'Product Manager' },
        // Add more dummy data as needed
    ];

    // Function to render cards
    function renderCards(robotArray) {
        const container = document.getElementById('robot-container');
        container.innerHTML = ''; // Clear previous cards

        robotArray.forEach(robot => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${robot.image}" alt="${robot.name}">
                <h2>${robot.name}</h2>
                <p>${robot.info}</p>
            `;
            container.appendChild(card);
        });
    }

    // Function to filter robots based on search input
    function filterRobots() {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchInput));
        renderCards(filteredRobots);
    }

    // Initial rendering of all cards
    renderCards(robots);
});
