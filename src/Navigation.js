
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import {Home} from './pages/Home';
import { NotFound } from "./pages/NotFound";
import {CompanyDetail} from './pages/CompanyDetail';
import {Account} from './pages/Account';
import {Favorites} from './pages/Favorites';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import {EditCompanies} from './pages/EditCompanies'
import {AddCompany} from './pages/AddCompany'
import {MyProperties} from './pages/MyProperties'
import { Configuration } from "./pages/Config";
import { AddPlant } from "./pages/AddPlant";
import { AddMacroprocess } from "./pages/AddMacroprocess";
import { AddProcess } from "./pages/AddProcess";
import { AddDevice } from "./pages/AddDevice";
import { DeviceDetail } from "./pages/DeviceDetail";
import { AddVariable } from "./pages/AddVariable";
import { AddEnergetico } from "./pages/AddEnergetico";
import { AddProduct } from "./pages/AddProduct";
import { ProductDetail } from "./pages/ProductDetail";


export const Navigation= () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/companydetail' element={<CompanyDetail/>}/>
            <Route path='/device-detail' element={<DeviceDetail/>}/>
            <Route path='/product-detail' element={<ProductDetail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/edit-company' element={<EditCompanies/>}/>
            <Route path='/my-properties' element={<MyProperties/>}/>
            <Route path='/add-company' element={<AddCompany/>}/>
            <Route path='/add-plant' element={<AddPlant/>}/>
            <Route path='/add-macroprocess' element={<AddMacroprocess/>}/>
            <Route path='/add-process' element={<AddProcess/>}/>
            <Route path='/add-device' element={<AddDevice/>}/>
            <Route path='/add-variable' element={<AddVariable/>}/>
            <Route path='/add-energetico' element={<AddEnergetico/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/config' element={<Configuration/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
  
    
    </BrowserRouter>

); 