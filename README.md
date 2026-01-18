 Instagram Reels Clone (Vanilla JavaScript)

A fully interactive Instagram-style Reels UI built using HTML, CSS, and Vanilla JavaScript.
This project mimics core Reels behavior such as scroll snapping, video playback, likes, follow/unfollow, mute/unmute, and double-tap interactions.

-> Features

📱 Reels-style vertical scrolling

▶️ Play / Pause video on tap

🔊 Mute / Unmute per reel

❤️ Like / Unlike with count update

💥 Double-tap to like

➕ Follow / Unfollow creators

📊 State managed using JavaScript objects

🎨 Remix Icons for UI elements

🧠 How It Works

All reel data is stored in a JavaScript array of objects

Each reel maintains its own state:

isLiked

likeCount

isFollowed

ismuted

🛠 Tech Stack

HTML5

CSS3

JavaScript (ES6)

Remix Icon

📂 Project Structure
/project-root
│── index.html
│── style.css
│── script.js
│── /video
│    ├── video1.mp4
│    ├── video2.mp4
│    ├── video3.mp4
│    └── ...

🔧 Installation & Usage

Clone the repository

git clone https://github.com/your-username/reels-clone.git


Open the project

cd reels-clone


Run locally

Just open index.html in your browser
(no server required)

🎮 Controls
Action	Interaction
Play / Pause	Click on video
Mute / Unmute	Click speaker icon
Like	Click ❤️
Double Like	Double-tap anywhere on reel
Follow / Unfollow	Click Follow button
Scroll Reels	Mouse wheel / touch scroll
📸 UI Preview

Instagram-like mobile reel layout with floating icons, bottom captions, and smooth transitions.

🧩 Key Learning Outcomes

DOM manipulation without frameworks

Event delegation

State management using JS objects

Handling video elements efficiently

Building real-world UI behavior (Instagram-style logic)

🙌 Credits

UI inspiration: Instagram Reels

Icons: Remix Icon

Videos: Sample assets (local)

📜 License

This project is for learning and practice purposes only.
