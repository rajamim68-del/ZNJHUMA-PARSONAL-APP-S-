<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Nurnobi ❤️ JHUMA</title>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: Arial, sans-serif;
    }

    body{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: linear-gradient(135deg,#ff0066,#6600ff);
        overflow:hidden;
    }

    .love-box{
        width:350px;
        padding:30px;
        text-align:center;
        border-radius:25px;
        background:rgba(255,255,255,0.1);
        backdrop-filter:blur(10px);
        box-shadow:0 0 30px rgba(0,0,0,0.3);
        color:white;
        position:relative;
    }

    .love-box h1{
        font-size:38px;
        margin-bottom:10px;
        animation: glow 2s infinite alternate;
    }

    .love-box h2{
        font-size:22px;
        margin-bottom:20px;
        color:#ffd6f2;
    }

    .love-box p{
        font-size:16px;
        line-height:1.7;
    }

    .heart{
        position:absolute;
        color:#ffccdd;
        font-size:25px;
        animation: float 5s linear infinite;
    }

    @keyframes glow{
        from{
            text-shadow:0 0 10px #fff;
        }
        to{
            text-shadow:0 0 25px #ff99cc;
        }
    }

    @keyframes float{
        0%{
            transform:translateY(0) rotate(0deg);
            opacity:1;
        }
        100%{
            transform:translateY(-800px) rotate(360deg);
            opacity:0;
        }
    }

    button{
        margin-top:25px;
        padding:12px 25px;
        border:none;
        border-radius:30px;
        background:white;
        color:#ff0066;
        font-size:16px;
        font-weight:bold;
        cursor:pointer;
        transition:0.3s;
    }

    button:hover{
        background:#ffccdd;
        transform:scale(1.05);
    }
</style>
</head>

<body>

<div class="love-box">
    <h1>NURNOBI ❤️ JHUMA</h1>
    <h2>Forever Love Story</h2>

    <p>
        Nurnobi and JHUMA are connected by true love.<br>
        Their relationship started with trust, care, and endless memories.<br>
        No matter what happens, their hearts beat together forever. 💖
    </p>

    <button onclick="showLove()">
        Click For Love
    </button>
</div>

<script>

function showLove(){
    alert("💖 NURNOBI ❤️ JHUMA Forever 💖");
}

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,300);

</script>

</body>
</html>
