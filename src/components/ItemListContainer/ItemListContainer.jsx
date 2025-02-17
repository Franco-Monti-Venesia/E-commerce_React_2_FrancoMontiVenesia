import Item from '../Item/Item';
import './ItemListContainer.css';

function ItemListContainer({greetings}) {
    return (
        <>
        <h1 className='container-titulo'>{greetings}</h1>
        <div className="container-cards">
            <Item nombre={"Tallarines"} precio={3800} />
            <Item nombre={"Ñoquis"} precio={4000} />
            <Item nombre={"Ravioles"} precio={7500} />
        </div>
        </>
    );
};

export default ItemListContainer;