var React = require('react');
var LayoutContainer = require('./layouts/main.jsx');

class Home extends React.Component {
    render() {
        const pokeinfoComponents = this.props.pokeinfo.map( function(pokemon) {
            return (
                    <div className="pokemonDisplay">
                        <img className="pokeImage" src={pokemon.img} />
                        <p className="pokeName"><span className="small">#{pokemon.num}</span><br/><br/>{pokemon.name}</p>
                        <div className="actionButtonDiv">
                            <form className="actionForm" method="GET" action={"/pokemon/" + pokemon.id + "/edit"}>
                                <input className="actionButtons" type="submit" value="edit" />
                            </form>
                            <form className="actionForm" method="POST" action={"/pokemon/" + pokemon.id }>
                                <input type="hidden" name="_method" value="DELETE" />
                                <input className="actionButtons" type="submit" value="del" />
                            </form>
                        </div>
                    </div>
            );
        })

        return (
            <LayoutContainer>
                <div className="formDiv">
                    <form className="sortform" method="GET" action="/">
                        <input type="hidden" name="sortby" value="name" />
                        <h1>Welcome To Pokedex!</h1>
                        <div className="buttonDiv">
                            <input className="sortNameButton" type="submit" value="Sort Pokemons By Name" />
                        </div>
                    </form>
                    <form className="sortform" method="GET" action="/">
                        <input type="hidden" name="sortby" value="id" />
                        <div className="buttonDiv">
                            <input className="sortIdButton" type="submit" value="Sort Pokemons By ID" />
                        </div>
                    </form>
                    <form className="sortform" method="GET" action="/pokemon/new">
                        <div className="buttonDiv">
                            <input className="createPoke" type="submit" value="Create New Pokemon" />
                        </div>
                    </form>
                </div>

                <div className="pokemonContainer">
                    {pokeinfoComponents}
                </div>

            </LayoutContainer>
        );
    }
}

module.exports = Home;