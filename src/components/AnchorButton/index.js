// import React from 'react';
// import styles from '../../styles/components/anchorbutton.module.css';
// import { Link, useNavigate } from 'react-router-dom';

// const AnchorButton = ({
//   width110,
//   href,
//   children,
//   theme = 'primary',
//   responsiveBreakpoint = 920,
//   expandWidth,
//   ...props
// }) => {
//   const navigate = useNavigate();
//   const themeClass =
//     theme === 'tertiary' ? styles.tertiary :
//     theme === 'secondary' ? styles.secondary :
//     styles.primary;
//   const responsiveClass =
//     responsiveBreakpoint === 728 ? styles.responsive728 : styles.responsive920;
//   const isInternal = href?.startsWith('/') || href?.startsWith('#');

//   const generalStyles = `${width110 ? styles.button110 : styles.button} ${themeClass} ${responsiveClass} ${expandWidth ? styles.buttonWidth100per : ''} ${props.className}`;

//   const handleInternalLinkClick = (event) => {
//     if (href && href.includes('#')) {
//       event.preventDefault(); // Evita el comportamiento predeterminado del enlace

//       const [path, hash] = href.split('#');
      
//       // Si hay ruta base, navega a ella
//       if (path) {
//         navigate(path, { replace: true });
//       }

//       // Después de navegar, espera un poco y desplaza a la sección
//       setTimeout(() => {
//         const element = document.getElementById(hash);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100); // Espera 100 ms para asegurar que la navegación ocurra antes del scroll
//     }
//   };

//   // Si el enlace es externo
//   if (href && !isInternal) {
//     return (
//       <a
//         href={href}
//         className={generalStyles}
//         target='_blank'
//         rel='noopener noreferrer'
//         {...props}
//       >
//         {children}
//       </a>
//     );
//   } 
//   // Si el enlace es interno (ejemplo, '#section')
//   else if (href && isInternal) {
//     return (
//       <Link
//         to={href}
//         className={generalStyles}
//         onClick={handleInternalLinkClick} // Maneja la navegación interna aquí
//         {...props}
//       >
//         {children}
//       </Link>
//     );
//   }

//   // Si no hay `href`, se usa un botón
//   return (
//     <button className={generalStyles} {...props}>
//       {children}
//     </button>
//   );
// };

// export default AnchorButton;




import React from 'react';
import styles from '../../styles/components/anchorbutton.module.css';
import { Link, useNavigate } from 'react-router-dom';
// import Link from 'next/link';

const AnchorButton = ({
  width110,
  href,
  children,
  theme = 'primary',
  responsiveBreakpoint = 920,
  expandWidth,
  ...props
}) => {

  const navigate = useNavigate();

  const themeClass =
    theme === 'tertiary' ? styles.tertiary :
    theme === 'secondary' ? styles.secondary :
    styles.primary;
  const responsiveClass =
    responsiveBreakpoint === 728 ? styles.responsive728 : styles.responsive920;
  const isInternal = href?.startsWith('/') || href?.startsWith('#');

  const generalStyles = `${width110 ? styles.button110 : styles.button} ${themeClass} ${responsiveClass} ${expandWidth ? styles.buttonWidth100per : ''} ${props.className}`

    const handleInternalLinkClick = (event) => {
    if (href && href.includes('#')) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const [path, hash] = href.split('#');
      
      // Si hay ruta base, navega a ella
      if (path) {
        navigate(path, { replace: true });
      }

      // Después de navegar, espera un poco y desplaza a la sección
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Espera 100 ms para asegurar que la navegación ocurra antes del scroll
    }
  };

  if (href && !isInternal) {
    return (
      <a
        href={href}
        className={generalStyles}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </a>
    );
  } else if (href && isInternal) {
    return (
      <Link
        to={href}
        {...props}
        onClick={handleInternalLinkClick}
        className={generalStyles}
      >
        {children}
      </Link>
    )
  }
  return (
    <button className={generalStyles} {...props}>
      {children}
    </button>
  );
};

export default AnchorButton;