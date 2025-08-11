import { toast } from "react-toastify";

export const toastLog = () => {
  const unsubscribe = window.electronAPI.onLogMessage((log) => {
    switch (log.type) {
      case "info":
        toast.info(log.message);
        break;

      case "success":
        toast.success(log.message);
        break;

      case "warning":
        toast.warning(log.message);
        break;

      case "error":
        toast.error(log.message);
        break;

      case "default":
        toast(log.message);
        break;

      default:
        toast(log.message);
        break;
    }
  });

  return unsubscribe;
};
