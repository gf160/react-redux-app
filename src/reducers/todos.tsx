enum ActionType{
    ADD_TODO = "ADD_TODO",
    DEL_TODO = "DEL_TODO"
}
interface Action{
    type: ActionType,
    text: string
}

const todos = (state = [], action: Action) =>{
    switch (action.type) {
        case ActionType.ADD_TODO:
            return [...state, action.text];

        default:
            return state;
    }
}

export default todos;