import React from 'react';
import AboutPage from './AboutPage';
import Header from './common/Header';
import HomePage from './HomePage';


function App(){   
    function getPage() {
        const route = window.location.pathname;
        if(route === "/about") return <AboutPage />;
        return <HomePage />;
    }
    return(
    <div className="container-fluid">
    <Header />
     {getPage()}
    </div>
    ); 
 


    }


  

export default App;