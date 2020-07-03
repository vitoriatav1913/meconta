import React from 'react'
import Link from 'next/link'

const Index = () => {
  return(
  <div>
    <p className='mt-12 text-center'  >Estamos sempre atentos para ouvir nossos clientes e melhorarmos nossos servicos. E ainda te dar Prêmios</p>
  <p>Teste</p>
    <div className='text-center my-12' >
      <Link href='/pesquisa'>
       <a className='bg-blue-300 px-6 py-4 font-bold rounded-lg shadow-lg ' >Dar opiniäo ou sugestäo</a>
       </Link>
    </div>
    <p className='mt-12 text-center'  >Mensagem de desconto</p>
 </div>)
}

export default Index