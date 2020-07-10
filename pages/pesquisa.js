import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [ form, setForm ] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Form: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
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
          <PageTitle title='Pesquisa'/>
            <h1 className='text-center font-bold my-6 text-2xl mb-6' >Críticas e Sugestões</h1>
            <p className='text-center'>Esse estabelecimento está atento a todas as sugestões dos nossos clientes.<br/> E estamos prontos para melhor atender-los </p>
          { !sucess &&  <div className='w-1/5 mx-auto' >
              <label className='font-bold' >Seu Nome:</label>

              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}  />

              <label className='font-bold' >Email:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email}   />

              <label className='font-bold' >Whatsapp:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />

              <label className='font-bold' >Digite aqui sua Sugestão ou Crítica:</label>
              <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Form' onChange={onChange} name='Form' value={form.Form} />

              <label className='font-bold' >Nota para o Estabelecimento:</label>
            <div className='flex' >
             {notas.map(nota=> {
              return (<label className='block w-1/6 text-center' >
                       {nota}<br/>
                       <input type='radio' name='Nota' value={nota} onChange={onChange} />
                     </label> )
            })
            }
            </div>

              <button className=' bg-blue-300 px-20 p-4 font-bold rounded-lg shadow-lg hover:shadow ' onClick={save}>Enviar</button>
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
                 <span className='font-bold block mb-2' >{retorno.Promo}</span>
                 <br/>
                 <span className='italic'> Tire um print ou foto desta tela e apresente no estabelecimento.</span> 
                 </div>
              }
            </div> }
        </div>
    )
}
export default Pesquisa