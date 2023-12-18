import styles from "./index.module.css";
import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import { Inter } from "next/font/google"; // Inter yra font name
import { Whisper } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); //font stiliams
const whisper = Whisper({ subsets: ["latin"], weight: "400" });

const index = () => (
  <>
    <Header />

    <div className={`${styles.text} ${inter.className}`}>Questions</div>

    <Footer />
  </>
);

export default index;
