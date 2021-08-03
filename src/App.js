import './App.css';
import MainpageComponent from './main/index.js';
import  './index.css';
import {Switch,Route}from'react-router-dom';
import UploadPage from './upload';
import ProductPage from './product';
function App() {
    
    return (<div>
        <Switch>
            <Route exact= {true} path={"/"}>
                <MainpageComponent/>
            </Route>
            <Route exact= {true} path={"/product/:id"}>
                <ProductPage/>
            </Route>
            <Route exact= {true} path={"/upload"}>
                <UploadPage/>
            </Route>
        </Switch>
        </div>);
    }

    export default App;