import { useEffect } from "react";

export function useDeviceClass() {
  useEffect(() => {
    const setDeviceClass = () => {
      const width = window.innerWidth;
      const body = document.body;

      body.classList.remove("device-mobile", "device-tablet", "device-desktop");

      if (width < 600) {
        body.classList.add("device-mobile");
      } else if (width >= 600 && width < 960) {
        body.classList.add("device-tablet");
      } else {
        body.classList.add("device-desktop");
      }
    };

    setDeviceClass(); // First run
    window.addEventListener("resize", setDeviceClass);

    return () => {
      window.removeEventListener("resize", setDeviceClass);
    };
  }, []);
}
