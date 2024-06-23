import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return <div classname={styles.container}>
    <Featured/>
    <CategoryList/>
    <div classname={styles.content}>
      <CardList/>
      <Menu/>
    </div>
    
  </div>;
}
