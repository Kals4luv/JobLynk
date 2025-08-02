// Post Job Page Interactivity
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('post-job-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('post-job-message').textContent = 'Job posted! (Demo only, not saved)';
        this.reset();
    });
});
