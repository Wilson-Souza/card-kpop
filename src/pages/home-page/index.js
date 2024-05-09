import Footer from 'components/Footer';
import Forms from 'components/Forms';
import reducer, { DELETE_CARD, INSERT_CARD, TOGGLE_FAV } from 'components/Reducer';
import SectionCard from 'components/SectionCard';
import { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function HomePage() {

  const [sections, setSections] = useState([
    {
      id: uuidv4(),
      name: 'JYPE',
      color: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'SM',
      color: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'YG',
      color: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'HYBE',
      color: '#FAE9F5'
    },
  ])

  const [cards, dispatch] = useReducer(reducer, [])

  const newCardCreated = (card) => {
    dispatch({
      type: INSERT_CARD,
      card
    })
  }

  function deleteCard(id) {
    dispatch({
      type: DELETE_CARD,
      id
    })
  }

  function onOffFav(id) {
    //setCards(cards.map(card => {
    //  if (card.id === id) card.fav = !card.fav
    //  return card
    //}))
    dispatch({
      type: TOGGLE_FAV,
      id
    })
  }

  function changeSectionColor(color, id) {
    setSections(sections.map(section => {
      if (section.id === id) {
        section.color = color;
      }
      return section;
    }))
  }

  function newSection(newSection) {
    setSections([...sections, { ...newSection, id: uuidv4() }])
  }


  return (
    <div className="App">
      <Forms
        newCompany={newSection}
        listSections={sections.map(section => section.name)}
        newCard={idol =>
          newCardCreated(idol)}
      />

      {sections.map((section, index) => <SectionCard
        onFav={onOffFav}
        changeColor={changeSectionColor}
        key={index}
        section={section}
        cards={cards.filter(card => card.company === section.name)}
        onDelete={deleteCard}
      />
      )}
      <Footer />
    </div>
  )
}