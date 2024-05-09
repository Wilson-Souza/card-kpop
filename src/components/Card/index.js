import invert from 'invert-color';
import { AiFillHeart, AiOutlineHeart, AiTwotoneCloseCircle } from "react-icons/ai";
import './card.css';

const Card = ({ card, backgroundColor, onDelete, onFav }) => {

    return (
        <div className='card'>
            <AiTwotoneCloseCircle
                size={35}
                className='delete'
                onClick={() => onDelete(card.id)}
            />
            <div className='cabecalho'>
                <img src='/imagens/dahyun.jpg' alt='imagem do card'></img>
            </div>
            <div style={{ backgroundColor: invert(backgroundColor) }} className='rodape'>
                <div className='box-text-card'>
                    <h4>{card.name}</h4>
                    <h5>{card.group}</h5>
                </div>
                <div className='fav'>
                    {card.fav
                        ? <AiFillHeart size={25} onClick={() => onFav(card.id)} color='red' />
                        : <AiOutlineHeart size={25} onClick={() => onFav(card.id)} color='white' />}
                </div>
            </div>
        </div>
    )
}

export default Card