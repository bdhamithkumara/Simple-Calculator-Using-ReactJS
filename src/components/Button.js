import React from 'react';
import clas from './Button.module.css';

const Button = ({valu,handler}) => {
  return (
    <div className={valu === "C" || valu === "=" ? `${clas.calcbtns} ${clas.res}` : `${clas.calcbtns}`} onClick={()=> handler(valu) }>
        {valu}
    </div>
  )
}

export default Button