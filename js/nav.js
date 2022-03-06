/* 
    Title: Header.js
*/
class Nav extends HTMLElement {
    constructor() {
        super();   
    }

    connectedCallback() {
        this.innerHTML = `
           <header class="nav-header">

           <input id="nav-toggle" type="checkbox">
           <label for="nav-toggle" class="toggle"><span></span></label>     
        <nav>
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./Projects.html">Projects</a></li>
                <li><a href="./Database.html">Database Diagrams</a></li>
                <li><a href="./API.html">API Unit Tests</a></li>
                <li><a href="./About.html">About</a></li>
                <li><a href="./Resume.html">Resume</a></li>
            </ul>
        </nav>
    </header>
        `;
     }
}

customElements.define("nav-component", Nav);

