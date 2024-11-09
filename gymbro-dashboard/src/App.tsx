import { useEffect, useState } from "react";
import { Router } from "./config/router";
// import { IToast, ToastContext } from "./core/components/Toast";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  // const { addToast } = useContext(ToastContext);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Suscribe el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // window.addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
    //   console.error('Error global:', event);

    //   const newToast: IToast = {
    //     type: "error",
    //     title: "Random title",
    //     message: "Algo salió mal"
    //   }

    //   addToast(newToast);
    // });
  }, []);

  return (
    isLargeScreen ?
      <Router />
      :
      <div style={{ color: 'red', fontSize: '18px' }}>
        Accede desde un dispositivo con una pantalla grande, como una tablet o una PC.
      </div>
  )
}

export default App
