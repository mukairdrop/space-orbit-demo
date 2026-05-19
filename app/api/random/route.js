import { OrbitportSDK } from "@spacecomputer-io/orbitport-sdk-ts";

const planets = [
  {
    name: "Mars",
    rarity: "Common",
    color: "#ff4d4d",
    description: "The red desert world."
  },
  {
    name: "Venus",
    rarity: "Common",
    color: "#ffd966",
    description: "A blazing toxic atmosphere."
  },
  {
    name: "Jupiter",
    rarity: "Rare",
    color: "#ff944d",
    description: "The giant storm king."
  },
  {
    name: "Neptune",
    rarity: "Epic",
    color: "#66b3ff",
    description: "Frozen winds beyond imagination."
  },
  {
    name: "Xenon Prime",
    rarity: "Legendary",
    color: "#cc66ff",
    description: "A hidden neon civilization."
  }
];

export async function GET() {
  try {
    const sdk = new OrbitportSDK({
      config: {
        clientId: process.env.ORBITPORT_CLIENT_ID,
        clientSecret: process.env.ORBITPORT_CLIENT_SECRET,
      },
    });

    try {
      await sdk.ctrngService.random();
    } catch {}

    const randomIndex =
      Math.floor(Math.random() * planets.length);

    return Response.json({
      success: true,
      planet: planets[randomIndex],
    });

  } catch (err) {
    return Response.json({
      error: err.message
    });
  }
}
