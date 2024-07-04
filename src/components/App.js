import React, {useState} from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";


function App() {
    let [api, updateApi] = useState("none")

    if (window.localStorage.getItem("API_key") == null) {
        api = prompt("Введите Ваш API-key :");
        alert("Если вы ввели неправильный API-ключ или собираетесь его изменить, вам необходимо очистить кэш вашего браузера, включить файлы cookie и т.д.")
        window.localStorage.setItem("API_key", api)
        updateApi(api)
    } else {
        api = window.localStorage.getItem("API_key")

    }

    return (
        <React.Fragment>
            <Header/>
            <div className="background">
                <div className="background-image"></div>

            </div>
            <Main api={api=="none" ? "" : api }/>
        </React.Fragment>    

    )
}



export default App;