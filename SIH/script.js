document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const problem = document.getElementById('problem').value.toLowerCase();
    let solution = "";

    // Predefined conditions to provide solutions
    if (problem.includes("stress") || problem.includes("anxiety")) {
        solution = "It's important to take regular breaks and practice mindfulness. Consider talking to a counselor.";
    } else if (problem.includes("homework") || problem.includes("assignment")) {
        solution = "Try breaking down the homework into smaller tasks and focus on one task at a time.";
    } else if (problem.includes("bullying")) {
        solution = "Please reach out to a trusted teacher or counselor for support. It's important to address bullying immediately.";
    } else if (problem.includes("time management")) {
        solution = "Create a schedule and prioritize your tasks. Time management apps can also help.";
    } else {
        solution = "Thank you for sharing your problem. We will get back to you with a solution soon.";
    }

    // Display the solution
    const solutionDiv = document.getElementById('solution');
    solutionDiv.style.display = 'block';
    solutionDiv.textContent = solution;
});
