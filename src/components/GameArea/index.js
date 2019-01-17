import React, { Component } from 'react'
import characters from '../../api/characters'
import ImageCard from '../ImageCard'
import Scoreboard from '../Scoreboard'
import './style.css'

class GameArea extends Component {
    state = {
        characters,
        unclickedCharacters: characters,
        score: 0,
        hiScore: 0,
        message: 'Click on a character to begin game! Increase your score by not clicking the same character twice!'
    }

    componentDidUpdate = () => {
        if (this.state.score === 12) {
            this.setState({
                hiScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
                score: 0,
                unclickedCharacters: characters,
                message: 'You have survived! Way to go! Click on a character to restart.'
            })
        }
    }

    handleShuffle = array => {
        array.sort(function (a, b) {
            return 0.5 - Math.random()
        })
    }

    handleClick = id => {
        const findCharacter = this.state.unclickedCharacters.find(character => character.id === id)

        if (findCharacter === undefined) {
            this.setState({
                hiScore: (this.state.score > this.state.hiScore) ? this.state.score : this.state.hiScore,
                score: 0,
                unclickedCharacters: characters,
                message: 'YOU ARE DEAD! Just kidding, click on a character to restart.'
            })
        } else {
            const characterUpdateList = this.state.unclickedCharacters.filter(character => character.id !== id)
            this.setState({
                score: this.state.score + 1,
                unclickedCharacters: characterUpdateList,
                message: 'Way to go! Keep clicking characters!'
            })
        }

        this.handleShuffle(characters)
    }

    render() {
        return (
            <div className='gameplay-area'>
                <div className='scoreboard'>
                    <Scoreboard score={this.state.score} hiScore={this.state.hiScore} />
                </div>
                <div className='message-area'>
                    {this.state.message}
                </div>
                <div className='character-area container-fluid'>
                    {
                        this.state.characters.map(character => (
                            <ImageCard
                                id={character.id}
                                key={character.id}
                                image={character.image}
                                handleClick={this.handleClick} />
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default GameArea