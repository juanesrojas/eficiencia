import styled from 'styled-components';
import { MENU_HEIGHT,PRIMARY_COLOR,SECONDARY_COLOR } from '../../constants/styleConstants';

export const PropertyBusinessTypeWrapper = styled.div`
    background-color:${SECONDARY_COLOR};
    border-radius: 25px;
    padding: 2px 3px;
    margin: 5px 2px;
    display: inline-block;

    div{
        display:flex;
        align-items: center;
        padding:3px 3px;
        margin:0;
    }
  
    svg{
        color: ${PRIMARY_COLOR};
        font-size: 1.2em;  
        margin: 0 5px;
        padding:0;
    }
    p{
        color:${PRIMARY_COLOR};
        font-size: 0.88em;
        margin: 0 5px;
        font-weight: bold;
        padding:0;

    }
`