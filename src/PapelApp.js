import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';


 


import './PapelApp.css';
import PapelChatbot from './components/Chatbot/PapelChatbot';
import Dawer from './components/Dawer/Dawer'
import { useMediaQuery } from 'react-responsive'



const PapelApp = () => {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  
 

    const showDawer = (event)=>{
        if(!isTabletOrMobile){
            event.preventDefault();
            let dawer = document.getElementById('dawer');
            let parent = document.getElementById("parent");
            dawer.style.width = "330px";
            parent.style.marginLeft = "330px";
        }
        
    }

    return (
        <div>
            <Provider store= { store }>
                <div className="parent" id="parent">
               
                    <AppRouter />  
                    <PapelChatbot /> 
                    <div className="fab" onClick={showDawer}>
                        <i className="fas fa-cut" ></i>
                    </div>  
                    <Dawer/> 
                </div>      
            </Provider>
        </div>
    );
}

export default PapelApp;
