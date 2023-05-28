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
        localStorage.removeItem("addsite");
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

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users");
            return response.data;
        } catch (error) {
            return [];
        }
    },

    async getUsersById() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users/{id}");
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

    async addSite(userId, site) {
        try {  // this is where most of the problems stemmed from last reiteration
            const response = await axios.post(this.baseUrl + `/api/users/${userId}/sites`, site);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    },

   /*  async site(site) {
        try {  // this is where most of the problems stemmed from last reiteration
            const response = await axios.post(this.baseUrl + "/api/users" + site.user + "/sites", site);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    } */

};

       