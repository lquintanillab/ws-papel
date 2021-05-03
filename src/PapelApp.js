import React, {useState} from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';



import './PapelApp.css';
import PapelChatbot from './components/Chatbot/PapelChatbot';
import Dawer from './components/Dawer/Dawer'
import { useMediaQuery } from 'react-responsive'



const PapelApp = () => {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    const [showDawer, setShowDawer] = useState(false);
  
    const toggleDawer =(event) =>{
        event.preventDefault();
        setShowDawer(!showDawer);
        if(!isTabletOrMobile){
            let dawer = document.getElementById('dawer');
            let parent = document.getElementById("parent");
            if(showDawer){
                dawer.style.width = "330px";
                parent.style.marginLeft = "330px";
            }else{
                dawer.style.width = "0px";
                parent.style.marginLeft = "0px";
            }
            
        }
    }

    return (
        <div>
            <Provider store= { store }>
                <div className="parent" id="parent">
               
                    <AppRouter />  
                    <PapelChatbot /> 
                    { !isTabletOrMobile ?
                        <div className="fab" onClick={toggleDawer}>
                        <i className="fas fa-cut" ></i>
                        </div>  :
                        null
                    } 
                    <Dawer/> 
                </div>      
            </Provider>
        </div>
    );
}

export default PapelApp;
