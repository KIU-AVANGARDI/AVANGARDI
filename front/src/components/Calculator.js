import {useState} from "react";
import '../styles/Calculator.css'
export default function Calculator(){
    const [type,setType] = useState('standard')
    const [price,setPrice] = useState("180")

    const [width,setWidth] = useState("")
    const [ovalNum,setOvalNum] = useState("")
    const [length,setLength] = useState("")
    let st_matrix = [
        [65, 44, " x ", " x ", " x ", " x ", " x ", " x ", 60, " x ", " x ", " x "],
        [105, 68, 48, 136, 89, 62, " x ", " x ", 75, " x ", " x ", 100],
        [120, 72, 50, 156, 93, 66, " x ", " x ", 89, " x ", " x ", 120],
        [140, 80, 56, 182, 105, 73, " x ", " x ", 103, " x ", " x ", 139],
        [165, 87, 61, 214, 112, 79, " x ", " x ", 110, " x ", " x ", 148],
        [180, 90, 70, 234, 140, 98, " x ", " x ", 133, " x ", " x ", 179],
        [215, 129, 90, 275, 165, 116, " x ", " x ", 154, " x ", " x ", 191],
        [250, 150, 105, 315, 189, 132, " x ", " x ", 185, " x ", " x ", 230],
        [285, 171, 120, 353, 212, 149, " x ", " x ", 209, " x ", " x ", 259],
        [315, 189, 132, 384, 230, 162, " x ", " x ", 221, " x ", " x ", 267],
        [345, 207, 145, 414, 248, 174, " x ", " x ", 236, " x ", " x ", 286],
        [375, 225, 157, 442, 265, 186, " x ", " x ", 254, " x ", " x ", 306]
    ]
    function calculate(){
        setPrice(stw_price(st_matrix,width,length,ovalNum))
    }
    function stw_price(matrix,width,length,oval_num){
        let oval_sector = oval_num-1
        let width_index
        if (length === 365)
            width_index = 0
        else if (length === 183)
            width_index = 1
        else
            width_index = 2

        let width_sizes = [15, 30, 40, 50, 55, 60, 65, 70, 80, 90, 100, 135]

        let row_index

        for(let i = 0;i<width_sizes.length;i++){
            if(width < width_sizes[i]){
                row_index = i
                break
            }
        }

        let column_index = 3 * oval_sector + width_index

        return matrix[row_index][column_index]
    }


    return(
        <div className="calculator">
            <div className="config">
                <label>
                    ტიპი:
                    <select onChange={(e)=>setType(e.target.value)}>
                        <option value="standard">სტანდარტული</option>
                        <option value="nonStandard">არასტანდარტული</option>
                    </select>
                </label>
                <br/>
                <br/>
                {type === 'nonStandard' && <div className="nonStandardConfig">
                    <label>
                        სიგანე:
                        <input type="number" defaultValue="60" onChange={(e) => setWidth(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        ოვალების რაოდენობა:
                        <select onChange={(e) => {
                            setOvalNum(e.target.value)
                            console.log(ovalNum)
                        }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        სიგრძე:
                        <select onChange={(e) => {
                            setLength(e.target.value)
                            console.log(length)
                        }}>
                            <option value="365">365სმ</option>
                            <option value="183">183სმ</option>
                            <option value="100">100სმ</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <button className="calculate" onClick={calculate}>დათვლა</button>
                </div>}
            </div>
        </div>
    )
}