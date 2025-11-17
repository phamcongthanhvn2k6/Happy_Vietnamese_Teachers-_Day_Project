import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg-pink-paste.jpg";
import music from "../../assets/Xe-Dap.mp3";

// Import 42 ảnh
import album1 from "../../assets/album/1.jpg";
import album2 from "../../assets/album/2.jpg";
import album3 from "../../assets/album/3.jpg";
import album4 from "../../assets/album/4.jpg";
import album5 from "../../assets/album/5.jpg";
import album6 from "../../assets/album/6.jpg";
import album7 from "../../assets/album/7.jpg";
import album8 from "../../assets/album/8.jpg";
import album9 from "../../assets/album/9.jpg";
import album10 from "../../assets/album/10.jpg";
import album11 from "../../assets/album/11.jpg";
import album12 from "../../assets/album/12.jpg";
import album13 from "../../assets/album/13.jpg";
import album14 from "../../assets/album/14.jpg";
import album15 from "../../assets/album/15.jpg";
import album16 from "../../assets/album/16.jpg";
import album17 from "../../assets/album/17.jpg";
import album18 from "../../assets/album/18.jpg";
import album19 from "../../assets/album/19.jpg";
import album20 from "../../assets/album/20.jpg";
import album21 from "../../assets/album/21.jpg";
import album22 from "../../assets/album/22.jpg";
import album23 from "../../assets/album/23.jpg";
import album24 from "../../assets/album/24.jpg";
import album25 from "../../assets/album/25.jpg";
import album26 from "../../assets/album/26.jpg";
import album27 from "../../assets/album/27.jpg";
import album28 from "../../assets/album/28.jpg";
import album29 from "../../assets/album/29.jpg";
import album30 from "../../assets/album/30.jpg";
import album31 from "../../assets/album/31.jpg";
import album32 from "../../assets/album/32.jpg";
import album33 from "../../assets/album/33.jpg";
import album34 from "../../assets/album/34.jpg";
import album35 from "../../assets/album/35.jpg";
import album36 from "../../assets/album/36.jpg";
import album37 from "../../assets/album/37.jpg";
import album38 from "../../assets/album/38.jpg";
import album39 from "../../assets/album/39.jpg";
import album40 from "../../assets/album/40.jpg";
import album41 from "../../assets/album/41.jpg";
import album42 from "../../assets/album/42.jpg";

const sceneNames = [
  "Kỷ Niệm Chụp ảnh Với Cô Hà", "20/11 Cùng Cô Xuân Nè", "Ảnh Nhìn Mờ Điên", "Cảm Ơn Vì Đã Tặng Quần=)))", "Hơn Cả Khu Tự Trị",
  "Một Buổi Lao Động Công Ích", "Ae Làm Trại Xuyên Đêm Nè", "Vác Xe Lên Và Đi", "Ra Hồ Cá Chụp Trộm", "Đến Giữa Trưa Vẫn Còn Đi",
  "Chụp Vội Tấm Ảnh", "Ae Đi Nhưng Không Quên Hỏi Thầy Có Nhà Không=)))", "Như Tấm 11", "Ae 12@4 Đông Quá", "Nhà Thầy Không Đủ Chỗ Chụp",
  "Cảm Ơn Các Bé Mới Lớn Nhé", "Tấm Này Thằng Nào Chụp Xấu Vậy", "Trai Đẹp Thì Mặc Áo Lớp Nhé", "Lần Đầu Đi Múa Của A Thành", "Ae A4 Xập Xình",
  "Để Đây Không Biết Nói Gì", "Lớp tôi trai ga lăng lắm=))", "Thanh Xuân Của Tôi Đếyyy", "Ôi Đã Sắp Phải Chia Tay rồi sao", "Hét To Vô",
  "Đứa Nào Mập Nhất Thì Đứng ở Giữa", "Ae Trai Đẹp A4", "Thanh Xuân Vườn trường", "Tập Thể Bóng PCT", "Lớp Tôi Là Số 1",
  "Sắp Tốt Nghiệp Ròiiii", "Tấm Này Cô Minh Chụp Xấu Quá", "Ai Đẹp Trai Nhất Thì Ngồi Ở Giữa", "Kỉ Niệm Cuối Ngày", "Lớp Tôi Là Số 1",
  "Gần Hết Ảnh Rồi", "Cố Gắng Xem Hết Nha", "Ảnh Tết Căng Nhất 2026", "Ae Trai Đẹp A4", "Ảnh Mờ Lem",
  "Trao Bằng Khen Cho Ae Nè", "Troll Vn=)))"
];

// Danh sách ảnh và lời dẫn
const albumImages = [
  album1, album2, album3, album4, album5, album6, album7, album8, album9, album10,
  album11, album12, album13, album14, album15, album16, album17, album18, album19, album20,
  album21, album22, album23, album24, album25, album26, album27, album28, album29, album30,
  album31, album32, album33, album34, album35, album36, album37, album38, album39, album40,
  album41, album42,
].map((src, index) => ({
  src,
  caption: `Khoảnh khắc ${index + 1} cùng cô Minh`,
  scene: sceneNames[index] || `Khung cảnh ${index + 1}`,
}));

export default function AlbumPage() {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Chuẩn bị nhạc mới và dừng nhạc cũ nếu có
  useEffect(() => {
  // Dừng mọi audio đang phát trong document
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  // Tạo audio mới
  const newAudio = new Audio(music);
  newAudio.loop = true;
  audioRef.current = newAudio;
}, []);

  // Tự động chuyển ảnh
  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % albumImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [started]);

  // Hoa rơi
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

  const handleStart = () => {
    setStarted(true);
  };

  const currentImage = albumImages[currentIndex];

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
      {/* Màn hình mở đầu */}
      {!started && (
        <div className="text-center bg-white/80 p-6 sm:p-10 rounded-xl shadow-xl backdrop-blur-md animate-fade-in max-w-xl space-y-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-pink-600">
            Hành trình ký ức cùng cô Minh
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Những khoảnh khắc không thể quên, những nụ cười, những giọt nước mắt – tất cả sẽ sống lại trong album này.
          </p>
          <button
            onClick={handleStart}
            className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
          >
            🎬 Bắt đầu hành trình
          </button>
        </div>
      )}

      {/* Album ảnh */}
      {started && (
        <div className="flex flex-col items-center text-center animate-fade-in space-y-6">
          <h2 className="text-xl sm:text-3xl font-bold text-pink-600">
            Kỷ niệm cùng lớp – Những ngày không quên
          </h2>
          <div className="bg-white/80 p-4 sm:p-6 rounded-xl shadow-xl backdrop-blur-md max-w-[390px] sm:max-w-2xl transition-all duration-700 ease-in-out">
            <img
              src={currentImage.src}
              alt={currentImage.caption}
              className="w-full max-h-[400px] object-cover rounded-md shadow-md"
            />
            <p className="text-pink-500 font-semibold text-base sm:text-lg mb- mt-2">
              {currentImage.scene}
            </p>          
</div>
        </div>
      )}

      {/* Nút chuyển trang */}
      {started && (
        <button
          onClick={() => navigate("/")}
          className="fixed bottom-4 right-4 bg-pink-400 hover:bg-pink-500 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all text-sm sm:text-base"
        >
          ➤ Tiếp tục hành trình
        </button>
      )}

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

        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}