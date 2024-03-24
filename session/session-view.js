export const buildSession = () => {
    return `
      <a class='nav' href="./login.html">Login</a>
      <a class='nav' href="./signup.html">Sign up</a>
    `;
  }
  
export const buildAuthenticatedSession = () => {
return `<button class='nav'>Log out</button> <a class='nav' href="./newad.html">Create Ad</a>`;
}
  