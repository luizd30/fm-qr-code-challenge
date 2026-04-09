import "./App.css";
import qrCodeImg from "./assets/qrcode.png";
import { Card } from "./components/card/Card";

function App() {
  return (
    <section id="center">
      <Card
        imgSrc={qrCodeImg}
        imgAlt="qrcode"
        title="Improve your front-end skills by building projects"
        desc="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
      />
    </section>
  );
}

export default App;
