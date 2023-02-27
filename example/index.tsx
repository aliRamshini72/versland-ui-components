import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "../dist";

const App = () => {
  return (
    <div>
      <Button type={'btn-accent'} >salam</Button>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
