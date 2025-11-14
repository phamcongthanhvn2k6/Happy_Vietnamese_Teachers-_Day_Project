import { useEffect } from "react";
import bg from "../../assets/bg-pink-paste.jpg";
import photo1 from "../../assets/co-minh-1.jpg";
import photo2 from "../../assets/co-minh-2.jpg";
import photo3 from "../../assets/co-minh-3.jpg";
import { useNavigate } from "react-router-dom";

export default function TeacherInfo() {
  const navigate = useNavigate();

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
      className="w-full min-h-screen flex flex-col items-center text-center px-4 sm:px-8 overflow-hidden relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white/70 p-4 sm:p-10 rounded-xl w-full max-w-[390px] sm:max-w-4xl shadow-xl backdrop-blur-md mt-10 space-y-6 sm:space-y-8">
        <h1 className="text-lg sm:text-4xl font-bold text-pink-600 animate-fade-in">
          Chân dung cô Minh – Những khoảnh khắc không quên
        </h1>

        {/* Ảnh 1 + lời thoại */}
        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-6 animate-fade-in delay-200">
          <img src={photo1} alt="Cô Minh 1" className="rounded-xl shadow-md object-cover w-full sm:w-1/2 max-h-[240px]" />
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
            “Em vẫn nhớ ánh mắt cô hôm ấy – khi em nộp bài kiểm tra với đôi tay run rẩy. Cô không trách, chỉ nhẹ nhàng nói: ‘Sai để học, con ạ.’”
          </p>
        </div>

        {/* Ảnh 2 + lời thoại */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-y-4 sm:gap-6 animate-fade-in delay-400">
          <img src={photo2} alt="Cô Minh 2" className="rounded-xl shadow-md object-cover w-full sm:w-1/2 max-h-[240px]" />
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
            “Buổi chiều cuối năm ấy, cô đứng giữa lớp, giọng nghẹn ngào khi nói lời chia tay. Em đã khóc, vì biết mình sắp xa một người mẹ thứ hai.”
          </p>
        </div>

        {/* Ảnh 3 + lời thoại */}
        <div className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-6 animate-fade-in delay-600">
          <img src={photo3} alt="Cô Minh 3" className="rounded-xl shadow-md object-cover w-full sm:w-1/2 max-h-[240px]" />
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
            “Thật ra học ở khu tự trị nhiều nên mới đăng tấm này lên thôi.”
          </p>
        </div>
      </div>

      {/* Nút cố định góc phải */}
      <button
        className="fixed bottom-4 right-4 bg-pink-300 hover:bg-pink-400 text-white font-semibold px-4 py-2 rounded-full shadow-lg transition-all text-xs sm:text-base"
        onClick={() => navigate("/Album-Page")}
      >
        ➤ Tiếp theo
      </button>

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

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }

        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}