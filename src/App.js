
import './App.css';
import Box from './Box';
import {useState} from 'react';
import Quotes from "./utils/responses"

export default function App() {
  const [isShown, setIsShown] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [quotes, setQuotes] = useState(Quotes());
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

 const onChange = (event) => {
  setUserQuestion(event.target.value);
 };


const showQuestion=()=> {
  return <p>{userQuestion}</p>
}

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);//makes the button toggle

    // 👇️ or simply set it to true
    // setIsShown(true);
    selectRandomFortune();
    //setUserQuestion("");
  };

  function selectRandomFortune() {
  const num = Math.random() * quotes.length;
  const index = Math.floor(num);
  setCurrentQuote(quotes[index])
}

  return (
    <div>
      {/* <label htmlFor="question"><h2>What does Mama Trina have to say about that?</h2></label><br /> */}
       {/* <input onChange={onChange} id="question" name="question" type="text" value={userQuestion}
       /> */}
      {/* <!-- Quote Container --> */}
        <div class="container">
             {/* <!-- Quote to be Displayed Here --> */}
            <h1> <h2>TrinaP Says:</h2>
            <i class="fas fa-quote-left"></i>
            <span class="quote" id="quote"> 
           
            {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          
          {/* <h2>{showQuestion()}</h2> */}
          {currentQuote}
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}</span>
            <i class="fas fa-quote-right"></i>
            </h1>
            {/* <!-- Author to be Displayed Here --> */}
            <p class="author" id="author"></p>

            <hr/>
            <div class="buttons">
               {/* <!--Button to tweet the quote --> */}
                <a class="twitter" id="tweet" href="https://twitter.com/intent/tweet?text=Greetings" data-size="large" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>

                {/* <!--Add an onclick event on 'next quote' button. Upon the click of a button, a new random quote is generated-->
                <button class="next" onclick="getNewQuote()">Next quote</button> */}
                 {/* <!--Add an onclick event on 'next quote' button. Upon the click of a button, a new random quote is generated--> */}
                {/* <button onclick={handleClick}>Next quote</button>  */}
                <button onClick={handleClick}>Click for next quote</button>

     
            </div>
        </div>

      



     
    </div>
  );
}

// function Box() {
//   return (
//     <div>
//       <h2>Box</h2>
//     </div>
//   );
//}
