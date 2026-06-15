const ScrollTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scroll-top"
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollTop;