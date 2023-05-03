import { useState} from 'react';
// esto viene por que genere un archivo index dentro de component, que funcona como archivo de barril 
// y es ideal para gestionar o centralizar mis importaciones
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {
  
    // si en useState declara array, entonces categories sera array
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState([ 'One Punch' ]);    
    
    const onAddCategory = ( newCategory ) => {
        // el operador spread coloca todos los componentes del array
        //console.log('validando .. ' + newCategory)

        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }

    return (
    
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
             {/* el setCategories que esta entre las llaves, es la funcion del hook*/} 
            <AddCategory                 
                //setCategories={ setCategories }
                onNewCategory = { (event) => onAddCategory(event) }
            
            />            


            {/* listado */}
            
            { 
                // eslint-disable-next-line no-unused-vars
                categories.map( ( category ) => (                         
                    <GifGrid  
                        key={ category} 
                        category={ category }
                    /> 

                    ) )
            }
                
                {/* gif item */}

        </>

  )
}
