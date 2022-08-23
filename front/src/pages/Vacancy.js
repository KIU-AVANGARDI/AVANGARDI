import React, {useState} from "react";
import "../styles/Vacancy.css"
import img from "../assets/images/vacancy.png"
import {faAngleDown,faAngleUp} from "@fortawesome/free-solid-svg-icons"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"


export default function Vacancy(){
    const [formIsOpen,setFormIsOpen] = useState(false)
    return(
        <div className="vacancy-wrapper">

            <div className="vacancy-img">
                <img src={img}/>
                <div className="vacancy-img-overlay">
                    <div className="hiring">
                        ვაკანსია!
                    </div>
                </div>
            </div>

            <div className="vacancy-info">
                <h1>შპს „ავანგარდი“ აცხადებს ვაკანსიას ავეჯის ზედაპირების ხელოსნის პოზიციაზე.</h1>
                <p>
                    შპს „ავანგარდი“ ეწევა მაგიდის ავეჯის ზედაპირების (ე.წ „სტალიჩნიცების) დამზადებასა და რეალიზაციას საქართველოში, რისთვისაც იყენებს მერქან-ბურბუშელოვან და მერქან-ბოჭკოვან ფილებსა და ახდენს მათ ლამინაციას HPL ფილებით.  კომპანიას აქვს 4 მაღაზია და საწარმო. კომპანია მაქსიმალურად ცდილობს მოერგოს მომხმარებლების მოთხოვნებს, რისთვისაც მას უხდება აწარმოოს სხვადასხვა ზომის (სისქე, სიგანე) სტანდარტული პროდუქტი და ასევე, მომხმარებლებისგან სისტემატიურად იღებს არასტანდარტული ზომისა და ფორმის დეტალების  შეკვეთებს.
                </p>

                <h2>ხელოსნის ფუნქცია - მოვალეობები გულისხმობს არასტანდარტული ზედაპირების დამზადებას, რაც მოიცავს:</h2>
                <ul>
                    <li>ნახაზის წაკითხვა და გარჩევა;</li>
                    <li>დეტალების შესაფერისი მასალის დაჭრა ზომებად;</li>
                    <li>შესაფერისი ფორმების მიცემა (მოოვალება, ამოჭრა);</li>
                    <li>დეტალების ლამინაცია;</li>
                    <li>დეტალების დაწიბოვება;</li>
                </ul>

                <h2>ძირითადი მოთხოვნები:</h2>
                <ul>
                    <li>მსგავს პოზიციაზე (ავეჯის ხელოსნად) მუშაობის გამოცდილება;</li>
                    <li>პუნქტუალობა, პროდუქტიულობა, ხარისხზე ორიენტირებულობა, პასუხისმგებლიანობა;</li>
                </ul>

                <h2>სასურველია:</h2>
                <ul>
                    <li>საავეჯე დანადგარებთან (პრესი, CNC როტერი; დაწიბოვების ....) მუშაობის გამოცდილება;</li>
                    <li>საშუალო-პროფესიული განათლება შესაფერისი მიმართულებით;</li>
                </ul>

                <h2>სამუშაო პირობები და ანაზღაურება:</h2>
                <ul>
                    <li>სამუშაო დრო დილის 9:30 საათიდან 17:30 საათამდე ყოველ დღე გარდა კვირისა და სადღესასწაულო/გამოსასვლელი დღეებისა; შესვენება</li>
                    <li>გამოსაცდელი ვადა ორი კვირა;</li>
                    <li>ანაზღაურება კვალიფიკაციისა და გამომუშავების შესაბამისად.</li>
                </ul>
                <br/>
                <p>დაინტერესებულმა პირებმა, გთხოვთ,

                    შეავსოთ განაცხადი ჩვენი ვებ-გვერდის საშუალებით (<span style={{color:'#e29f4f'}}>შესავსები ფორმა</span>) ან კითხვების შემთხვევაში დაგვიკავშირდეთ 596 70 30 10

                    ასევე შეგიძლიათ გამოგვიგზავნოთ თქვენი ინფორმაცია მაილზე: office@avangardi.com.ge
                </p>
                <br/>
                <p style={{color:'red'}}>დავუკავშირდებით მხოლოდ შერჩეულ კანდიდატებს.</p>

                <div className="vacancy-form-wrapper">
                    <button onClick={
                        ()=>{
                            setFormIsOpen(!formIsOpen)
                        }
                    } >შეავსე ფორმა {formIsOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}</button>

                    <div className={formIsOpen?"vacancy-form show":"vacancy-form"}>
                        <form action="">
                            <div className="vacancy-inputs">
                                <label>
                                    სახელი *
                                    <input type="text" />
                                </label>

                                <label>
                                    გვარი *
                                    <input type="text" />
                                </label>

                                <label>
                                    ელ.ფოსტა
                                    <input type="email" />
                                </label>

                                <label>
                                    ტელეფონი *
                                    <input type="number" />
                                </label>

                                <label>
                                    დაბადების თარიღი *
                                    <input type="date" />
                                </label>

                                <label>
                                    მისამართი
                                    <input type="text" />
                                </label>

                                <label>
                                    სამუშაო გამოცდილება *
                                    <textarea type="text" style={{height:'150px',resize:'none'}} placeholder="კომპანია; მუშაობის წლები; პირი ვინც გიგიწევთ რეკომენდაციას; რეკომენდატორის ტელეფონი; თვითდასაქმების შემთხვევაში მოგვაწოდეთ თქვენი პორტფოლიო office@avangardi.com.ge ზე (სახელი, გვარი, ნამუშევრის ორი ფოტოსურათი) და კლიენტის რეკომენდაცია."/>
                                </label>

                                <label>
                                    დამატებითი ინფორმაცია
                                    <textarea type="text" style={{height:'150px',resize:'none'}} placeholder="ვაკასიის/პოზიციის დასახელება რომლისთვისაც ავსებთ განაცხადს და თუ გსურთ მოგვაწოდოთ დამატებითი ინფორმაცია თქვენზე."/>
                                </label>

                                <label>
                                    განათლება *
                                    <select name="education" id="education">
                                        <option value="საშუალო">საშუალო</option>
                                        <option value="პროფესიული">პროფესიული</option>
                                        <option value="უმაღლესი">უმაღლესი</option>
                                    </select>
                                </label>
                            </div>
                            <button type="submit">გაგზავნა</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

