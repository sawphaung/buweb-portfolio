/* 
    Title: Footer.js
*/
class Footer extends HTMLElement {
    constructor() {
        super();   
    }

    connectedCallback() {
        this.innerHTML = `

            <!-- Quick Links  -->
    <section class="quick-links">
        <h2>Quick Links</h2>
        <div class="links-wrap">
            <div class="link">
                <span><i class="fab fa-github"></i></span>
                <a href="https://www.github.com/sawphaung" target="_blank">GitHub Repos.</a>
            </div>

            <div class="link">
                <i class="fas fa-university"></i>
                <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">Bellevue University's Degree</a>
            </div>

            <div class="link">
                <i class="fab fa-youtube"></i>
                <a href="http://www.youtube.com/user/bellevueuniversity" target="_blank">Course's Channel</a>
            </div>

            <div class="link">
                <span><i class="fas fa-code-branch"></i></span>
                <a href="https://www.github.com/buwebdev" target="_blank">Course's GitHub Repos.</a>
            </div>
        </div>
    </section>
            
            <footer class="main-footer">
                <p><span><i class="fas fa-heart"></i></span> Designed By Saw Phaung</p>
            </footer>
            
        `;
     }
}

customElements.define("footer-component", Footer);

