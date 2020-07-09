import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  const [ form, setForm ] = useState({
    Nome: '',
    Email: '',
    Whatsapp: ''
  })
  const [ sucess, setSucess ] = useState(false)
  const [ retorno, setRetorno ] = useState({})
  const save = async () => {
    
    try{
    const response = await fetch('/api/save',{
       method: 'POST',
       body: JSON.stringify(form)
   })
   const data = await response.json()
   setSucess(true)
   setRetorno(data)
}catch(err){
  }
}
const onChange = evt => {
  const value = evt.target.value
  const key = evt.target.name
  setForm(old => ({
    ...old,
    [key]: value
  }))
}
    return (
        <div className='pt-6' >
            <h1 className='text-center font-bold my-6 text-2xl mb-6' >Críticas e Sugestões</h1>
            <p className='text-center'>Esse estabelecimento está atento a todas as sugestões dos nossos clientes.<br/> E estamos prontos para melhor atender-los </p>
          { !sucess &&  <div className='w-1/5 mx-auto' >
              <label className='font-bold' >Seu Nome:</label>

              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}  />

              <label className='font-bold' >Email:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email}   />

              <label className='font-bold' >Whatsapp:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />

              <button className=' bg-blue-300 px-20 p-4 font-bold rounded-lg shadow-lg hover:shadow ' onClick={save}>Salvar</button>
            </div>}
            {sucess && <div className='w-1/5 mx-auto' >
              <p className='mb-6 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md p-4' >Obrigado por Participar</p> 
              {
                retorno.showCoupon && <div className='text-center  p-4 mb-4' >
                  Seu Cupom: <br/>
                 <span className='font-bold border text-xl' >{retorno.Cupom}</span> 
                 </div>
              }
              {
                retorno.showCoupon && <div className='text-center border p-4 mb-4' >
                 <span className='font-bold' >{retorno.Promo}</span> 
                 </div>
              }
            </div> }
        </div>
    )
}
export default Pesquisa