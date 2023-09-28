import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>Interface da API Prospect Flow</h1>
        </header>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#cadastro-natural">Cadastro de Pessoa Física</a>
            </li>
            <li>
              <a href="#cadastro-legal">Cadastro de Pessoa Jurídica</a>
            </li>
            <li>
              <a href="#consulta">Consulta de Cliente</a>
            </li>
            <li>
              <a href="#atualizacao">Atualização de Cliente</a>
            </li>
            <li>
              <a href="#exclusao">Exclusão de Cliente</a>
            </li>
            <li>
              <a href="#listagem">Listagem de Clientes</a>
            </li>
            <li>
              <a href="#consumo">Consumo de Prospect</a>
            </li>
          </ul>
        </nav>
        <main>
          <section id="cadastro-natural" className="component">
            <h2>Cadastro de Pessoa Física</h2>
            {/* Formulário de Cadastro de Pessoa Física */}
          </section>
          <section id="cadastro-legal" className="component">
            <h2>Cadastro de Pessoa Jurídica</h2>
            {/* Formulário de Cadastro de Pessoa Jurídica */}
          </section>
          <section id="consulta" className="component">
            <h2>Consulta de Cliente</h2>
            {/* Formulário de Consulta de Cliente */}
          </section>
          <section id="atualizacao" className="component">
            <h2>Atualização de Cliente</h2>
            {/* Formulário de Atualização de Cliente */}
          </section>
          <section id="exclusao" className="component">
            <h2>Exclusão de Cliente</h2>
            {/* Formulário de Exclusão de Cliente */}
          </section>
          <section id="listagem" className="component">
            <h2>Listagem de Clientes</h2>
            {/* Lista de Clientes */}
          </section>
          <section id="consumo" className="component">
            <h2>Consumo de Prospect</h2>
            {/* Botão de Consumo de Prospect */}
          </section>
        </main>
        <footer>{/* Rodapé, se necessário */}</footer>
      </div>
    </>
  );
}

export default App;
