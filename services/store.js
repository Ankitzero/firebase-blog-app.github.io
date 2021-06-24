import {mainBlogs } from "../components/mainBlogs.js";
import { profile } from "../components/profile.js";
import { updateBlogsComponent } from "../components/update.js";
import { deleteblog } from "../components/deleteblog.js";
const loader = document.querySelector(".loader");
const messageBox = document.querySelector(".message-box");
// fetch data from firestore
export const readBlogs = () => {
    const mainBox = document.querySelector(".main-box");
    loader.style.display = "block";
    db.collection("blogs").get().then(data => {
        if(data.docs.length > 0) {
            mainBlogs(data);
            loader.style.display = "none";
        } else {
            mainBox.innerHTML = `<h2 style="text-align: center; margin: 1%; text-decoration: underline;">No Blogs</h2>`;
            loader.style.display = "none";
        }
    }).catch(err => {
        console.log("error",err.message);
        loader.style.display = "none";
    });
}

// create blog
export const createBlogs = () => {
    const form = document.querySelector("#createblogId");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let blogTitle = e.target.title.value;
        let blogContent = e.target.content.value;
        messageBox.style.display = "none";
        loader.style.display = "block";
        db.collection("users").doc(firebase.auth().currentUser.uid).get().then(data =>{
            return data.data().name;
        }).then(data => {
            db.collection("blogs").add({
                title: blogTitle,
                content: blogContent,
                author: data,
                bid: firebase.auth().currentUser.uid
            });
            loader.style.display = "none";
            messageBox.innerHTML = "Blog Created";
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
        form.reset();
    })
}
// profile
export const profileStore = () => {
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(data =>{
        profile(firebase.auth().currentUser.email, data.data().name);
    })
}
// update blogs
export const updateBlogs = () => {
    loader.style.display = "block";
    db.collection("blogs").where("bid", "==", firebase.auth().currentUser.uid).get().then(data => {
        updateBlogsComponent(data);
        loader.style.display = "none";
    }).catch(err => {
        console.log("error",err.message);
        loader.style.display = "none";
    });
}
// delete blogs
export const deleteBlogs = () => {
    loader.style.display = "block";
    db.collection("blogs").where("bid", "==", firebase.auth().currentUser.uid).get().then(data => {
        deleteblog(data);
        loader.style.display = "none";
    }).catch(err => {
        console.log("error",err.message);
        loader.style.display = "none";
    });
}