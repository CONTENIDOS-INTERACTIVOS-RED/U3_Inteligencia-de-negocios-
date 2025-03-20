<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Herramientas de soporte a la toma de decisiones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg-rosa.p-4.mb-4
      span Desde los sistemas de soporte de decisiones (DSS) en los años 60, las herramientas han evolucionado hacia soluciones de inteligencia de negocios (BI) y análisis avanzado.
    
    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4

          h2 IBM Watson Analytics
          .row.mb-4
            .col-4.d-none.d-xl-block.mx-auto(data-aos="fade-left")
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
            .col-12.col-xl-8(data-aos="fade-right")
              .row.mb-4
                .d-flex.align-items-center
                  div.d-flex.align-items-center.bg-azul-1.px-3.py-4
                    img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-22.svg', alt='Texto que describa la imagen')
                    p.pe-xl-5.mb-0 IBM Watson Analytics es una plataforma que combina análisis predictivo y visualización avanzada mediante inteligencia artificial. Destaca por su capacidad para procesar grandes volúmenes de datos y proporcionar insights rápidos y claros a través de su interfaz de lenguaje natural.
              p.mb-4 Aplicaciones en el sector salud:

          .row.mb-4.justify-content-center.card_hover(data-aos="zoom-in-up")
            .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-23.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Predicción de tendencias
                p.px-1.text-small.mb-0.d-flex.text-center Permite anticipar picos de pacientes en épocas de gripe y planificar recursos.
            .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-24.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Personalización de tratamientos
                p.px-1.text-small.mb-0.d-flex.text-center Analiza datos genómicos y clínicos para recomendaciones individualizadas.
            .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
              .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style="width: 80px")
                p.text-bold.mb-4.text-center Gestión operativa
                p.px-1.text-small.mb-0.d-flex.text-center Optimiza el consumo de suministros médicos y detecta cuellos de botella en procesos clínicos.

    p.mb-4 IBM Watson integra múltiples fuentes de datos, como historiales médicos y estadísticas externas, proporcionando una visión completa para la toma de decisiones. Además, cumple con estándares de privacidad y ciberseguridad como el GDPR, esenciales en el manejo de datos sensibles.
    h2 El Data Pipeline de ventas como motor del marketing digital
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-amarillo.p-4.mb-4
          span  El data pipeline de ventas es una herramienta clave para integrar datos de múltiples fuentes y optimizar procesos comerciales. Combinado con tecnologías como IA y aprendizaje automático, permite analizar, monitorear y mejorar cada etapa del ciclo de ventas, desde el contacto inicial hasta la posventa.
        span.text-bold Las recomendaciones para su implementación son:
      .col-5.d-none.d-xl-block.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
         LineaTiempoD.color-secundario.large
          p(numero="1" titulo="Definir el problema") Establecer objetivos claros y planificar acciones específicas.  
          p(numero="2" titulo="Automatización continua") Utilizar herramientas para optimizar procesos en tiempo real. 
          p(numero="3" titulo="Control de ciberseguridad") Garantizar la protección de datos sensibles.  
          p(numero="4" titulo="Medición con KPI") Evaluar el desempeño en cada etapa del pipeline.  

    h2 Relación con el marketing digital
    p.mb-4 El pipeline digital automatiza el seguimiento de prospectos mediante herramientas como CRM, proporcionando datos clave para personalizar campañas publicitarias. Por ejemplo, Facebook Ads integra anuncios segmentados basados en la etapa del cliente dentro del <i>pipeline</i>.

    p.mb-4.text-bold Las etapas del Data  Pipeline de ventas son:

    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="8.2%" y="80%" numero="+")
        .h5.mb-2 Lead
        p Primer contacto con la marca, motivado por una campaña o interés espontáneo.
      .tarjeta.bg-white.p-4(x="25.2%" y="80%" numero="+")
        .h5.mb-2 Prospección
        p Perfilado de clientes según sus necesidades y preferencias.
      .tarjeta.bg-white.p-4(x="44%" y="80%" numero="+")
        .h5.mb-2 Propuesta
        p Presentación del producto o servicio con precios y condiciones.
      .tarjeta.bg-white.p-4(x="62.8%" y="80%" numero="+")
        .h5.mb-2 Negociación
        p Ajustes para alcanzar un acuerdo favorable.
      .tarjeta.bg-white.p-4(x="82.4%" y="80%" numero="+")
        .h5.mb-2 Cierre
        p Finalización de la venta y estrategias de posventa para fidelización.

    h2 Modelo TOFU, MOFU y BOFU
    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4    
        p.mb-4 El embudo de marketing  digital se estructura en tres fases:
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center TOFU (<i>Top of the Funnel</i>)
                p.text-small.px-4.text-center.pb-2 Atracción de prospectos mediante blogs o redes sociales.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center MOFU (Middle of the Funnel)
                p.text-small.px-4.text-center.pb-2 Interacción profunda a través de webinars o contenidos descargables.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center BOFU (Bottom of the Funnel) 
                p.text-small.px-4.text-center.pb-2 Decisión de compra mediante descuentos o pruebas gratuitas.

    h2 ETL (<i>Extract, Transform, Load</i>)
    p.mb-4 El proceso ETL permite integrar datos desde múltiples fuentes, transformarlos en formatos estándar y cargarlos en un almacén de datos para su análisis.

    .row.mb-4.bg-azul-claro.pt-4
      .col-10.col-xl-5.mx-auto
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 1
            p.mb-0 <b>Extracción.</b> Recolecta datos desde bases de datos, ERP, CRM y hojas de cálculo.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 2
            p.mb-0 <b>Transformación.</b> Limpia y ajusta datos, eliminando inconsistencias.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 3
            p.mb-0 <b>Carga.</b> Inserta datos en un data warehouse para análisis posterior.
      .col-4.d-none.d-xl-block.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4   

        h2  OLAP (<i>Online Analytical Processing</i>)
        p.mb-4 OLAP permite realizar análisis multidimensionales de datos a través de cubos OLAP, facilitando la identificación de patrones y tendencias en grandes volúmenes de información.
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-33.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Cubos OLAP
                p.px-1.text-small.mb-0.d-flex Datos organizados en dimensiones y medidas para análisis detallado.
          .col-10.col-md-8.col-lg-6.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-34.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Operaciones
                p.px-1.text-small.mb-0.d-flex Incluyen drill-down (profundizar), roll-up  (resumir) y slice (segmentar).
    .row.mb-5
      .col-12.col-xl-8(data-aos="fade-right")

        p.text-bold Ejemplos de uso

        p <b>Netflix:</b> Utiliza ETL para recolectar datos de usuarios y ofrecer recomendaciones personalizadas.

        p.mb-4 <b>Amazon:</b> Aplica OLAP para segmentar mercados y optimizar campañas de marketing.
        .bg-rosa.p-4
          span El uso combinado de herramientas como IBM Watson Analytics, data pipelines, ETL y OLAP fortalece la capacidad de las organizaciones para procesar, analizar y utilizar datos en la toma de decisiones estratégicas. Estas tecnologías permiten optimizar operaciones, personalizar experiencias de usuario y anticipar tendencias del mercado, consolidando una ventaja competitiva en un entorno empresarial dinámico y basado en datos.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122927") Gorostiza Esquerdeiro, I. & Barainca Fontao, A. (2017). Google Analytics: mide y vencerás. Difusora Larousse - Anaya Multimedia.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=X7hWVP1ZYWA") Pipeline de Ventas B2B - Modulo Introductorio - Definición y Beneficios [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
