import "./foot.css"
import {Twitter, Discord, Telegram} from "@web3uikit/icons"
export default function Foot() {
    return(
        <>
        <footer class="page-footer">
            
            <div style={{display: "flex", width: "100%", textAlign: "center", justifyContent: "center", padding: "2%", marginBottom: "5%", marginTop: "-1%"}}><p>⇡⇡</p></div>
            <div style={{position: "relative", alignItems: "center", display: "flex", justifyContent: "center", width: "100%", marginBottom: "1%"}} > 
            
            <img  style={{alignItems: "center", display: "flex", justifyContent: "center", marginTop: "5px", borderRadius: "100%",  border: "gray solid 1px", boxShadow: "1px 1px 100px rgba(0, 200, 200, 0.9)"}} src="/logo.png" height={60} />
            </div>
      <div style={{textAlign: "center", display: "flex", position: "relative", width: "100%", justifyContent:"center", fontSize: "24px", fontFamily: "monospace"}}>  <p >COPYRIGHT ©️ BoredWhales 2024</p></div>
  <div id="container">

    <nav class="column">
      <h4 style={{margin: "1%"}}>Ecosystem</h4>
      <ul>
        <li><a href="https://rarebay.xyz">Marketplace</a></li>
        <li><a href="https://rarebay.xyz/pools">Pools</a></li>
        <li><a href="https://arcade.boredwhalesyachtclub.org">Arcade</a></li>
        <li><a href="https://twitter.com/bored_workshop">Community</a></li>
      </ul>
    </nav>
    <br />
    <nav class="column">
      <h4 style={{margin: "1%"}}>Patners</h4>
      <ul>
        <li><a href="#">RareBay</a></li>
        <li><a href="#">Whales Token</a></li>
      </ul>
    </nav>
   </div>
  <p style={{display: "flex", gap: "5%", margin: "1%"}}>Socials:<a href="https://twitter.com/rarebay.xyz"><Twitter /></a>
  <a href="https://twitter.com/rarebay.xyz"><Discord /></a>
  <a href="https://twitter.com/rarebay.xyz"><Telegram /></a>
</p>

</footer>
        </>
    )
}