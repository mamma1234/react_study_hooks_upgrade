export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScrren) {
        element.current.mozRequestFullScrren();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestfullscreen) {
        element.current.msRequestfullscreen();
      }
      runCb(true);
      // if (callback && typeof callback === "function") {
      //   callback(true);
      // }
    }
  };
  const exitFull = () => {
    // document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    // if (callback && typeof callback === "function") {
    //   callback(false);
    // }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
