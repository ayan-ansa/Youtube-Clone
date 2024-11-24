function ErrorComponent() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <h1 style={{ color: "black", fontSize: "3rem" }}>404</h1>
      <h1 style={{ color: "black" }}>Oops... page not found.</h1>
    </div>
  );
}

export default ErrorComponent;
