import React from "react"

interface CardProps {
    title: string;
    description: string;
    imageUrl?: string; // Opcional, por si no deseas siempre tener una imagen
  }
  
  const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
        )}
        <div style={{ padding: "16px" }}>
          <h3 style={{ margin: "0 0 8px", fontSize: "1.25rem" }}>{title}</h3>
          <p style={{ margin: "0", fontSize: "0.95rem", color: "#555" }}>
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default Card;