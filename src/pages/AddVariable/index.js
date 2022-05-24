import { ShortMenu } from "../../components/ShortMenu";
import { Button, SquaredButton } from "../../components/Button";
import { Page } from "../../components/Page";
import { FormControl, PrimaryText, Title } from "../../globalStyles";
import {useState} from "react";

import { FaEye,FaEyeSlash} from 'react-icons/fa';

export const AddVariable =()=>{
    const [visible, setVisible] = useState(false);
    return(

        <Page hideMenu>
            <ShortMenu/>
    
            <Title>Agregar nueva variable al equipo</Title>
            <br/>
            <form>
    
                <FormControl>
                    <label>Nombre de la variable</label>
                    <div class="input">
                        <input type="text"/>
                    </div>
                </FormControl>
    
                
              
                <FormControl>
                    <label>Tipo de vatiable</label>
                    <div class="input">
                        <select >
                            <option value="Apto">Voltaje (V)</option>
                            <option value="Casa">Corriente (A)</option>
                            <option value="Local">Potencia (W)</option>
                            <option value="Lote">Energía Activa (kWh)</option>
                            <option value="Lote">Energía Reactiva (kWh)</option>
                            <option value="Lote">Consumo Gas (m3)</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Factor multiplicador</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Link a BD</label>
                    <div class="input">
                        <select >
                            <option value="Apto">12545</option>
                            <option value="Casa">854964654</option>
                            <option value="Local">5446445</option>
                            <option value="Lote">4564645</option>
                            <option value="Lote">456455645</option>
                            <option value="Lote">436456</option>
                        </select>
                    </div>
                </FormControl>
    
                <br/>
                <Button 
                    label="Guardar variable" 
                    onPress={()=>{alert('Variableagregada')}}
                />
    
    
    
            </form>
    
            
        </Page>
    
    )

}


