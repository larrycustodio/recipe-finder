import React, { Component } from 'react';

import { Wrapper } from './styles';
import Header from './components/Header';
import Selector from './components/Selector';
import Form from './components/Form';
import CategoryPicker from './components/CategoryPicker';
import RecipeSearchResults from './components/RecipeSearchResults';
import RecipeInstructions from './components/RecipeInstructions';

// const testLookup = {
//   idMeal:
//   "52940",
//   strMeal:
//   "Brown Stew Chicken",
//   strMealThumb:
//   "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg"  
// };

// const testRecipe = {
//   dateModified:
//     null,
//   idMeal:
//     "52885",
//   strArea:
//     "British",
//   strCategory:
//     "Pork",
//   strIngredient1:
//     "Butter",
//   strIngredient10:
//     "",
//   strIngredient11:
//     "",
//   strIngredient12:
//     "",
//   strIngredient13:
//     "",
//   strIngredient14:
//     "",
//   strIngredient15:
//     "",
//   strIngredient16:
//     "",
//   strIngredient17:
//     "",
//   strIngredient18:
//     "",
//   strIngredient19:
//     "",
//   strIngredient2:
//     "Bacon",
//   strIngredient20:
//     "",
//   strIngredient3:
//     "Onion",
//   strIngredient4:
//     "Garlic Clove",
//   strIngredient5:
//     "Brussels Sprouts",
//   strIngredient6:
//     "Potatoes",
//   strIngredient7:
//     "",
//   strIngredient8:
//     "",
//   strIngredient9:
//     "",
//   strInstructions:
//     "Melt the fat in a non-stick pan, allow it to get nice and hot, then add the bacon. As it begins to brown, add the onion and garlic. Next, add the sliced sprouts or cabbage and let it colour slightly. …",
//   strMeal:
//     " Bubble & Squeak",
//   strMealThumb:
//  "https://www.themealdb.com/images/media/meals/xusqvw1511638311.jpg",
//   strMeasure1:
//     "1 tbs",
//   strMeasure10:
//     "",
//   strMeasure11:
//     "",
//   strMeasure12:
//     "",
//   strMeasure13:
//     "",
//   strMeasure14:
//     "",
//   strMeasure15:
//     "",
//   strMeasure16:
//     "",
//   strMeasure17:
//     "",
//   strMeasure18:
//     "",
//   strMeasure19:
//     "",
//   strMeasure2:
//     "4",
//   strMeasure20:
//     "",
//   strMeasure3:
//     "1 finely sliced",
//   strMeasure4:
//     "1 chopped",
//   strMeasure5:
//     "20",
//   strMeasure6:
//     "400g",
//   strMeasure7:
//     "",
//   strMeasure8:
//     "",
//   strMeasure9:
//     "",
//   strSource:
//     "https://www.bbcgoodfood.com/recipes/164622/bubble-and-squeak",
//   strTags:
//     "SideDish,Speciality",
//   strYoutube:
//     "https://www.youtube.com/watch?v=etbJ9ssgsWY"
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      timeOfDay: '',
      categories: ['beef', 'chicken', 'pasta', 'pork', 'seafood', 'vegetarian', 'vegan', 'random'],
      isSearched: false,
      isSearchError: null,
      isRecipeSelected: false,
      results: [],
      recipe: {},
      activeResult: 0,
      selectedCategory: ''
    };
    this.state = this.initialState;

    this.resetState = this.resetState.bind(this);
    this.setTimeOfDay = this.setTimeOfDay.bind(this);
    this.searchStringChangeHandler = this.searchStringChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.searchRecipes = this.searchRecipes.bind(this);
    this.getRecipeInstructions = this.getRecipeInstructions.bind(this);
    this.categoryClickHandler = this.categoryClickHandler.bind(this);
    this.denyRecipeHandler = this.denyRecipeHandler.bind(this);
    this.acceptRecipeHandler = this.acceptRecipeHandler.bind(this);

  }
  componentDidMount() {
    this.setTimeOfDay();
  }
  resetState() {
    this.setState({
      ...this.initialState
    });
  }
  setTimeOfDay() {
    const currentHour = (new Date()).getHours();
    const greeting = currentHour < 18 ?
      'Today' :
      'Tonight';

    this.setState({
      ...this.state,
      timeOfDay: greeting
    });
  }
  // Form input handlers
  searchStringChangeHandler(e) {
    console.log(e.target.value);
  }
  // Click handler
  categoryClickHandler(e) {
    e.stopPropagation();
    let { category } = e.target.dataset;
    if (!category) category = e.target.parentNode.dataset.category;
    // Set state on chosen category 
    this.setState({
      ...this.state,
      isSearched: true,
      selectedCategory: category
    });
    // Set async request for recipe search
    window.setTimeout(this.searchRecipes, 1000);
  }
  // Async search recipes 
  searchRecipes() {
    const category = this.state.selectedCategory;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => {
        // Set state based on API response
        const { meals } = data;
        if (!meals.length) {
          // No results found
          this.setState({
            ...this.state,
            isSearchError: false,
            results: []
          });
        } else {
          // Return search state results
          this.setState({
            ...this.state,
            isSearchError: false,
            results: [...meals]
          })
        }
      }).catch(err => {
        // Error handling
        this.setState({
          ...this.state,
          isSearchError: true,
          results: []
        })
      })
  };
  // Async get recipe instructions
  getRecipeInstructions() {
    const { activeResult, results } = this.state;
    const { idMeal } = results[activeResult];
    // Toggle recipe selected to 
    // render recipe instructions view
    this.setState({
      ...this.state,
      isRecipeSelected: true
    });

    if (!!idMeal) {
      const getRecipeURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
      fetch(getRecipeURL)
        .then(response => response.json())
        .then(data => {
          const { meals } = data;
          this.setState({
            ...this.state,
            recipe: meals[0]
          });
        })
        .catch(err => {
          console.log('error getting recipe instructions', err.message);
        });
    }
  }

  // Decision handlers
  // Swipe left/deny recipe in view
  denyRecipeHandler() {
    const { results, activeResult } = this.state;
    if (activeResult < results.length - 1) {
      this.setState({
        ...this.state,
        activeResult: this.state.activeResult + 1
      })
    } else {
      console.log('limit reached!');
    }
  }
  // Swipe right/accept recipe in view
  acceptRecipeHandler() {
    this.getRecipeInstructions();
  }

  // Form submission handler
  submitHandler(e) {
    e.preventDefault();
  }
  render() {
    return (
      <Wrapper>
        <Header timeOfDay={this.state.timeOfDay} />
        <Selector
          isSelected={this.state.isSearched}
          selectedCategory={this.state.selectedCategory}
          reset={this.resetState}
        />
        <RecipeSearchResults
          isCategorySelected={this.state.isSearched}
          selectedCategory={this.state.selectedCategory}
          recipes={this.state.results}
          isError={this.state.isSearchError}
          activeResult={this.state.activeResult}
          onDeny={this.denyRecipeHandler}
          onAccept={this.acceptRecipeHandler}
        />
        <RecipeInstructions
          isRecipeSelected={this.state.isRecipeSelected}
          instructions={this.state.recipe}
        />
        <CategoryPicker
          isSelected={this.state.isSearched}
          choices={this.state.categories}
          categoryClick={this.categoryClickHandler} />
        {/* <Form
          timeOfDay={this.state.timeOfDay}
          onSearchStringChange={this.searchStringChangeHandler}
          submitHandler={this.submitHandler}
          submitted={this.state}
        /> */}
      </Wrapper>
    );
  }
};

export default App;