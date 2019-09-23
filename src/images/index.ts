import bdx from "./bordeaux.jpg";
import lyon from "./lyon.jpg";
import paris from "./paris.jpg";
import lisbonne from "./lisbonne.jpg";
import shanghai from "./shanghai.jpg";
import singapour from "./singapore.jpg";
import sf from "./sanfrancisco.jpg";
import nantes from "./nantes.jpg";
import tls from "./toulouse.jpg";

export default function(city: string) {
  switch (city) {
    case "Paris":
      return paris;
    case "Lyon":
      return lyon;
    case "Bordeaux":
      return bdx;
    case "Nantes":
      return nantes;
    case "Toulouse":
      return tls;
    case "Lisbonne":
      return lisbonne;
    case "Shanghai":
      return shanghai;
    case "Singapour":
      return singapour;
    case "San Francisco":
      return sf;
  }
}
