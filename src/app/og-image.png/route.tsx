import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

// A route named *.png (instead of the opengraph-image convention) so the static
// export emits a file with an extension — GitHub Pages serves extensionless files
// as application/octet-stream, which social networks reject as a preview image.
export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0d11",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(218,176,97,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            color: "#dab061",
            fontWeight: 600,
          }}
        >
          {profile.tagline.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            color: "#f5f5f5",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            color: "#a5a5a5",
            maxWidth: 820,
          }}
        >
          {profile.seoDescription}
        </div>
      </div>
    ),
    { ...size }
  );
}
