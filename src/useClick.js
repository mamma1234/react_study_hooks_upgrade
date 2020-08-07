export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("remove event");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
