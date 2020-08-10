export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration != "number" || typeof delay != "number") {
    return;
  }
  const element = useRef();
  // console.log("element.current", element.current);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      console.log("opacity");
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
