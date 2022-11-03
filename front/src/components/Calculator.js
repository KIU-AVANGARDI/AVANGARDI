import {useState} from "react";
import '../styles/Calculator.css'
import {useEffect} from "react";
import APIService from "../APIService";

export default function Calculator({setPrice11, setPrice22, type, setType}) {


    const [filters, setFilters] = useState([])
    const [values, setValues] = useState([])
    const [prices, setPrices] = useState([])
    const [price1, setPrice1] = useState(0)
    const [price2, setPrice2] = useState(0)
    useEffect(() => {
        if (filters.length === 0) {
            APIService.GetNonStandardPriceStandardDecorFilters()
                .then((resp) => {
                    for (const [key, value] of Object.entries(resp)) {
                        filters.push({key, value})
                        values.push({key, value: value[0]})
                    }
                })
            console.log(values)
        }
    }, [])

    function calculate() {
        let par = ''
        setPrices([])
        values.map((e) => par += (e.key + "=" + e.value + "&&"))
        let pars = par.replaceAll(' ', '%20')
        // console.log(pars)
        APIService.GetNonStandardPriceStandardDecor(pars)
            .then((resp) => {
                for (const [key, value] of Object.entries(resp)) {
                    prices.push({key, value})
                }
            })
        // setPrice2(prices[1].value)
        console.log(prices)
        // if (prices.length > 0) {
        //
        // }
    }

    return (
        <div className="calculator">
            <div className="config">
                <label>
                    ტიპი:
                    <select onChange={(e) => setType(e.target.value)}>
                        <option value="standard">სტანდარტული</option>
                        <option value="nonStandard">არასტანდარტული</option>
                    </select>
                </label>
                <br/>
                <br/>
                {type === 'nonStandard' && <div className="nonStandardConfig">
                    {filters.map((k) => (
                        <div>
                            <label>
                                {k.key}
                                <select onChange={(e) => {
                                    const vals = values;
                                    const objIndex = vals.findIndex((obj => obj.key == k.key));
                                    vals[objIndex].value = e.target.value;
                                    setValues(vals);
                                }}>

                                    {k.value.map((p) => (
                                        <option value={p}>{p}</option>
                                    ))}
                                </select>
                            </label>
                            <br/>
                        </div>
                    ))}
                    <button className="calculate" onClick={calculate}>დათვლა</button>
                </div>}
            </div>
        </div>
    )
}