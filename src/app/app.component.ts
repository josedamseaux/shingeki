import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  boton = false;
  values = [];

   eren = 0;
   mikasa = 0;
   armin = 0;
   levi = 0;
   erwin = 0;
   bertolt = 0;
   sasha = 0;
   historia = 0;
   nose;

  botonShow(){
    document.getElementById("botonEmpezar").style.visibility = "hidden";
   }

  responder(){
    let value = document.querySelector<HTMLInputElement>('input[name="question"]:checked').value;
    this.values.push(value);
    console.log(this.values);
    this.movimientoCss()
    this.questions();
    this.clean2();

  }

  movimientoCss(){
    let secondDiv = document.getElementById("secondQuestion");
    secondDiv.className = 'fade-in';
  }

  clean(){
      let x = document.getElementById("secondQuestion");
      x.className = "";
      
  }

  clean2(){
    // limpia el radio button para obligar a presionarlo y mandar metodo clear() 
    //el cual es pre-requisito para la animacion
    let ele = document.querySelector<HTMLInputElement>('input[name="question"]');
    if (ele.checked = true){
      ele.checked = false;
    }
  }

  questions(){

      document.getElementById("question").innerHTML = '¿Disfrutas mucho de la compañia de las demás personas?';
 
      if(this.values.length == 2) {
        document.getElementById("question").innerHTML = 'Prefieres vengarte antes de perdonar';
      }

      if(this.values.length == 3) {
        document.getElementById("question").innerHTML = 'La mayoría de veces hay que dejar ir las cosas y no aferrarse';
      }

      if(this.values.length == 4) {
        document.getElementById("question").innerHTML = 'Te mantienes fiel a alguien sin importar que haya cometido errores';
      }
      
      if(this.values.length == 5) {
        document.getElementById("question").innerHTML = 'Prefieres salvar a otros que salvarte a ti mismo';
      }

      if(this.values.length == 6) {
        document.getElementById("question").innerHTML = 'Prefieres ser meticuloso y planear tus jugadas';
      }

      if(this.values.length == 7) {
        document.getElementById("question").innerHTML = 'De dónde venimos es mas importante que hacia donde vamos';
        
      }
      if(this.values.length == 8) {
        document.getElementById("question").innerHTML = 'De dónde venimos es mas importante que hacia donde vamos';
        this.getScore();

      }

  }

  getScore(){

    // let si = this.values.filter(si => si == "si")
    // let no = this.values.filter(no => no == "no")
    this.nose = this.values.filter(nose => nose == "nose")
    // console.log("si lenght" + si.length);
    // console.log("no lenght" + no.length);
    console.log("nose lenght" + this.nose.length);

    if(this.values[0] == 'si')
        {
          this.eren += 10;
          this.erwin += 11;
          this.sasha += 10;
        }
      
    if(this.values[1] == 'si')
        {
          this.eren += 10;
          this.armin += 11;
          this.erwin += 10;
          this.bertolt += 11;
          this.sasha += 10;
        }
    
    if(this.values[2] == 'si')
        {
          this.eren += 11;
          this.mikasa += 11;
          this.levi += 10;
          this.sasha += 10;
          this.historia += 11; 
        }

        if(this.values[3] == 'si')
        {
          this.armin += 11;
          this.erwin += 10;
          this.bertolt += 10;
        }


        if(this.values[4] == 'si')
        {
          this.mikasa += 11;
          this.armin += 11;
          this.erwin += 10;
          this.bertolt += 10;
          this.sasha += 10;
        }


        if(this.values[5] == 'si')
        {
          this.eren += 10;
          this.erwin += 11;
          this.sasha += 10;
        }


        if(this.values[6] == 'si')
        {
          this.mikasa += 10;
          this.armin += 11;
          this.levi += 10;
          this.erwin += 10;
          this.historia += 11;

        }

        if(this.values[7] == 'si')
        {
          this.eren += 10;
          this.mikasa += 10;
          this.armin += 10;
          this.sasha += 11;
          this.historia += 10; 
        }

        if(this.values.length == 8){
          this.getResult();
          this.showResult();
        }

        console.log("eren " + this.eren)
        console.log("mikasa " + this.mikasa)
        console.log("armin " + this.armin)
        console.log("le " + this.levi)
        console.log("er " + this.erwin)
        console.log("ber " + this.bertolt)
        console.log("sas " + this.sasha)
        console.log("historia " + this.historia)

  }

  getResult(){

    let resultados = []
    resultados.push(this.eren, this.mikasa, this.armin,  this.levi, this.erwin, this.bertolt, this.sasha, this.historia);

    console.log(resultados);

    let maximo = resultados.indexOf(Math.max(...resultados));
    console.log(maximo);

    if(this.nose.length == 8){
      console.log("eres eren")
      document.getElementById("resultado").innerHTML = 'Eres un titán';
      var src = "assets/titan.png";
      var image = new Image();
      image.src = src;
      image.style.width = "350px";
      image.style.height = "350px";
      document.getElementById('imgContainer').appendChild(image);
    } 

    else if (this.nose.length == 7)
    {
      document.getElementById("resultado").innerHTML = 'Eres un titan';
      var src = "assets/titan2.png";
      var image = new Image();
      image.src = src;
      image.style.width = "350px";
      image.style.height = "350px";
      document.getElementById('imgContainer').appendChild(image);
    }  
    
    else if (this.nose.length == 6)
    {
      document.getElementById("resultado").innerHTML = 'Eres el titan colosal';
      var src = "assets/titancolosal.jpg";
      var image = new Image();
      image.src = src;
      image.style.width = "350px";
      image.style.height = "350px";
      document.getElementById('imgContainer').appendChild(image);
    } 
    
    else if (maximo == 0)
    {
      document.getElementById("resultado").innerHTML = 'Eres Eren Jaeger';
      var src = "assets/eren.png";
      var image = new Image();
      image.src = src;
      image.style.width = "350px";
      image.style.height = "350px";
      document.getElementById('imgContainer').appendChild(image);
      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";
      var node = document.createTextNode("Eren Jaeger (エレン・イェーガー Eren Yēgā?) es el protagonista principal de la serie. Es el único hijo de Grisha y Carla Jaeger. A su vez, es el medio hermano menor de Zeke Jaeger, el hermano adoptivo de Mikasa Ackerman y un Titán Cambiante, siendo portador del Titán de Ataque (進撃の巨人 Shingeki no Kyojin?), el Titán Fundador (始祖の巨人 Shiso no Kyojin?) y el Titán Martillo de Guerra (戦槌の巨人 Sentsui no Kyojin?). Eren es oriundo del Distrito Shiganshina, una ciudad situada en el exterior de la Muralla María. Junto con su hermana adoptiva Mikasa y su mejor amigo Armin Arlert, deciden entrar en la milicia. Tras haber presenciado la aniquilación de su pueblo y la muerte de su madre a manos de los titanes. Permanece en él una venganza personal hacia los titanes, siendo su objetivo la eliminación de todos y cada uno de ellos debido a que mataron a su madre.");//create an innerhtml node
      para.appendChild(node);//add the text to the p element
      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 1){
      document.getElementById("resultado").innerHTML = 'Eres Mikasa Ackerman';
      var src = "assets/mikasa.jpg";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("Mikasa Ackerman  (ミカサ・アッカーマン Mikasa Akkāman?) es la hermana adoptiva de Eren Jaeger. Le debe mucho a él, desde que la salvó de los secuestradores que pretendían convertirla en esclava, y pasa la mayor parte de su tiempo juntos. Así pues, aunque a veces no esté de acuerdo con lo que hace, pero lo protege de cualquiera que trate de hacerle daño. Ella, junto con Armin, se une al Cuerpo de Exploración para ayudar a Eren a retomar la Muralla María. La consideran un genio militar y fue la primera de su clase durante la graduación de la Tropa de Reclutas del Ciclo Nº104.");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 2){
      console.log("eres Armin")
      document.getElementById("resultado").innerHTML = 'Eres Armin Arlert';
      var src = "assets/armin.png";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("Armin Arlert (アルミン・アルレルト Arumin Arureruto?) es el actual comandante del Cuerpo de Exploración y un amigo de la infancia de Eren Jaeger y Mikasa Ackerman. Aunque físicamente es más débil que el resto de sus compañeros, demuestra una gran inteligencia a través de su capacidad para la formación de estrategias.");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 3){
      document.getElementById("resultado").innerHTML = 'Eres Levi Ackerman';
      var src = "assets/levi.jpg";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("Levi Ackerman (リヴァイ・アッカーマン Rivai Akkāman?), también referido como Capitán Levi (リヴァイ兵長 Rivai Heichō?), es el capitán de escuadrón (兵士長 Heishichō?, literalmente líder de los soldados) del escuadrón de operaciones especiales del Cuerpo de Exploración, y es conocido como el soldado más fuerte de la humanidad");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 4){
      document.getElementById("resultado").innerHTML = 'Eres Erwin Smith';
      var src = "assets/erwin.png";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("Erwin Smith (エルヴィン・スミス Eruvin Sumisu?) fue el 13º comandante del Cuerpo de Exploración. Inteligente, respetado, Erwin fue un hombre capaz, quien, al igual que Levi, cuidaba mucho a sus hombres y no dudaba en sacrificarse para el futuro de la humanidad. Él desarrolló la Formación a Larga Distancia para Detección de Enemigos, estrategia que benefició mucho al Cuerpo de Exploración ya que aportó en un 30% más de posibilidades de que los soldados no mueran ni se extravíen.");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 5){
      document.getElementById("resultado").innerHTML = 'Eres Kenny';
      var src = "assets/kenny.png";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("Kenny Ackerman (ケニー・アッカーマン Kenī Akkāman?) fue un miembro de la Policía Militar Central, el Capitán (隊長 Taichō?) del Escuadrón de Control Anti-personal y el tío de Levi Ackerman. Kenny se hizo infame dentro de los muros por haber asesinado a decenas de soldados en el pasado, llegando a ser considerado por muchos como una leyenda urbana. Con el tiempo empezó a trabajar para la familia Reiss, eliminando a aquellos que supusieran ser un problema para el gobierno.");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 6){
      document.getElementById("resultado").innerHTML = 'Eres Historia';
      var src = "assets/historia.jpg";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("La Reina Historia Reiss (ヒストリア・レイス Hisutoria Reisu?) es la hija ilegítima del noble Rod Reiss, la última miembro de la familia real Reiss y la actual gobernante de las murallas. Se crió aislada de la familia Reiss, en una de sus fincas, hasta la caída de la Muralla María. Su madre fue asesinada delante de ella, y fue obligada a renunciar a su nombre, asumiendo el alias de Krista Lenz (クリスタ・レンズ Kurisuta Renzu?).");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }

    if(maximo == 7){
      console.log("eres eren")
      document.getElementById("resultado").innerHTML = 'Eres Annie Leonhart';
      var src = "assets/annie.png";
      var image = new Image();
      image.src = src;
      document.getElementById('imgContainer').appendChild(image);

      var para = document.createElement("P");//make an p element
      para.style.fontSize = "30px";

      var node = document.createTextNode("Annie Leonhart (アニ・レオンハート Ani Reonhāto?) fue la recluta de la Tropa de Reclutas del Ciclo Nº104, cuarta en el top 10 de su clase y una ex-miembro de la Policía Militar. Ella, al igual que Reiner Braun y Bertolt Hoover, posee la habilidad de transformarse en un titán y sirve a una unidad de soldados de Marley conocidos como guerreros. En el año 845, ella se infiltró en las murallas con la misión de encontrar y tomar el poder del Titán Fundador");//create an innerhtml node
      para.appendChild(node);//add the text to the p element

      document.getElementById("descripcion").appendChild(para);//search the div1
    }


  }

  showResult(){
    document.getElementById("questions").remove();
    document.getElementById("subtitulo").remove();

  }


}