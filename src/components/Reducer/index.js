export const TOGGLE_FAV = 'TOGGLE_FAV'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const DELETE_CARD = 'DELETE_CARD'
export const INSERT_CARD = 'INSERT_CARD'
const reducer = (state, action) => {
    switch (action.type) {
        case INSERT_CARD:
            return [...state, action.card];

        case DELETE_CARD:
            return state.filter(card => card.id !== action.id);

        case TOGGLE_FAV:
            return (state.map(card => {
                if (card.id === action.id) card.fav = !card.fav
                return card
            }))
        default:
            return state;
    }
}

export default reducer;