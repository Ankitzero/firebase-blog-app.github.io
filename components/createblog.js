export const createblog = () => {
    return `
        <form class="login" id="createblogId">
            <header>Create Blog</header>
            <input type="text" name="title" placeholder=" Blog Title">
            <textarea name="content" placeholder=" Content ..."></textarea>
            <button type="submit">Create Blog</button>
        </form>`;
}