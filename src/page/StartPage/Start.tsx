import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/Start.jpg";
import music from "../../assets/Xe-Dap.mp3";

export default function Start() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
  }, []);

  const handleStart = () => {
    navigate("/Opening-Letter");
    audioRef.current?.play().catch(() => {
      console.log("Trình duyệt chặn autoplay, cần người dùng bấm nút.");
    });
  };

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
      className="w-full h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-pink-100/60 p-6 rounded-xl max-w-3xl shadow-xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-pink-600 drop-shadow-xl animate-fade-in">
          Chào mừng Ngày Nhà Giáo Việt Nam 20/11
        </h1>

        <p className="text-base sm:text-lg text-pink-800 mb-8 leading-relaxed animate-fade-in delay-200">
          Xin gửi lời tri ân sâu sắc đến những người lái đò thầm lặng — những thầy
          cô đã và đang tận tâm cống hiến cho sự nghiệp trồng người.
        </p>

        <button
          onClick={handleStart}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-pink-400 text-white font-semibold rounded-full text-lg sm:text-xl hover:bg-pink-300 transition-all shadow-lg animate-fade-in delay-500"
        >
          Bắt đầu hành trình
        </button>
      </div>

      <style>{`
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

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}