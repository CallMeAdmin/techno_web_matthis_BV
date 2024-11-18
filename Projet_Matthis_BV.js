const dataCountries = {
    france: {
        labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
        data: [10, 20, 30, 40, 50],
    },
    usa: {
        labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
        data: [5, 15, 25, 35, 45],
    },
    germany: {
        labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
        data: [8, 18, 28, 38, 48],
    },
    spain: {
        labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
        data: [12, 22, 32, 42, 52],
    }
};

const ctx = document.getElementById('myChart').getContext('2d');

// Initialisation du graphique avec la France par défaut
let chart = new Chart(ctx, {
    type: 'line', // Le type de graphique
    data: {
        labels: dataCountries.france.labels, // Labels (dates)
        datasets: [{
            label: 'France',
            data: dataCountries.france.data, // Données de la France
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false, // Pas de remplissage sous la courbe
        }]
    }
});

// Fonction pour mettre à jour le graphique en fonction des pays sélectionnés
function updateChart() {
    const selectedCountries = [];
    if (document.getElementById('france').checked) selectedCountries.push('france');
    if (document.getElementById('usa').checked) selectedCountries.push('usa');
    if (document.getElementById('germany').checked) selectedCountries.push('germany');
    if (document.getElementById('spain').checked) selectedCountries.push('spain');

    chart.data.datasets = selectedCountries.map(country => ({
        label: country.charAt(0).toUpperCase() + country.slice(1),
        data: dataCountries[country].data,
        borderColor: country === 'france' ? 'rgba(75, 192, 192, 1)' :
                      country === 'usa' ? 'rgba(255, 99, 132, 1)' :
                      country === 'germany' ? 'rgba(54, 162, 235, 1)' : 'rgba(153, 102, 255, 1)',
        fill: false // Pas de remplissage sous la courbe
    }));

    // Mettre à jour les labels (dates) du graphique
    chart.data.labels = dataCountries[selectedCountries[0]]?.labels || [];
    chart.update();
}

// Mettre à jour le graphique chaque fois qu'une case est cochée ou décochée
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateChart);
});

// Initialiser le graphique
updateChart();
