const onWord = (word, thingToDo) =>{
    const expectedList = word.split('');
    let actualList = [];
    let currentIndex = 0;

    const reset = () => {
        actualList = [];
        currentIndex = 0;
    };

    const isAwesome = () => actualList.join("") === expectedList.join("");

    const onKeyUp = (event) => {
        const key = event.key.toLowerCase();
        if (key === expectedList[currentIndex]){
            actualList.push(key);
            currentIndex++;
        }   else{
            reset();
        }

        if(isAwesome()){
            thingToDo();
            reset();
        }
    };

    document.addEventListener("keyup", onKeyUp);
    const cleanUp = () => {
        document.removeEventListener("keyup", onKeyUp);
    };

    return {
        cleanUp,
        reset,
        isAwesome,
    };

};
const onAwesome = (thingToDo) => onWord("valorant", thingToDo);

onAwesome(() => alert("Duas palavvras pra você! PARA BÉNS"));