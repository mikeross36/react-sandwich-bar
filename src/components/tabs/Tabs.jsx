import React from "react"
import marmite from "../../images/marmite.jpg"
import mackerel from "../../images/mackerel.jpg"
import egg from "../../images/egg.jpg"
import MainBtn from "../mainbtn/MainBtn"

export default function Tabs({activeTab, toggleTab}){
    return (
        <section className="tabs">
            <div className="container">
                <div className="tabs-header">
                    <h3>best sandwich recipes</h3>
                    <h5>Do you want the best club sandwich, looking for the ultimate steak sandwich?
                        Try out our sandwich recipes to take on a picnic (more ideas here), or as 
                        a lunch at home 'al desko'.
                    </h5>
                </div>
                {/*  */}
                <div className="tabs-btn-box" data-testid="tabs-btn-box">
                    <button data-testid="btn1"
                        className={`btn1 ${activeTab === 1 && "active-tab"}`} onClick={function(){toggleTab(1)}}>1</button>
                    <button data-testid="btn2"
                        className={`btn2 ${activeTab === 2 && "active-tab"}`} onClick={function(){toggleTab(2)}}>2</button>
                    <button data-testid="btn3"
                        className={`btn3 ${activeTab === 3 && "active-tab"}`} onClick={function(){toggleTab(3)}}>3</button>
                    <button data-testid="btn4"
                        className={`btn4 ${activeTab === 4 && "active-tab"}`} onClick={function(){toggleTab(4)}}>4</button>
                </div>
                {/*  */}
                <article 
                    className={`tabs-content content1 ${activeTab === 1 && "active-content"}`}>
                    <div className="content-left">
                        <h3>Marmite-glazed steak sandwich</h3>
                        <p>
                            Brush rump steak with melted Marmite for a seriously savoury treat served inside ciabatta with chutney, rocket and dolcelatte. 
                            Ingredients: <br />
                            olive oil for the steak
                            rump steak 1 large (250g)
                            Marmite 1-2 tsp
                            ciabatta 1 large loaf, cut in half horizontally
                            garlic 1 clove, halved
                            lemon a wedge
                            caramelised red onion chutney 2 tbsp
                            dolcelatte 75g, sliced
                            rocket a large handful
                            balsamic vinegar 1 tbsp
                        </p>
                    </div>
                    <div className="content-right">
                        <img src={marmite} alt="marmite sandwich" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" target="_blank" rel="noreferrer">
                            <MainBtn />
                        </a>
                    </div>
                </article>
                {/*  */}
                <article 
                    className={`tabs-content content2 ${activeTab === 2 && "active-content"}`}>
                    <div className="content-left">
                        <h3>Istanbul’s mackerel sandwiches</h3>
                        <p>
                            A street-food favourite in Istanbul, these ciabatta sarnies are stuffed with fried mackerel, salad and a pomegranate molasses dressing for an easy lunch that's ready in just 20 minutes.
                            Ingredients: <br />
                            red onion ¼ small, sliced
                            ciabatta rolls 2, halved
                            mackerel fillets 2
                            olive oil
                            mint a small handful of leaves, roughly chopped
                            carrot ½, grated
                            rocket a large handful
                            tomato 1 ripe, finely sliced
                        </p>
                    </div>
                    <div className="content-right">
                        <img src={mackerel} alt="marmite sandwich" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" target="_blank" rel="noreferrer">
                            <MainBtn />
                        </a>
                    </div>
                </article>
                {/*  */}
                <article 
                    className={`tabs-content content3 ${activeTab === 3 && "active-content"}`}>
                    <div className="content-left">
                        <h3>Supercharged egg mayo sandwich</h3>
                        <p>
                            Check out this incredible supercharged egg mayo sarnie. Egg sandwiches can be a bit one dimensional but this turns up the volume in every way.
                            Ingredients: <br />
                            eggs 8
                            pickled silverskin onions 75g, finely chopped
                            cornichons 75g, finely chopped
                            shallot 1, finely chopped
                            white peppercorns ground to make ¼ tsp
                            pickled walnuts 6, thinly sliced
                            white bloomer 12 large slices
                            salad cress 2 punnets
                            Salt & Vinegar Squares Crisps 2 x 22g packets
                        </p>
                    </div>
                    <div className="content-right">
                        <img src={egg} alt="marmite sandwich" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" target="_blank" rel="noreferrer">
                            <MainBtn />
                        </a>
                    </div>
                </article>
                {/*  */}
                <article className={`tabs-content content4 ${activeTab === 4 && "active-content"}`}>
                    <div className="content-left">
                        <h3>Marmite-glazed steak sandwich</h3>
                        <p>
                            Brush rump steak with melted Marmite for a seriously savoury treat served inside ciabatta with chutney, rocket and dolcelatte.
                            Ingredients: <br />
                            olive oil for the steak
                            rump steak 1 large (250g)
                            Marmite 1-2 tsp
                            ciabatta 1 large loaf, cut in half horizontally
                            garlic 1 clove, halved
                            lemon a wedge
                            caramelised red onion chutney 2 tbsp
                            dolcelatte 75g, sliced
                            rocket a large handful
                            balsamic vinegar 1 tbsp
                        </p>
                    </div>
                    <div className="content-right">
                        <img src={marmite} alt="marmite sandwich" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" target="_blank" rel="noreferrer">
                            <MainBtn />
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}