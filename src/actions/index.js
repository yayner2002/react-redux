export const inc = (n) => {
    return {
        type : 'INCREMENT',
        payload : n
    }
}
export const dec = (n) => {
    return {
        type : 'DECREMENT',
        payload : n
    }
}