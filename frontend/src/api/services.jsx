import api from "./api"

export const getServices = async () => {
  const response = await api.get('/api/v1/services')

  if(response.status !== 200){
    return []
  }

  return response.data.services
}

export const createService = async (service) => {
  const response = await api.post('/api/v1/service', service)

  return response
}

export const updateService = async (id, service) => {
  const response = await api.put(`/api/v1/service/${id}`, service)

  return response
}

export const deleteService = async (id) => {
  const response = await api.delete(`/api/v1/service/${id}`)
  
  return response
}