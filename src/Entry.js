import React, {useState} from 'react';

function Entry({entry, depth}) {

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
    {entry?.children? (
       <div>
       <button style={{paddingLeft: `${depth * 10}px`, background: 'none'}} onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded? `- ${entry?.name}` : `+ ${entry?.name}`}</button>
       </div>
    ):
    <div>
    <div style={{paddingLeft: `${depth * 10}px`}}>{entry?.name}</div>
    </div>}
    {isExpanded && entry?.children?.map((entry)=>
    {
        return <Entry entry = {entry} depth = {depth + 1}></Entry>// used recursion here
    })}
    
    </>
  )
}

export default Entry