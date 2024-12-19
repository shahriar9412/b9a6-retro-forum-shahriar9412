const loadArticles = async (searchText = 'comedy') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const articles = data.posts;
    displayArticles(articles);
}
let count = 0;

const handleCount = () => {
    count++;
    document.getElementById("counter").innerText = count;
    const readArticle = document.getElementById('read-article');
    const articleAdd = document.createElement('div');
    articleAdd.classList = `rounded-2xl bg-white p-2 my-2`;

    articleAdd.innerHTML = `<div class="flex flex-row gap-3">
        <h1 class="text-black font-bold">10 Kids Unaware of Their
            Halloween Costume</h1>
            <i class="fa-solid fa-eye mr-3"></i>
            <h1>1,568</h1>
    </div>`;
    readArticle.appendChild(articleAdd);

}


const handleSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadArticles(searchText);
}
const displayArticles = (articles) => {

    const articleContainer = document.getElementById('article-container');

    articleContainer.textContent = '';


    articles.forEach(article => {

        const articleCard = document.createElement('div');
        articleCard.classList = `flex flex-row gap-3 bg-[#F3F3F5] rounded-2xl p-6 mb-3`;

        articleCard.innerHTML = `<div>
        <p><img src="${article.image}" class="h-10 w-10 rounded-xl" alt=""></p>
       
    </div>
    <div>
        <div class="flex flex-row gap-3">
            <h1>#${article.category}</h1>
            <h1>Author:${article.author.name}</h1>
        </div>
        <h1 class="text-black font-bold text-xl">${article.title}</h1>
        <h1 class="mb-5">${article.description}</h1>
        <div class="flex justify-between">

            <div class="flex flex-row gap-5">
                <div class="flex"><i class="fa-regular fa-message mr-3"></i> <h1>${article.comment_count}</h1></div>
            <div class="flex"><i class="fa-solid fa-eye mr-3"></i><h1>${article.view_count}</h1></div>
            <div class="flex"><i class="fa-regular fa-clock mr-3"></i><h1>${article.posted_time}</h1></div>

            </div>
            <div>
                <i onclick="handleCount()" class="fa-regular fa-envelope-open p-3 bg-green-600 rounded-full"></i>
            </div>
        </div>
    </div>
        `;

        articleContainer.appendChild(articleCard);

    });


    toggleLoadingSpinner(false);
}
const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}
loadArticles();