/* eslint-disable react/prop-types */
import { useState } from  'react';


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState();
    
    const onInputChange = (event) => {
        //console.log(event.target.value)
        setInputValue( event.target.value )

    }

    const onSumited = ( event ) => {
        // para evitar un refresh del navegador hago un preventDefault
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('')
    }

    return (
        <form onSubmit={ onSumited }>            
            <input
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                //onChange={ (event) => onInputChange(event) }
                onChange= { onInputChange } 
            />
        </form>
        
    )
}
