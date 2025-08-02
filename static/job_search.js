// Job Search Page Interactivity
const jobs = [
    { title: 'Frontend Developer', company: 'TechNova', location: 'Remote', description: 'Build modern UIs.' },
    { title: 'Backend Engineer', company: 'DataWorks', location: 'New York', description: 'Work on APIs.' },
    { title: 'UI/UX Designer', company: 'Designify', location: 'Remote', description: 'Design user experiences.' },
    { title: 'DevOps Engineer', company: 'CloudOps', location: 'San Francisco', description: 'Automate deployments.' }
];

function renderJobs(filteredJobs) {
    const results = document.getElementById('search-results');
    results.innerHTML = '';
    if (filteredJobs.length === 0) {
        results.innerHTML = '<p>No jobs found.</p>';
        return;
    }
    filteredJobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `<h3>${job.title}</h3><div class="company">${job.company}</div><div class="location">${job.location}</div><p>${job.description}</p>`;
        results.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderJobs(jobs);
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const keyword = document.getElementById('search-keyword').value.toLowerCase();
        const location = document.getElementById('search-location').value.toLowerCase();
        const filtered = jobs.filter(job =>
            (job.title.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword)) &&
            (location === '' || job.location.toLowerCase().includes(location))
        );
        renderJobs(filtered);
    });
});
