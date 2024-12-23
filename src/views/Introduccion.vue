<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rosa.p-4.mb-4
          span En esta unidad 3 se explora cómo la toma de decisiones basada en Inteligencia de Negocios (BI) es esencial para el éxito en un entorno empresarial impulsado por datos. La BI permite a las organizaciones recopilar, analizar y transformar grandes volúmenes de información en conocimiento práctico, optimizando procesos, identificando oportunidades y enfrentando desafíos de forma más estratégica.
        span Asimismo, se analizarán los KPI (Indicadores Clave de Desempeño) y las métricas de negocio como herramientas clave para evaluar el rendimiento organizacional, las herramientas de soporte que facilitan decisiones informadas, y casos prácticos que evidencian el impacto positivo de la BI en diversas industrias. Como resultado, el estudiante diseñará estrategias basadas en inteligencia de negocios y evaluará su aplicación en la toma de decisiones.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La unidad incluye tres subtemas: KPI y métricas de negocio, herramientas de soporte para decisiones, y estudios de caso en diferentes sectores. Se espera que el estudiante comprenda cómo aplicar la BI para transformar datos en decisiones <b>estratégicas y desarrollar competencias relevantes en su contexto profesional.</b>


</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
