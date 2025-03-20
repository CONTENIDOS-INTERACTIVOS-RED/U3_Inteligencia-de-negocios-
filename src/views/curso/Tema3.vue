<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Estudios de caso: Aplicación de la BI en diferentes industrias'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-4.d-none.d-xl-block.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

      .col-12.col-xl-8(data-aos="fade-right")
        .d-flex.align-items-center
          div.d-flex.align-items-center.bg-amarillo.px-3.py-4
            img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-37.svg', alt='Texto que describa la imagen')
            p.pe-xl-5.mb-0 La Inteligencia de Negocios (BI) ha transformado radicalmente la industria de la salud, mejorando la gestión de recursos, la atención al paciente y las decisiones estratégicas. Herramientas como Tableau y Power BI permiten analizar datos clínicos en tiempo real, optimizando procesos como la ocupación de camas, la predicción de brotes de enfermedades y la asignación eficiente de recursos médicos.

    .row.position-relative.mb-5.py-4.bg-azul.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Kaiser Permanente
              p Uso de BI para analizar grandes volúmenes de datos clínicos y administrativos, prediciendo brotes de enfermedades y asegurando una distribución óptima de recursos.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Optimización de recursos
              p Análisis predictivo para prever picos de demanda, mejorando la planificación de personal y suministros durante temporadas críticas como la gripe.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Experiencia del paciente
              p Identificación de patrones históricos para personalizar tratamientos y reducir tiempos de espera, incrementando la satisfacción y calidad del servicio.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-right")
              p.text-bold Investigación médica
              p BI en ensayos clínicos para evaluar tratamientos, personalizando terapias en oncología según el perfil genético del paciente.
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-left")
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
    h2 Sistemas de Soporte de Decisiones (DSS) y Sistemas de Información Ejecutiva (EIS)

    p.mb-4 Los DSS y EIS son pilares fundamentales en la Inteligencia de Negocios, ofreciendo soporte operativo y estratégico respectivamente.
    p.mb-4 <b>Tabla 1.</b> Características DSS y EIS          

    .tabla-a.mb-5
      table
        thead
          tr
            th(width="25%").bg-naranja Aspecto
            th.bg-naranja.text-center DSS
            th.bg-naranja.text-center EIS
        tbody
          tr
            td.text-bold.border-right-gris Definición
            td.border-right-gris Sistema interactivo para resolver problemas semi-estructurados mediante datos, modelos y experiencia del usuario.
            td Herramienta para monitorear el desempeño organizacional con indicadores clave en tiempo real.
          tr
            td.text-bold.border-right-gris Componentes clave
            td.border-right-gris Base de datos, modelos de decisión, interfaz de usuario y módulos de soporte.
            td Almacén de datos, interfaz gráfica, módulos analíticos y acceso a datos externos.
          tr
            td.text-bold.border-right-gris Aplicaciones
            td.border-right-gris Evaluación de escenarios "¿qué pasaría si?", optimización de cadenas de suministro, planificación estratégica.
            td Monitoreo de KPI, alineación de estrategias y análisis predictivo para riesgos y oportunidades.
          tr
            td.text-bold.border-right-gris Casos destacados
            td.border-right-gris Walmart: optimización de inventarios mediante análisis de patrones de compra.
            td Coca-Cola: rastreo de métricas clave de marketing y ventas mediante paneles interactivos.
          tr
            td.text-bold.border-right-gris Herramientas
            td.border-right-gris SAP BusinessObjects, IBM Cognos Analytics.
            td Tableau, Microsoft Power BI.
          
    h2 Ciberseguridad en la inteligencia de negocios
    .row.mb-4 
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-azul.p-4
          span La ciberseguridad en la inteligencia de negocios protege los datos y procesos clave para la toma de decisiones. Al analizar grandes volúmenes de información sensible, BI enfrenta riesgos como filtraciones, ataques de ransomware y accesos no autorizados. Implementar estrategias de protección es esencial para garantizar la integridad y confidencialidad de los datos.
      .d-none.d-xl-block.col-5.px-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

    .bg-amarillo.bg-full-width.mb-4
      .px-5.pb-md-3.py-4
        .row.mb-4
          .col-4.mx-auto.d-none.d-xl-block(data-aos="fade-right")
            img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
          .col-10.col-md-8.col-lg-6.mx-auto.d-flex(data-aos="fade-left")
            TarjetaAudio.color-primario.bg-white.my-auto(
              texto="Ciberseguridad en la inteligencia de negocios"
              tiempo
              :audio="require('../../assets/componentes/audios/Ciberseguridad_mezcla.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

    p.text-bold.mb-4 Ejemplos empresariales de vulnerabilidad:
    .row.mb-4.justify-content-center
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-44.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Facebook (<i>Cambridge Analytica</i>)
            p.px-1.text-small.mb-0.d-flex Exposición de datos de usuarios por falta de controles adecuados
      .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0
        .custom-image-card.d-flex.p-3
          img.pe-2(src='@/assets/curso/unidad/img-45.svg', style="width: 80px")
          .d-flex.flex-column
            p.text-bold.mb-4 Equifax
            p.px-1.text-small.mb-0.d-flex Brecha de datos que comprometió información de 140 millones de usuarios.

    p.mb-4.text-bold Recomendaciones clave:
    .row.mb-3(data-aos="fade-up")
      .col-8.col-md-4.mx-auto
        .bg-naranja.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Auditorías periódicas para revisar medidas de seguridad.
      .col-8.col-md-4.mx-auto
        .bg-morado.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Capacitación al personal en buenas prácticas de ciberseguridad.
      .col-8.col-md-4.mx-auto
        .bg-azul-1.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Actualización constante de sistemas BI para evitar vulnerabilidades conocidas.

    h2 <i>Blockchain</i> en la BI
    p.mb-4 El <i>blockchain</i> garantiza la seguridad y trazabilidad de los datos en la Inteligencia de Negocios, proporcionando confianza y transparencia.
    .row.mb-4
      .col-4.d-none.d-xl-block.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8(data-aos="fade-right")
        LineaTiempoD.color-secundario.large
          p(numero="1" titulo="Cadenas de suministro") Rastreabilidad de productos desde el origen al destino final, garantizando autenticidad y optimización operativa. 
          p(numero="2" titulo="Registros médicos")  Almacenamiento seguro e inmutable de historiales clínicos accesibles solo para partes autorizadas.
          p(numero="3" titulo="Contratos inteligentes") Automatización de procesos como pagos y gestión de inventarios, reduciendo costos y tiempos.  

    .row.mb-5
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-rosa.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-47.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 El blockchain se convierte en una herramienta crucial para mantener la integridad de los datos en sectores como salud, finanzas y logística, reforzando la confianza y sostenibilidad en un entorno digital competitivo.


    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/111431") Arroyo Guardeño, D., Díaz Vico, J. & Hernández Encinas, L. (2019). Blockchain. Editorial CSIC.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/podcast-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://open.spotify.com/show/4XymlIUA6iFaW6IUMjYfGK") Riso, R. (2020). Ciberseguridad sin censura [Podcast]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')

    .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario='cuestionario'/>
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Unidad 3 - Tecnologías de Datos',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál de los siguientes es un ejemplo de Machine Learning?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear un informe manualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un algoritmo que predice ventas futuras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar redes Wi-Fi en una empresa.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Desarrollar sistemas OLAP.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué herramienta ayuda a crear dashboards interactivos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tableau.', esCorrecta: true },
            { id: 'b', texto: 'SQL.', esCorrecta: false },
            { id: 'c', texto: 'Hadoop.', esCorrecta: false },
            { id: 'd', texto: 'Apache Spark.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué tipo de datos maneja el IoT?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Solo datos numéricos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Datos estructurados y no estructurados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Datos históricos almacenados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente datos generados por software.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué técnica analiza grandes volúmenes de datos para descubrir patrones ocultos?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Data Mining.', esCorrecta: true },
            { id: 'b', texto: 'ETL.', esCorrecta: false },
            { id: 'c', texto: 'OLAP.', esCorrecta: false },
            { id: 'd', texto: 'Inteligencia Artificial.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función principal de un Data Warehouse?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar modelos de inteligencia artificial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar grandes volúmenes de datos para análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar interfaces de usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Monitorear la ciberseguridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
