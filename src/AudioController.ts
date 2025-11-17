let audio: HTMLAudioElement | null = null;

export const initAudio = (src: string) => {
  if (!audio) {
    audio = new Audio(src);
    audio.loop = true;
  }
};

export const playAudio = () => {
  audio?.play().catch(() => {
    console.log("Trình duyệt chặn autoplay.");
  });
};

export const pauseAudio = () => {
  audio?.pause();
};

export const getAudio = () => audio;