import Container from "../../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div>{categories.map(category => <CategoryBox key={category.label} label={category.label} icon={category.icon}/>)}</div>
    </Container>
  );
};

export default Categories;
