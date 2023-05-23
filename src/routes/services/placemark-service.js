// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";
import { user } from "../../stores.js";

export const placemarkService = {
    baseUrl: "http://localhost:3001",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set ({
                    email: email,
                    token: response.data.token
                });
                localStorage.addsite = JSON.stringify({email:email, token:response.data.token});
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
        localStorage.removeItem("site");
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

   async reload() {
        const addsiteCredentials = localStorage.addsite;
        if (addsiteCredentials) {
            const savedUser = JSON.parse(addsiteCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer" + savedUser.token;
        }
    },

    async addSite(addsite) {
        try {
            const response = await axios.post(this.baseUrl + "/api/users/" + addsite.user + "/addsite", site);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getSites() {
        try {
            const response = await axios.get(this.baseUrl + "/api/sites");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getGuides() {
        try {
            const response = await axios.get(this.baseUrl + "/api/guides");
            return response.data;
        } catch (error) {
            return [];
        }
    }
};