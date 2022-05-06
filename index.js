*{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
}

.container{
     height: 100vh;
     width: 100vw;
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     
}

.appbar{
     height: 5vh;
     background-color: #1dda2c;
     display: flex;
     align-items: center;
     justify-content: center;
     

     color: white;
     font-weight: 500;
     font-size: 40px;
     
}


.main{
     background-color: white;
     box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25);
     border-radius: 10px;

     height: 100vh;
     /* width: 70%; */
     margin: auto;

     display: flex;
     flex-direction: row;
     
     
}


.left{
     height: 100%;
     width: 100%;
     flex: 1;
     display: flex;
     flex-direction: column;
     align-items:left;
     justify-content: space-around;
     padding: 5px;
}

.from{
     display: flex;
     flex-direction: column;
     align-items:flex-start;
     justify-content: space-around;
     /* background-color: #FF3636; */
}

.title{
     background-color: #0fe70f;
     width: 179px;
     height: 60.86px;
     border-radius: 10px;
     color: white;
     font-size: 30px;
     font-weight: 700;

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
     

}

.form_content{
     margin-top: 20px;
     font-weight: 500;
font-size: 27px;
color: #BBBBBB;
}

.form_combo{
     margin: 15px;
     -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;       /* Remove default arrow */
   width: 379px;
height: 81.72px;



background: #D8FFE7;
border-radius: 10px;   /* Add custom arrow */

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 47px;
display: flex;
align-items: center;
text-align: center;

color: #525952;
}



.title_to{
     background-color: #FF3636;
     width: 179px;
     height: 60.86px;
     border-radius: 10px;
     color: white;
     font-size: 30px;
     font-weight: 700;

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
}

.smallTitle{
     margin: 20px;
     font-weight: 500;
font-size: 27px;
line-height: 20px;
color: #BBBBBB;
}



.right{
     height: 100%;
     width: 100%;
     flex: 1;
     display: flex;
     align-items:center;
     justify-content: center;

}

.start{
     border: none;
     width: 275px;
height: 293.86px;

background: #FFFFFF;
box-shadow: 3px 3px 20px #97B4FF;
border-radius: 206px;
font-size: 50px;



}


.animate_bounce{
     transition: 0.2s;
}

.animate_bounce:hover{
     transform: scale(1.13);
     cursor: pointer;
}

.animate_bounce:active{
     transform: scale(0.9);
}


.modal {
     position: absolute;
     top: 30%;

     height: 30vh;
     width: 50vh;
     margin: auto;

     background: #FFFFFF;
     box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
     border-radius: 10px;
     display: none;
   }
   
   /* Modal Content/Box */
   .modal-content {
     background-color: #fefefe;
     margin: 15% auto; /* 15% from the top and centered */
     padding: 20px;
     border: 1px solid #888;
     width: 80%; /* Could be more or less, depending on screen size */
   }



   .close {
     color: #aaa;
     float: right;
     font-size: 28px;
     font-weight: bold;
   }
   
   .close:hover,
   .close:focus {
     color: black;
     text-decoration: none;
     cursor: pointer;
   }


.banner{
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100vh;
     overflow: hidden;
     /* background-color: #1DCE64; */
}

   .banner img{
     object-fit: fill;
     width: 100%;
     height: 100%;
   }



.stopBtn{
     background-color: #fa3c2f;
     width: 179px;
     height: 60.86px;
     border-radius: 10px;
     color: white;
     font-size: 30px;
     font-weight: 700;

     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
}

#map {
     width: 300vh;
     height: 800vh;
     
     
     
 }
.booking{
     border: 1px solid black;
}


.btnco{
     padding: 2px;
     height: 10rem;
     width: 10rem;
     margin: 20px;
     border: 2px solid grey;
     font-size: larger;
     background-color: green;
     color: white;
     transition: 0.3s;
     border-radius: 10px;
     
     
 }
 .btnco:hover{
     cursor: pointer;
     background-color:#008cff;
     
 }
 .btnco:active{
     background-color: #CFB784;
     color: white;
 }
 .head{
      align-items: center;
      background-color: #1dda2c;
      border: 1px solid black;
      color:white;
      padding: 5px;
      margin-top: 0%;
 }
 .green{
      height: 30px;
      width: 150px;
      padding: 3px;
      border: 1px solid red;
      background-color: green;
      font-size: 20px;
      text-align: center;
      margin-bottom: 8px;
      
 }

 .red{
     
     padding: 3px;
     border: 1px solid red;
     background-color:red;
     font-size: 20px;
     text-align: center;
     margin-bottom: 8px; 
     color: white;
 }



