import './App.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { ProjectCard } from './components/ProjectCard';

import imgISSRASTREADOR from './assets/ISSRASTREADOR.JPG' 
import imgDASHBOARDCRIPTOMONEDAS from './assets/dashboardcriptomonedas.JPG' 
import imgCONVERTIDORQR from './assets/convertidorqr.JPG' 
import imgANALIZADORDECONTRASENAS from './assets/Analizadordecontrasenas.JPG' 
import imgACORTADORDEURL from './assets/acortadordeurl.JPG' 
import { CertificateCard } from './components/CertificateCard';
import certpitunipython from './assets/certificadodepythonpituni.JPG'
import certJS from './assets/JSCERTIFICADOCISCO.JPG'
import certcmasmas from './assets/C++CISCO.JPG'




// Si tomas capturas, las guardas en src/assets y las importas así:
// import imgContrasena from './assets/contrasena.png';
// import imgChat from './assets/chat.png';

function App() {
  return (
    <div className="container">
      <Header />
      <About />

      {/* ... Sección de habilidades queda igual ... */}
      {/* SECCIÓN ADICIONAL: INFORMACIÓN ACADÉMICA */}
      <section id="informacion-clave" style={{ marginBottom: '40px' }}>
        <div className="grid-skills">
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#646cff', margin: '0 0 10px 0' }}> Formación Académica</h3>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Universidad Tecnologica del Peru - Ingeniería de Sistemas</p>
            <p style={{ margin: '5px 0', color: '#94a3b8', fontSize: '0.9rem' }}>Octavo Ciclo</p>
          </div>
          
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#646cff', margin: '0 0 10px 0' }}>Áreas de Interés</h3>
            <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Desarrollo Full-Stack</p>
            <p style={{ margin: '5px 0', color: '#94a3b8', fontSize: '0.9rem' }}>Análisis de Datos, Automatización y Ciberseguridad</p>
          </div>
        </div>
      </section>

      {/* Aquí abajo continúa tu sección de proyectos existente */}
      <section id="proyectos">
        <h2>Mis Proyectos Destacados</h2>
        <div className="grid-proyectos">
          
          <ProjectCard 
            title="Analizador de Contraseñas"
            description="Herramienta interactiva que evalúa la complejidad de contraseñas usando expresiones regulares en tiempo real, ofreciendo feedback visual inmediato."
            tags={["React", "JavaScript", "Regex", "CSS3"]}
            imageUrl={imgANALIZADORDECONTRASENAS}// Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/analizador-contrasenas.git" // Tu enlace de GitHub
            demoUrl="https://analizador-contrasenas.vercel.app" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />

          <ProjectCard 
            title="Chat en Tiempo Real"
            description="Aplicación de mensajería instantánea utilizando arquitectura cliente-servidor mediante WebSockets. Permite comunicación bidireccional inmediata."
            tags={["Node.js", "Express", "Socket.io", "React"]}
           
            githubUrl="https://github.com/FABRICIOAP07/Chat-dual" // Tu enlace de GitHub
          />

          <ProjectCard 
            title="Rastreador de la Estación Espacial Internacional (ISS)"
            description="Gestionar datos en tiempo real."
            tags={["React", "JavaScript", "html"]}
            imageUrl={imgISSRASTREADOR} // Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/Rasteador-de-ISS.git" // Tu enlace de GitHub
            demoUrl="http://localhost:5173" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />

          <ProjectCard 
            title="Acortador de URLs Personalizado"
            description="GEl usuario ingresa una URL larga y el sistema genera una corta. Al usar la corta, el servidor redirecciona a la original"
            tags={["Node.js con Express, React"]}
            imageUrl={imgACORTADORDEURL} // Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/Acortador_De_URL.git" // Tu enlace de GitHub
            demoUrl="http://localhost:5173" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />

          <ProjectCard 
            title="Dashboard de Criptomonedas"
            description="GEl usuario ingresa una URL larga y el sistema genera una corta. Al usar la corta, el servidor redirecciona a la original"
            tags={["Recharts"]}
            imageUrl={imgDASHBOARDCRIPTOMONEDAS} // Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/Dashoboard_demonedas" // Tu enlace de GitHub
            demoUrl="http://localhost:5173" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />

          <ProjectCard 
            title="Generador de QR"
            description="GEl usuario ingresa una URL larga y el sistema genera una corta. Al usar la corta, el servidor redirecciona a la original"
            tags={["Node.js", "React", "QRCode"]}
            imageUrl={imgCONVERTIDORQR} // Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/generador_QR.git" // Tu enlace de GitHub
            demoUrl="http://localhost:5173" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />

          <ProjectCard 
            title="Automatizacion Excel"
            description="GEl usuario ingresa una URL larga y el sistema genera una corta. Al usar la corta, el servidor redirecciona a la original"
            tags={[, "Python: Openpyxl", "Excel"]}
            // Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/Automatizacion-de-excel-con-python.git" // Tu enlace de GitHub
            demoUrl="http://localhost:5173" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />

          <ProjectCard 
            title="Conexion ETL"
            description="GEl usuario ingresa una URL larga y el sistema genera una corta. Al usar la corta, el servidor redirecciona a la original"
            tags={["SQL Server", "Excel", "VS 2025"]}
        // Cambia esto por tu captura de pantalla
            githubUrl="https://github.com/FABRICIOAP07/password-analyzer" // Tu enlace de GitHub
            demoUrl="http://localhost:5173" // Mientras tanto puedes dejar tu local o quitarlo si deseas
          />
        </div>
      </section>

      {/* SECCIÓN DE CERTIFICADOS */}
      <section id="certificados">
        <h2>Certificaciones y Logros</h2>
        <div className="grid-certificados">
          
          <CertificateCard 
            title="Programación en Python Basico"
            issuer="Certificación obtenida por el dominio de lógica y automatización con Python."
            imageUrl={certpitunipython} 
          />

          <CertificateCard 
            title="JavaScript"
            issuer="Dominio de tablas dinámicas, macros y análisis de datos avanzado."
            imageUrl={certJS} 
          />

          <CertificateCard 
            title="C++"
            issuer="Certificado en diseño, consulta y optimización de bases de datos relacionales."
            imageUrl={certcmasmas} 
          />

        </div>
      </section>
      {/* SECCIÓN DE SKILLS CON LOGOS COMPLETOS */}
      <section id="tecnologias" style={{ marginTop: '60px' }}>
        <h2>Tecnologías y Herramientas</h2>
        <div className="skills-logos-grid">
          
          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
            <span>Java</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
            <span>Python</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <span>React</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
            <span>Node.js</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <span>JavaScript</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            <span>HTML5</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
            <span>CSS3</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" />
            <span>SQL Server</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
            <span>MySQL</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://img.icons8.com/color/48/microsoft-excel-2019.png" alt="Excel" />
            <span>Excel</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://img.icons8.com/color/48/microsoft-word-2019.png" alt="Word" />
            <span>Word</span>
          </div>

          <div className="skill-logo-card">
            <img src="https://img.icons8.com/color/48/microsoft-powerpoint-2019.png" alt="PowerPoint" />
            <span>PowerPoint</span>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', marginTop: '100px', color: '#64748b' }}>
        <p>© {new Date().getFullYear()} - Gian Carlo Fabricio Ampuero Peña</p>
      </footer>

    </div> // Cierre del div className="container" que estaba en la línea 14
  ); // Cierre del return (
} // Cierre de la función App()

export default App;