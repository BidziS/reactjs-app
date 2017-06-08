import delay from './delay';

const words = [
    {
        id: 'pl',
        name: "Księgarnia Internetowa",
        nav:{
            nav_home: "Strona Główna",
            nav_manage_elements: "Zarządzaj Elementami",
            nav_config: "Konfiguruj System",
            nav_quest: "Gość",
            nav_user: "Witaj ",
            nav_log_in: "Zaloguj",
            nav_log_out: "Wyloguj"
        },
        login_form:{
            login: "Login",
            password: "Hasło",
            submit: "Zaloguj",
            abort: "Anuluj"
        }
    },
    {
        id: 'en',
        name: "Online bookshop",
        nav:{
            nav_home: "Home Page",
            nav_manage_elements: "Manage Elements",
            nav_config: "Config System",
            nav_quest: "Quest",
            nav_user: "Welcome ",
            nav_log_in: "Log in",
            nav_log_out: "Log out"
        },
        login_form:{
            login: "Login",
            password: "Password",
            submit: "Log In",
            abort: "Abort"
        }
    }
];

class LanguageApi {
    static getPolishWords() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, words[0]));
            }, delay);
        });
    }
    static getEnglishWords() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, words[1]));
            }, delay);
        });
    }
    static getInitialState(){
        return words[0];
    }

}

export default LanguageApi;
