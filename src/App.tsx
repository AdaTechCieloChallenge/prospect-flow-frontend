import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";

import {AccordionHomePageWaiAriaPattern} from "@/api-components/AccordionHomePageWaiAriaPattern.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>Prospect Flow</h1>
        </header>
        <nav className="nav-list">
          Painel administrativo
        </nav>
        <main>
          <AccordionHomePageWaiAriaPattern></AccordionHomePageWaiAriaPattern>
        </main>
        <footer>
          <p>&copy; Todos os Direitos Reservados </p>
        </footer>
      </div>
    </>
  );
}

export default App;
