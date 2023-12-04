import ShoeContainer from "./Components/ShoeContainer"
import Shoe from "./Components/Shoe"
import data from "./Components/zapato.json"

export function App(){
    return(
        <ShoeContainer>
            {   
                data.map( shoeItem=>    
                    <Shoe 
                        name= {shoeItem.nombre}
                        price = {shoeItem.precio}
                        reference = {shoeItem.referencia}
                        photo = {shoeItem.foto}
                        description  = {shoeItem.descripcion}
                    />
                 )
            }
            
        </ShoeContainer>
    )
}


