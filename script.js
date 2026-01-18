const reels = [
  {
    ismuted: true,
    username: "codewithayush",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "Dark mode > light mode. Change my mind.",
    video: "./video/video1.mp4",
    userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    ismuted: true,
    username: "designbysan",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: false,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "./video/video2.mp4",

    userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
  },
  {
    ismuted: true,
    username: "frontend.ninja",
    likeCount: 22150,
    isLiked: false,
    commentCount: 612,
    shareCount: 138,
    isFollowed: true,
    caption: "When flexbox finally aligns the way you wanted 😭🔥",
    video: "./video/video3.mp4",

    userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    ismuted: true,
    username: "travelwithriya",
    likeCount: 54200,
    isLiked: false,
    commentCount: 822,
    shareCount: 201,
    isFollowed: false,
    caption: "My solo Bali trip changed everything 🌴",
    video: "./video/video4.mp4",

    userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    ismuted: true,
    username: "daily.dev.quotes",
    likeCount: 3120,
    isLiked: true,
    commentCount: 102,
    shareCount: 55,
    isFollowed: true,
    caption: "Code. Sleep. Repeat. That’s the cycle.",
    video: "./video/video5.mp4",

    userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    ismuted: true,
    username: "fitnessbymegha",
    likeCount: 27450,
    isLiked: false,
    commentCount: 540,
    shareCount: 87,
    isFollowed: true,
    caption: "No gym? No problem. Do this 12-min workout at home.",
    video: "./video/video1.mp4",

    userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
  },
  {
    ismuted: true,
    username: "streetfoodlover",
    likeCount: 68000,
    isLiked: true,
    commentCount: 1304,
    shareCount: 412,
    isFollowed: false,
    caption: "You won’t believe this burger exists 🤯🍔",
    video: "./video/video2.mp4",

    userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
  },
  {
    ismuted: true,
    username: "musicbytara",
    likeCount: 14500,
    isLiked: false,
    commentCount: 267,
    shareCount: 73,
    isFollowed: true,
    caption: "Late night vibes // piano version 🎹✨",
    video: "./video/video3.mp4",

    userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    ismuted: true,
    username: "techreviews101",
    likeCount: 23180,
    isLiked: true,
    commentCount: 481,
    shareCount: 120,
    isFollowed: false,
    caption: "The most underrated smartphone of 2024 📱",
    video: "./video/video4.mp4",

    userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
  },
  {
    ismuted: true,
    username: "learnanimations",
    likeCount: 18740,
    isLiked: false,
    commentCount: 350,
    shareCount: 92,
    isFollowed: true,
    caption: "GSAP can literally change your career. Start today.",
    video: "./video/video1.mp4",

    userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];
const allReels = document.querySelector(".all-reels");

function renderReels() {
  let html = "";

  reels.forEach((r, i) => {
    html += `
    <div class="reel">
      <video ${r.ismuted ? "muted" : ""} loop playsinline src="${r.video}"></video>

      <div class="play-pause">
        <i class="ri-pause-fill"></i>
      </div>

      <div class="mute" data-id="${i}">
        <i class="ri-volume-${r.ismuted ? "mute" : "up"}-fill"></i>
      </div>

      <div class="bottom">
        <div class="user">
          <img src="${r.userprofile}" />
          <h4>${r.username}</h4>
          <button class="follow" data-id="${i}">
            ${r.isFollowed ? "Unfollow" : "Follow"}
          </button>
        </div>
        <h3>${r.caption}</h3>
      </div>

      <div class="right">
        <div class="like" data-id="${i}">
          <h4 class="like-icon">
            <i class="ri-heart-3-${r.isLiked ? "fill love" : "line"}"></i>
          </h4>
          <h6>${r.likeCount}</h6>
        </div>

        <div class="comment">
          <i class="ri-chat-3-line"></i>
          <h6>${r.commentCount}</h6>
        </div>

        <div class="share">
          <i class="ri-share-forward-line"></i>
          <h6>${r.shareCount}</h6>
        </div>
      </div>
    </div>`;
  });

  allReels.innerHTML = html;
}

renderReels();

/* ============================= */
/* EVENT HANDLING (ONE PLACE) */
/* ============================= */
let lastTap = 0;

allReels.addEventListener("click", (e) => {
  const reelEl = e.target.closest(".reel");
  if (!reelEl) return;

  const likeEl = e.target.closest(".like");
  const muteEl = e.target.closest(".mute");
  const followBtn = e.target.closest(".follow");
  const video = e.target.tagName === "VIDEO" ? e.target : null;

  /* ❤️ LIKE / UNLIKE */
  if (likeEl) {
    const id = likeEl.dataset.id;
    reels[id].isLiked = !reels[id].isLiked;
    reels[id].likeCount += reels[id].isLiked ? 1 : -1;
    renderReels();
    return;
  }

  /* ➕ FOLLOW / UNFOLLOW */
  if (followBtn) {
    const id = followBtn.dataset.id;
    reels[id].isFollowed = !reels[id].isFollowed;
    renderReels();
    return;
  }

  /* 🔊 MUTE / UNMUTE */
  if (muteEl) {
    const id = muteEl.dataset.id;
    reels[id].ismuted = !reels[id].ismuted;
    renderReels();
    return;
  }

  /* ⏯ PLAY / PAUSE */
  if (video) {
    if (video.paused) {
      video.play();
      reelEl.classList.remove("paused");
    } else {
      video.pause();
      reelEl.classList.add("paused");
    }
  }

  /* ❤️ DOUBLE TAP LIKE */
  const now = Date.now();
  if (now - lastTap < 300 && reelEl) {
    const id = reelEl.querySelector(".like")?.dataset.id;
    if (id && !reels[id].isLiked) {
      reels[id].isLiked = true;
      reels[id].likeCount++;
      renderReels();
    }
  }
  lastTap = now;
});