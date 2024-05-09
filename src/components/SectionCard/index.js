import invert from 'invert-color'
import Card from '../Card'
import './section-card.css'

const SectionCard = ({ section, cards, changeColor, onDelete, onFav }) => {

    return (
        (cards.length > 0) && <section className='section-card' style={{ background: section.color }}>
            <input value={section.color} onChange={event => changeColor(event.target.value, section.id)} type='color' className='input-color'></input>
            <h3 style={{ borderColor: invert(section.color) }}>{section.name}</h3>
            <div className='cards'>
                {cards.map((card, index) => {
                    return (<Card

                        key={index}
                        backgroundColor={section.color}
                        card={card}
                        onDelete={onDelete}
                        onFav={onFav}
                    />)

                })}
            </div>
        </section>
    )
}

export default SectionCard