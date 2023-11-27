import React from 'react';


const Footer:React.FC = ()=>{
  return(
    <div className="footer">
         <p className="footer__text">
            Website designed by me ||  &copy; {new Date().getFullYear()} Philip Sada, All rights Reserved
         </p>
    </div>
  )
}

export default Footer;