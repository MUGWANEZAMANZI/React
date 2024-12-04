import States from "../Events/6"; 
import Counter from "../Events/7";
import HoverChange from "../Events/8";
import NamesLog from "../Events/9";
import Menu from "../Events/10";
import BackButton from "./back";

const Events = () => {
    return (
    <>
        <BackButton/>
        <States/>
        <Counter/>
        <HoverChange/>
        <NamesLog/>
        <Menu/>
    </>);
};
export default Events;