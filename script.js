const header = document.querySelector(".fade-header");
const hero = document.querySelector(".hero-fade");

window.addEventListener("load", () => {
  header.classList.add("fade-header-in");
  hero.classList.add("hero-fade-in");
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");

burger.addEventListener("click", () => {
  nav.classList.toggle("opened-nav");
  nav.classList.remove("fade-header-in");
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("opened-nav");
    });
  });
});

const rightArrow = document.getElementById("right-btn");
const leftArrow = document.getElementById("left-btn");
const carouselProduct = document.querySelector(".products-carousel");
let cardIndex = 0;
const cards = document.querySelectorAll(".product-card");
const totalCards = cards.length;
const gap = 20;

function getCardStep() {
  return cards[0].offsetWidth + gap;
}

rightArrow.addEventListener("click", () => {
  const visibleCount = Math.floor(carouselProduct.offsetWidth / getCardStep());
  if (cardIndex + visibleCount < totalCards) {
    cardIndex++;
    carouselProduct.scrollLeft = cardIndex * getCardStep();
  }
});
leftArrow.addEventListener("click", () => {
  if (cardIndex > 0) {
    cardIndex--;
    carouselProduct.scrollLeft = cardIndex * getCardStep();
  }
});

const popularSection = document.querySelector(".popular-fade");

window.addEventListener("scroll", () => {
  if (scrollY > 400) {
    popularSection.classList.add("popular-fade-in");
  }
});

const whySection = document.querySelector(".why-fade");

window.addEventListener("scroll", () => {
  if (scrollY > 950) {
    whySection.classList.add("why-fade-in");
  }
});

const rateInput = document.querySelector(".rate-input");
const rateText = document.querySelector(".rate-text");
const rateBtn = document.querySelector(".rate-btn");
const reviewList = document.querySelector(".reviews-list");
const starBtns = document.querySelectorAll(".star-btn");
const ratingBox = document.querySelector(".rating");
const writeRate = document.querySelector(".write-rate");
let rating = 0;
starBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating = Number(btn.dataset.value);

    starBtns.forEach((star) => {
      const starValue = Number(star.dataset.value);
      if (starValue <= rating) {
        star.classList.add("clicked-star");
      } else {
        star.classList.remove("clicked-star");
      }
    });
  });
});

rateBtn.addEventListener("click", () => {
  const reviewText = document.createElement("p");
  const reviewName = document.createElement("span");
  reviewText.textContent = rateText.value;
  reviewName.textContent = "— " + rateInput.value;
  const reviewBox = document.createElement("div");
  reviewBox.classList.add("review");
  const reviewStars = document.createElement("div");
  for (let i = 0; i < rating; i++) {
    const star = document.createElement("span");
    star.textContent = "⭐";
    reviewStars.appendChild(star);
  }
  reviewBox.appendChild(reviewStars);

  const changeBtn = document.createElement("button");
  changeBtn.textContent = ". . .";
  changeBtn.classList.add("change-review");
  reviewBox.appendChild(reviewText);
  reviewBox.appendChild(reviewName);
  reviewBox.appendChild(changeBtn);
  reviewList.appendChild(reviewBox);
  rateInput.value = "";
  rateText.value = "";

  let menuOpened = false;

  const deleteReview = document.createElement("button");
  const reviewButtons = document.createElement("div");

  changeBtn.addEventListener("click", () => {
    deleteReview.textContent = "delete your review";
    deleteReview.classList.add("change-review-btn");
    reviewButtons.classList.add("change-review-box");
    reviewButtons.appendChild(deleteReview);

    if (menuOpened === false) {
      reviewBox.appendChild(reviewButtons);
      menuOpened = true;
    } else {
      reviewBox.removeChild(reviewButtons);
      menuOpened = false;
    }
  });

  deleteReview.addEventListener("click", () => {
    reviewBox.remove();
  });
});

const reviewsSection = document.querySelector(".reviews-fade");

window.addEventListener("scroll", () => {
  if (scrollY > 1250) {
    reviewsSection.classList.add("reviews-fade-in");
  }
});

const openAIChat = document.querySelector(".ai-chat-button");
const AIChat = document.querySelector(".ai-chat");
const closeChat = document.getElementById("close-chat");
const localTime = document.querySelector(".local-time");

openAIChat.addEventListener("click", () => {
  AIChat.classList.add("opened-ai-chat");
  if (AIChat.classList.contains("opened-ai-chat")) {
    openAIChat.style.display = "none";
  } else {
    openAIChat.style.display = "block";
  }
});

closeChat.addEventListener("click", () => {
  AIChat.classList.remove("opened-ai-chat");
  openAIChat.style.display = "block";
});

function countTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  localTime.textContent = `${hours}:${minutes}`;
}
countTime();

setInterval(countTime, 60000);

const openQuestions = document.getElementById("ask-btn");
const questionBox = document.querySelector(".questions-box");
const chatMessages = document.querySelector(".chat-messages");

const faqs = [
  {
    q: "What are the most popular sneakers right now?",
    a: "The most popular right now are Nike Air Max and Adidas Ultraboost.",
  },
  {
    q: "Do you have size 42?",
    a: "Yes, size 42 is available for most models.",
  },
  {
    q: "Which sneakers are good for running?",
    a: "For running, try Nike Pegasus, Asics Gel, or Adidas Ultraboost.",
  },
  {
    q: "Can I return sneakers if they don’t fit?",
    a: "Yes, returns are possible within 14 days with receipt and original packaging.",
  },
  {
    q: "Do you offer free shipping?",
    a: "Yes, free shipping is available for orders over 2000 UAH.",
  },
  {
    q: "Which sneakers are good for everyday wear?",
    a: "Nike Air Force, Puma RS-X, or Adidas Stan Smith are great for everyday.",
  },
  {
    q: "How do I find my sneaker size?",
    a: "Measure your foot length and check our size chart on the website.",
  },
  {
    q: "Do you have kids’ sneakers?",
    a: "Yes, we have kids’ sneakers from size 25 to 38.",
  },
  {
    q: "What are the new arrivals this month?",
    a: "New arrivals include Nike Air Zoom, Adidas ZX 2K, and Puma Mirage.",
  },
  {
    q: "Can I pay with a card on delivery?",
    a: "Yes, you can pay by card when the courier delivers your order.",
  },
  {
    q: "Which sneakers are best for the gym?",
    a: "Nike Metcon, Reebok Nano, or Puma Fuse are perfect for the gym.",
  },
  {
    q: "Are there any shipping restrictions?",
    a: "We deliver all over Ukraine, except temporarily occupied territories.",
  },
  {
    q: "How can I find out about discounts?",
    a: "Subscribe to our newsletter or check the promotions on our website.",
  },
  {
    q: "Can I order sneakers that are out of stock?",
    a: "Yes, you can pre-order, and we’ll notify you when they’re available.",
  },
  {
    q: "Which sneakers are best for high activity?",
    a: "Sneakers with good cushioning, like Nike Air Zoom or Adidas Ultraboost, are ideal.",
  },
];

const questionButtons = document.querySelectorAll(".question-btn");

questionButtons.forEach((btn, index) => {
  btn.dataset.index = index;

  btn.addEventListener("click", () => {
    chatMessages.innerHTML += `
    <div class="chat-pair">
      <div class="user-question">
        user: ${btn.textContent}
      </div>
      <div class="ai-answer">
        AI: ${faqs[index].a}
      </div>
    </div>
  `;
    questionBox.classList.remove("opened-questions-box");
    selectedQuestion.classList.add("selected-question-opened");
    answerBox.classList.add("gotten-answer");
  });
});

openQuestions.addEventListener("click", () => {
  questionBox.classList.toggle("opened-questions-box");
});

const deleteChatBtn = document.getElementById("delete-chat");

deleteChatBtn.addEventListener("click", () => {
  openQuestions.disabled = true;
  openQuestions.style.color = "black";
  if (chatMessages.querySelector(".sure-delete")) return;

  const sureToDelete = document.createElement("div");
  const yesToDelete = document.createElement("button");
  const noToDelete = document.createElement("button");
  sureToDelete.classList.add("sure-delete");
  yesToDelete.classList.add("delete");
  noToDelete.classList.add("delete");
  sureToDelete.textContent = "Do you want to delete your chat?";
  yesToDelete.textContent = "Yes";
  noToDelete.textContent = "No";
  sureToDelete.appendChild(yesToDelete);
  sureToDelete.appendChild(noToDelete);
  chatMessages.appendChild(sureToDelete);

  noToDelete.addEventListener("click", () => {
    chatMessages.removeChild(sureToDelete);
    openQuestions.disabled = false;
  });

  yesToDelete.addEventListener("click", () => {
    chatMessages.innerHTML = "";
    openQuestions.disabled = false;
  });

  if (questionBox.classList.contains("opened-questions-box")) {
    questionBox.classList.toggle("opened-questions-box");
  } else return;
});
