import logo from './logo.svg';
import './App.css';
import RRR from "./images/RRR.jpg";
import Baahubali1mp4 from "./video/Baahubali1mp4.mp4";
import Baahubali2mp4 from "./video/Baahubali2mp4.mp4";
import RRR1mp4 from "./video/RRR1mp4.mp4"
import pushpamp4 from "./video/pushpamp4.mp4"


function App() {
  return (
    <div>
    <div className="App">
      <h1>
        Top Movies With Teaser
      </h1>
      <h2>
     1. Baahubali: The Beginning 
      </h2>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Baahubali_The_Beginning_poster.jpg/220px-Baahubali_The_Beginning_poster.jpg"></img>
      <br></br>
      <audio src="./music/Baahubali1.mp3"controls></audio>
      <br></br>
      <video scr={Baahubali1mp4} controls></video>

      <p>
      Baahubali: The Beginning is a 2015 Indian epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was filmed in both Telugu and Tamil languages.[8][9] It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishnan, Sathyaraj, and Nassar. The first of a duology of films, it follows Sivudu, an adventurous young man who helps his love Avantika rescue Devasena, the former queen of Mahishmati who is now a prisoner under the tyrannical rule of king Bhallaladeva. The story concludes in Baahubali 2: The Conclusion (2017).
      </p>
    </div>
    <div className="App">
<h1>
  2.Baahubali 2: The Conclusion
</h1>
<img src="./images/Baahubali 2.jpg"></img>
<br></br>
<audio src="./music/Baahubalimp3.mp3"controls ></audio>

<br></br>
<video src={Baahubali2mp4}controls></video>
<p>
Baahubali 2: The Conclusion is a 2017 Indian epic action film directed by S. S. Rajamouli, who co-wrote the script with V. Vijayendra Prasad. It was produced by Shobu Yarlagadda and Prasad Devineni under the banner Arka Media Works. The film was filmed in both Telugu and Tamil languages. The cast includes Prabhas in a dual role, alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishnan, Sathyaraj, Nassar and Subbaraju. It is both the sequel and the prequel to Baahubali: The Beginning, as well as the final installment in the Baahubali film duology. The film is set in medieval India and centers on the rivalry between siblings Amarendra Baahubali and Bhallaladeva. Bhallaladeva conspires against Amarendra, leading to his death at the hands of Kattappa. Years later, Amarendra's son (Mahendra or Shiva) seeks to avenge his father's demise
</p>
    </div>

    <div className="App">
      <h1>3.RRR</h1>
      <img src={RRR}></img>
      <br></br>
      <audio src="./music/rrrmp3.mp3" controls ></audio>
      <br></br>
<video src={RRR1mp4}controls></video>

      <p>RRR[b] (subtitled onscreen as Roudram Ranam Rudhiram ; internationally as Rise Roar Revolt) is a 2022 Indian Telugu-language historical action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya under DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a fictionalized tribute to two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), celebrating friendship and the struggle against oppression by the British Raj.Rajamouli conceived the story by reimagining Rama Raju and Bheem meeting in 1920 Delhi as two unstoppable forces in an epic fight with colonial tyranny. The film was announced in March 2018. Principal photography of the film began in November 2018 in Hyderabad and continued until August 2021, owing to delays caused by the COVID-19 pandemic. It was filmed extensively across India, with a few sequences filmed in Ukraine and Bulgaria. The film's soundtrack and background score were composed by M. M. Keeravani, with cinematography by K. K. Senthil Kumar and editing by A. Sreekar Prasad. Sabu Cyril is the film's production designer while V. Srinivas Mohan supervised the visual effects.</p>
    </div>

    <div className="App">
      <h1>4.Pushpa: The Rise</h1>
      <img src="https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg"></img>
      <br></br>
      <audio src="./music/pushpamp3.mp3" controls ></audio>
      
      <br></br>
      <video src={pushpamp4}controls></video>

      <p>
      Pushpa: The Rise is a 2021 Indian Telugu-language action drama film written and directed by Sukumar, and produced by Mythri Movie Makers and Muttamsetty Media. The film stars Allu Arjun as Pushpa Raj, a coolie who rises in a syndicate that smuggles red sandalwood, a rare wood that grows only in the Seshachalam Hills of Andhra Pradesh. It also stars Fahadh Faasil (in his Telugu debut) and Rashmika Mandanna while Dhananjaya, Jagadeesh Prathap Bandari, Sunil, and Ajay Ghosh.The film began production in December 2019 but was halted in March 2020 by the COVID-19 pandemic. Filming resumed in November 2020 and ended in November 2021, predominantly taking place at Ramoji Film City in Hyderabad and Maredumilli forest in Andhra Pradesh. Devi Sri Prasad composed the film's score and soundtrack while the cinematography and editing are performed by Miroslaw Kuba Brozek and Karthika Srinivas–Ruben respectively.
      </p>
    </div>
        </div>
  );
}

export default App;
