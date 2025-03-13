import React, { useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [list, setList] = useState([]);

  function createToast({ message, variant }) {
    const id = crypto.randomUUID();
    setList([...list, { message, variant, id }]);
  }

  function removeToast(id) {
    setList([...list.filter((toast) => toast.id !== id)]);
  }

  function getToasts() {
    return list;
  }

  const value = {
    createToast,
    removeToast,
    getToasts,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export const useGetToastProvider = () => React.useContext(ToastContext);

export default ToastProvider;
