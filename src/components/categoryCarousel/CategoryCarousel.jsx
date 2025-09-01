import Carousel from "../carousel/Carousel";
import CategoryCard from "../categoryCard/CategoryCard";

const lista = [
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://cdn.shopify.com/s/files/1/0460/8878/1985/articles/Pet_accessories_1_1_1.jpg?v=1688730170"
    },
    {
        title: "Food",
        productCount: 30,
        image: "https://th.bing.com/th/id/OIP.wExJlBzGU58ZBgCbk8PcNwHaE7?w=248&h=185&c=7&r=0&o=5&pid=1.7"
    },
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://cdn.shopify.com/s/files/1/0460/8878/1985/articles/Pet_accessories_1_1_1.jpg?v=1688730170"
    },
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://cdn.shopify.com/s/files/1/0460/8878/1985/articles/Pet_accessories_1_1_1.jpg?v=1688730170"
    },
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://cdn.shopify.com/s/files/1/0460/8878/1985/articles/Pet_accessories_1_1_1.jpg?v=1688730170"
    },
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://cdn.shopify.com/s/files/1/0460/8878/1985/articles/Pet_accessories_1_1_1.jpg?v=1688730170"
    },
    {
        title: "Acessórios",
        productCount: 64,
        image: "https://cdn.shopify.com/s/files/1/0460/8878/1985/articles/Pet_accessories_1_1_1.jpg?v=1688730170"
    }
]

const CategoryCarousel = () => {
    return(
        <Carousel 
            title={"Pesquise por categoria"} 
            items={lista} 
            RenderComponent={({item}) => <CategoryCard category={item} />}/>
    );
}

export default CategoryCarousel;