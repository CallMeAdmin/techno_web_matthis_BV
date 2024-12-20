const dataCountries = {
    france: {
        labels: ['2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01'],
        cases: [5000, 8000, 12000, 18000],
        temperature: [8, 10, 12, 14],
        gdpGrowth: [0.3, 0.5, 0.7, 1.1],
        sales: [150, 200, 300, 500],
        vaccinationRate: [60, 70, 80, 90],
        unemploymentRate: [10, 9, 8, 7],
        energyConsumption: [10000, 11000, 12000, 14000],
        airQualityIndex: [80, 75, 70, 65],
        travelers: [100000, 200000, 300000, 400000],
    },
    usa: {
        labels: ['2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01'],
        cases: [15000, 22000, 35000, 50000],
        temperature: [5, 8, 10, 12],
        gdpGrowth: [1.0, 1.2, 1.5, 2.0],
        sales: [300, 400, 500, 700],
        vaccinationRate: [50, 60, 70, 80],
        unemploymentRate: [8, 7, 6, 5],
        energyConsumption: [15000, 16000, 17000, 19000],
        airQualityIndex: [100, 110, 120, 130],
        travelers: [500000, 600000, 700000, 800000],
    },
    germany: {
        labels: ['2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01'],
        cases: [10000, 13000, 16000, 20000],
        temperature: [3, 5, 7, 10],
        gdpGrowth: [0.8, 1.0, 1.2, 1.5],
        sales: [250, 300, 400, 600],
        vaccinationRate: [65, 75, 85, 90],
        unemploymentRate: [6, 5.5, 5.0, 4.8],
        energyConsumption: [12000, 13000, 14000, 16000],
        airQualityIndex: [60, 65, 70, 75],
        travelers: [200000, 250000, 300000, 350000],
    },
    spain: {
        labels: ['2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01'],
        cases: [8000, 11000, 16000, 22000],
        temperature: [10, 12, 15, 18],
        gdpGrowth: [0.5, 0.8, 1.1, 1.4],
        sales: [200, 300, 400, 600],
        vaccinationRate: [70, 80, 85, 90],
        unemploymentRate: [14, 13, 12, 10],
        energyConsumption: [9000, 10000, 11000, 12000],
        airQualityIndex: [50, 55, 60, 65],
        travelers: [150000, 200000, 250000, 300000],
    },
    italy: {
        labels: ['2020-01-01', '2021-01-01', '2022-01-01', '2023-01-01'],
        cases: [6000, 9000, 12000, 17000],
        temperature: [7, 9, 11, 13],
        gdpGrowth: [0.3, 0.6, 0.9, 1.2],
        sales: [180, 250, 350, 500],
        vaccinationRate: [65, 75, 85, 90],
        unemploymentRate: [11, 10.5, 9.5, 8.5],
        energyConsumption: [11000, 12000, 13000, 14000],
        airQualityIndex: [70, 75, 80, 85],
        travelers: [120000, 150000, 180000, 220000],
    },
};

const ctxLine = document.getElementById('myChart').getContext('2d');
const ctxBar = document.getElementById('barChart').getContext('2d');

let chartLine = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: dataCountries.france.labels,
        datasets: [{
            label: 'France - Cas COVID',
            data: dataCountries.france.cases,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    }
});

let chartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: dataCountries.france.labels,
        datasets: [{
            label: 'France - Cas COVID',
            data: dataCountries.france.cases,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

function updateCharts() {
    const selectedCountries = [];
    if (document.getElementById('france').checked) selectedCountries.push('france');
    if (document.getElementById('usa').checked) selectedCountries.push('usa');
    if (document.getElementById('germany').checked) selectedCountries.push('germany');
    if (document.getElementById('spain').checked) selectedCountries.push('spain');
    if (document.getElementById('italy').checked) selectedCountries.push('italy');

    const selectedIndicator = document.getElementById('indicator').value;

    const lineData = selectedCountries.map(country => ({
        label: `${country.charAt(0).toUpperCase() + country.slice(1)} - ${selectedIndicator}`,
        data: dataCountries[country][selectedIndicator],
        borderColor: country === 'france' ? 'rgba(75, 192, 192, 1)' : 
                     country === 'usa' ? 'rgba(255, 99, 132, 1)' : 
                     country === 'germany' ? 'rgba(153, 102, 255, 1)' :
                     country === 'spain' ? 'rgba(255, 159, 64, 1)' :
                     'rgba(54, 162, 235, 1)',
        fill: false
    }));

    const barData = selectedCountries.map(country => ({
        label: `${country.charAt(0).toUpperCase() + country.slice(1)} - ${selectedIndicator}`,
        data: dataCountries[country][selectedIndicator],
        backgroundColor: country === 'france' ? 'rgba(75, 192, 192, 0.2)' : 
                         country === 'usa' ? 'rgba(255, 99, 132, 0.2)' : 
                         country === 'germany' ? 'rgba(153, 102, 255, 0.2)' :
                         country === 'spain' ? 'rgba(255, 159, 64, 0.2)' :
                         'rgba(54, 162, 235, 0.2)',
        borderColor: country === 'france' ? 'rgba(75, 192, 192, 1)' : 
                      country === 'usa' ? 'rgba(255, 99, 132, 1)' : 
                      country === 'germany' ? 'rgba(153, 102, 255, 1)' :
                      country === 'spain' ? 'rgba(255, 159, 64, 1)' :
                      'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }));

    chartLine.data.datasets = lineData;
    chartBar.data.datasets = barData;

    chartLine.update();
    chartBar.update();
}

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateCharts);
});

document.getElementById('indicator').addEventListener('change', updateCharts);

updateCharts();
