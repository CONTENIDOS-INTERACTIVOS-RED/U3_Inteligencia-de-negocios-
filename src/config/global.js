export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '3',
    tituloUnidad: 'Toma de decisiones basada en Inteligencia de Negocios',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'KPI (Key Performance Indicators) y métricas de negocio ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Antecedentes y trazabilidad histórica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de KPI y su aplicación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diseño e implementación de KPI',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de soporte a la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estudios de caso: Aplicación de la BI en diferentes industrias',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Davenport, T. H., & Harris, J. G. (2007). Competing on Analytics: The New Science of Winning.',
      link: '',
    },
    {
      referencia:
        'Eckerson, W. W. (2010). Performance Dashboards: Measuring, Monitoring, and Managing Your Business.',
      link: '',
    },
    {
      referencia:
        'Kaplan, R., & Norton, D. (1996). The Balanced Scorecard: Translating Strategy into Action.',
      link: '',
    },
    {
      referencia:
        'Marr, B. (2015). Key Performance Indicators: The 75 Measures Every Manager Needs to Know.',
      link: '',
    },
    {
      referencia: 'Miller, T. (2013). Data-Driven Performance.',
      link: '',
    },
    {
      referencia:
        'Parmenter, D. (2015). Key Performance Indicators: Developing, Implementing, and Using Winning KPIs.',
      link: '',
    },
    {
      referencia:
        'Power, D. J. (2002). Decision Support Systems: Concepts and Resources.',
      link: '',
    },
    {
      referencia:
        'Simon, H. A. (1977). The New Science of Management Decision.',
      link: '',
    },
    {
      referencia: 'Smith, R. (2010). Business Metrics: The Key to Success.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'Número de usuarios que han visto en su pantalla la publicación de un perfil social media.',
    },
    {
      termino: 'Attainable (alcanzable)',
      significado:
        'No tiene sentido elegir indicadores que sean imposibles de conseguir con los recursos asignados.',
    },
    {
      termino: 'Conversiones',
      significado:
        'Acción de lograr un objetivo definido previamente en Google Analitycs.',
    },
    {
      termino: 'Duración media',
      significado:
        'Tiempo promedio de un usuario visitando una web o visualizando un vídeo.',
    },
    {
      termino: 'Engagement',
      significado:
        'Porcentaje de interacción de los usuarios con los contenidos publicados (vídeos, links, imágenes…). En redes sociales, el hecho de lograr el compromiso con nuestra comunidad de usuarios.',
    },
    {
      termino: 'Fan o seguidor',
      significado:
        'Usuario de las redes sociales amante de una marca, empresa u otro usuario motivado por el interés que le despierta los contenidos que comparte.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'Número de veces que un usuario es impactado por una publicación. Se calcula dividiendo el número de impresiones por el alcance.',
    },
    {
      termino: 'Impresiones',
      significado:
        'Número de veces que se muestra una publicación de la página, emanando o no un clic.',
    },
    {
      termino: 'Interacción',
      significado:
        'Acción que realiza un usuario como reacción al contenido observado siendo los likes, comentarios, clics, compartir, visualización de storys.',
    },
    {
      termino: 'KPI',
      significado:
        'Key Performance Indicator o indicador clave de desempeño o indicadores de gestión.',
    },
    {
      termino: 'Leads',
      significado:
        'Oportunidad de recopilar datos de contacto de un potencial cliente.',
    },
    {
      termino: 'Measurable (medible)',
      significado:
        'Permite cuantificar las medidas y los beneficios que se esperan.',
    },
    {
      termino: 'Mención',
      significado:
        'Acción en la que otro usuario cita o referencia a otro usuario.',
    },
    {
      termino: 'Relevant (pertinente)',
      significado:
        'Dependiendo de los objetivos que se busquen será mejor una métrica u otra.',
    },
    {
      termino: 'Sesiones web',
      significado:
        'Es el conjunto de acciones de un usuario utilizando un navegador en la web en un tiempo determinado.',
    },
    {
      termino: 'Specific (específico)',
      significado: 'Identifica qué, dónde, cómo y cuándo se mide.',
    },
    {
      termino: 'Tasa de Rebote',
      significado:
        'Cuando envías un contenido, ya sea por email o el propio contenido que tienes publicado en tu sitio web, existe una parte de usuarios que decidirán dejar tu sitio y pasarán a ver otro contenido. Esto se debe por falta de interés en el contenido o por no encontrar lo que buscaba.',
    },
    {
      termino: 'Tiempo Visualización Medio',
      significado:
        'Promedio de tiempo que están los usuarios consultando un contenido.',
    },
    {
      termino: 'Time-bound (limitado en el tiempo)',
      significado:
        'Un indicador de rendimiento clave debe estar sujeto a un periodo temporal preciso.',
    },
    {
      termino: 'Usuarios únicos',
      significado:
        'Número de visitantes distintos se acercan a nuestra página web.',
    },
    {
      termino: 'Ventas',
      significado:
        'Enfocado al e-commerce (B2C) o acción de los usuarios en la compra de un servicio o producto en un sitio web o plataforma social.',
    },
    {
      termino: 'Visitas web',
      significado: 'Número de visitas que una web ha recibido.',
    },
    {
      termino: 'Visualizaciones',
      significado: 'Número de veces que un contenido audiovisual es visto.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
