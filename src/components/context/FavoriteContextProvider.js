import React, {useReducer} from "react";
const initialState={
    favoritedItems : []
}
const favoriteReducer = (state, action) =>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.favoritedItems.find(item))
    }
}
const FavoriteContextProvider = () => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState)
    return <div></div>;
};

export default FavoriteContextProvider;
