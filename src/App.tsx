import mainImage from './assets/main.jpg';

function App() {
  return (
    <main className="min-h-[100dvh] bg-[#0097A4] text-white relative overflow-hidden">
      <div className="container flex flex-col items-center justify-center mx-auto relative z-10 mt-[16vh] gap-[56px]">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[50px] text-[#C1FAFF] leading-[1.2]">
            Most Beloved Korean Meme
          </p>
          <h1 className="absolute opacity-0">MUYAHO!</h1>
          <p
            className="text-[80px] font-bold text-[#FFFFFF] leading-[1.2]"
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
          className="inline-block bg-[#FFFFFF] hover:bg-[#C1FAFF] py-[10px] px-[16px] rounded-full text-[24px] text-[#0097A4] font-bold no-underline self-center transition-all duration-300 ease-in-out"
        >
          Pump it
        </a>
      </div>
      <img
        src={mainImage}
        alt="MUYAHO meme"
        className="absolute left-1/2 h-[60vh] w-auto object-contain animate-slideUp origin-bottom bottom-[0px]"
      />
    </main>
  );
}

export default App;
