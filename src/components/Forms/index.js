import './forms.css'
import Field from '../Field'
import Select from '../Select'
import Button from '../Button'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Forms = (props) => {

    const [name, setName] = useState('')
    const [group, setGroup] = useState('')
    const [company, setCompany] = useState('')
    const [id, setId] = useState('')
    const [fav, setFav] = useState('')

    const [nameCompany, setNameCompany] = useState('')
    const [colorCompany, setColorCompany] = useState('#7fffd4')

    const onSave = (event) => {
        event.preventDefault()
        props.newCard({
            id,
            name,
            group,
            company,
            fav
        })
        const newId = uuidv4()
        setName('')
        setGroup('')
        setCompany('')
        setId(newId)
        setFav(false)
    }

    return (
        <section className='form-section'>
            <form className='form-card' onSubmit={onSave}>
                <h2>CRIAR CARD DO IDOL</h2>
                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome"
                    value={name}
                    onChangeValue={value => setName(value)}
                />
                <Field
                    required={true}
                    label="Grupo"
                    placeholder="Digite o grupo"
                    value={group}
                    onChangeValue={value => setGroup(value)}
                />
                <Select
                    required={true} label="Empresa" items={props.listSections}
                    value={company} onChangeValue={value => setCompany(value)}
                />
                <Button>Criar Card</Button>
            </form>
            
            <form className='form-company' onSubmit={(event) => {
                event.preventDefault()
                props.newCompany({name: nameCompany, color: colorCompany})
            }}>
                <h2>CRIAR NOVA EMPRESA</h2>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome da Empresa"
                    value={nameCompany}
                    onChangeValue={value => setNameCompany(value)}
                />
                <Field
                    required
                    label="Cor"
                    type="color"
                    placeholder="Seleciona uma cor"
                    value={colorCompany}
                    onChangeValue={value => setColorCompany(value)}
                />
                <Button>Criar Empresa</Button>
            </form>
        </section>
    )
}

export default Forms