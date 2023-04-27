export default function (data) {
    return Object.keys(data)
    .map(key => {
        return {
            id: key,
            ...data[key],
        }
    })
    .sort(function(x,y) {
        return(x.date > y.date) ? -1 : ((x.date > y.date) ? 1 : 0)
    })
}