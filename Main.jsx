import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
    ]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        try {
            const response = await fetch("http://localhost:3001/generateRecipe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ingredientsArr: ingredients }),
            });

            if (response.ok) {
                const data = await response.json();
                setRecipe(data.recipe);
            } else {
                console.error("Failed to fetch recipe:", response.statusText);
                setRecipe("Failed to fetch recipe.");
            }
        } catch (error) {
            console.error("Error:", error);
            setRecipe("An error occurred.");
        }
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                addIngredient(formData);
                e.target.reset();
            }}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}