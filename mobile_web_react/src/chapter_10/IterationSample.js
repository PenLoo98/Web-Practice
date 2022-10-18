import React, {useState} from "react";

const IterationSample = () => {
    // const names = [ '눈사람', '얼음', '눈', '바람']
    const [names, setNames] = useState([
        {id:1, text: '눈사람'},
        {id:2, text: '얼음'},
        {id:3, text: '눈'},
        {id:4, text: '바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick =() => {
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
    console.log("생성된 ID: ", {nextId})
    };
    
    const onRemove = (id) => {
        setNextId(nextId - 1);
        setNames(names.filter(name => name.id !== id));
        console.log("   삭제된 ID: ", {id})
    };

    const nameList = names.map(name => (
        <div>
            <li key={name.id} onDoubleClick={()=> onRemove(name.id)}>
                 {name.text}   
                 &nbsp;&nbsp;&nbsp;
                 <button onClick={()=>onRemove(name.id)}>삭제</button> 
            </li>    
        </div>
        ));
    return( 
    <>
    <input value={inputText} onChange={onChange} />
    <button onClick={onClick}>추가</button>
    <div>
    <ul>{nameList}</ul>
    </div>
    </>
    );
};
export default IterationSample;