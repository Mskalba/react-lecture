import { ADD_MENU_ELEMENT, REMOVE_MENU_ELEMENT } from './../actions/types';

let menuId = 0;
const menu = (state = [], action) => {
    switch (action.type) {
        case ADD_MENU_ELEMENT:
            return [...state, action.text + ' ' + menuId++];
        case REMOVE_MENU_ELEMENT:
            const [,...last] = state;
            return last;
        default:
            return state;
    }
}

export default menu;