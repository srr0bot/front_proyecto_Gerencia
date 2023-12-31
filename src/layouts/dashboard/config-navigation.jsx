import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Estadisticas',
    path: '/',
    icon: icon('ic_analytics'),
  },
  
  {
    title: 'Productos',
    path: '/products',
    icon: icon('ic_cart'),
  },
 
];

export default navConfig;
