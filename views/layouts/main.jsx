var React = require('react');

class LayoutContainer extends React.Component {
  render() {
    return (
        <html>
            <head>
                <title>Welcome To Pokedex!</title>
                <link rel="stylesheet" href="css/styles.css" />
            </head>
            <body>

                {this.props.children}
            </body>
        </html>
    );
  }
}

module.exports = LayoutContainer;