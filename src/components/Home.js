// Fetch the external HTML file
export default function Home(){
    fetch('external.html')
  .then(response => response.text())
  .then(html => {
    // Insert the HTML content into the document
    document.body.innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching HTML file:', error);
  });

// Fetch the external CSS file
fetch('external.css')
  .then(response => response.text())
  .then(css => {
    // Create a <style> element and set the CSS content
    const styleElement = document.createElement('style');
    styleElement.textContent = css;

    // Insert the <style> element into the document head
    document.head.appendChild(styleElement);
  })
  .catch(error => {
    console.error('Error fetching CSS file:', error);
  });
}
