// components
import {login} from "./components/login.js";
import {signup} from "./components/signup.js";
import {createblog} from "./components/createblog.js";
// services
import {signupAuth, logOutUser, loginUser, onAuthChange} from "./services/auth.js";
import { createBlogs, deleteBlogs, profileStore, readBlogs, updateBlogs } from "./services/store.js";
// assigning components
const handelLogin = document.querySelector("#login");
const handelMainbox = document.querySelector(".nav-logo");
const handelSignup = document.querySelector("#signup");
const handelCreateblog = document.querySelector("#createblog");
const handelUpdateblog = document.querySelector("#updateblog");
const handelDeleteblog = document.querySelector("#deleteblog");
const mainBox = document.querySelector(".main-box");
const handelLogout = document.querySelector("#logout");
const handelDropdown = document.querySelector(".dropdown");
const handelProfile = document.querySelector("#profile");
// render components
function handelBlogHeading() {
    console.log("click")
}
readBlogs();
handelLogin.addEventListener("click", (e) => {
    repeter(login);
    loginUser(readBlogs);
});
handelSignup.addEventListener("click", (e) => {
    repeter(signup);
    signupAuth(readBlogs);
});
handelCreateblog.addEventListener("click", (e) => {
    repeter(createblog);
    createBlogs();
});
handelMainbox.addEventListener("click", (e) => {
    readBlogs();
})
handelLogout.addEventListener("click", (e) => {
    e.preventDefault();
    logOutUser();
    readBlogs();
})
handelProfile.addEventListener("click", (e) => {
    profileStore();
})
handelUpdateblog.addEventListener("click", (e) => {
    updateBlogs();
})
handelDeleteblog.addEventListener("click", (e) => {
    deleteBlogs();
})
onAuthChange(handelDropdown, handelLogin, handelSignup, handelLogout);
function repeter(a) {
    mainBox.innerHTML = "";
    mainBox.innerHTML = a();
}  