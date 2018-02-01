import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{

    public name: string = "";
    constructor(){}

    login()
    {
        while (this.name == "") 
        {
            this.name = prompt("Qual o seu nome?");
            this.name = this.name ? this.name : '';    
        }
    }
}