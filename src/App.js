import { useEffect } from "react";
import Header from "./components/Header";
import Musics from "./components/Musics";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { ToastProvider } from "react-toast-notifications";

function App() {
  useEffect(() => {
    if (localStorage.getItem("opened") === null) {
      Swal.fire({
        title: "Ambient music",
        html: `Ambient Music is an alternative of soundify.net which helps to escape from reality and minimize your problems after relaxing with sounds.Soundify contains 16 sounds which can be used to create endless combinations of sound in the browser.Ambient music is created from the open-source project Soundify<br/><b>NOTE: Although you might already have done in the application, it's advised to change the system volume whenever necessary.</b>`,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      localStorage.setItem("opened", true);
    }
  }, []);
  return (
    <ToastProvider autoDismiss autoDismissTimeout={6000}>
      <div className="min-h-screen">
        <Header />
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Musics />
        </motion.div>
      </div>
    </ToastProvider>
  );
}

export default App;
