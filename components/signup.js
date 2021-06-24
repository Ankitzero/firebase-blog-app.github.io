export const signup = () => {
    return `
    <form method="post" class="login" id="signupId">
        <header>Sign Up</header>
        <input type="text" name="name" placeholder=" Name" requried>
        <input type="text" name="email" placeholder=" Email" requried>
        <input type="password" name="password" placeholder=" Password" requried>
        <button type="submit">Sign Up</button>
    </form>
    `;
}