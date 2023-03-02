import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem , setImagem] = useState('')
    const [time, setTime] = useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time

        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados dos aventureiros para criar o Card</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Função"
                    placeholder="Digite sua função (Exemplo: Tank, DPS e Healer)"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Endereço de Imagem"
                    placeholder="Ex: http://github.com/krons1996.png"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Dungeon Party"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario