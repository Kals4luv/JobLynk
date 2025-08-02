// Job Details Page Interactivity
// (Demo only: In a real app, job data would be loaded dynamically)
document.addEventListener('DOMContentLoaded', function() {
    // Example: Populate with demo data
    document.getElementById('job-title').textContent = 'Frontend Developer';
    document.getElementById('job-company').textContent = 'Company: TechNova';
    document.getElementById('job-location').textContent = 'Location: Remote';
    document.getElementById('job-description').textContent = 'Build modern UIs for a fast-growing startup.';
    document.getElementById('apply-btn').addEventListener('click', function() {
        alert('Application submitted! (Demo)');
    });
});
