
const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Orders',
                type: 'line',
                data: [90, 70, 100, 110, 60, 80, 70, 60, 110, 70, 90, 50],
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.3, // Increased tension for smoother curves
                yAxisID: 'y',
            },
            {
                label: 'Earnings',
                data: [95, 85, 115, 100, 90, 80, 75, 65, 110, 90, 95, 65],
                backgroundColor: '#6A5ACD',
                yAxisID: 'y',
            },
            {
                label: 'Refunds',
                type: 'line',
                data: [30, 25, 40, 35, 30, 25, 20, 15, 40, 30, 35, 20],
                borderColor: '#FF6347',
                borderDash: [5, 5],
                fill: false,
                tension: 0.3, // Increased tension for smoother curves
                yAxisID: 'y',
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 120
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                display: false,
            }
        },
        responsive: true,
        maintainAspectRatio: true, // Ensure aspect ratio is maintained
    }
});





// map 

const locations = [
{ name: "Canada", coordinates: [56.1304, -106.3468], sales: 75, color: "green" },
{ name: "Greenland", coordinates: [71.7069, -42.6043], sales: 47, color: "green" },
{ name: "Russia", coordinates: [61.524, 105.3188], sales: 82, color: "green" },
{ name: "Palestine", coordinates: [31.9522, 35.2332], sales: 60, color: "purple" }
];

// Initialize the map with a gray theme tile layer
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Custom marker options
function createCustomIcon(color) {
return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%;"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
});
}

// Add custom markers for each location
locations.forEach(location => {
L.marker(location.coordinates, { icon: createCustomIcon(location.color) }).addTo(map)
    .bindPopup(`<b>${location.name}</b><br>Sales: ${location.sales}%`);
});

// Create the sales bars
const bars = document.getElementById('bars');

locations.forEach(location => {
const barContainer = document.createElement('div');
barContainer.className = 'sales-bar';

const label = document.createElement('div');
label.className = 'label';
label.textContent = location.name;
barContainer.appendChild(label);

const barWrapper = document.createElement('div');
barWrapper.className = 'bar-container';
const bar = document.createElement('div');
bar.className = 'bar';
bar.style.width = location.sales + '%';
barWrapper.appendChild(bar);
barContainer.appendChild(barWrapper);

const percentage = document.createElement('div');
percentage.className = 'percentage';
percentage.textContent = `${location.sales}%`;
barContainer.appendChild(percentage);

bars.appendChild(barContainer);
});



// sales

// chart2 
const ctx2 = document.getElementById('salesChart').getContext('2d');

const salesChart = new Chart(ctx2, {
type: 'bar',
data: {
labels: ['2020', '2021', '2022', '2023', '2024'], // Years
datasets: [
    {
        label: 'Product A',
        data: [30, 40, 35, 50, 49],
        backgroundColor: '#3ca4e5', // Blue color for Product A
        barThickness: 20, // Increase bar thickness
        categoryPercentage: 0.1, // Reduce space between groups
        barPercentage: 0.9, // Increase bar width within the group
        borderRadius: 4
    },
    {
        label: 'Product B',
        data: [20, 30, 25, 40, 39],
        backgroundColor: '#6be9a6', // Green color for Product B
        barThickness: 20, // Increase bar thickness
        categoryPercentage: 0.1, // Reduce space between groups
        barPercentage: 0.9, // Increase bar width within the group
        borderRadius: 4
    },
    {
        label: 'Product C',
        data: [40, 50, 45, 60, 59],
        backgroundColor: '#ffb01a', // Red color for Product C
        barThickness: 20, // Increase bar thickness
        categoryPercentage: 0.1, // Reduce space between groups
        barPercentage: 0.9, // Increase bar width within the group
        borderRadius: 4
    }
]
},
options: {
responsive: true, // Make the chart responsive
maintainAspectRatio: false, // Allow the chart to expand in height
scales: {
    x: {
        stacked: false, // Do not stack bars on x-axis
        grid: {
            display: false // Hide vertical grid lines
        },
        title: {
            display: true,
            text: 'Year'
        },
        ticks: {
            autoSkip: false, // Show all x-axis labels
            maxRotation: 45 // Rotate labels to fit better if needed
        }
    },
    y: {
        stacked: false, // Do not stack bars on y-axis
        grid: {
            display: true, // Show horizontal grid lines
            color: 'rgba(0, 0, 0, 0.1)' // Light gray color for horizontal grid lines
        },
        beginAtZero: true,
        title: {
            display: true,
            text: 'Sales Amount'
        }
    }
},
plugins: {
    legend: {
        display: true,
        position: 'top'
    },
    tooltip: {
        callbacks: {
            label: function(context) {
                return context.dataset.label + ': $' + context.raw;
            }
        }
    }
}
}
});






// Simplified data for weekly sales
const weekLabels = [
'Week 1', 
'Week 2', 
'Week 3', 
'Week 4', 
'Week 5', 
'Week 6', 
'Week 7'
];

const salesData = [
1200, 1500, 1700, 2000, 2200, 1800, 2100
];

// Get the canvas element and context
const ctx3 = document.getElementById('salesChart1').getContext('2d');

// Create a new Chart
const salesChart3 = new Chart(ctx3, {
type: 'bar', // Bar chart
data: {
labels: weekLabels, // X-axis labels
datasets: [{
label: 'Weekly Sales',
data: salesData, // Y-axis data
backgroundColor: '#007bff', // Blue color for bars
borderColor: '#25a0fc', // Darker blue for bar borders
borderWidth: 1, // Thin borders
barThickness: 60, // Set bar thickness
maxBarThickness: 40, // Maximum bar thickness
categoryPercentage: 0.8, // Bar width relative to the category width
barPercentage: 0.1 // Adjust space between bars
}]
},
options: {
responsive: true, // Make the chart responsive
maintainAspectRatio: false, // Allow the chart to expand in height
scales: {
x: {
    grid: {
        display: false // Hide vertical grid lines
    },
    title: {
        display: true,
        text: 'Weeks'
    },
    ticks: {
        autoSkip: false, // Show all x-axis labels
        maxRotation: 0, // Rotate labels to 0 degrees
        minRotation: 0 // No rotation for better readability
    }
},
y: {
    grid: {
        display: true, // Show horizontal grid lines
        color: 'rgba(0, 0, 0, 0.1)' // Light gray color for horizontal grid lines
    },
    beginAtZero: true,
    title: {
        display: true,
        text: 'Sales Amount'
    }
}
},
plugins: {
legend: {
    display: true,
    position: 'top'
},
tooltip: {
    callbacks: {
        label: function(context) {
            return context.dataset.label + ': $' + context.raw;
        }
    }
}
}
}
});

