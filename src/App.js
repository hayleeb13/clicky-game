import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

var containerStyle = {
  display: 'flex',
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

class App extends Component {
  state = {
    characters
  };

  removeCharacter = id => {
    const characters = this.state.characters.filter(character => character.id !== id);

    this.setState({ characters });
  };

  render() {
    return (
      <Wrapper>
        <Nav />
        <Title />
        <div style={containerStyle}>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;