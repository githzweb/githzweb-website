import { ImageResponse } from "next/og";

export const alt = "githzweb: catalogue websites for Malaysian suppliers";
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
          color: "#f2f1ec",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800 }}>
          githz<span style={{ color: "#d4ff3a" }}>web</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Your whole catalogue.</div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: -3, color: "#d4ff3a" }}>
            Searchable.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#8a8a93" }}>
          <span>Catalogue websites for Malaysian suppliers</span>
          <span
            style={{
              background: "#d4ff3a",
              color: "#0b0b0c",
              padding: "6px 18px",
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            from RM1,800
          </span>
        </div>
      </div>
    ),
    size,
  );
}
