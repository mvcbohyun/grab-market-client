function CildConmponent(props) {

    const{name,age} = props;
    return (<div>    
                    <p> 나는 자식이다. </p>
                    <p>이름은 {name} 이고 {age}살 입니다.</p>
            </div>);
}

export default CildConmponent;