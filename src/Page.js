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
                    <a href="https://t.me/JonhiPortal" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/JonhiOnSol" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="https://pump.fun/3GbfH7jzzxSb6MR8pPGYSpfEov91tAgMr4Jf1Qwppump" target="_blank"><img src={ray} alt="pumpfun buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/en/solana/pair-explorer/" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/solana/2jpbshbdsx5h4vtxq3crmistq8zpxlun2wppnnx2xzky" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Yo, $JonHi, The Anteater!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="JonHi official Logo"></img>
                        </span>
                    </div>
                    <h4>$JonHi's on solana</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>3GbfH7jzzxSb6MR8pPGYSpfEov91tAgMr4Jf1Qwppump</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        <span>
                            <img src={logo2} alt="about pic"></img>
                        </span>
                        <h4>
                            Why did the anteater invest in $AntCoin?
                            Saw the juicy rewards and thought, 'Tasty ants for life!'
                            Scooped up tokens like they were crawling on the blockchain.
                            Told its buddies, ‘Just HODL, no need to panic sell!’
                            Now it's chilling in the metaverse, snout deep in gains.
                            Ignoring FUD, feasting on crypto ants!. 😆
                        </h4>
                        <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span>
                    </div>
                    <div className="buyButton">
                        <button>
                            <a href="https://pump.fun/3GbfH7jzzxSb6MR8pPGYSpfEov91tAgMr4Jf1Qwppump" target="_blank">Buy $JonHi</a> 
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Everyone loves $JonHi. $JonHi the anteater.</h4>
                    <div className="memePic">
                        <span>
                            <img src={gif1} alt="JonHi pic"></img>
                        </span>
                        <span>
                            <img src={gif3} alt="JonHi pic"></img>
                        </span>
                        <span>
                            <img src={gif4} alt="JonHi pic"></img>
                        </span>
                        <span>
                            <img src={gif5} alt="JonHi pic"></img>
                        </span>
                        <span>
                            <img src={gif6} alt="JonHi pic"></img>
                        </span>
                        <span>
                            <img src={gif7} alt="JonHi pic"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 $JonHi. All rights reserved.</p>
            </footer>
        </div>
    );
}
