import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Emily Vo, Portfolio";
export const size = {
  width: 1200,
  height: 627,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(
    join(process.cwd(), "public/images/emily-about.jpg"),
    "base64",
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#0F172A",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -210,
            left: -150,
            display: "flex",
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(254, 39, 193, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -160,
            bottom: -230,
            display: "flex",
            width: 600,
            height: 600,
            borderRadius: 600,
            background: "rgba(245, 158, 11, 0.18)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 720,
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 28px 64px 74px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              border: "1px solid rgba(255,255,255,0.28)",
              borderRadius: 999,
              padding: "10px 18px",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.76)",
            }}
          >
            PORTFOLIO
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 28,
              fontSize: 62,
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
            }}
          >
            <span>I used to sell ideas.</span>
            <span style={{ display: "flex", color: "#FE27C1" }}>
              Now I build them.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 610,
              marginTop: 26,
              fontSize: 24,
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Business insight, creative thinking, and technical expertise,
            brought together in thoughtful digital experiences.
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 36,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            Emily Vo
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: 480,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 58,
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 382,
              height: 442,
              borderRadius: 38,
              background: "#F59E0B",
              transform: "rotate(-6deg) translate(-12px, 8px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: 382,
              height: 442,
              borderRadius: 38,
              background: "#FE27C1",
              transform: "rotate(5deg) translate(14px, 8px)",
            }}
          />
          <img
            src={portraitSrc}
            alt=""
            width="382"
            height="442"
            style={{
              position: "relative",
              display: "flex",
              width: 382,
              height: 442,
              borderRadius: 38,
              objectFit: "cover",
              objectPosition: "center",
              border: "6px solid white",
              boxShadow: "0 28px 70px rgba(0,0,0,0.38)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
