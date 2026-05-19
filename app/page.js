"use client";

import { useState } from "react";

export default function Home() {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(false);

  const discoverPlanet = async () => {
    setLoading(true);

    const res = await fetch("/api/random");
    const data = await res.json();

    setPlanet(data.planet);

    setLoading(false);
  };

  return (
    <main
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        gap: "20px"
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        🚀 Orbitport Explorer
      </h1>

      <button
        onClick={discoverPlanet}
        style={{
          padding: "14px 24px",
          fontSize: "20px",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        {loading ? "Scanning..." : "Discover Planet"}
      </button>

      {planet && (
        <div
          style={{
            border: `2px solid ${planet.color}`,
            boxShadow: `0 0 20px ${planet.color}`,
            borderRadius: "20px",
            padding: "25px",
            width: "320px",
            textAlign: "center"
          }}
        >
          <h2 style={{ color: planet.color }}>
            {planet.name}
          </h2>

          <p>
            <strong>Rarity:</strong> {planet.rarity}
          </p>

          <p>{planet.description}</p>
        </div>
      )}
    </main>
  );
}
