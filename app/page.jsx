import React from 'react'
import styles from './page.module.css'


export default function Inicio() {
  return (
    <main className={styles.inicio}>
      <div className={styles.conttitulo}>
        <h1 className={styles.tituloprincipal}>GALVAN CONSULTORES</h1>
      </div>
      <div>
        <div className={styles.respuestacont}>
          <img className={styles.reunion} src="./imagenes/reunion.jpg" alt="" />
          <h1 className={styles.subtituloprincipal}>Una respuesta a las exigencias del mercado</h1>
        </div>
        <div className={styles.contenedornosotros}>
          <h2 className={styles.nosotros}>Conozca nuestra propuesta para mejorar sus costos siniestrales y laborales.</h2>
          <p className={styles.textonosotros}>El Estudio Galván & Asociados nace como respuesta a la necesidad de las Compañías Aseguradoras y ART, de contar con un soporte legal y técnico para la verificación e investigación de siniestros.
           Al momento de determinar nuestro objeto principal, decidimos abocarnos a los Accidentes contemplados por la Ley 24.557, ya que pudimos determinar que era un mercado carente de eficacia investigativa, fundamentalmente por las particularidades de los casos que trata, a lo que se suma el corto plazo que las normas establecen para aceptar o no el siniestro, lo que facilita notablemente la defraudación, provocando -como consecuencia natural- erogaciones innecesarias que pueden evitarse.
           Con oficinas en pleno centro porteño, nuestro estudio exhibe un importante despliegue territorial, asistiendo a empresas de primer nivel en todo el país, contando con investigadores y verificadores calificados en las principales plazas del interior.</p>
        </div>
        <div>
          <h2 className={styles.subtitulo}>Soporte 360º</h2>
          <p className={styles.textosoporte}>Su empresa contará con nuestro soporte las 24hs. del día, los 365 días del año, en cualquier localidad del país, reduciendo su exposición a potenciales litigios o fraudes</p>
          <p className={styles.textosoporte}>Cada informe que se emite cuenta con los detalles del caso, datos relevantes a efectos de su objetiva evaluación y sustento suficiente para una efectiva defensa legal</p>
          <p className={styles.textosoporte}>Con el objeto de brindar un servicio integral a las aseguradoras, poseemos un área Legal, que interviene en mediaciones y litigios donde estas son parte.</p>
        </div>
      </div>
      <div>
        <div className={styles.contenedorprincipales}>
          <h2 className={styles.subtitulo}>Principales ventajas</h2>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>DISPONIBILIDAD</h3>
            <p className={styles.textonosotros}>Ejecutivos de cuenta Full Time</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>ASESORAMIENTO</h3>
            <p className={styles.textonosotros}>Abogados, contadores, peritos</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>COMUNICACIÓN</h3>
            <p className={styles.textonosotros}>Repuesta asegurada 24/7</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>COSTOS</h3>
            <p className={styles.textonosotros}>La mejor ratio hora/servicio</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>COBERTURA</h3>
            <p className={styles.textonosotros}>Operamos en todo el país</p>
          </div>
        </div>
        <div className={styles.contservicios}>
          <h1 className={styles.subtitulo}>Sobre Nuestros Servicios</h1>
          <h3 className={styles.servicios}>Nuestra característica más importante, además de la calidad y minuciosidad en la confección de los informes de los diferentes tipos de accidentes, es el aporte de fundamentos y soporte legal para ejercer una efectiva defensa en caso de llegar a instancias judiciales o de enfrentar un eventual intento de fraude.Esto se ve claramente reflejado en nuestros estamentos fundacionales</h3>
          <p className={styles.textonosotros}>Brindar permanentemente la mejor calidad de servicios legales y técnicos para la verificación e investigación de siniestros, otogándole a nuestros clientes una cobertura total disminuyendo su exposición judicial.</p>
          <h3 className={styles.servicios}>Valores</h3>
          <p className={styles.textonosotros}>Ética profesional
             Responsabilidad
             Predisposición permanente a la atención de nuestros clientes
          </p>
          <h3 className={styles.servicios}>Objetivos</h3>
          <p className={styles.textonosotros}>Volcar a nuestros clientes nuestra capacidad técnica y experiencia para transformar nuestros servicios en una inversión rentable y sostenible en el tiempo.</p>
        </div>
      </div>
      <div className={styles.contespecialidades}>
        <h1 className={styles.numeros}>1</h1>
        <h2>Seguros y ART</h2>
        <p className={styles.textonosotros}>A lo largo de los últimos años se han incrementado notablemente las denuncias de siniestros en estas materias. En igual proporción creció el índice de litigiosidad, que desborda hacia la esferas Civil y Laboral acompañado por parte de la Jurisprudencia de nuestros Tribunales.</p>
        <h1 className={styles.numeros}>2</h1>
        <h2>Asesoria legal</h2>
        <p className={styles.textonosotros}>La complejidad de las leyes laborales generaron un gran crecimiento de la litigiosidad, con el consecuente incremento de los costos, Nuestro equipo de profesionales especializados en cada materia, abordan las problematicas particulares de cada caso con una visión integral.</p>
        <h1 className={styles.numeros}>3</h1>
        <h2>Servicios legales</h2>
        <p className={styles.textonosotros}>Nuestros profesionales estan ampliamente calificados y capacitados para asesorarlo en todas las áreas de su empresa. Desde lo legal hasta lo institucional, nuestros equipos de trabajo son interdisciplinarios y con amplia experiencia en estructuras corporativas.</p> 
      </div>
      <div className={styles.conttrabajo}>
        <div>
          <h1 className={styles.subtitulo}>Sobre nuestra forma de trabajo</h1>
          <p className={styles.textonosotros}>Nuestra finalidad es dar respuesta inmediata a las aseguradoras, frente a los accidentes mencionados, realizando una investigación cabal, -a través de entrevistas con las partes, recabando la documentación correspondiente, inspecciones en los lugares donde se produjo el siniestro, búsqueda de testigos, constataciones judiciales
          y todas aquellas acciones, que cada caso en particular requiera y nutran de elementos de convicción suficiente-, para establecer la realidad de los hechos. Abarcando las zonas de Capital Federal, Provincia de Buenos Aires e interior del País.
          Complementariamente, ante la certeza de la real ocurrencia del accidente denunciado y en los casos de intervención de terceros, como por ejemplo, en los accidentes de tránsito, nos ocupamos en determinar la responsabilidad en la ocurrencia, tomando vistas de las actuaciones Jurisdiccionales y consecuentemente, realizando los recuperos de credito.</p>
        </div>
        <div>
          <h1>Gestión Exitosa</h1>
          <p className={styles.textonosotros}>Las gestiones realizadas por Estudio Galván & Asociados se caracterizan por un alto foco en los resultados.
          Como dato estadístico, nuestra intervención significó para nuestros clientes, un ahorro promedio del 50% sobre el total de siniestros verificados en el último año.</p>
          <p className={styles.textonosotros}>Detección de Fraudes</p>
          <p className={styles.textonosotros}>Siniestros Rechazados</p>
          <p className={styles.textonosotros}>Fuera de Nóminas</p>
          <p className={styles.textonosotros}>Recuperos de créditos contra terceros responsables</p>
        </div>
      </div>

    </main>

  )
} 
