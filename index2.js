function fetchData() {
    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function displayData(data){
    const postContainer = document.getElementById('post-container');
    postContainer.textContent='';
    data.forEach(item => {
        let li = document.createElement('div');
        li.classList = ``;
    
        li.innerHTML = ``
    });
    postContainer.appendChild(li);
}