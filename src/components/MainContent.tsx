import GracesCanvas from "./GracesCanvas";

const MainContent = () => {
  return ( <>
    <section className="h-[120vh] relative bg-[#000]">
      <div className="canvas-wrapper h-screen">
        <GracesCanvas />
      </div>
      <div className="section1 absolute bottom-0 left-0 right-0 text-white text-center select-none pointer-events-none">
        <h2 className="text-3xl capitalize italic m-4 tracking-[.25em]">the</h2>
        <h1 className="text-6xl uppercase ml-4 relative tracking-[.4em]">
          three graces
          <div className="line w-[50px] h-[2px] bg-white absolute -bottom-10 left-[50%] translate-x-[-50%]"></div>
        </h1>
        <p className="max-w-[700px] mx-auto mt-20 pb-24 text-sm leading-7 tracking-normal font-light">Antonio Canova’s statue The Three Graces is a Neoclassical sculpture, in marble, of the mythological three Charites, daughters of Zeus – identified on some engravings of the statue as, from left to right, Euphrosyne, Aglaea and Thalia – who were said to represent youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The Graces presided over banquets and gatherings, to delight the guests of the gods.</p>
      </div>
    </section>
    <section className="h-screen bg-slate-100">sec 3</section>
    <section className="h-screen bg-slate-100">sec 4</section>
  </> );
}
 
export default MainContent;