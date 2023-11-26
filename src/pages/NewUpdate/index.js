import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from "../../services/api";

export default function NewUpdate() {

  const [lamp_model, setLampModel] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  // O nome lamp_id, é o mesmo definido na rota
  const{lamp_id} = useParams();

  // CREATE/UPDATE, cria ou atualiza lamp na api
  async function saveOrUpdate(e){
    e.preventDefault();

    const data = {lamp_model, description};

    if(lamp_id === '0'){

      try{
        await api.post('api/v1/lamps', data, {});
        navigate('/');
      }catch(err){
        alert("Erro ao salvar!");
      }

    }else{

      try{
        await api.patch(`api/v1/lamps/${lamp_id}`, data, {});
        navigate('/');
      }catch(err){
        alert("Erro ao atualizar!");
      }

    }

  }

  // Carrega um registro específico da api, e seta dados para update
  async function loadLamp(){

    try{
      const response = await api.get(`/api/v1/lamps/${lamp_id}`,{});
      setLampModel(response.data.lamp_model);
      setDescription(response.data.description);

    }catch(err){
      alert("Erro ao garregar dados da api!");
      navigate('/');
    }

  }

  // Chama loadLamp() para preencher dados no form
  useEffect(() => {
    if(lamp_id === '0'){
      return;
    }else{
      loadLamp();
    }

  },[lamp_id]);


  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Lamps Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" style={{marginBottom: '5px'}}        to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>
          <div className="form-group">
            <label htmlFor="lamp_model">Modelo</label>
            <input
              data-testid="input1"
              id="lamp_model"
              type="text"
              style={{marginBottom: '20px'}}
              className="form-control"
              placeholder="Modelo"
              value={lamp_model}
              onChange={ e => setLampModel(e.target.value)}
              ></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input
              data-testid="input2"
              id="description"
              type="text"
              style={{marginBottom: '20px'}}
              className="form-control"
              placeholder="Descrição"
              value={description}
              onChange={ e => setDescription(e.target.value)}
              ></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>
      </div>
    </div>
  );
}
