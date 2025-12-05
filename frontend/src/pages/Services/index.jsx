import './style.css'
import { useEffect, useState } from 'react'
import { deleteService, getServices } from '../../api/services'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Services() {
  const [ services, setServices ] = useState([])
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const response = await deleteService(id)

    if (response.status !== 204) {
      toast("Erro ao deletar, tentar novamente, mais tarde.")
      return
    }

    setServices(prev => prev.filter(service => service.id !== id))
  }

  const handleUpdate = async (service) => {
    navigate('/update/service', { state: { service } })
  }

  useEffect(() => {
    async function carregar() {
      const allServices = await getServices()
      setServices(allServices)
    }
    carregar()
  }, [])

  return (
    <main>
      <div className='list-group'>
        <Link to={'/create/service'}>
          <button className='bnt-create'>Criar</button>
        </Link>
        <div className='header'>
          <label>Data</label>
          <label>Horário</label>
          <label>Preço</label>
          <label>Ações</label>
        </div>
        {
          services.length == 0
            ? <>Não tem ninguém</>
            : services.map(service =>
              <div className='list-items' key={service.id}>
                <label>{ service.date }</label>
                <label>{ service.time }</label>
                <label>R$ { service.price }</label>
                <div className='actions'>
                  <button type='button' onClick={() => handleUpdate(service)}>Alterar</button>
                  <button type='button' onClick={() => handleDelete(service.id)}>Deletar</button>
                </div>
              </div>)
        }
      </div>
    </main>
  )
}

export default Services