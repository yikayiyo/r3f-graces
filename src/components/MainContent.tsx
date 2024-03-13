import { useRef, useState } from "react";
import GraceCanvas from "./GraceCanvas";
import GracesCanvas from "./GracesCanvas";
import gsap from "gsap";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<string>('aglaea')
  let content = ''
  if (activeTab === 'aglaea') {
    content = `
      She was venerated as the goddess of beauty, splendor, glory, magnificence, and adornment. She is the youngest of the Charites according to Hesiod. Aglaea is one of three daughters of Zeus and either the Oceanid Eurynome, or of Eunomia, the goddess of good order and lawful conduct.
    `
  } else if (activeTab === 'thalia') {
    content = `Thalia, in Greek religion, one of the nine Muses, patron of comedy; also, according to the Greek poet Hesiod, a Grace (one of a group of goddesses of fertility). She is the mother of the Corybantes, celebrants of the Great Mother of the Gods, Cybele, the father being Apollo, a god related to music and dance. In her hands she carried the comic mask and the shepherd’s staff.`
  } else if (activeTab === 'euphre') {
    content = `Euphrosyne is a Goddess of Good Cheer, Joy and Mirth. Her name is the female version of a Greek word euphrosynos, which means "merriment". The Greek poet Pindar states that these goddesses were created to fill the world with pleasant moments and good will. Usually the Charites attended the goddess of beauty Aphrodite.`
  }

  const contentRef = useRef(null!)
  const handleClickTab = (tabIndex: string) => {
    if (tabIndex !== activeTab) {
      setActiveTab(tabIndex)
      gsap.fromTo(contentRef.current, {
        opacity: .2,
        x: 20,
      }, {
        opacity: 1,
        x: 0,
        duration: .3,
        ease: 'sine.inOut'
      })
    }
  }

  return (<>
    <section className="h-[120vh] relative">
      <div className="canvas-wrapper absolute inset-0 z-10 h-screen">
        <GracesCanvas />
      </div>
      <div className="section1 absolute bottom-0 left-0 right-0 z-20 text-white text-center select-none pointer-events-none">
        <h2 className="text-3xl capitalize italic m-4 tracking-[.25em]">the</h2>
        <h1 className="text-6xl uppercase ml-4 relative tracking-[.4em]">
          three graces
          <div className="line w-[50px] h-[2px] bg-white absolute -bottom-10 left-[50%] translate-x-[-50%]"></div>
        </h1>
        <p className="max-w-[700px] mx-auto mt-20 pb-24 text-sm leading-7 tracking-normal font-light">Antonio Canova’s statue The Three Graces is a Neoclassical sculpture, in marble, of the mythological three Charites, daughters of Zeus – identified on some engravings of the statue as, from left to right, Euphrosyne, Aglaea and Thalia – who were said to represent youth/beauty (Thalia), mirth (Euphrosyne), and elegance (Aglaea). The Graces presided over banquets and gatherings, to delight the guests of the gods.</p>
      </div>
    </section>
    <section className="h-screen relative">
      <div className="intro absolute inset-0 z-20 select-none bg-gradient-to-r from-black via-black/30 via-46% to-transparent">
        <ul className="p-20 flex items-center gap-3 text-white text-4xl capitalize">
          <li onClick={() => handleClickTab('aglaea')} className={activeTab == 'aglaea' ? "active underline underline-offset-[.32em] hover:cursor-pointer" : "hover:cursor-pointer"}>aglaea</li>
          <li onClick={() => handleClickTab('thalia')} className={activeTab == 'thalia' ? "active underline underline-offset-[.32em] hover:cursor-pointer" : "hover:cursor-pointer"}>thalia</li>
          <li onClick={() => handleClickTab('euphre')} className={activeTab == 'euphre' ? "active underline underline-offset-[.32em] hover:cursor-pointer" : "hover:cursor-pointer"}>euphre</li>
        </ul>
        <p ref={contentRef} className="content w-1/3 px-20 text-[#898989]">{content}</p>
      </div>
      <div className="canvas-2-wrapper h-screen absolute inset-0 z-10">
        <GraceCanvas tab={activeTab} />
      </div>
    </section>
    <section className="h-screen text-white flex flex-col justify-center gap-3 select-none pointer-events-none">
      <h2 className="text-[15vw]  text-center capitalize">the making</h2>
      <div className="desc max-w-[80%] mx-auto text-[#898989] flex justify-around items-center gap-5">
        <p>Canova's assistants roughly blocked out the marble, leaving Canova to perform the final carving and shape the stone to highlight the Graces soft flesh. This was a trademark of the artist, and the piece shows a strong allegiance to the Neo-Classical movement in sculpture, of which Canova is the prime exponent.</p>
        <p>
          The three goddesses are shown nude, huddled together, their heads almost touching in what many have referred to as an erotically charged piece. They stand, leaning slightly inward — perhaps discussing a common issue, or simply enjoying their closeness. Their hair-styles are similar, braided atop their heads.
        </p>
      </div>
    </section>
  </>);
}

export default MainContent;