import "./App.css";

function App() {
  let arr = [
    {
      title :"AI + RPA is what we do",
      para : "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
      btn : "AI + RPA Automation",
      img : "https://www.xivtech.io./rp2.jpg"
    },
    {
      title :"Make Bolder Choices",
      para : "Digital focused strategies to realize market-changing ideas",
      btn : "Build Better Apps",
      img : "https://www.xivtech.io./p1.png"
    },
    {
      title :"Innovate with Speed",
      para : "Create higher quality software, deliver on customer expectations and business goals",
      btn : "DevOps",
      img : "https://www.xivtech.io./p2.jpg"
    },
    {
      title :"Embrace Cloud",
      para : "With Cloud-First accelerate innovation and optimize performance",
      btn : "Cloud Services",
      img : "https://www.xivtech.io./p3.jpg"
    },
  ]

  return (
    <div className="wrapper">
      <div className="box">
        <h2>Let's Collaborate</h2>

        {
          arr.map((a)=>(
            <div className="card">
          <div className="info">
            <h1>{a.title}</h1>
            <img className="mb" src={a.img} alt="Img" />
            <p>
            {a.para}
            </p>
            <div className="btn">
            <a href="#">{a.btn}</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            </div>

          </div>
          <div className="right">
            <img src={a.img} alt="Img" />
          </div>
        </div>
          ))
        }



      </div>
    </div>
  );
}

export default App;
