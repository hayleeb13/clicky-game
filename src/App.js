import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Title from "./components/Title";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

var containerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  flexWrap: "wrap"
};

class App extends Component {
  constructor() {
    super();
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  state = {
    characters: characters,
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click an image to begin!"
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  correctSelection = () => {
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });
    }
  };

  resetAfterWin = currentCharacters => {
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: 0 });
      const updatedCharacters = currentCharacters.map(character =>
        true ? { ...character, isClicked: false } : character
      );
      return updatedCharacters;
    } else {
      return currentCharacters;
    }
  };

  incorrectSelection = () => {
    this.setState({ score: 0, message: "You guessed incorrectly!" });
    const updatedCharacters = this.state.characters.map(character =>
      character.isClicked === true
        ? { ...character, isClicked: false }
        : character
    );
    return updatedCharacters;
  };

  handleShuffle = id => {
    var reset = false;
    const characters = this.state.characters.map(character => {
      if (character.id === id) {
        if (character.isClicked === false) {
          this.correctSelection();
          return { ...character, isClicked: true };
        } else {
          reset = true;
          return { ...character, isClicked: false };
        }
      }
      return character;
    });
    if (reset) {
      this.setState({
        characters: this.shuffle(this.incorrectSelection()),
        message: "You guessed incorrectly!"
      });
    } else {
      this.setState({
        characters: this.shuffle(this.resetAfterWin(characters))
      });
    }
  };

  displayCharacters = () => {
    return this.state.characters.map(character => (
      <CharacterCard
        id={character.id}
        key={character.id}
        image={character.image}
        onClick={this.shuffle}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
        />
        <Title />
        <div style={containerStyle}>{this.displayCharacters()}</div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;