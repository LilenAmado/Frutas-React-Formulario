import React, {Fragment} from 'react'

const Formulario = () => {
    let [Fruta, setFruta] = React.useState('')
    let [descripcion, setDescripcion] = React.useState('')
    let [lista, setLista] = React.useState([])

    const guardarDatos = (e)=>{
        e.preventDefault() //Evento de envío por defecto cancelado
        
        if(!Fruta.trim() && !descripcion.trim()){
            console.log('Los campos estan incompletos')
            return
        }else if(!Fruta.trim()){
            console.log('Fruta vacía')
            return
        }else if(!descripcion.trim()){
            console.log('Descripción vacía')
            return
        }

        console.log(`Procesando datos... | Fruta: ${Fruta} Descripción: ${descripcion}`)
    
        setLista([
            ...lista,
            { 
                NombreFruta: Fruta,
                NombreDescripcion: descripcion
            }
        ])

        e.target.reset() //Deja vacío los campos nuevamente
        setFruta('') //Deja vacío los campos nuevamente
        setDescripcion('') //Deja vacío los campos nuevamente
    }

    return (
        <Fragment>
            <h1 className="text-center">Agregue su fruta:</h1>
            <form onSubmit={guardarDatos}>

                <input type="text" placeholder="Nombre de Fruta" className="form-control mb-2 mt-5" onChange={(e)=> setFruta(e.target.value)}/>
                
                <input type="text" placeholder="Ingrese su descripción" className="form-control mb-2" onChange={(e)=> setDescripcion(e.target.value)}/>

                <button className="btn btn-success w-100" type="submit">Agregar</button>

                <ul className='mt-4'>
                    {
                        lista.map((item, i) =>(
                            <li key={i}>{item.NombreFruta} - {item.NombreDescripcion}</li>
                        ))
                    }
                </ul>
            
            </form>
        </Fragment>
    )
}

export default Formulario