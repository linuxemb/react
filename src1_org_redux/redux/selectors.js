import { VISIBILITY_FILTERS }  from  "../constants"; 

export const getTodoState = store => store.todos;

export const getTodoList = store => 
    getTodoState(store) ? getTodoState(store).allIds :[];

export const getTodoById = (store,id) =>
    getTodoState(store) ? { ...getTododState(store).byIds[id],id} : {};
    
    /* select form store combinning info from mulitple reducers */

export const getTodos = store =>
getTodoList(store).map(id => getTodoById(store,id));

export const getTodoByVisibilityFilter = (store, visibiliyFilter) => {
    const allTodos = getTodos(store);
    switch (visibiliyFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo=> todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;

    }
};
