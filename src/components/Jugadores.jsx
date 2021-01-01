import React from "react";
import { connect } from "react-redux";

const Jugadores = ({ jugadores }) => (
  <section>
    <h2>Jugadores</h2>
    <div className="contenedor-jugadores">
      {jugadores.map((j) => (
        <article className = "jugador">
          <img src={j.foto} alt={j.nombre}></img>
          <h3>
             {j.nombre} 
          </h3>
          <div>
            <button>Titular</button>
            <button>Suplente</button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const mapStateToProps = state => ({
  jugadores: state.jugadores,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);

//1.- Definimos estructura del componente en forma de función.
//2.- Conectamos componente con el Store.js: función connect()().
//3.- Definimos el mapStateToProps que transforma cosas del estado
// en propiedades del componente.
//4.- Definimos el mapDispatchToProps que tranforma acciones en propiedades.
