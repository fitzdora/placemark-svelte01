// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import axios from "axios";

export const placemarkService = {
    baseUrl: "http://localhost:3001", // doublecheck this against API   
  
   
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("donation");
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
    }
};