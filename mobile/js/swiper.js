// Swiper Class

//IMPORT_COMPONENTS

const components = [
  Device,
  Support,
  Browser,
  Resize,
  Observer,
  //INSTALL_COMPONENTS
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

//EXPORT
