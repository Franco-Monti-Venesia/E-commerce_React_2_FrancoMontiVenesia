import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [todosLosProductos, setTodosLosProductos] = useState([]);
    const [misProductos, setMisProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        if (todosLosProductos.length === 0) {
            fetchData().then(response => {
                setTodosLosProductos(response);
                if (categoria) {
                    const productosFiltrados = response.filter(el => el.categoria === categoria);
                    setMisProductos(productosFiltrados);
                    setLoading(false);
                } else {
                    setMisProductos(response);
                    setLoading(false);
                };
            })
                .catch(err => console.error(err));
        } else {
            if (categoria) {
                const productosFiltrados = todosLosProductos.filter(el => el.categoria === categoria);
                setMisProductos(productosFiltrados);
            } else {
                setMisProductos(todosLosProductos);
            };
        }

    }, [categoria]);

    return (
        <div className="container-cards">
            {
            loading ? <Loader /> :
            misProductos.map(producto => (
                <Item 
                key={producto.id} 
                id={producto.id} 
                nombre={producto.nombre} 
                precio={producto.precio} 
                />
            ))
            }
        </div>
        );
};

export default ItemListContainer;



// function ItemListContainer({greetings}) {
//     return (
//         <>
//         <h1 className='container-titulo'>{greetings}</h1>
//         <div className="container-cards">
//             <Item nombre={"Tallarines"} precio={3800} />
//             <Item nombre={"Ñoquis"} precio={4000} />
//             <Item nombre={"Ravioles"} precio={7500} />
//         </div>
//         </>
//     );
// };