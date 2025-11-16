let navHTML = `
 <body style=" width: 100% ; height: 100vh; margin: 0; padding:0; box-sizing:border-box;"> 
   <nav style=" padding: 30px 105px;display: flex;align-items: center; justify-content: space-between;background-color: #fff; ">
        <img src="./img/Logo1.png" alt="bu yerda rasim bor">
        <ul style = "display: flex; list-style:none;  gap: 50px;">
            <li><a style=" text-decoration: none;
    color: black;" href="#">Home</a></li>
            <li><a style=" text-decoration: none;
    color: black;" href="#">Service</a></li>
            <li><a style=" text-decoration: none;
    color: black;" href="#">Feature</a></li>
            <li><a style=" text-decoration: none;
    color: black;" href="#">Product</a></li>
            <li><a style=" text-decoration: none;
    color: black;" href="#">Testimonal</a></li>
            <li><a style=" text-decoration: none;
    color: black;" href="#">FAQ</a></li>
        </ul>
        <div class="buttons" style="  display: flex; gap: 14px;">
            <button class="login" style="width: 91px;    height: 40px;
   border: none;    border-radius: 6px; background-color: white;
    color: #4CAF4F;    width: 70px;    height: 40px;
  border-radius: 6px;border: none;
    color: #4CAF4F;" >Login</button>
            <button class="sign_in" style=" width: 91px;
    height: 40px;
    border: none;
    border-radius: 6px;
    background-color: #4CAF4F;
    color: white;">Sign up</button>
        </div>
    </nav>
         <div class="hero" style=" 
    width: 93%;
    height: 65vh;
    padding-top: 20px;
    padding-left: 100px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 160px;">
            <div class="hero_text">
            <h1 style="font-size: 64px;">
                    Lessons and insights <br> <span style="color: #4CAF4F;">from 8 years</span>
                </h1>
                <p style="margin-top: 16px;
    color: #717171;">
                    Where to grow your business as a photographer: site or social media?
                </p>
                <button style="    width: 128px;
    height: 52px;
    margin-top: 40px;
    border: none;
    border-radius: 6px;
    background-color: #4CAF4F;
    color: white;">Register</button>
            </div>
            <div class="hero_img">
                <img src="./img/Illustration.png" alt="bu yerda rasim bor">
            </div>
            <div class="dot" style="position: relative;
        top: 300px;
        right: 650px;">
                <img src="./img/Dot.png" alt="bu yerda nmadur bor hehehe">
            </div>
        </div>
    </body>
`

let header = document.querySelector(".header")

let navElement = document.createElement("div")
navElement.innerHTML = navHTML

header.appendChild(navElement)
