import {Link, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import api from '../../services/api';

export default function Lamps() {

  const [my_lamps, setLamps] = useState([]);
  const navigate = useNavigate();

  // READ, carrega dados da api
  useEffect(() => {
    api.get("api/v1/lamps",{})
    .then(response => {setLamps(response.data)})
  },[]);

  // UPDATE, atualiza dados na api
  async function updateLamp(id){
    try{
      navigate(`/newupdate/${id}`);
    }catch(err){
      alert("Erro ao atualizar!");
    }
  }

  // DELETE, apaga dados na api
  async function deleteLamp(id){
    try{
      await api.delete(`api/v1/lamps/${id}`,{});
      setLamps(my_lamps.filter(lamp => lamp.id !== id));
    }catch(err){
      alert("Erro ao excluir!");
    }
  }

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Lamps Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" style={{marginBottom: '10px'}}
          to="/newupdate/0">Novo
        </Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Modelo</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_lamps.map(lamp =>(
              <tr key={lamp.id}>
              <th scope="row">{lamp.id}</th>
                <td>{lamp.lamp_model}</td>
                <td>{lamp.description}</td>
                <td>

                  <button
                  data-testid="mybtn1"
                  type="button"
                  className="btn btn-outline-info"
                  style={{margin: '2px'}}
                  onClick={() => updateLamp(lamp.id)}
                  >Editar</button>

                  <button
                  data-testid="mybtn2"
                  type="button"
                  className="btn btn-outline-danger"
                  style={{margin: '2px'}}
                  onClick={() => deleteLamp(lamp.id)}
                  >Excluir</button>

                </td>
            </tr>
            ))}

          </tbody>
      </table>
  </div>
</div>
  );
}
