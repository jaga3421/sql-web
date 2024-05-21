import React, { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import SqlEditor from '../components/queryPane/SqlEditor';

function Editor () {
  const [sizes, setSizes] = useState([100, '30%', 'auto']);

  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className='h-full bg-gray-200 '>
      <SplitPane
        split='horizontal'
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize="20%" maxSize='80%' >
          <SqlEditor />
        </Pane>
        <div className="bg-gray-300" style={{ ...layoutCSS}}>
          pane2
        </div>
      </SplitPane>
    </div>
  );
};

export default Editor;