// localStorage.getItem("id");

//LINKING IT BACK TO HTML
const postListElement = document.querySelector(".post-list")
const id = localStorage.getItem("id")



async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id)
}

async function renderPosts(id) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
    console.log(postsData)
    postListElement.innerHTML = postsData.map(post => postHTML(post)).join('');
    }

function postHTML(post) {
 return  ` 
        <div class="post">
            <div class="post__title">
                ${post.title}
            </div>
            <p class="post__body">
                ${post.body}
            </p>
        </div>
        `
}

renderPosts(id);


// async function renderPosts() {
//     const id = localStorage.getItem("id")

//     //FETCHING API DYNAMICALLY
//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

//     //CONVERTING IT TO JAVASCRIPT
//     const postsData = await posts.json()
//     console.log(postsData)
    

//     //LINKING IT BACK TO HTML WITH DYNAMIC POST AND BODY
//     postListElement.innerHTML = postsData.map(post =>
//          `<div class="post">
//             <div class="post__title">
//                 ${post.title}
//             </div>
//             <p class="post__body">
//                 ${post.body}
//             </p>
//         </div>`).join('');

//     }

// renderPosts();