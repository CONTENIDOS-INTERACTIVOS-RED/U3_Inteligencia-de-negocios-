<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. KPI (Key Performance Indicators) y métricas de negocio '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") Los KPI y las métricas de negocio son herramientas esenciales para medir el desempeño organizacional. Desde su conceptualización, han sido fundamentales en los sistemas de gestión empresarial. Kaplan y Norton (1996), con su modelo Balanced Scorecard, destacaron la importancia de estos indicadores para evaluar el progreso hacia los objetivos estratégicos.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        #t_1_1.titulo-segundo
          div.d-flex
            span.me-3 1.1  
            h2 Antecedentes y trazabilidad histórica

        p.mb-4 Los KPI surgieron en la década de 1990 con el modelo Balanced Scorecard, que permitió traducir objetivos estratégicos en indicadores medibles. Desde entonces, los KPI se han consolidado como estándares en la evaluación del desempeño organizacional en diversos sectores. 
        .row.mb-4.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Tableau
                p.px-1.text-small.mb-0.d-flex Visualización de métricas en tiempo real.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Power BI
                p.px-1.text-small.mb-0.d-flex Creación de paneles interactivos.
          .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
            .custom-image-card.d-flex.p-3
              img.pe-2(src='@/assets/curso/unidad/img-6.svg', style="width: 80px")
              .d-flex.flex-column
                p.text-bold.mb-4 Excel avanzado
                p.px-1.text-small.mb-0.d-flex Análisis de datos y generación de gráficos personalizados.

    p.text-bold.mb-4 Ejemplo aplicado

    p.mb-4 Walmart emplea KPI para monitorear la eficiencia de su cadena de suministro, con indicadores clave como el tiempo de reposición de inventarios y los costos logísticos.
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Tipos de KPI y su aplicación


    .bg-fondo-3.bg-full-width
      .px-5.pb-md-3.py-4

        p.mb-4 Los KPI han evolucionado para abarcar tanto métricas financieras como operativas y de cliente, gracias a las innovaciones tecnológicas que permiten su aplicación en tiempo real.
        
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Google Analytics
                p.text-small.px-4.text-center.pb-2 Monitoreo de KPI digitales, como la tasa de conversión.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center SAP
                p.text-small.px-4.text-center.pb-2 Gestión integrada de métricas empresariales.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejemplo aplicado
                p.text-small.px-4.text-center.pb-2 Nike utiliza KPI como el ROI publicitario y el engagement en redes sociales para medir la efectividad de sus campañas de marketing.

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Diseño e implementación de KPI

    p.mb-4 El diseño de KPI ha mejorado con la integración de metodologías ágiles, donde las métricas se incorporan en ciclos de mejora continua.
    .row.mb-4.bg-azul-claro.pt-4
      .col-10.col-xl-5.mx-auto
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 1
            p.mb-0 <b>ClickUp.</b> Integración de métricas en la gestión de proyectos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 2
            p.mb-0 <b>KPI Library.</b> Biblioteca de indicadores predefinidos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 3
            p.mb-0 <b>Ejemplo aplicado.</b> Coca-Cola monitorea su consumo de agua y reducción de emisiones de carbono mediante KPI de sostenibilidad.
      .col-4.d-none.d-xl-block.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

    h2 Medición de la economía digital
    p.mb-4 En el entorno digital, los KPI deben cumplir los principios SMART para garantizar su efectividad:
    .row.mb-3(data-aos="fade-up")
      .col-4.col-md-2.px-0.ms-auto
        .bg-naranja.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Específico
      .col-7.col-md-6.px-0.me-auto.d-flex
        .bg-naranja-claro.border-naranja.rounded-15px-right.p-3.my-auto.w-100(style="margin-left: -20px")
          span.ps-5.px-xl-4.d-flex Define claramente qué medir. 
    .row.mb-3(data-aos="fade-up")
      .col-4.col-md-2.px-0.ms-auto
        .bg-naranja-1.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Medible
      .col-7.col-md-6.px-0.me-auto.d-flex
        .bg-naranja-claro.border-naranja.rounded-15px-right.p-3.my-auto.w-100(style="margin-left: -20px")
          span.ps-5.px-xl-4.d-flex Permite cuantificar los resultados.
    .row.mb-3(data-aos="fade-up")
      .col-4.col-md-2.px-0.ms-auto
        .bg-morado.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Alcanzable
      .col-7.col-md-6.px-0.me-auto.d-flex
        .bg-morado-claro.border-morado.rounded-15px-right.p-3.my-auto.w-100(style="margin-left: -20px")
          span.ps-5.px-xl-4.d-flex Factible con los recursos disponibles.
    .row.mb-3(data-aos="fade-up")
      .col-4.col-md-2.px-0.ms-auto
        .bg-morado-1.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Relevante
      .col-7.col-md-6.px-0.me-auto.d-flex
        .bg-morado-claro.border-morado.rounded-15px-right.p-3.my-auto.w-100(style="margin-left: -20px")
          span.ps-5.px-xl-4.d-flex Alineado con los objetivos estratégicos.
    .row.mb-3(data-aos="fade-up")
      .col-4.col-md-2.px-0.ms-auto
        .bg-azul-1.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
          span.text-bold Temporal
      .col-7.col-md-6.px-0.me-auto.d-flex
        .bg-azul.border-azul.rounded-15px-right.p-3.my-auto.w-100(style="margin-left: -20px")
          span.ps-5.px-xl-4.d-flex Asociado a un marco temporal definido.

    h2 Tipos de indicadores en el entorno digital
    p.mb-4  El auge de la inteligencia artificial (IA) y el aprendizaje automático ha diversificado los indicadores digitales, permitiendo analizar el comportamiento de los usuarios y el impacto de las estrategias digitales.

    .bg-fondo-4.bg-full-width
     .px-5.pb-md-3.py-4

        .row.mb-4
          .col-4.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .col-10.col-xl-8.mx-auto(data-aos="fade-right")
              SlyderF(columnas="col-12 col-lg-6 py-4 px-3")
                .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style="width: 80px")
                  p.text-bold.mb-4.text-center Alcance
                  p.px-1.text-small.mb-0.d-flex.text-center Usuarios expuestos a una publicación. 
                .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style="width: 80px")
                  p.text-bold.mb-4.text-center Conversiones
                  p.px-1.text-small.mb-0.d-flex.text-center Cumplimiento de objetivos definidos en Google Analytics. 
                .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-15.svg', style="width: 80px")
                  p.text-bold.mb-4.text-center Engagement
                  p.px-1.text-small.mb-0.d-flex.text-center Interacción con contenidos (likes, comentarios, etc.). 
                .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style="width: 80px")
                  p.text-bold.mb-4.text-center Tasa de rebote
                  p.px-1.text-small.mb-0.d-flex.text-center Usuarios que abandonan el sitio sin interacción adicional.
                .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style="width: 80px")
                  p.text-bold.mb-4.text-center Leads
                  p.px-1.text-small.mb-0.d-flex.text-center Datos recopilados de clientes potenciales. 
                .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
                  img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
                  p.text-bold.mb-4.text-center Tiempo de visualización
                  p.px-1.text-small.mb-0.d-flex.text-center Duración promedio de consumo de contenido audiovisual.

        p.text-bold.mb-4 Objetivos principales de un plan de redes sociales basado en KPI son: 
        .row
          .col-6.col-md-4.col-lg-3.col-xl-2.mb-3
            .bg-naranja.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span.text-bold Informar
            .d-flex.text-center.justify-content-center
              p.text-center.mb-0(style="line-height: 7px") . <br>. <br>.
            .bg-naranja.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span Exponer productos y servicios a clientes potenciales.
          .col-6.col-md-4.col-lg-3.col-xl-2.mb-3
            .bg-amarillo.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span.text-bold Visibilidad y branding
            .d-flex.text-center.justify-content-center
              p.text-center.mb-0(style="line-height: 7px") . <br>. <br>.
            .bg-amarillo.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span Posicionar la marca y construir reputación.
          .col-6.col-md-4.col-lg-3.col-xl-2.mb-3
            .bg-morado.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span.text-bold Aumentar tráfico web
            .d-flex.text-center.justify-content-center
              p.text-center.mb-0(style="line-height: 7px") . <br>. <br>.
            .bg-morado.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span Atraer usuarios relevantes para generar conversiones.
          .col-6.col-md-4.col-lg-3.col-xl-2.mb-3
            .bg-rosa.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span.text-bold Generar leads
            .d-flex.text-center.justify-content-center
              p.text-center.mb-0(style="line-height: 7px") . <br>. <br>.
            .bg-rosa.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span Recopilar datos de posibles clientes.
          .col-6.col-md-4.col-lg-3.col-xl-2.mb-3
            .bg-azul-1.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span.text-bold Fomentar la interacción
            .d-flex.text-center.justify-content-center
              p.text-center.mb-0(style="line-height: 7px") . <br>. <br>.
            .bg-azul-1.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span Crear conexiones emocionales para fidelizar.
          .col-6.col-md-4.col-lg-3.col-xl-2.mb-3
            .bg-azul.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span.text-bold Crear comunidad
            .d-flex.text-center.justify-content-center
              p.text-center.mb-0(style="line-height: 7px") . <br>. <br>.
            .bg-azul.p-4.text-center.rounded-15px(style="position: relative; z-index: 1")
              span Establecer un grupo leal y activo que interactúe con la marca.

    h2 Impacto de los KPI en el entorno digital
    p.mb-4 Los KPI son herramientas clave no solo para evaluar el éxito de las estrategias, sino también para optimizar recursos y reducir costos. Empresas como Amazon emplean KPI para medir la conversión de visitas en ventas y el tiempo promedio de entrega, asegurando una experiencia óptima para el cliente.

    p.text-bold Herramientas destacadas para análisis y toma de decisiones:

    .row.bg-azul-claro.pt-4
      .col-10.col-xl-5.mx-auto
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 1
            p.mb-0 <b>Google Analytics.</b> Análisis detallado de indicadores digitales. 
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta.bg-naranja
              span 2
            p.mb-0 <b>Power BI.</b> Visualización de datos y generación de informes estratégicos.
      .col-4.d-none.d-xl-block.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    .row.mb-5
      .d-flex.align-items-center.px-0
        div.d-flex.align-items-center.bg-rosa.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-20.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La implementación adecuada de KPI permite a las organizaciones mejorar continuamente, identificar oportunidades y fortalecer su competitividad en mercados dinámicos.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/270603") Gómez-Zorrilla, J. & Sánchez Piña, D. (2022). Guía práctica de analítica digital: ROI, KPI y Métricas. LID Editorial España.
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=glS48WoLxis") Gestión del pipeline de ventas [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
