const mainBox = document.querySelector(".main-box");
export const mainBlogs = (data) => {
    mainBox.innerHTML = "";
    data.docs.forEach(doc => {
        let blogBox = document.createElement("div");
        let blogHeading = document.createElement("p");
        let blogAuthor = document.createElement("p");
        let blogInDetails = document.createElement("div");

        blogBox.className = "blog-box";
        blogBox.setAttribute("data-id",doc.id);
        
        blogHeading.className = "blog-heading";
        blogHeading.setAttribute("data-number",doc.id);
        blogHeading.textContent = doc.data().title;
        
        blogAuthor.className = "blog-author";
        blogAuthor.textContent = `by ${doc.data().author}`;

        blogBox.appendChild(blogHeading);
        blogBox.appendChild(blogAuthor);
        mainBox.appendChild(blogBox);

        // blogs in details
        // this code open a blog in detail
        blogHeading.addEventListener("click", (e) => {
            mainBox.innerHTML = "";

            blogHeading.className = "blog-in-details-heading";
            blogHeading.textContent = doc.data().title;

            blogAuthor.textContent = doc.data().content;

            blogInDetails.className = "blog-in-details";
            blogInDetails.appendChild(blogHeading);
            blogInDetails.appendChild(blogAuthor);
            mainBox.appendChild(blogInDetails);
        })
    })
}