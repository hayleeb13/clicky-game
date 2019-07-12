import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    characters
  };

  removeCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };


  render() {
    return (
      <Wrapper>
        <Nav />
        <Title />
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;