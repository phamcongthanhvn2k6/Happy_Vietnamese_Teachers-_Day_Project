import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg-pink-paste.jpg";
import music from "../../assets/Xe-Dap.mp3";
import { initAudio, playAudio, pauseAudio } from "../../AudioController";

export default function VideoPage() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    initAudio(music); // Khởi tạo nhạc nền
    pauseAudio();     // Tắt nhạc khi vào trang video

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

  const handleContinue = () => {
    playAudio(); // Bật lại nhạc nền
    navigate("/memory-gallery");
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-10 overflow-hidden relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Modal lời nhắn */}
      {!showVideo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 animate-fade-in px-4">
          <div className="modal-content bg-white rounded-xl shadow-xl p-6 sm:p-10 max-w-md text-center space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-600 handwriting">
              Chào mừng bạn đến với khoảnh khắc đặc biệt!
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Đây là đoạn video kỷ niệm đầy cảm xúc cùng cô Minh. Hãy dành vài phút để cảm nhận lại những yêu thương, những nụ cười và những lời dạy không bao giờ quên.
            </p>
            <button
              onClick={() => setShowVideo(true)}
              className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              🎬 Bắt đầu xem
            </button>
          </div>
        </div>
      )}

      {/* Tiêu đề */}
      <h1 className="text-xl sm:text-3xl font-bold text-pink-600 mb-6 text-center handwriting z-10">
        Video kỷ niệm cùng cô Minh
      </h1>

      {/* Video */}
      {showVideo && (
        <div className="video-container w-full max-w-2xl rounded-xl overflow-hidden shadow-xl backdrop-blur-md animate-fade-in z-10">
          <video className="w-full h-full" controls autoPlay>
            <source
              src="https://res.cloudinary.com/dkzrqnahy/video/upload/v1763374848/18_ow5uua.mp4"
              type="video/mp4"
            />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>
      )}

      {/* Nút quay về */}
      <button
        onClick={handleContinue}
        className="mt-8 bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all text-sm sm:text-base z-10"
      >
        Tiếp tục bộ sưu tập ký ức
      </button>

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

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .handwriting {
            font-size: 1.25rem;
          }

          .flower {
            font-size: 18px;
          }

          .video-container {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
          }

          .modal-content {
            padding: 1.5rem;
          }

          .modal-content h2 {
            font-size: 1.25rem;
          }

          .modal-content p {
            font-size: 0.875rem;
          }

          .modal-content button {
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
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