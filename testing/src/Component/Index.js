import Icon from "../assets/Icon.js";
import IconPlus from "../assets/IconPlus";
function Index(props){
    return(
        <>
            <div className="container">
                <ul>
                    <li>
                    <p className="title-date">MON</p>
                        <div className="exercises">
                            <p className="date">05</p>                        
                        </div>
                    </li>
                    <li>
                    <p className="title-date">TUE</p>
                        <div className="exercises">
                            <p className="date">06</p>
                            <div className="detail-excercise">
                                <div className="title-excercise">
                                    <p className="name-excercise">Chest day - with arm...</p>
                                    <div className="icon"><Icon/></div>  
                                </div>  
                                <div className="list-excercise">
                                    <p className="title-ex">Bench Press Med...</p>
                                    <div className="title-excercise">
                                        <span className="name-ex">3x</span>
                                        <span className="spec-ex">50 lb x 5, 60 lb x 5, 70 l...</span>
                                    </div>
                                </div>    
                                <div className="list-excercise">
                                    <p className="title-ex">Exercise B</p>
                                    <div className="title-excercise">
                                        <span className="name-ex">1x</span>
                                        <span className="spec-ex">40 lb x 10</span>
                                    </div>
                                </div>
                                <div id="icon-plus"><IconPlus/></div>
                            </div>
                        </div>
                        <div className="detail-excercise">  
                        </div>
                    </li>
                    <li>
                    <p className="title-date">WED</p>
                        <div className="exercises">
                            <p className="date">07</p>
                            <div className="detail-excercise">
                                <div className="title-excercise">
                                    <p className="name-excercise">Leg DaY</p>
                                    <div className="icon"><Icon/></div>  
                                </div>  
                                <div className="list-excercise">
                                    <p className="title-ex">Exercise C</p>
                                    <div className="title-excercise">
                                        <span className="name-ex">1x</span>
                                        <span className="spec-ex">30 lb x 6</span>
                                    </div>
                                </div>    
                                <div className="list-excercise">
                                    <p className="title-ex">Exercise D</p>
                                    <div className="title-excercise">
                                        <span className="name-ex">1x</span>
                                        <span className="spec-ex">40 lb x 5</span>
                                    </div>
                                </div>
                                <div className="list-excercise">
                                    <p className="title-ex">Exercise E</p>
                                    <div className="title-excercise">
                                        <span className="name-ex">1x</span>
                                        <span className="spec-ex">50 lb x 5</span>
                                    </div>
                                </div>
                                <div id="icon-plus"><IconPlus/></div>
                            </div>
                            <div className="detail-excercise">
                                <div className="title-excercise">
                                    <p className="name-excercise">Arm day</p>
                                    <div className="icon"><Icon/></div>  
                                </div>  
                                <div className="list-excercise">
                                    <p className="title-ex">Exercise F</p>
                                    <div className="title-excercise">
                                        <span className="name-ex">1x</span>
                                        <span className="spec-ex">60 lb x 6</span>
                                    </div>
                                </div>    
                                <div id="icon-plus"><IconPlus/></div>
                            </div>
                        </div>
                    </li>
                    <li>
                    <p className="title-date">THU</p>
                        <div className="exercises">
                            <p className="date">08</p>
                        </div>
                        <div className="detail-excercise">   
                        </div>
                    </li>
                    <li>
                    <p className="title-date">FRI</p>
                        <div className="exercises">
                            <p className="date">09</p>
                        </div>
                        <div className="detail-excercise">
                        </div>
                    </li>
                    <li>
                    <p className="title-date">SAT</p>
                        <div className="exercises">
                            <p className="date">10</p>
                        </div>
                        <div className="detail-excercise">       
                        </div>
                    </li>
                    <li>
                    <p className="title-date">SUN</p>
                        <div className="exercises">
                            <p className="date">11</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Index;