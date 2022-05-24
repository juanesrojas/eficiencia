import {useState} from "react"; //Recomendación usar los hooks al comienzo
import { PlantInfoCard } from "../../../../components/PlantInfoCard";
import { PropertyCardWrapper, PropertyImageWrapper } from "./styles";
import { Link } from "react-router-dom";
import { SubTitle } from "../../../../globalStyles";
import { CompanyCard } from "../CompanyCard";
import { MacroprocessCard } from "../MacroprocessCard";
import { Button, SquaredButton } from "../../../../components/Button";
import { FaEye,FaEyeSlash} from 'react-icons/fa';


export const PlantCard = () =>{
    const [visible, setVisible] = useState(true);

    const tooglePasswordVisible = () =>{
        //setVisible((visible) => !visible);
        setVisible(!visible);
        console.log(visible);
    };

return (

        <PropertyCardWrapper>
           
            <div>
                <PlantInfoCard/>
            </div>   
            <br/>
            <div>
                <SubTitle>Jerarquía Nivel 3</SubTitle>

                <div class="pswViewContainer" style={{"flex":"1","display":"flex","align-items":"center","justify-content":"center"}}>
                    <SquaredButton icon={!visible ? FaEyeSlash:FaEye} color={"#4A148C"}  link="" funct={tooglePasswordVisible}/>
                </div>

                <br/>
                {!visible  && <MacroprocessCard/>}
                {!visible  && <MacroprocessCard/>}
                {!visible  && <MacroprocessCard/>}

                

                <br/>
                <Button
                label="Crear nueva elemento en Jerarquía Nivel 3" 
                linkTo={"/add-macroprocess"}
            />
            </div>

          
        </PropertyCardWrapper>




    );
};