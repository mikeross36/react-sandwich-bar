import React, {useState} from "react"
import marmite from "../../images/marmite.jpg"
import mackerel from "../../images/mackerel.jpg"
import egg from "../../images/egg.jpg"

export default function Tabs(){
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = function(index){
        setToggleState(index)
    };

    return (
        <section className="tabs">
            <div className="container">
                <div className="tabs-header">
                    <h3>Best sandwich recipes</h3>
                    <h5>Want the best club sandwich, looking for the ultimate steak sandwich? 
                        Try our sandwich recipes to take on a picnic (more ideas here), or as a 
                        lunch at home ‘al desko’.
                    </h5>
                </div>
                <div className="tabs-btn-box">
                    <button 
                        className={toggleState === 1 ? "btn1 active-tab" : "btn1"} 
                        onClick={function(){
                            toggleTab(1)}}>
                            1
                    </button>
                    <button 
                        className={toggleState === 2 ? "btn2 active-tab" : "btn2"} 
                        onClick={function(){
                            toggleTab(2)}}>
                            2
                    </button>
                    <button 
                        className={toggleState === 3 ? "btn3 active-tab" : "btn3"} 
                        onClick={function(){
                            toggleTab(3)}}>
                            3
                    </button>
                    <button 
                        className={toggleState === 4 ? "btn4 active-tab" : "btn4"} 
                        onClick={function(){
                            toggleTab(4)}}>
                            4
                    </button>
                </div>
                <article 
                    className={toggleState === 1 ? "tabs-content content1 active-content" : "tabs-content content1"}>
                    <div className="content-left">
                        <h3>Marmite-glazed steak sandwich</h3>
                        <p>
                            Brush rump steak with melted Marmite for a seriously savoury treat served inside ciabatta with chutney, rocket and dolcelatte. <br /> 
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
                        <img src={marmite} alt="marmite sandwitch" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" 
                            target="_blank"
                            rel="noreferrer" 
                            className="main-button">
                            explore
                        </a>
                    </div>
                   
                </article>

                <article 
                    className={toggleState === 2 ? "tabs-content content2 active-content" : "tabs-content content2"}>
                    <div className="content-left">
                        <h3>Istanbul’s mackerel sandwiches</h3>
                        <p>
                            A street-food favourite in Istanbul, these ciabatta sarnies are stuffed with fried mackerel, salad and a pomegranate molasses dressing for an easy lunch that's ready in just 20 minutes. <br />
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
                        <img src={mackerel} alt="marmite sandwitch" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" 
                            target="_blank"
                            rel="noreferrer" 
                            className="main-button">
                            explore
                        </a>
                    </div>
                </article>

                <article 
                    className={toggleState === 3 ? "tabs-content content3 active-content" : "tabs-content content3"}>
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
                        <img src={egg} alt="marmite sandwitch" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" 
                            target="_blank"
                            rel="noreferrer" 
                            className="main-button">
                            explore
                        </a>
                    </div>
                </article>
                <article 
                    className={toggleState === 4 ? "tabs-content content4 active-content" : "tabs-content content4"}>
                    <div className="content-left">
                        <h3>Marmite-glazed steak sandwich</h3>
                        <p>
                            Brush rump steak with melted Marmite for a seriously savoury treat served inside ciabatta with chutney, rocket and dolcelatte. <br /> 
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
                        <img src={marmite} alt="marmite sandwitch" />
                        <a href="https://www.olivemagazine.com/guides/best-ever/best-ever-sandwich-recipes/" 
                            target="_blank"
                            rel="noreferrer" 
                            className="main-button">
                            explore
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}