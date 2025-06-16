import axios from 'axios'
import { ref } from 'vue'

export const isAuthenticated = ref(false)
export const user = ref(null)

export const setUser = (userData) => {
    user.value = userData
    isAuthenticated.value = true
}

export const logout = () => {
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
}

const token = localStorage.getItem('token')

if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    axios.get('https://runka-1.onrender.com/auth/me')
        .then(({ data }) => {
            setUser(data)
        })
        .catch(() => {
            logout()
        })
}
