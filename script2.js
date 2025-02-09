// script.js
// Store alerts in localStorage
let alerts = JSON.parse(localStorage.getItem('alerts')) || [];
let examAlerts = JSON.parse(localStorage.getItem('examAlerts')) || [];

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'home.html':
            initializeHome();
            break;
        case 'alert.html':
            initializeAlerts();
            break;
        case 'exam.html':
            initializeExams();
            break;
        case 'admin.html':
            initializeAdmin();
            break;
    }
});

// Home page functions
function initializeHome() {
    const recentAlerts = document.getElementById('recentAlerts');
    if (recentAlerts) {
        const combined = [...alerts, ...examAlerts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
        
        combined.forEach(alert => {
            re