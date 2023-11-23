import {Link, useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
//import api from '../../services/api';

export default function Lamps() {
  return(
    <div className="card border-primary" style={{marginTop: '20px'}}>
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Lamps Crud
      </div>
      <div className="card-body">

        {/* botão para criar novo */}
        <Link className="btn btn-success" style={{marginBottom: '10px'}}
          to="/newupdate/0">Novo
        </Link>

        {/* inicio tabela */}
      <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">###</th>
              <th scope="col">###</th>
              <th scope="col">###</th>
              <th scope="col">###</th>
            </tr>
          </thead>
          <tbody> {/* inicio map de elementos tabela */}

              <tr>
                <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td>
                    <button
                    type="button"
                    className="btn btn-outline-info"
                    style={{margin: '2px'}}

                    >Editar</button>

                    <button type="button"
                    className="btn btn-outline-danger"
                    style={{margin: '2px'}}

                    >Excluir</button>

                  </td>
              </tr>

            </tbody>
        </table> {/* final tabela */}


      </div>
    </div>
  );
}
