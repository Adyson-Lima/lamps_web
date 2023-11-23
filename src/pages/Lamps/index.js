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


      </div>
    </div>
  );
}
