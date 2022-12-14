import ReactDOM from 'react-dom/client'
import {createContext, useState} from 'react'

import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

import "./style.css"

export const userContext = createContext("");
function App(){
    const [lang,setLang] = useState("es");
    const changeLang = (e:any) => {
      setLang(e);
    }
    return(
      <userContext.Provider value={lang}>
        <Header event={changeLang}/>
        <Main />
        <Footer />
      </userContext.Provider>
    );
}

export default function getLang(lang:any){
  switch(lang){
      case "es": return "es";
      case "en": return "en";
      case "fr": return "fr";
      default: return "es"
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App/>);