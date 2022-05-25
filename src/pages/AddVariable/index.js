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
                            <option value="Voltaje">Voltaje (V)</option>
                            <option value="Corriente">Corriente (A)</option>
                            <option value="Potencia">Potencia (W)</option>
                            <option value="Energía">Energía Activa (kWh)</option>
                            <option value="Reactiva">Potencia Reactiva (kVAr)</option>
                            <option value="Energía">Energía Reactiva (kVAhr)</option>
                            <option value="Consumo">Consumo Gas (m3)</option>
                            <option value="Temperatura">Temperatura (°C)</option>
                            <option value="on_off">On/Off</option>
                            <option value="conteo">Conteo (unidades)</option>
                            <option value="conteo">flujo (litros/seg)</option>
                            <option value="conteo">flujo (m3/seg)</option>
                            <option value="conteo">Presión (psi)</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Unidad de medida</label>
                    <div class="input">
                        <select >
                            <option value="Voltaje">V</option>
                            <option value="Corriente">A</option>
                            <option value="Potencia">W</option>
                            <option value="Energía">kWh</option>
                            <option value="Reactiva">kVAr</option>
                            <option value="Energía">kVAhr</option>
                            <option value="Consumo">m3</option>
                            <option value="Temperatura">°C</option>
                            <option value="on_off">On/Off</option>
                            <option value="conteo">unidades</option>
                            <option value="conteo">litros/seg</option>
                            <option value="conteo">m3/seg</option>
                            <option value="conteo">psi</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Energético Asociado</label>
                    <div class="input">
                        <select >
                            <option value="Energía Eléctrica">Energía Eléctrica</option>
                            <option value="Gas Natural">Gas Natural</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>¿la variable mide el consumo de un energético?</label>
                    <div class="input">
                        <select >
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </FormControl>

                <FormControl>
                    <label>¿El valor es acumulado?</label>
                    <div class="input">
                        <select >
                            <option value="Acumulado">Acumulado</option>
                            <option value="Instantaneo">Instantaneo</option>
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
                    <label>SetPoint</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Umbral máximo</label>
                    <div class="input">
                        <input type="number"/>
                    </div>
                </FormControl>

                <FormControl>
                    <label>Umbral mínimo</label>
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


