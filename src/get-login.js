import { LitElement, html } from 'lit-element';

export class GetLogin extends LitElement {
    static get properties(){
        return{
            userName: {type: String}
        };
    }

    render() {
        return html`
        <div>
            ${this.userName}
        </div>  
        `;
    }
}
customElements.define('get-login', GetLogin);