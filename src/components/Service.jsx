function Services() {
  const serviceList = [
    "Outdoor & Travel Photography",
    "Customized Wallpapers",
    "Logo & Poster Design",
    "Video Editing",
    "Motorcycle Travel Planning",
  ];

  return (
    <div style={{ marginTop: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>My Services</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {serviceList.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#f2f2f2",
              padding: "15px 20px",
              marginBottom: "10px",
              borderRadius: "8px",
              fontSize: "18px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
