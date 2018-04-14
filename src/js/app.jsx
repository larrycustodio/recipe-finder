import React, { Component } from 'react';

import { Wrapper } from './styles';
import Header from './components/Header';
import Selector from './components/Selector';
import Form from './components/Form';
import CategoryPicker from './components/CategoryPicker';
import RecipeSearchResults from './components/RecipeSearchResults';
import RecipeInstructions from './components/RecipeInstructions';

class App extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      timeOfDay: '',
      categories: ['beef', 'chicken', 'lamb', 'pasta', 'pork', 'seafood', 'vegetarian', 'vegan', 'miscellaneous'],
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
    let { category } = e.target.dataset
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