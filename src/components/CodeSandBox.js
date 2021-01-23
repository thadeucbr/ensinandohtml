import React from 'react';

function CodeSandBox({url}){
    return (
        <iframe
        src={`https://codesandbox.io/embed/${url}?autoresize=1&fontsize=14&theme=dark&forcerefresh=0&view=split`}
        style={{
          width: 1000,
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        title="funny-haibt-x6i2o"
      />
    )
}

export default CodeSandBox;
