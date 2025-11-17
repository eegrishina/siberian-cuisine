import IngredientsTable from "@/components/UI/tables/Ingredients";
import IngredientForm from "@/forms/IngredientForm";

const IngredientsPage = () => {
  return (
    <div>
      <IngredientForm />
      <IngredientsTable />
    </div>
  );
};

export default IngredientsPage;
