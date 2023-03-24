import React from 'react'
import DynamicComponent from '../dynamicComponent';

const Modal = ({active, setActive, children, id, item}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
      id={id}> 
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}>
        {/* {children} */}
        {/* <DynamicComponent id={id}/> */}
      </div>
    </div>
  );
}

export default Modal