import axios from 'axios'

const url = "http://localhost:3000/"
//const url = 'https://integration1.herokuapp.com'

export const getUserPlatillo =(id) =>{
 return axios.get(url+'comida/detail/'+ id)
 .then(res => {
     console.log('ressUltimo',res)
     return res.data
 }).catch(e=>e)
}

export const getUserPlatillos = () =>{
  const token = localStorage.getItem('token')
   return axios.get(url + 'comida/own/',{
     headers:{
        "Authorization":token
    }  
   }).then(res=>{
       console.log('REEEEESSSSS',res)
       return res.data
   })    
     .catch(e=>e)
}
export const getPlatillos = () =>{
    //const token = localStorage.getItem('token')
     return axios.get(url + 'comida/',{
       headers:{
          //"Authorization":token
      }  
     }).then(res=>{
         console.log('REEEEESSSSS',res)
         return res.data
     })    
       .catch(e=>e)
  }




export const toggleFollow = (id) => {
    const token = localStorage.getItem('token')
    return axios.put(url + 'users/follow/' + id + '/', {}, {
        headers:{
            "Authorization":token
        }  
    })
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(e=>e)
}

export const getUserPics = () => {
    const token = localStorage.getItem('token')
    return axios.get(url + 'pictures/own/',{
        headers:{
            "Authorization":token
        }
    })
    .then(res=>{
        console.log(res)
        return res.data
    })
    .catch(e=>e)
}

export const getUserData = (id) => {
    return axios.get(url + 'users/' + id)
    .then(res=>{
        console.log('data of users::::::',res)
        return res.data
    })
    .catch(e=>e)
}

export const uploadPic = (file) => {
    const form = new FormData
    form.append('file', file)
    const token = localStorage.getItem('token')
    return axios.post(url + 'pictures/', form, {
        headers:{
            "Authorization":token
        }
    })
    .then(picture=>picture)
    .catch(e=>e)
}