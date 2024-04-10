
const AlleLänder = 
{
  "AD": "Andorra",
  "AE": "United Arab Emirates",
  "AF": "Afghanistan",
  "AG": "Antigua and Barbuda",
  "AI": "Anguilla",
  "AL": "Albania",
  "AM": "Armenia",
  "AO": "Angola",
  "AQ": "Antarctica"
}

const Europa = ["Belgien", "England", "Deutschland", "Vatikanstaat"];
const TestArray = []
let falscheLösung1 = 0;
let Lösung = 0;

function randomLand() {
  console.log("**", AlleLänder.AD)
    arrayLänge = Europa.length;
    //zufälliges Land/Flagge auswählen und anzeigen:
    let Land = Europa[Math.floor(Math.random() * arrayLänge)]
    //console.log(Land)
    let angezeigteFlagge = document.getElementById("angezeigteFlagge")
    angezeigteFlagge.src = "/Bilder/" + Land + ".png";

    Lösung = [Math.floor(Math.random() * 3)]
    const RichtigeAntwort = document.getElementById("Button" + Lösung);
    RichtigeAntwort.innerHTML = Land;

    for (let i = 0; i < 4; i++) {
      //Land aus Liste entfernen?
      if (i != Lösung) {  
        const FalscheAntwort = document.getElementById("Button" + i);
        let FalscherName0 = Europa[Math.floor(Math.random() * arrayLänge)]
        //while(FalscherName0 = Land) {
          //FalscherName0 = Europa[Math.floor(Math.random() * arrayLänge)]
        //}
        console.log(FalscherName0)
        FalscheAntwort.innerHTML = FalscherName0;

        //Land in Liste hinzufügen
        //
        

      }
    }
}