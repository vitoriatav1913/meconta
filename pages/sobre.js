import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre'/>
            <h1 className='font-bold text-4xl text-center italic' >Sobre nós</h1>
            <p>Aqui nesse tópico contamos sobre a empresa. É super importante
                fazer uma descrição breve e rápida que possa impactar o cliente <br/>
            </p>
         <div>
            <Link href='/' className='text-center'>
                <p className='font-bold p-8 mb-4 flex-start' >Pagina Inicial</p>
            </Link>
         </div>
       </div>  
    )
}

export default Sobre 