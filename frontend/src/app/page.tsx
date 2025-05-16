"use client";
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [ballPos, setBallPos] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const [bodyPart, setBodyPart] = useState('left_foot');
  const [assistType, setAssistType] = useState('none');
  const [distance, setDistance] = useState<number | null>(null);
  const [angle, setAngle] = useState<number | null>(null);

  const pitchLength = 105; // meters
  const pitchWidth = 68;

  function convertToMeters(normalizedX: number, normalizedY: number) {
    return {
      x: normalizedX * pitchLength,
      y: normalizedY * pitchWidth,
    };
  }

  function calculateDistanceMeters(x: number, y: number, goalSide: "left" | "right") {
    const goalX = goalSide === "left" ? 0 : pitchLength;
    const goalY = pitchWidth / 2;
    return Math.sqrt((x - goalX) ** 2 + (y - goalY) ** 2);
  }

  function calculateAngle(x: number, y: number, goalSide: "left" | "right"): number {
    const goalX = goalSide === "left" ? 0 : 1;
    const goalY = 0.5;
    const dx = goalX - x;
    const dy = goalY - y;
    const angleRadians = Math.atan2(dy, dx);
    const angleDegrees = Math.abs((angleRadians * 180) / Math.PI);
    return angleDegrees;
  }

 function onPitchClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    let rawX = e.clientX - rect.left;
    let rawY = e.clientY - rect.top;

    // Clamp rawX and rawY inside pitch boundaries
    rawX = Math.min(Math.max(0, rawX), rect.width);
    rawY = Math.min(Math.max(0, rawY), rect.height);

    const normalizedX = rawX / rect.width;
    const normalizedY = 1 - rawY / rect.height;

    const goalSide: "left" | "right" = normalizedX > 0.5 ? "right" : "left";

    const meters = convertToMeters(normalizedX, normalizedY);
    const dist = calculateDistanceMeters(meters.x, meters.y, goalSide);
    const ang = calculateAngle(normalizedX, normalizedY, goalSide);

    setBallPos({ x: normalizedX, y: normalizedY });
    setDistance(dist);
    setAngle(ang);
  }

  const goalSide: "left" | "right" = ballPos.x > 0.5 ? "right" : "left";
  const goalNormalizedX = goalSide === "left" ? 0 : 1;
  const goalNormalizedY = 0.5;

  return (
    <div>
      {/* Navigation Bar */}
        <nav className="navbar">
          <span className="brand">xG Dashboard</span>
          <Link href="/">Home</Link>
          <span className="under-construction">Under Construction 🚧</span>
        </nav>

        {/* Main Content */}
        <div className="content">
          <div className="boxes-container">
            <div className="box">
              <h1>Welcome to the Interactive xG Dashboard</h1>
              <p>
                This fully interactive web application, built with Next.js, allows football fans and analysts to explore the concept of Expected Goals (xG) in a hands-on way.
                Users can click anywhere on the displayed football pitch to simulate shots, and the app instantly calculates the xG value based on the exact shot location using a trained machine learning model.
                This helps visualize shot quality and probability of scoring in different areas of the pitch, providing deeper insights into player and team performance beyond traditional stats.
              </p>
            </div>

            <div className="box">
              <h1>What is Expected Goals (xG)?</h1>  
              <p>
                Expected Goals (xG) is a performance metric used in football (soccer) analytics to estimate the probability that a given shot will result in a goal. The xG value of a shot ranges from 0 to 1, where 1.0 means a shot is almost certain to score, and 0.0 means a goal is nearly impossible.
                xG is calculated based on various factors that influence shot quality, such as the location on the pitch, angle to goal, distance, body part used, type of assist, shot type, and whether the shooter was under pressure. The goal is to capture how likely a shot is to score based on historical data of similar situations.
                By summing xG values over a match or season, analysts can assess whether a player or team is finishing efficiently, creating high-quality chances, or outperforming expected performance — making it a crucial tool for understanding performance beyond just goals and assists.
              </p> 
            </div>

            <div className="box">
              <h1>How the Interactive Pitch Works</h1>
              <p>
                The football pitch below is fully interactive. Simply click anywhere on the pitch to simulate a shot from that location.
                The app captures the exact coordinates of your click, feeds this data into a trained machine learning model, and instantly returns the expected goals (xG) value.
                This dynamic interaction allows you to experiment with shot positions and understand how different areas of the pitch affect scoring probabilities in real time.
              </p>
            </div>

            <div className="box">
              <h1>About This Project</h1>
              <p>
                Expected Goals modeling is transforming football analytics by providing deeper insights into chance quality rather than just goals scored.
                This project uses a neural network trained on over 100,000 shots with multiple parameters to predict shot success probability with high precision.
                Our interactive pitch lets users simulate shots and instantly receive xG values based on exact shot locations.
                The goal is to empower fans and analysts with cutting-edge tools to better understand team and player performance across Europe’s top leagues.
              </p>
            </div>
          </div>
        </div>

      {/* Pitch and Input Side-by-Side */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginTop: '2rem' }}>
        {/* Football Pitch */}
        <div
          className="football-pitch"
          onClick={onPitchClick}
          style={{ position: 'relative', background: '#0a7a0a', cursor: 'crosshair' }}
        >
          {/* Example pitch markings */}
          <div className="center-circle"></div>
          <div className="half-line"></div>
          <div className="penalty-box left"></div>
          <div className="penalty-box right"></div>
          <div className="goal-box left"></div>
          <div className="goal-box right"></div>

          {/* SVG for line */}
          <svg
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          >
            <line
              x1={`${ballPos.x * 100}%`}
              y1={`${(1 - ballPos.y) * 100}%`}
              x2={`${goalNormalizedX * 100}%`}
              y2={`${(1 - goalNormalizedY) * 100}%`}
              stroke="yellow"
              strokeWidth={2}
            />
          </svg>

          {/* Ball (circle) */}
          <div
            style={{
              position: 'absolute',
              left: `${ballPos.x * 100}%`,
              top: `${(1 - ballPos.y) * 100}%`,
              transform: 'translate(-50%, -50%)',
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: 'white',
              border: '2px solid black',
              pointerEvents: 'none', // so clicks go through to pitch div
            }}
          ></div>
        </div>

        {/* Coordinates Display */}
        <div className="coordinate-form" style={{ minWidth: '200px' }}>
          <h3>Shot Coordinates</h3>
          <form>
            <label>
              X:
              <input type="text" value={ballPos.x.toFixed(3)} readOnly />
            </label>
            <br />
            <label>
              Y:
              <input type="text" value={ballPos.y.toFixed(3)} readOnly />
            </label>
            <br />
            <label>
              Distance to Goal:
              <input type="text" value={distance?.toFixed(3) || ''} readOnly />
            </label>
            <br />
            <label>
              Angle to Goal (°):
              <input type="text" value={angle?.toFixed(1) || ''} readOnly />
            </label>
            <br />
            <label>
              Body Part:
              <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)}>
                <option value="left_foot">Left Foot</option>
                <option value="right_foot">Right Foot</option>
                <option value="head">Head</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <label>
              Assist Type:
              <select value={assistType} onChange={(e) => setAssistType(e.target.value)}>
                <option value="none">None</option>
                <option value="cross">Cross</option>
                <option value="through_ball">Through Ball</option>
                <option value="cutback">Cutback</option>
                <option value="rebound">Rebound</option>
                <option value="set_piece">Set Piece</option>
              </select>
            </label>
            <br/>
            <button type="button" onClick={() => alert('Get xG: This feature is a work in progress.')}>
              Get xG
            </button>
            <button type="button" onClick={() => alert('Post-shot xG: This feature is a work in progress.')}>
              View post-shot xG
            </button>
            <button type="button" onClick={() => alert('xGSoT: This feature is a work in progress.')}>
              View xGSoT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}