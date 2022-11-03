import axios from "axios";

export default class APIService {
    static GetAllMaterials() {
        return fetch("http://127.0.0.1:8000/material/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetAllKitchen() {
        return fetch("http://127.0.0.1:8000/kitchen/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetFAQS() {
        return fetch("http://127.0.0.1:8000/faqs/faq", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetBlogs() {
        return fetch("http://127.0.0.1:8000/blogs/blog", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetFilteredMaterials(queryParameters) {
        return fetch(`http://127.0.0.1:8000/material/products/search?${queryParameters}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetNonStandardPriceStandardDecor(queryParameters) {
        return fetch(`http://127.0.0.1:8000/ns-price/standard-decor?${queryParameters}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetNonStandardPriceStandardDecorFilters() {
        return fetch(`http://127.0.0.1:8000/ns-price/standard-decor-filters`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetFilteredKitchen(queryParameters) {
        return fetch(`http://127.0.0.1:8000/kitchen/products/search?${queryParameters}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetMaterial(id) {
        return fetch(`http://127.0.0.1:8000/material/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetKitchen(id) {
        return fetch(`http://127.0.0.1:8000/kitchen/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static GetCartItems(id) {
        return fetch(`http://127.0.0.1:8000/cart/items?user=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static DeleteCartItem(id) {
        return fetch(`http://127.0.0.1:8000/cart/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }

    static AddCartItem(body) {
        console.log(JSON.stringify(body))
        return fetch("http://127.0.0.1:8000/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then((resp) => resp.json());
    }

    static GetUser(id, token) {
        return fetch(`http://127.0.0.1:8000/auth/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            auth: {
                "Token": token
            }
        }).then((resp) => resp.json());
    }

    static LoginUser = async (body) => {
        console.log(body)
        const formData = new FormData()
        formData.append("email", body.email)
        formData.append("password", body.password)

        return axios({
            method: "post",
            url: "http://127.0.0.1:8000/auth/login",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"},
        });
    }

    static RegisterUser = async (body) => {
        const formData = new FormData()
        formData.append("email", body.email)
        formData.append("firstName", body.name)
        formData.append("password", body.password)
        formData.append("password2", body.confirmPassword)
        formData.append("personalID", body.personalNumber)
        formData.append("mobile", body.mobileNumber)
        formData.append("profilePicture", "")
        return axios({
            method: "post",
            url: "http://127.0.0.1:8000/auth/register",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"},
        });
    }

    static Logout() {
        return fetch("http://127.0.0.1:8000/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((resp) => resp.json());
    }
}
