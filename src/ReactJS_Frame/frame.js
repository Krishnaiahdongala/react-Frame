import Navigation from "./navigation"
import img from "./img1.jpg"
import img1 from "./img3.png"


const Frame=()=>{



       return(
           
          <div className="Container">
           <Navigation/>
           <center>
           <div className="build_us">            
            <h1>Best Website builders in the US</h1><hr></hr>
              <img id="span" src={img} height={15} width={15}/>
             <span id="span">Last Updated-feb 22-2020</span>
             <img id="span1" src={img} height={15} width={15}/>
             <span id="span1">Advertising Disclosure</span>
             <span id="span2">Top Relevant</span>
            <hr></hr>
              <div id="nav_cont">
            <a className="nav1" href="#">Tools</a>
            <a className="nav1" href="#">AWS Builder</a>
            <a className="nav1" href="#">Start Build</a>
            <a className="nav1" href="#">Build Supplies</a>
            <a className="nav1" href="#">Tooling</a>
            <a className="nav1" href="#">BlueHosting</a>
              </div>
              <div className="nav12">               
            <a className="nav2" href="#">Home</a>
            <a className="nav2" href="#">Hosting for all</a>
            <a className="nav2" href="#">Hosting</a>
            <a className="nav2" href="#">Hosting6</a>
            <a className="nav2" href="#">Hosting5</a>
              </div>
             <div className="container1">
                <div className="p1"><p><b>WixPro 72-Inch Responsive Website Builder</b>- 
                Comprehensive <br/>Digital Platform Creation Tool, 
                Streamlined Design Interface for <br/>Professional 
                Websites and Online Stores (Black/Blue)</p></div>               
                <img src={img1} id="img1"/>
                <div className="p2"><p><b>Main highlights</b> <br/>[What You Get]: Receive the WixPro website builder suite,<br/>
                    access to premium design templates, 
                     an extensive library of<br/> widgets and apps, 
                      and detailed step-by-step guides.</p></div>
             </div>
              
             <div className="container2">
                <div><p><b>WixPro 72-Inch Responsive Website Builder</b>- 
                Comprehensive <br/>Digital Platform Creation Tool, 
                Streamlined Design Interface for <br/>Professional 
                Websites and Online Stores (Black/Blue)</p></div>               
                <img src={img1} id="img1"/>
                <div className="p3"><p><b>Main highlights</b> <br/>[What You Get]: Receive the WixPro website builder suite,<br/>
                    access to premium design templates, 
                     an extensive library of<br/> widgets and apps, 
                      and detailed step-by-step guides.</p></div>
             </div>
   
             <footer className="footer">
                 
                <span id="foot">CATEGORIES</span>
                <span id="foot">CONTACT</span>
                  <div className="foot_div"><p>Web Builder</p>
                  <p>Hosting</p>
                  <p>Data Center</p>
                  <p>Robotic-Automation</p>
                  </div>
                 
                  <div className="foot_div1"><p>Contact</p>
                  <p>Privacy Policy</p>
                  <p>Terms Of Service</p>
                  <p>Categories</p>
                  <p>About</p>
                  </div>
             </footer>

           </div>
           </center>
         
          
          </div>
       )
}
export default Frame