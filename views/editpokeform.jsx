var React = require('react');
var LayoutContainer = require('./layouts/main.jsx');

class EditPokeForm extends React.Component {
    render() {
        return (
            <LayoutContainer>
                <div class="newFormContainer">
                    <form method="POST" action={"/pokemon/" + this.props.id}>
                        <input type="hidden" name="_method" value="PUT" />
                        <h1>What information do you want to edit?</h1>
                        <div>
                            <label class="formLabel">Name</label>
                            <input class="formInput" type="text" name="name" value={this.props.name} />
                        </div>
                        <div>
                            <label class="formLabel">Image</label>
                            <input class="formInput" type="text" name="img" value={this.props.img} />
                        </div>
                        <div>
                            <label class="formLabel">Height</label>
                            <input class="formInput" type="text" name="height" value={this.props.height} />
                        </div>
                        <div>
                            <label class="formLabel">Weight</label>
                            <input class="formInput" type="text" name="weight" value={this.props.weight} />
                        </div>
                        <div>
                            <input class="submitButton" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </LayoutContainer>
        )
    }
}
module.exports = EditPokeForm;