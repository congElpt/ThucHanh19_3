import { createContext, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  const register = (email, password) => {
    const newUser = { email, password }
    setUsers([...users, newUser])
  }

  const login = (email, password) => {
    const found = users.find(
      u => u.email === email && u.password === password
    )

    if (found) {
      setUser(found)
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      user,
      register,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}