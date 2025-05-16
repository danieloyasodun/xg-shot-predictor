"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div> 
      <div>
        {/* Navigation Bar */}
        <nav className="navbar">
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


        {/* Football Pitch */}
        <div className="football-pitch"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left; // x relative to pitch left
          const y = e.clientY - rect.top;  // y relative to pitch top
          console.log(`Clicked at: x=${x}, y=${y}`);
        }}>
          <div className="center-circle"></div>
          <div className="half-line"></div>
          <div className="penalty-box left"></div>
          <div className="penalty-box right"></div>
          <div className="goal-box left"></div>
          <div className="goal-box right"></div>
        </div>
      </div>
    </div>
  );
}
