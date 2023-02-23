import Avatar from "../../components/library/visual/Avatar";
import Card from "../../components/library/visual/Card";




export default function MainPage() {
    return (
        <section className="MainPage-section">
            <img src="./src/assets/ricknmorty_biglogo.png" alt="" />
            <Card title={"Rick"} subtitle={"awesome"}/>
            <Avatar />
            <Avatar isDead={true}/>


        </section>
    )
}