const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] as const;

export const degreeToDirection = (deg: number) =>
  directions[Math.round((deg % 360) / 45) % 8];
