import { LitElement, html } from 'lit-element';

export class LoginUser extends LitElement {

    static get properties(){
        return{
            userName:{
                type: String,
                hasChanged(newVal, oldVal) {
                    if (newVal > oldVal) {
                      console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
                      return true;
                    }
                    else {
                      console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
                      return false;
                    }
                  }
            },
            isVisible: {type: String},
            displayName: {type: String}
              
        };
    }
    constructor(){
        super();
        this.isVisible = "visible";
        this.displayName = "hidden";

    }
    render() {
        return html`
            <style>
                .loginInput {
                width: 50%;
                height: 20%;
                text-align: center;
                font-size: xx-large;
                border-top: none;
                border-left: none;
                border-right: none;
                border-color: white;
                margin: 20px;
                color: white;
                background-color: #1A5B92;
            }
            input.userName {
                width: 50%;
                height: 20%;
                text-align: center;
                font-size: xx-large;
                border: none;
                border-color: none;
                color: white;
                background-color: #1A5B92;
            }

            .hidden{
                visibility: hidden;
            }

            .visible{
                visibility: visible;
            }

            .sendButton {
                width: 50.8%;
                height: 15%;
                margin-top: 3%;
                font-size: large;
                font-size: x-large;
                background-color: #0070E0;
                border-color: #0070E0;
                border-radius: 16px;
                color: white;
            }
            </style>
            
            
            <input  class="userName ${this.displayName}" value="${this.userName}">
            <input id="txtUsuario" type="text" class="loginInput ${this.isVisible}" placeholder="Usuario" name="yourName">
            <br class="${this.isVisible}">
            <input type="password" class="loginInput ${this.isVisible}" placeholder="Contraseña"  name="yourPassword">
            <br class="${this.isVisible}">
            <button class="sendButton ${this.isVisible}" @click="${this.validar}"> Validar</button>
            
        `;
    }

    validar(){
        let newVal = this.shadowRoot.getElementById('txtUsuario').value;
        this.userName = newVal;
        this.displayName = "visible";
        this.isVisible = "hidden";
        console.log("Button cliked")
        location.href = "/mainPage.html";
    }
    
}
customElements.define('login-user', LoginUser);