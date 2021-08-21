import renderToDom from "./renderToDom.js";

const initialScreen = () =>  {
    console.log("Running");
    const domString = `
    <h1>Dotard & Simbleton</h1>
    `
    renderToDom('#titleBar', domString);
};

export default initialScreen;