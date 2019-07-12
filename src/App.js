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