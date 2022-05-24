import { useState, useEffect } from "react";
import { PropertyTypeBtn } from "./components/PropertyTypeBtn";
import { UserHomeInfo } from "./components/UserHomeInfo";
import { PropertyTypesContainer } from "./styles";
import { FaBuilding,FaIndustry,FaHouseUser,FaWarehouse,  FaTree,  FaTractor } from 'react-icons/fa';
import { HomeMessage } from "./components/MessageBox";
import { PropertyCard } from "./components/CompanyCard";
import { Page } from "../../components/Page";




export var PropertyTypes = [
    {id:1, icon: FaBuilding, label:'Panadería X'},
    {id:2, icon: FaHouseUser, label:'Lacteos ABC'},
    {id:3, icon: FaTree, label:'Cárnicos z'},
    {id:4, icon: FaIndustry, label:'Empresa y'},
    {id:5, icon: FaWarehouse, label:'compañía 1'},


];



export const Home = () => {

    const [selectedPropertyType, setSelectedProperty] = useState(0);

    const propertyTypeHandler = (propID) =>{
        setSelectedProperty(propID);

    };

    useEffect(()=>{
        //acciones a ejecutar
        console.log('se modificó el tipo de propiedad al id ' + selectedPropertyType);
    }, [selectedPropertyType])

    return(

        <Page>

            

            <UserHomeInfo userName={"Juan Rojas"} userPicture={require("./components/UserHomeInfo/images/profile_picture.png")}/>
            
            <PropertyTypesContainer>
                
                {//código jsx
                    PropertyTypes.map(item => 
                        <PropertyTypeBtn 
                            icon={item.icon} 
                            label={item.label} 
                            id={item.id}
                            selected ={selectedPropertyType === item.id} 
                            onPress={ propertyTypeHandler} 
                        /> )
                }
            </PropertyTypesContainer>


            
            


        </Page>
        
    )


}