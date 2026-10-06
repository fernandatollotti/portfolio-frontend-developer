import { ImageResponse } from "next/og";

// Served as /apple-touch-icon.png (with extension, like og-image.png) — the icon iOS
// uses when the site is saved to the home screen.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d11",
          color: "#dab061",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        FT
      </div>
    ),
    { width: 180, height: 180 }
  );
}
