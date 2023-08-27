import React from 'react';
import {Link} from 'react-router-dom';
function CTAButton({children,active,linkto}) {
  return (
    <Link to={linkto}>
        <div className={`first-line:text-center text-[13px] px-6 py-3 rounded-md font-bold ${active? "bg-yellow-900 text-black":" bg-black text-white"}`}>{children}</div>
    </Link>
  )
}

export default CTAButton