//API for UserData
const baseUrl = process.env.BASE_URL

//FETCH USER DATA
export const getData = async (url, token) => {
    const res = await fetch (`${baseUrl}/api/${url}`,{
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}

//POST USER DATA
export const postData = async (url, post, token) => {
    const res = await fetch (`${baseUrl}/api/${url}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

//PUT USER DATA
export const putData = async (url, post, token) => {
    const res = await fetch (`${baseUrl}/api/${url}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

//PATCH USER DATA
export const patchData = async (url, post, token) => {
    const res = await fetch (`${baseUrl}/api/${url}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

//DELETE USER DATA
export const deleteData = async (url, token) => {
    const res = await fetch (`${baseUrl}/api/${url}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json()
    return data
}