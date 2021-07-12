export const addToSelectedItemsToStore = (data)=>{
    return {
        type: 'ADD',
        data: data
    }
}

export const removeFromSelectedItemsFromStore = (data)=>{
    return {
        type: 'REMOVE',
        data: data
    }
}