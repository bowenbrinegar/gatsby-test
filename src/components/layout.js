import * as React from 'react'
import { Link } from 'gatsby'

import 'stylesheets/style.scss';

// This function takes a component...
function withSubscription(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        top: 0
      }
    }

    componentDidMount() {
      const topbarClientH = document.getElementById('top-bar').clientHeight;
      this.setState({ top: topbarClientH });
    }

    render() {
      return <WrappedComponent top={this.state.top} {...this.props} />;
    }
  };
}

const Layout = ({ top, pageTitle, children }) => {
  return (
    <main>
      <div id="top-bar">
        <h1>My Blog - {pageTitle}</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/archive">Older Posts</Link>
        </nav>
      </div>
      <div id="content" style={{ "top": `${top}px` }}>
        {children}
      </div>
    </main>
  )
}

export default withSubscription(Layout);