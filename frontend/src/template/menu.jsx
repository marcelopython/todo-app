import React from 'react'

export default porps=>(

<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="navbar-header">
        <a href="#" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#/todos">Tarefas</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#/about">Sobre</a>
      </li>
    </ul>
  </div>
</nav>
);

