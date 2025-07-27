import { useState, useEffect } from 'react';
import mainImage from './assets/main.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAssetsLoaded = async () => {
      try {
        await document.fonts.ready;

        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = mainImage;
        });

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading assets:', error);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };

    checkAssetsLoaded();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#C1FAFF] mx-auto mb-4"></div>
      </div>
    );
  }

  return (
    <main className="min-h-[100dvh] relative overflow-hidden">
      <div className="container flex flex-col items-center justify-center mx-auto relative z-10 mt-[10vh] md:mt-[16vh] gap-[32px] md:gap-[56px] px-[16px]">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[24px] md:text-[36px] lg:text-[50px] text-[#C1FAFF] leading-[1.2] max-w-[220px] md:max-w-none">
            Most Beloved Korean Meme
          </p>
          <h1 className="absolute opacity-0">MUYAHO!</h1>
          <p
            className="text-[40px] md:text-[60px] lg:text-[80px] font-bold text-[#FFFFFF] leading-[1.2]"
            style={{ fontFamily: 'Holtwood One SC, serif' }}
            aria-label="MUYAHO!"
          >
            {'MUYAHO!'.split('').map((letter, index) => (
              <span
                key={index}
                className="inline-block animate-letterPop"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                  transform: 'scale(0)',
                }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        <a
          href="https://pump.fun/coin/GgQ8iH5r1pCybqgTj61CveCzUAv1yX9F2twKGtqRpump"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FFFFFF] hover:bg-[#C1FAFF] py-[8px] px-[14px] md:py-[10px] md:px-[16px] rounded-full text-[18px] md:text-[20px] lg:text-[24px] text-[#0097A4] font-bold no-underline self-center transition-all duration-300 ease-in-out"
        >
          Pump it
        </a>
      </div>
      <img
        src={mainImage}
        alt="MUYAHO meme"
        className="absolute left-1/2 h-[50vh] md:h-[60vh] w-auto object-contain animate-slideUp origin-bottom bottom-[0px]"
      />
    </main>
  );
}

export default App;
