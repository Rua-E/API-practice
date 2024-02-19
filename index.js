// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// HITTING FIRST API


// UNLOCKING THE PROMISE
async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersData = await users.json();
  const userListElement = document.querySelector(".user-list");
  
//PLACING THE INFORMATION INTO YOUR HTML TO DISPLAY ON WEBSITE
  userListElement.innerHTML = 
  usersData.map(
  (user) => userHTML(user)).join("");
}
main();

//ROUTING TO A NEW PAGE IN VANILLA JAVASCRIPT
function showUserPosts(id) {
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
}

// MAKING A FUNCTION OUTSIDE THE CODE TO MAKE IT EASIER TO READ
//onclick BUTTON TO TAKE YOU TO THE USER
function userHTML(user) {
 return `<div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
            <h3>${user.name}</h4>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}0</p>
                <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
                ${user.website}
                </a></p>
        </div>
    </div>` ;
}