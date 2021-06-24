export const profile = (email, name) => {
    const mainBox = document.querySelector(".main-box");
    mainBox.innerHTML = "";

    let blogbox = document.createElement("div");
    let profileName = document.createElement("p");
    let emailText = document.createElement("p");

    blogbox.className = "blog-box";
    profileName.className = "author";
    emailText.className = "author";

    blogbox.innerHTML = "<h2>Profile</h2>";
    profileName.innerHTML = `<br><b>Name:</b> ${name}`;
    emailText.innerHTML = `<b>Email:</b> ${email}`;

    blogbox.appendChild(profileName);
    blogbox.appendChild(emailText);

    mainBox.appendChild(blogbox);
}