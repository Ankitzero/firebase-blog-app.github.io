const mainBox = document.querySelector(".main-box");
export const updateBlogsComponent = (data) => {
    const loader = document.querySelector(".loader");
    const messageBox = document.querySelector(".message-box");
    mainBox.innerHTML = `<h2 style="text-align: center; margin: 1%; text-decoration: underline;">Update Blog</h2>`;
    data.docs.forEach(doc => {
        let form = document.createElement("form");
        let header = document.createElement("header");
        let input = document.createElement("input");
        let textarea = document.createElement("textarea");
        let button = document.createElement("button");
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

            form.className = "login";
            form.setAttribute("id","updateBlogForm");
            
            header.textContent = "Update Blog";
            
            input.setAttribute("type", "text");
            input.setAttribute("name", "title");
            input.setAttribute("value", doc.data().title);

            textarea.setAttribute("name", "content");
            textarea.textContent = doc.data().content;

            button.setAttribute("type", "submit");
            button.innerHTML = "Update Blog";

            form.appendChild(header);
            form.appendChild(input);
            form.appendChild(textarea);
            form.appendChild(button);

            mainBox.appendChild(form);

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                messageBox.style.display = "none";
                loader.style.display = "block";
                db.collection('blogs').doc(doc.id).update({
                    title: e.target.title.value,
                    content: e.target.content.value
                }).then(() => {
                    loader.style.display = "none";
                    messageBox.innerHTML = "Blog Updated";
                    messageBox.style.display = "block";
                    setTimeout(() => {
                        messageBox.innerHTML = "";
                        messageBox.style.display = "none";
                    },3000);
                }).catch(err => {
                    loader.style.display = "none";
                    messageBox.innerHTML = `Error: ${err.message}`;
                    messageBox.style.backgroundColor = "red";
                    messageBox.style.display = "block";
                    setTimeout(() => {
                        messageBox.innerHTML = "";
                        messageBox.style.display = "none";
                    },5000);
                })
            })
        })
    })
}