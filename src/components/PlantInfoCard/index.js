
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { PropertyInfoWrapper } from "./styles";
import { FaHandshake,FaBuilding } from 'react-icons/fa';
import { Title, SubTitle, SecondaryText } from "../../globalStyles";
import { SquaredButton } from "../Button";
import { FaHome,FaArrowLeft,FaAvianex,FaPen } from 'react-icons/fa';


export const PlantInfoCard = (PropertyID) =>(

        <PropertyInfoWrapper>
            <Title>Planta Envigado</Title>
            <SecondaryText>Dirección: xxxx</SecondaryText>
            <SecondaryText>Área: xxx</SecondaryText>
            <div className="icon-container"> <SquaredButton icon={FaPen} link="/propertydetail" />  </div>

        </PropertyInfoWrapper>




    







)