const calculateTemp = () =>{

    const inputTemp = document.getElementById('con-temp').value;

    const tempSelected = document.getElementById('temp1');
    const valueTemp = temp1.options[tempSelected.selectedIndex].value;
    const celtoFah = (cel) =>{
        let farenheit = ((cel*9/5)+32).toFixed(1);
        return farenheit;
    }
    const fahtoCel = (fah) =>{
        let celsius = ((fah-32)*5/9).toFixed(1);
        return celsius;
    }

    if(valueTemp=='cel')
    {
        document.getElementById('final-result').innerHTML = celtoFah
        (inputTemp) + "&#176; farenheit";
    }
    else{
        document.getElementById('final-result').innerHTML = fahtoCel
        (inputTemp) + "&#176; celsius";
    }
}