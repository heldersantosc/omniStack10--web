import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css'
import './Sidebar.css'
import './Main.css'



function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    {/* Geolocalização */ }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, [])

  return (
    <div id="app">
      {/* sidebar */}
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      {/* main */}
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37608668?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Helder Santos</strong>
                <span> Excel, ReactJS</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
            <a href="https://github.com/heldersantosc">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37608668?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Helder Santos</strong>
                <span> Excel, ReactJS</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <a href="https://github.com/heldersantosc">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37608668?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Helder Santos</strong>
                <span> Excel, ReactJS</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
            <a href="https://github.com/heldersantosc">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37608668?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Helder Santos</strong>
                <span> Excel, ReactJS</span>
              </div>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
            <a href="https://github.com/heldersantosc">Acessar Perfil no GitHub</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
