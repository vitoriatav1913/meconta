import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const {data, error} = useSWR('/api/get-promo',fetcher)

  return(
  <div>
    <PageTitle title='Página inicial'/>
    <p className='mt-12 text-center'  >Estamos sempre atentos para ouvir nossos clientes e melhorarmos nossos servicos. E ainda te dar Prêmios</p>
    <div className='text-center my-12' >
      <Link href='/pesquisa'>
       <a className='bg-blue-300 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' >Faça sua Crítica ou Sugestão </a>
        </Link>
    </div>
    { !data  && <p></p> }
    {!error && data && data.showCoupon  }
    
    
 </div>)
}

export default Index