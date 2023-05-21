// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";
import { user } from "../../stores.js";

export const placemarkService = {
    baseUrl: "http://localhost:3001", // doublecheck this against API   
  
   
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set ({
                    email: email,
                    token: response.data.token
                });
                localStorage.addplace = JSON.stringify({email:email, token:response.data.token});
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("addplace");
    },

    async signup(firstname, lastname, email, password) {
        try {
            const userDetails = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            };
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    reload() {
        const addplaceCredentials = localStorage.addplace;
        if (addplaceCredentials) {
            const savedUser = JSON.parse(addplaceCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer" + savedUser.token;
        }
    }
};