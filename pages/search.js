import React, { useState } from "react";
import PageTitle from '../components/PageTitle';

const Search = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 5
    });

    const notas = [0, 1, 2, 3, 4, 5];
    const [sucess, setSucess] = useState(false);
    const [retorno, setRetorno] = useState({});

    const onChange = evt => {
        const value = evt.target.value;
        const key = event.target.name
        setForm(old => ({
            ...old,
            [key]: value
        }));
    }

    const save = async () => {

        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            });

            const data = await response.json();
            setSucess(true);
            setRetorno(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="pt-6">
            <PageTitle title='Pesquisa' />
            <h1 className="text-center font-bold my-4 text-2xl">Críticas e sugestões</h1>
            <p className="mb-6 my-12 text-center">
                O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            {!sucess &&
                <div className="w-1/5 mx-auto">
                    <label className="font-bold" htmlFor="">Seu nome:</label>
                    <input className="p-4 block shadow bg-blue-100 my-2 rounded" type="text" placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
                    <label className="font-bold" htmlFor="">E-mail:</label>
                    <input className="p-4 block shadow bg-blue-100 my-2 rounded" type="text" placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
                    <label className="font-bold" htmlFor="">Whatsapp:</label>
                    <input className="p-4 block shadow bg-blue-100 my-2 rounded" type="text" placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />

                    <label className="font-bold" htmlFor="">Nota:</label>
                    <div className='flex py-6'>
                        {
                            notas.map(nota => {
                                return (
                                    <label className='block w-1/6 text-center' key={nota}>
                                        {nota}<br />
                                        <input type="radio" name='Nota' value={nota} onChange={onChange} key={nota} />
                                    </label>
                                )

                            })
                        }
                    </div>

                    <button className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg' onClick={save}>Salvar</button>
                </div>
            }
            {sucess &&
                <div className="w-1/5 mx-auto">
                    <p className='mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com a sua sugestão ou crítica.</p>
                    {retorno.showCoupon &&
                        <div className='text-center border p-4 mb-4'>
                            Seu cupom: <br />
                            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
                        </div>
                    }
                    {retorno.showCoupon &&
                        <div className='text-center border p-4 mb-4'>
                            <span className='font-bold block mb-2'>{retorno.Promo}</span>
                            <br />
                            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon.</span>
                        </div>
                    }
                </div>



            }
        </div>
    );
}

export default Search;