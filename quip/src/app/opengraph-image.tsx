import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Quip — AI Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050507",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#00e5a0",
            }}
          />
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#e8e8f0",
              letterSpacing: "-2px",
            }}
          >
            quip
          </span>
        </div>
        <p
          style={{
            fontSize: "32px",
            color: "#8888a0",
            margin: 0,
            fontWeight: 500,
          }}
        >
          AI solutions that work.
        </p>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "40px",
            fontSize: "18px",
            color: "#00e5a0",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          <span>Chatbots</span>
          <span>·</span>
          <span>Automation</span>
          <span>·</span>
          <span>AI Integration</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
