import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { ShortMenu } from "../../components/ShortMenu";
import { Page } from "../../components/Page";
import { CompanyInfoCard } from "../../components/CompanyInfoCard";
import { PrimaryText, SubTitle,Title } from "../../globalStyles";
import { PropertyImageScrolling } from "./components/PropertyImageScrolling";
import { PropertyOwnerInfo } from "./components/PropertyOwnerInfo";
import { PropertyDetailContainer } from "./styles";
import { PlantCard } from "../Home/components/PlantCard";
import { Button, SquaredButton } from "../../components/Button";

import { FaEye,FaEyeSlash} from 'react-icons/fa';




export const CompanyDetail = () => {

    const [visible, setVisible] = useState(false);

    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

return (

        <Page hideMenu>
            <PropertyDetailContainer>
                <ShortMenu/>
                <PropertyImageScrolling/>
                <CompanyInfoCard/>
                <div>
                    <SubTitle>Description:</SubTitle>
                    <PrimaryText>compañía dedicada a xxxx</PrimaryText>
                </div>

                <div>
                    <SubTitle>Departamento:</SubTitle>
                    <PrimaryText>cxxx</PrimaryText>
                </div>

                <div>
                    <SubTitle>Dirección Principal:</SubTitle>
                    <PrimaryText>cxxx</PrimaryText>
                </div>
                
            </PropertyDetailContainer>
            <br/>
            <Title>Jerarquía nivel 2:</Title>          
                        
            <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
            </div>
            <br/>
            {!visible  && <PlantCard/>}
            {!visible  && <PlantCard/>}
            {!visible  && <PlantCard/>}


            <Button 
                label="Crear nueva elemento en Jerarquía Nivel 2" 
                linkTo={"/add-plant"}
            />
             

            
        </Page>
    );
}