import { ImageResponse } from "next/og";

export const alt = "githzweb: websites for Malaysian small businesses, by Githan Raj";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          color: "#ededee",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 36, fontWeight: 600, letterSpacing: -1 }}>githzweb</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 600, lineHeight: 1.08, letterSpacing: -2 }}>
          <span>I build websites for</span>
          <span>Malaysian small businesses.</span>
          <span style={{ color: "#8b8b90" }}>Every enquiry goes to your WhatsApp.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#8b8b90" }}>
          <span>Githan Raj · Johor Bahru</span>
          <span
            style={{
              background: "#d4ff3a",
              color: "#0b0b0c",
              padding: "8px 22px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            WhatsApp 010-887 0776
          </span>
        </div>
      </div>
    ),
    size,
  );
}
