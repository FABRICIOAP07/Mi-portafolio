export const Header = () => (
  <header style={{ textAlign: 'center', padding: '60px 0' }}>
    <p style={{ color: '#646cff', fontWeight: 'bold' }}>
      HOLA, ¿QUÉ TAL? SOY
    </p>

    <h1>Gian Carlo Fabricio Ampuero Peña</h1>

    <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
      Estudiante de Ingeniería de Sistemas | Frontend & Backend
    </p>

    <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
      Bienvenido a mi portafolio
    </p>

    {/* CONTACTO */}
    <p
      style={{
        marginTop: '15px',
        color: '#cbd5e1',
        fontSize: '1rem'
      }}
    >
      Si quieres contactarte conmigo escríbeme a:
      <br />
      <span style={{ color: '#646cff', fontWeight: 'bold' }}>
        fabricio7ampuero@gmail.com
      </span>
    </p>

    {/* BOTONES */}
    <div style={{ marginTop: '25px' }}>
      <a
        href="https://www.linkedin.com/in/gian-carlo-fabricio-ampuero-pe%C3%B1a-126603249/"
        className="btn"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/FABRICIOAP07"
        className="btn"
        style={{ marginLeft: '10px', background: '#334155' }}
      >
        GitHub
      </a>

      {/* DESCARGAR CV */}
      <a
        href="/CV3ACTUALIZADOMAYO.pdf"
        download
        className="btn"
        style={{
          marginLeft: '10px',
          background: '#16a34a'
        }}
      >
        Descargar CV
      </a>
    </div>
    
  </header>
);