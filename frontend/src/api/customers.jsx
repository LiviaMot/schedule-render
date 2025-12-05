import api from "./api"

export const getCustomers = async () => {
  const response = await api.get('/api/v1/customers')

  if(response.status !== 200){
    return []
  }

  return response.data.customers
}

export const createCustomer = async (customer) => {
  const response = await api.post('/api/v1/customer', customer)
    
  return response
}

export const updateCustomer = async (id, customer) => {
  const response = await api.put(`/api/v1/customer/${id}`, customer)

  return response
}

export const deleteCustomer = async (id) => {
  const response = await api.delete(`/api/v1/customer/${id}`)

  return response
}

export const loginCustomer = async (email, password) => {
  const response = await api.post('/api/v1/login', { email, password })

  return response
}