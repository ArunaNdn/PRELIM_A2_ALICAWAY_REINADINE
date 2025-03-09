import React, { useState } from "react";

function Home() {
  const genZChallenges = [
    {
      question:
        "💸 Laging kasama pero di mo naman mahawakan. Tuwing sahod, parang nawawala. Ano ako?",
      answer: "Sweldo / GCash Balance 🤡",
    },
    {
      question:
        "📚 Lagi mong dala, pero bihirang buksan. Minsan lang pinapansin, lalo na pag may quiz. Ano ito?",
      answer: "Notebook / Module 😆",
    },
    {
      question:
        "😴 Kaaway ng lahat tuwing umaga. Best friend ng puyat. Ano ako?",
      answer: "Alarm Clock ⏰",
    },
    {
      question:
        "🛒 Akala mo libre, pero ‘pag nasa counter ka na, ‘Shocks, kulang pala pera ko!’ Ano ito?",
      answer: "Budol Items sa Shopee / Lazada 🛍️",
    },
    {
      question:
        "📱 Laging hawak pero di mo naman laging sinasagot. Pero ‘pag chismis, biglang mabilis! Ano ako?",
      answer: "Cellphone 📲",
    },
    {
      question:
        "🏫 Hindi mo naman niligawan pero lagi kang hinahabol. Pag di mo pinansin, babagsak ka. Ano ako?",
      answer: "Deadline 📅",
    },
  ];

  const [revealed, setRevealed] = useState(
    Array(genZChallenges.length).fill(false)
  );

  const toggleAnswer = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = !newRevealed[index];
    setRevealed(newRevealed);
  };

  return (
    <div className="container mt-5 text-center">
      <h2 style={{ color: "#ff69b4", fontFamily: "'Pacifico', cursive" }}>
        🎀🎀 PRELIM EXAM NI REINADINE 🎀🎀
      </h2>

      <div className="content-section mt-4">
        <p className="lead">
          "Guess the Word Challenge! 😆✨ Tap to reveal the answer!"
        </p>

        {genZChallenges.map((challenge, index) => (
          <div key={index} className="mb-3">
            <p
              onClick={() => toggleAnswer(index)}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#d63384",
                textDecoration: "underline",
              }}
            >
              {challenge.question}
            </p>
            {revealed[index] && (
              <p style={{ color: "#555" }}>💡 {challenge.answer}</p>
            )}
          </div>
        ))}

        <p>
          **Buhay-estudyante, parang Gen Z din!** Puno ng struggles, memes, at
          ‘budol’, pero sa huli, **makaka-graduate din!** Kaya laban lang! 💪
          Kahit puyat, kahit pagod, **pangarap mo? Still loading... pero
          darating din!** 🚀
        </p>
      </div>

      <div className="image-section mt-4">
        <img
          src="https://i.pinimg.com/originals/59/2d/5c/592d5caa3e86c303a6afe9064dc1546d.gif"
          alt="Coding background"
          className="img-fluid rounded shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
