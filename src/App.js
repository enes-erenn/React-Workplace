
import './App.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [onHover, setOnHover] = useState(false)

  return (
    <div className="App">
      <section>
        <article>
          <Link to="/contacts">
              <div 
              className="sides" 
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              >
          
              <iframe title="contacts" src="/contacts" scrolling="no"></iframe>
              {onHover && (
              <p>
                See on Page
              </p>
              )}
            </div>
          </Link>
        </article>
        
        <article>
        <div className="sides">2</div>
        </article>
        <article>
        <Link to="/expensesapp">
              <div 
              className="sides" 
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              >
          
              <iframe title="expenses" src="/expenses" scrolling="no"></iframe>
              {onHover && (
              <p>
                See on Page
              </p>
              )}
            </div>
          </Link>
        </article>
        <article>
          <div className="sides">4</div>
        </article>
        <article>
          <div className="sides">5</div>
        </article>
        <article>
          <div className="sides">6</div>
        </article>
        <article>
          <div className="sides">7</div>
        </article>
        <article>
          <div className="sides">8</div>
        </article>
        <article>
          <div className="sides">9</div>
        </article>
        <article>
          <div className="sides">10</div>
        </article>
        <article>
          <div className="sides">11</div>
        </article>
        <article>
          <div className="sides">12</div>
        </article>
      </section>
    </div>
  );
}

export default App;
