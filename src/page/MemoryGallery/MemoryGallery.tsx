import { useEffect, useState } from "react";
import bg from "../../assets/bg-pink-paste.jpg";

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

const imageList = [
  album1, album2, album3, album4, album5, album6, album7, album8, album9, album10,
  album11, album12, album13, album14, album15, album16, album17, album18, album19, album20,
  album21, album22, album23, album24, album25, album26, album27, album28, album29, album30,
  album31, album32, album33, album34, album35, album36, album37, album38, album39, album40,
  album41, album42,
];

// Chia thành 3 phần
const rows = [
  imageList.slice(0, 14),
  imageList.slice(14, 28),
  imageList.slice(28, 42),
];

export default function MemoryFilmResponsive() {
  const [showModal, setShowModal] = useState(false);
  const [modalClosed, setModalClosed] = useState(false);

  useEffect(() => {
    const flowerInterval = setInterval(() => {
      const flower = document.createElement("div");
      flower.className = "falling-flower";
      flower.innerText = "🌸";
      flower.style.left = Math.random() * window.innerWidth + "px";
      flower.style.animationDuration = 3 + Math.random() * 3 + "s";
      document.body.appendChild(flower);
      setTimeout(() => flower.remove(), 6000);
    }, 300);

    const modalTimeout = setTimeout(() => {
      setShowModal(true);
    }, 10000); // Hiện modal sau 10 giây

    return () => {
      clearInterval(flowerInterval);
      clearTimeout(modalTimeout);
    };
  }, []);

  return (
    <div
      className="w-full min-h-screen overflow-hidden relative flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-white text-center pt-10 handwriting drop-shadow-lg z-20">
        Những thước phim kỷ niệm
      </h1>

      {/* 3 hàng ảnh chạy ngang */}
      <div className="w-full mt-10 space-y-10 z-10">
        {rows.map((images, rowIndex) => (
          <div key={rowIndex} className={`film-row row-${rowIndex}`}>
            <div className="film-track">
              {[...images, ...images].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`film-image ${index % 3 === 0 ? "horizontal" : "vertical"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal chào tạm biệt */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 fade-in">
          <div className="bg-white/80 rounded-xl shadow-xl p-6 sm:p-10 max-w-md text-center space-y-6 relative">
            <h2 className="text-xl sm:text-2xl font-bold text-pink-600 handwriting">
              Tạm biệt nhé cô yêu quý 🌸
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Những thước phim kỷ niệm đã khép lại, nhưng tình cảm và lời dạy của cô sẽ mãi là ánh sáng trong tim chúng em.
              <br />
              Xin cảm ơn cô vì tất cả những yêu thương, và cảm ơn các bạn đã đồng hành cùng chúng mình đến cuối hành trình này.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setModalClosed(true);
              }}
              className="bg-pink-400 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all"
            >
              Đóng lại
            </button>
          </div>
        </div>
      )}
      {modalClosed && (
            <button
                onClick={() => window.location.href = "/"}
                className="mt-8 bg-white/80 hover:bg-white text-pink-600 font-semibold px-6 py-3 rounded-full shadow-md transition-all z-20 hover:scale-105 transform duration-300"
            >
                ⬅ Xem lại kỷ niệm
            </button>
            )}

      <style>{`
        .handwriting {
          font-family: 'Dancing Script', cursive;
        }

        .film-row {
          width: 100%;
          overflow: hidden;
          position: relative;
          height: 160px;
        }

        .film-track {
          display: flex;
          gap: 16px;
          animation: scrollFilm linear infinite;
        }

        .row-0 .film-track {
          animation-duration: 60s;
        }

        .row-1 .film-track {
          animation-duration: 45s;
        }

        .row-2 .film-track {
          animation-duration: 75s;
        }

        .film-image {
          height: 160px;
          object-fit: cover;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .horizontal {
          width: 240px;
        }

        .vertical {
          width: 120px;
        }

        @keyframes scrollFilm {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 640px) {
          .film-row {
            height: 100px;
          }

          .horizontal {
            width: 160px;
            height: 100px;
          }

          .vertical {
            width: 80px;
            height: 100px;
          }

          .handwriting {
            font-size: 1.75rem;
          }
        }

        .falling-flower {
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

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
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