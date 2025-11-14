import { useEffect, useRef } from "react";
import bg from "../../assets/bg-pink-paste.jpg"; // ảnh nền tone trắng hồng
import music from "../../assets/Xe-Dap.mp3";
import { useNavigate } from "react-router-dom";

export default function OpeningMathStory() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
  }, []);

  const handlePlay = () => {
    navigate("/Teacher-Info");
  };

  // 🌸 Hiệu ứng hoa rơi
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
      <div className="bg-white/70 p-6 sm:p-10 rounded-xl max-w-3xl shadow-xl backdrop-blur-md">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-pink-600 animate-fade-in">
          Lời Mở Đầu
        </h1>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 animate-fade-in delay-200">
          Đã hai năm kể từ ngày em rời mái trường, nhưng những buổi học Toán cùng cô Minh vẫn luôn hiện về trong ký ức như những thước phim dịu dàng. Cô không chỉ dạy em cách giải phương trình, mà còn dạy em cách giải những bài toán cuộc đời bằng sự kiên nhẫn và lòng tin.
          <br /><br />
          Em nhớ những buổi chiều cô giảng bài với giọng nói trầm ấm, ánh mắt đầy động viên khi em loay hoay với bài toán khó. Cô từng nói: “Toán học không phải để làm khó em, mà để rèn luyện tư duy và bản lĩnh.” Chính câu nói ấy đã theo em đến giảng đường đại học, nơi em đang theo học ngành Công nghệ Thông tin.
          <br /><br />
          Nhân ngày Nhà giáo Việt Nam, em xin gửi đến cô lời tri ân sâu sắc. Cảm ơn cô vì đã là người thắp sáng con đường tri thức của em bằng những con số đầy yêu thương.
        </p>

        <button
            onClick={handlePlay}
            className="px-6 py-3 bg-pink-400 text-white font-semibold rounded-full text-base sm:text-lg transition-all shadow-md animate-fade-in delay-500 hover:bg-pink-300 hover:scale-105 hover:shadow-xl"
            >
            Tiếp tục hành trình →
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