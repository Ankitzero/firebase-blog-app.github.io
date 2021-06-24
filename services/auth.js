// sign up user 
const loader = document.querySelector(".loader");
const messageBoxAuth = document.querySelector(".message-box");
const signupAuth = (repeterBox) => {
    const handelSignupAuth = document.querySelector("#signupId");
    handelSignupAuth.addEventListener("submit", (e) => {
        e.preventDefault();
        messageBoxAuth.style.display = "none";
        loader.style.display = "block";
        auth.createUserWithEmailAndPassword(e.target.email.value, e.target.password.value).then(cred => {
            return db.collection("users").doc(cred.user.uid).set({
                name: e.target.name.value
            });
        }).then(() => {
            handelSignupAuth.reset();
            loader.style.display = "none";
            repeterBox();
        }).catch((err) => {
            loader.style.display = "none";
            messageBoxAuth.style.backgroundColor = "red";
            messageBoxAuth.innerHTML = `Error: ${err.message}`;
            messageBoxAuth.style.display = "block";
            setTimeout(() => {
                messageBoxAuth.innerHTML = "";
                messageBoxAuth.style.display = "none";
            },5000);
        });
    })
}

// login user

const loginUser = (repeterBox) => {
    const handelLoginUser = document.querySelector("#loginId");
    handelLoginUser.addEventListener("submit", (e) => {
        e.preventDefault();
        messageBoxAuth.style.display = "none";
        loader.style.display = "block";
        auth.signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
            .then((cred) => {
                handelLoginUser.reset();
                loader.style.display = "none";
                repeterBox();
            }).catch((err) => {
                loader.style.display = "none";
                messageBoxAuth.style.backgroundColor = "red";
                messageBoxAuth.innerHTML = `Error: ${err.message}`;
                messageBoxAuth.style.display = "block";
                setTimeout(() => {
                    messageBoxAuth.innerHTML = "";
                    messageBoxAuth.style.display = "none";
                },5000);
            });
    })
}

// logout user

const logOutUser = () => {
    messageBoxAuth.style.display = "none";
    loader.style.display = "block";
    auth.signOut().then(() => {
        loader.style.display = "none";
    }).catch((err) => {
        loader.style.display = "none";
        messageBoxAuth.style.backgroundColor = "red";
        messageBoxAuth.innerHTML = `Error: ${err.message}`;
        messageBoxAuth.style.display = "block";
        setTimeout(() => {
            messageBoxAuth.innerHTML = "";
            messageBoxAuth.style.display = "none";
        },5000);
    });
}

// on auth state change

const onAuthChange = (createbloglink, loginlink, signuplink, logoutlink) => {
    auth.onAuthStateChanged(user => {
        if(user) {
            loginlink.style.display = "none";
            signuplink.style.display = "none";
            createbloglink.style.display = "inline-block";
            logoutlink.style.display = "inline-block";
        } else {
            loginlink.style.display = "inline-block";
            signuplink.style.display = "inline-block";
            createbloglink.style.display = "none";
            logoutlink.style.display = "none";
        }
    })
}
export {signupAuth, logOutUser, loginUser, onAuthChange};