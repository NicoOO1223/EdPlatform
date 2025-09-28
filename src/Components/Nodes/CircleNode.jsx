import React from 'react';
import { Handle, Position } from 'reactflow';

const CircleNode = ({ data }) => {
  return (
    <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg text-center text-sm">
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#555' }}
        id="top"
      />
      {data.label}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555' }}
        id="bottom"
      />
    </div>
  );
};

export default CircleNode;
