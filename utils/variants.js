export const SideCartParent = {
  visible: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
};

export const sideCart = {
  visible: {
    translateX: 0,
    transition: {
      type: "spring",
      damping: 14,
      duration: 0.5,
    },
  },
  hidden: {
    translateX: "100%",
    transition: {
      duration: 0.4,
    },
  },
};


