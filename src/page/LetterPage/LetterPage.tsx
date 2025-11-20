/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg-pink-paste.jpg";
import typeSound from "../../assets/writingSound.mp3";

export default function LetterTypingPage() {
  const navigate = useNavigate();
  const fullText = `

Cô kính mến,

Những năm tháng học trò của chúng em đã trôi qua thật nhanh, nhưng những bài học, những lời dạy dỗ và tình cảm mà cô dành cho chúng em sẽ mãi mãi khắc ghi trong tim.

Cô không chỉ là người truyền đạt kiến thức, mà còn là người truyền cảm hứng, là ánh sáng dẫn đường cho chúng em trong những lúc khó khăn, là người mẹ thứ hai luôn lắng nghe và thấu hiểu.

Chúng em biết rằng, đằng sau mỗi bài giảng là biết bao tâm huyết, là những đêm thức trắng soạn bài, là những lần lo lắng cho từng bước đi của học trò. Cảm ơn cô vì tất cả!

Nhân ngày Nhà giáo Việt Nam 20/11, chúng em xin kính chúc cô luôn mạnh khỏe, hạnh phúc và tiếp tục lan tỏa yêu thương đến bao thế hệ học sinh.

Chúng em yêu cô rất nhiều!

Thân ái,
Tập thể lớp 12A4`;

  const [displayText, setDisplayText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const typeAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let index = 0;

    // Phát âm thanh gõ máy liên tục
    typeAudioRef.current = new Audio(typeSound);
    typeAudioRef.current.loop = true;
    typeAudioRef.current.volume = 0.2;
    typeAudioRef.current.play();

    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setIsFinished(true);
        if (typeAudioRef.current) {
          typeAudioRef.current.pause();
        }
      }
    }, 30);

    return () => {
      clearInterval(interval);
      if (typeAudioRef.current) {
        typeAudioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.innerText = "🌸";
      flower.style.left = Math.random() * window.innerWidth + "px";
      flower.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 6000);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 py-10 overflow-hidden relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white/80 p-6 sm:p-10 rounded-xl shadow-xl backdrop-blur-md max-w-3xl animate-fade-in z-10 relative w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-pink-600 text-center mb-6 handwriting">
          Thư Gửi Cô Minh
        </h1>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line">
          {displayText}
        </p>
        {isFinished && (
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/video-page")}
              className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              Hành Trình Tiếp Theo ➤
            </button>
          </div>
        )}
      </div>

      <style>{`
        .handwriting {
          font-family: 'Dancing Script', cursive;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        .flower {
          position: fixed;
          top: -40px;
          font-size: 24px;
          animation: fall linear forwards;
          z-index: 10;
          pointer-events: none;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        /* Responsive tweaks for mobile */
        @media (max-width: 640px) {
          .handwriting {
            font-size: 1.75rem;
          }

          .text-base {
            font-size: 0.95rem;
          }

          .text-lg {
            font-size: 1.05rem;
          }

          .rounded-xl {
            border-radius: 0.75rem;
          }

          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .py-10 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .flower {
            font-size: 18px;
          }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}