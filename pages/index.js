import React from 'react'
import Link from 'next/link'

const Index = () => {
  return(
  <div>
    <p className='mt-12 text-center'  >Estamos sempre atentos para ouvir nossos clientes e melhorarmos nossos servicos. E ainda te dar Prêmios</p>
    <div className='text-center my-12' >
      <Link href='/pesquisa'>
       <a className='bg-blue-300 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' >Faça sua Crítica ou Sugestão </a>
       </Link>
    </div>
    <p className='mt-12 text-center'  >Mensagem de desconto</p>
 </div>)
}

export default Index