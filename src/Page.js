export function Page({objIconPro, objImgPro, objGifPro}) {

    const tg = objIconPro.tg,
           x =  objIconPro.x,
           ray = objIconPro.ray,
           dext = objIconPro.dext,
           dexs = objIconPro.dexs;

    const logo1 = objImgPro.logo1,
          logo2 = objImgPro.logo2,
          logo3 = objImgPro.logo3;

    const gif1 = objGifPro.gif1,
          gif2 = objGifPro.gif2,
          gif3 = objGifPro.gif3,
          gif4 = objGifPro.gif4,
          gif5 = objGifPro.gif5,
          gif6 = objGifPro.gif6,
          gif7 = objGifPro.gif7;

    return(
        <div>
            <header className="socialLink">
                <span>
                    <a href="https://t.me/CapybaraCTO" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/capybaratronCTO" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="" target="_blank"><img src={ray} alt="sunswap buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/en/tron/pair-explorer/TFkeZrHrZcnGsQCic33WSxpqmDMdeiGSGH?t=1724759390979" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/tron/tfkezrhrzcngsqcic33wsxpqmdmdeigsgh" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Yo, Welcome to $Capy's World!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="Capy official Logo"></img>
                        </span>
                    </div>
                    <h4>Capy's on tron</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>TAee48kyiRMrFUSP2hFJA7vGXK9sag4Hzf</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        <span>
                            <img src={logo2} alt="about pic"></img>
                        </span>
                        <h4>
                            Why did the chill capybara invest in $capy?
                            He heard it was a paw-some choice.
                            Wanted to gather some digital snacks.
                            Said, "Just HODL on!" to his jittery pals.
                            Diversified into $capy, $capy, & $capy.
                            Stayed calm, secured his stash, and lounged!
                        </h4>
                        <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span>
                    </div>
                    <div className="buyButton">
                        <button>
                            <a href="https://dexscreener.com/tron/tfkezrhrzcngsqcic33wsxpqmdmdeigsgh" target="_blank">Buy $Capy</a> 
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Everyone loves $Capybara. $Capybara is cute af.</h4>
                    <div className="memePic">
                        <span>
                            <img src={gif1} alt="Capybara pic"></img>
                        </span>
                        <span>
                            <img src={gif3} alt="Capybara pic"></img>
                        </span>
                        <span>
                            <img src={gif4} alt="Capybara pic"></img>
                        </span>
                        <span>
                            <img src={gif5} alt="Capybara pic"></img>
                        </span>
                        <span>
                            <img src={gif6} alt="Capybara pic"></img>
                        </span>
                        <span>
                            <img src={gif7} alt="Capybara pic"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 Capybara. All rights reserved.</p>
            </footer>
        </div>
    );
}
