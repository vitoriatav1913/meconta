import React from 'react'
import Link from 'next/link'

const Pesquisa = () => {
    return (
        <div className='pt-6' >
            <h1 className='text-center font-bold my-6 text-2xl mb-6' >Críticas e Sugestões</h1>
            <p className='text-center'>Esse estabelecimento está atento a todas as sugestões dos nossos clientes.<br/> E estamos prontos para melhor atender-los </p>
            <div className='w-1/5 mx-auto' >
              <label className='font-bold' >Seu Nome:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' />
            </div>
        </div>
    )
}
export default Pesquisa