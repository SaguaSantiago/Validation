
 const layout = (theme) => ({
    navLink: {
      textDecoration: "none",
      color: "#ffffff",
      fontFamily: "Tahoma, sans-serif",
      marginRight: "15px",
    },
    offSet: {
      ...theme.mixins.toolbar,
      marginBottom: "1rem",
    },
    active: {
      color: "#ccc",
    },
  })

  export const Styles = {
      layout,
  }