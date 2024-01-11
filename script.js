document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the content of the blog from the form
    const blogContent = this.blogContent.value;
    console.log("Submitting blog content:", blogContent); // Log the blog content being submitted

    // Use the ngrok URL for the backend service
    const ngrokURL = 'https://739a-99-246-144-174.ngrok-free.app/submit-blog';

    // Send the blog content to the backend using a POST request
    fetch(ngrokURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: blogContent })
    })
    .then(response => {
        console.log("Response received:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        alert('Blog submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit blog. Check console for details.');
    });
});

document.getElementById('tiktokForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const tiktokURL = this.tiktokURL.value;
    console.log("Submitting TikTok URL:", tiktokURL);

    const ngrokURL = 'https://739a-99-246-144-174.ngrok-free.app/submit-tiktok';

    fetch(ngrokURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ url: tiktokURL })
    })
    .then(response => {
        console.log("Response received:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        alert('TikTok transcribed successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to transcribe TikTok. Check console for details.');
    });
});
