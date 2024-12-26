document.getElementById('safelinkForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const url = document.getElementById('url').value;

    // Encode URL
    const encodedUrl = encodeURIComponent(btoa(url)); // Base64 encoding + encodeURIComponent

    // Generate Safelink
    const safelink = `${window.location.origin}/interstitial.html?url=${encodedUrl}`;

    // Display Safelink
    const result = document.getElementById('result');
    result.innerHTML = `Safelink Anda: <a href="${safelink}" target="_blank">${safelink}</a>`;
});
