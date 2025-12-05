import { useEffect, useState } from 'react'
import { deleteCustomer, getCustomers } from '../../api/customers'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Customers() {
  const [ customers, setCustomers ] = useState([])
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const response = await deleteCustomer(id)

    if (response.status !== 204) {
      toast("Erro ao deletar, tentar novamente, mais tarde.")
      return
    }

    setCustomers(prev => prev.filter(customer => customer.id !== id))
  }

  const handleUpdate = async (customer) => {
    navigate('/update/customer', { state: { customer } })
  }

  useEffect(() => {
    async function carregar() {
      const allCustomers = await getCustomers()
      setCustomers(allCustomers)
    }
    carregar()
  }, [])

  return (
    <main>
      <div className='list-group'>
        <Link to={'/create/customer'}>
          <button className='bnt-create'>Criar</button>
        </Link>
        <div className='header'>
          <label>Nome</label>
          <label>Email</label>
          <label>Ações</label>
        </div>
        {
          customers.length == 0
            ? <>Não tem ninguém</>
            : customers.map(customer =>
              <div className='list-items' key={customer.id}>
                <label>{ customer.name }</label>
                <label>{ customer.email }</label>
                <div className='actions'>
                  <button type='button' onClick={() => handleUpdate(customer)}>Alterar</button>
                  <button type='button' onClick={() => handleDelete(customer.id)}>Deletar</button>
                </div>
              </div>)
        }
      </div>
    </main>
  )
}

export default Customers