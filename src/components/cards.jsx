import "./cards.css"

export default function Cards() {
    return(
        <>
        <div class="gallery">
       
  <div style={{padding: "2%", borderRadius: "8px", background: "rgba(10, 100, 80, 0.1)", backdropFilter: "blur(10px)", border: "0px gray solid"}} >
    <img className="im" src="/1.png" />
    <div className="pr">
        <h3 className="tt">Whale #9990</h3>
        <h3 className="tt1">Price: 20 CORE <img src="/core.webp" height={20} /></h3>
    </div>
    
  </div>

  <div style={{padding: "2%", borderRadius: "8px", background: "rgba(10, 100, 80, 0.1)", backdropFilter: "blur(10px)", border: "0px gray solid"}} >
    <img className="im" src="/4.png" />
    <div className="pr">
        <h3 className="tt">Whale #456</h3>
        <h3 className="tt1">Price: 5 CORE <img src="/core.webp" height={20} /></h3>
    </div>
  </div>
 

  <div style={{padding: "2%", borderRadius: "8px", background: "rgba(10, 100, 80, 0.1)", backdropFilter: "blur(10px)", border: "0px gray solid"}} >
    <img className="im" src="/3.png" />
    <div className="pr">
        <h3 className="tt">Whale #202</h3>
        <h3 className="tt1">Price: 1 CORE <img src="/core.webp" style={{borderRadius: "100%"}} height={20} /></h3>
    </div>
  </div>
   
  <div style={{padding: "2%", borderRadius: "8px", background: "rgba(10, 100, 80, 0.1)", backdropFilter: "blur(10px)", border: "0px gray solid"}} >
    <img className="im" src="/5.png" />
    <div className="pr">
        <h3 className="tt">Whale #1022</h3>
        <h3 className="tt1">Price: 20 CORE <img src="/core.webp" height={20} /></h3>
    </div>
  </div>

  <div style={{padding: "2%", borderRadius: "8px", background: "rgba(10, 100, 80, 0.1)", backdropFilter: "blur(10px)", border: "0px gray solid"}} >
    <img className="im" src="/6.png" />
    <div className="pr">
        <h3 className="tt">Whale #1000</h3>
        <h3 className="tt1">Price: 50 WHLS <img src="/whls.png" height={20} /></h3>
    </div>
  </div>

  <div style={{padding: "2%", borderRadius: "8px", background: "rgba(10, 100, 80, 0.1)", backdropFilter: "blur(10px)", border: "0px gray solid"}} >
    <img className="im" src="/8.png" />
    <div className="pr">
        <h3 className="tt">Whale #12</h3>
        <h3 className="tt1">Price: 90 CORE <img src="/core.webp" height={20} /></h3>
    </div>
  </div>


</div>
        </>
    )
}