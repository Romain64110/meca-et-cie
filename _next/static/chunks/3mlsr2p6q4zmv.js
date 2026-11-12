(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94067,e=>{"use strict";let r=(e,r,t=!1)=>{let a=0;for(let r of e)" "===r||" "===r?a+=.27:"iljI.,;:'’!|()[]f t".includes(r)?a+=.3:"mwMWœŒ".includes(r)?a+=.86:r>="A"&&r<="Z"?a+=.66:/[0-9]/.test(r)?a+=.56:a+=.54;return a*r*(t?1.05:1)};function t(e,r,a,n=!1){return Math.max(0,...e.map(e=>r(e,a,n)))}e.s(["x",0,function(e,a=r){switch(e.sorte){case"rect":return{x:e.x,y:e.y,l:e.l,h:e.h};case"ellipse":return{x:e.cx-e.rx,y:e.cy-e.ry,l:2*e.rx,h:2*e.ry};case"texte":{let r=t(e.lignes,a,e.taille,e.gras);return{x:"start"===e.ancre?e.x:"middle"===e.ancre?e.x-r/2:e.x-r,y:e.y-.8*e.taille,l:r,h:(e.lignes.length-1)*e.interligne+e.taille}}case"chemin":return null}},"D",0,function(e,r,t,a,n=!1){let s=[];for(let i of e.replace(/(\d) (?=\d{3}(?!\d))/g,"$1 ").replace(/(\d) (?=[A-Za-zµΩ°%]\S{0,6}(?=[\s,.;:)]|$))/g,"$1 ").replace(/ (?=[:;!?»])/g," ").replace(/« /g,"« ").split(/\r?\n/)){let e=i.split(/[ \t]+/).filter(Boolean);if(0===e.length){(i.length>0||s.length>0)&&s.push("");continue}let l="";for(let i of e){let e=l?`${l} ${i}`:i;if(t(e,a,n)<=r){l=e;continue}l&&s.push(l);let o=i;for(;t(o,a,n)>r&&o.length>1;){let e=o.length-1;for(;e>1&&t(o.slice(0,e),a,n)>r;)e-=1;s.push(o.slice(0,e)),o=o.slice(e)}l=o}s.push(l)}for(;s.length>1&&""===s[s.length-1];)s.pop();return s.length?s:[""]},"c",0,t,"G",0,r,"E",0,function(e,r,t=11,a=5){let n=e.x-r.x,s=e.y-r.y,i=Math.hypot(n,s)||1,l=n/i,o=s/i,u=e.x-l*t,c=e.y-o*t,d=e=>Math.round(100*e)/100;return`M ${d(e.x)} ${d(e.y)} L ${d(u-o*a)} ${d(c+l*a)} L ${d(u+o*a)} ${d(c-l*a)} Z`}])},20759,e=>{"use strict";var r=e.i(95966),t=e.i(75379),a=e.i(7372),n=e.i(17251);let s={bouton:{nom:"bouton-poussoir",article:"le ",famille:"entree",prefixe:"S"},interrupteur:{nom:"interrupteur",article:"l'",famille:"entree",prefixe:"S"},"fin-de-course":{nom:"fin de course",article:"le ",famille:"entree",prefixe:"B"},potentiometre:{nom:"potentiomètre",article:"le ",famille:"entree",prefixe:"S"},joystick:{nom:"joystick",article:"le ",famille:"entree",prefixe:"S"},ldr:{nom:"photorésistance (LDR)",article:"la ",famille:"capteur",prefixe:"B"},lm35:{nom:"capteur de température LM35",article:"le ",famille:"capteur",prefixe:"B"},tmp36:{nom:"capteur de température TMP36",article:"le ",famille:"capteur",prefixe:"B"},dht:{nom:"capteur de température et d'humidité",article:"le ",famille:"capteur",prefixe:"B"},bmp280:{nom:"capteur de pression BMP280",article:"le ",famille:"capteur",prefixe:"B"},"hc-sr04":{nom:"capteur de distance à ultrasons HC-SR04",article:"le ",famille:"capteur",prefixe:"B"},pir:{nom:"détecteur de mouvement (PIR)",article:"le ",famille:"capteur",prefixe:"B"},"obstacle-ir":{nom:"détecteur d'obstacle infrarouge",article:"le ",famille:"capteur",prefixe:"B"},"suiveur-ligne":{nom:"capteur suiveur de ligne",article:"le ",famille:"capteur",prefixe:"B"},as5600:{nom:"capteur d'angle magnétique AS5600",article:"le ",famille:"capteur",prefixe:"B"},"effet-hall":{nom:"capteur à effet Hall",article:"le ",famille:"capteur",prefixe:"B"},hx711:{nom:"capteur de force (HX711)",article:"le ",famille:"capteur",prefixe:"B"},mpu6050:{nom:"accéléromètre et gyroscope MPU6050",article:"l'",famille:"capteur",prefixe:"B"},"ky-040":{nom:"codeur rotatif KY-040",article:"le ",famille:"capteur",prefixe:"B"},ina219:{nom:"capteur de courant INA219",article:"le ",famille:"capteur",prefixe:"B"},vl53l0x:{nom:"capteur de distance laser VL53L0X",article:"le ",famille:"capteur",prefixe:"B"},inductif:{nom:"capteur inductif de proximité",article:"le ",famille:"capteur",prefixe:"B"},capacitif:{nom:"capteur capacitif de proximité",article:"le ",famille:"capteur",prefixe:"B"},ils:{nom:"interrupteur à lame souple (ILS)",article:"l'",famille:"capteur",prefixe:"B"},"fourche-optique":{nom:"fourche optique (compte-tours)",article:"la ",famille:"capteur",prefixe:"B"},ds18b20:{nom:"sonde de température DS18B20",article:"la ",famille:"capteur",prefixe:"B"},max6675:{nom:"thermocouple K (MAX6675)",article:"le ",famille:"capteur",prefixe:"B"},debitmetre:{nom:"débitmètre YF-S201",article:"le ",famille:"capteur",prefixe:"B"},pression:{nom:"capteur de pression 0 à 1,2 MPa",article:"le ",famille:"capteur",prefixe:"B"},acs712:{nom:"capteur de courant ACS712",article:"le ",famille:"capteur",prefixe:"B"},diviseur:{nom:"module diviseur de tension (0 à 25 V)",article:"le ",famille:"capteur",prefixe:"B"},vibration:{nom:"capteur de vibrations SW-420",article:"le ",famille:"capteur",prefixe:"B"},son:{nom:"capteur de son KY-038",article:"le ",famille:"capteur",prefixe:"B"},couleur:{nom:"capteur de couleur TCS34725",article:"le ",famille:"capteur",prefixe:"B"},clavier:{nom:"clavier matriciel 4 × 4",article:"le ",famille:"entree",prefixe:"S"},rfid:{nom:"lecteur RFID RC522",article:"le ",famille:"capteur",prefixe:"B"},led:{nom:"LED",article:"la ",famille:"actionneur",prefixe:"P"},"led-rgb":{nom:"LED RGB",article:"la ",famille:"actionneur",prefixe:"P"},ws2812:{nom:"LED adressables WS2812",article:"les ",famille:"actionneur",prefixe:"P"},buzzer:{nom:"buzzer",article:"le ",famille:"actionneur",prefixe:"P"},servomoteur:{nom:"servomoteur",article:"le ",famille:"actionneur",prefixe:"M"},"moteur-cc":{nom:"moteur à courant continu",article:"le ",famille:"actionneur",prefixe:"M"},"pont-h":{nom:"pont en H L298N",article:"le ",famille:"actionneur",prefixe:"Q"},"moteur-pas-a-pas":{nom:"moteur pas à pas 28BYJ-48",article:"le ",famille:"actionneur",prefixe:"M"},"driver-pas-a-pas":{nom:"carte de commande ULN2003",article:"la ",famille:"actionneur",prefixe:"Q"},relais:{nom:"module relais",article:"le ",famille:"actionneur",prefixe:"Q"},nema17:{nom:"moteur pas à pas NEMA 17",article:"le ",famille:"actionneur",prefixe:"M"},a4988:{nom:"driver A4988",article:"le ",famille:"actionneur",prefixe:"Q"},"motoreducteur-codeur":{nom:"motoréducteur à codeur",article:"le ",famille:"actionneur",prefixe:"M"},"servo-continu":{nom:"servomoteur à rotation continue",article:"le ",famille:"actionneur",prefixe:"M"},tb6612:{nom:"double pont en H TB6612FNG",article:"le ",famille:"actionneur",prefixe:"Q"},mosfet:{nom:"module MOSFET IRF520",article:"le ",famille:"actionneur",prefixe:"Q"},electrovanne:{nom:"électrovanne 12 V",article:"l'",famille:"actionneur",prefixe:"Q"},pompe:{nom:"pompe à eau 12 V",article:"la ",famille:"actionneur",prefixe:"M"},ventilateur:{nom:"ventilateur 12 V",article:"le ",famille:"actionneur",prefixe:"M"},electroaimant:{nom:"électroaimant 12 V",article:"l'",famille:"actionneur",prefixe:"M"},solenoide:{nom:"solénoïde poussoir 12 V",article:"le ",famille:"actionneur",prefixe:"M"},lcd:{nom:"afficheur LCD 16 × 2 (I²C)",article:"l'",famille:"afficheur",prefixe:"P"},oled:{nom:"écran OLED (I²C)",article:"l'",famille:"afficheur",prefixe:"P"},"sept-segments":{nom:"afficheur 7 segments",article:"l'",famille:"afficheur",prefixe:"P"},tm1637:{nom:"afficheur 4 chiffres TM1637",article:"l'",famille:"afficheur",prefixe:"P"},max7219:{nom:"matrice de LED 8 × 8 (MAX7219)",article:"la ",famille:"afficheur",prefixe:"P"},"usb-pc":{nom:"câble USB du PC",article:"le ",famille:"alimentation",prefixe:"G"},"bloc-usb":{nom:"bloc secteur USB",article:"le ",famille:"alimentation",prefixe:"G"},"batterie-usb":{nom:"batterie externe USB",article:"la ",famille:"alimentation",prefixe:"G"},"bloc-jack":{nom:"bloc secteur à jack",article:"le ",famille:"alimentation",prefixe:"G"},"pile-9v":{nom:"pile 9 V",article:"la ",famille:"alimentation",prefixe:"G"},"piles-aa":{nom:"coupleur de piles AA",article:"le ",famille:"alimentation",prefixe:"G"},"batterie-lithium":{nom:"batterie lithium 3,7 V",article:"la ",famille:"alimentation",prefixe:"G"},alimentation:{nom:"alimentation externe",article:"l'",famille:"alimentation",prefixe:"G"},resistance:{nom:"résistance",article:"la ",famille:"passif",prefixe:"R"},diode:{nom:"diode 1N4007",article:"la ",famille:"passif",prefixe:"R"},platine:{nom:"platine d'essai",article:"la ",famille:"passif",prefixe:"X"}},i=Object.keys(s),l=["a","b","c","d","e","f","g","h","i","j"],o=["+haut","-haut","+bas","-bas"];function u(e){return"demi"===e?30:63}let c={bouton:["1","2","1.2","2.2"],interrupteur:["1","2","3"],"fin-de-course":["C","NO","NC"],potentiometre:["1","curseur","3"],joystick:["GND","+5V","VRx","VRy","SW"],ldr:["1","2"],lm35:["+Vs","Vout","GND"],tmp36:["+Vs","Vout","GND"],dht:["VCC","DATA","NC","GND"],bmp280:["VCC","GND","SCL","SDA","CSB","SDO"],"hc-sr04":["VCC","Trig","Echo","GND"],pir:["VCC","OUT","GND"],"obstacle-ir":["VCC","GND","OUT"],"suiveur-ligne":["VCC","GND","DO","AO"],as5600:["VCC","GND","SDA","SCL","DIR","OUT","GPO"],"effet-hall":["VCC","GND","OUT"],hx711:["GND","DT","SCK","VCC"],mpu6050:["VCC","GND","SCL","SDA","XDA","XCL","AD0","INT"],"ky-040":["CLK","DT","SW","+","GND"],ina219:["VCC","GND","SCL","SDA","VIN-","VIN+"],vl53l0x:["VIN","GND","SCL","SDA","GPIO1","XSHUT"],led:["anode","cathode"],"led-rgb":["R","G","B","commun"],ws2812:["5V","GND","DIN","DOUT"],buzzer:["+","-"],servomoteur:["signal","V+","GND"],"moteur-cc":["1","2"],"pont-h":["IN1","IN2","IN3","IN4","ENA","ENB","OUT1","OUT2","OUT3","OUT4","12V","GND","5V"],"moteur-pas-a-pas":["prise"],"driver-pas-a-pas":["IN1","IN2","IN3","IN4","+","-","moteur"],relais:["VCC","GND","IN","COM","NO","NC"],lcd:["GND","VCC","SDA","SCL"],oled:["GND","VCC","SCL","SDA"],"sept-segments":["a","b","c","d","e","f","g","DP","commun","commun.2"],resistance:["1","2"],alimentation:["+","-"],inductif:["BN","BU","BK"],capacitif:["BN","BU","BK"],ils:["1","2"],"fourche-optique":["VCC","GND","DO","AO"],ds18b20:["VCC","DATA","GND"],max6675:["GND","VCC","SCK","CS","SO"],debitmetre:["VCC","GND","signal"],pression:["VCC","GND","signal"],acs712:["VCC","OUT","GND","IP+","IP-"],diviseur:["VCC","GND","S","+","-"],vibration:["VCC","GND","DO"],son:["AO","GND","+","DO"],couleur:["VIN","GND","3V3","SCL","SDA","INT","LED"],clavier:["L1","L2","L3","L4","C1","C2","C3","C4"],rfid:["SDA","SCK","MOSI","MISO","IRQ","GND","RST","3.3V"],nema17:["1A","1B","2A","2B"],a4988:["EN","MS1","MS2","MS3","RST","SLP","STEP","DIR","VMOT","GND","2B","2A","1A","1B","VDD","GND.2"],"motoreducteur-codeur":["M1","M2","VCC","GND","C1","C2"],"servo-continu":["signal","V+","GND"],tb6612:["VM","VCC","GND","AO1","AO2","BO2","BO1","GND.2","PWMA","AIN2","AIN1","STBY","BIN1","BIN2","PWMB","GND.3"],mosfet:["SIG","VCC","GND","V+","V-","VIN","GND.2"],electrovanne:["+","-"],pompe:["+","-"],ventilateur:["+","-"],electroaimant:["+","-"],solenoide:["+","-"],tm1637:["CLK","DIO","VCC","GND"],max7219:["VCC","GND","DIN","CS","CLK"],diode:["anode","cathode"],"usb-pc":["fiche"],"bloc-usb":["fiche"],"batterie-usb":["fiche"],"bloc-jack":["fiche"],"piles-aa":["+","-"],"batterie-lithium":["+","-"]};function d(e){if("platine"===e.sorte){let r=u(e.taille),t=[];for(let e=1;e<=r;e+=1)for(let r of l)t.push(`${r}${e}`);return[...t,...o]}return"pile-9v"===e.sorte?"jack"===e.raccord?["fiche"]:["+","-"]:c[e.sorte]??[]}function m(e){return"usb-pc"===e.sorte||"bloc-usb"===e.sorte||"batterie-usb"===e.sorte?"USB":"bloc-jack"===e.sorte||"pile-9v"===e.sorte&&"jack"===e.raccord?"jack":null}function p(e){let r=s[e.sorte],t=e.repere.trim();return`${r.article}${r.nom}${t?` ${t}`:""}`}function h(e,r){if(r.element===n.G){let t=a.v[e.carte].bornes.find(e=>e.nom===r.borne);return t?"gpio"===t.sorte?`la broche ${t.nom}`:"masse"===t.sorte?"la masse (GND)":"prise"===t.sorte?`la ${t.nom}`:`la borne ${t.nom}`:`la borne ${r.borne}`}let t=e.composants.find(e=>e.id===r.element);if(t?.sorte==="platine")return r.borne.startsWith("+")||r.borne.startsWith("-")?`la ligne ${r.borne[0]} du ${r.borne.slice(1)}`:`le trou ${r.borne}`;switch(r.borne){case"anode":return"l'anode";case"cathode":return"la cathode";case"curseur":return"le curseur";case"commun":return"le commun";case"prise":return"la prise";case"BN":return"le fil marron (BN, +)";case"BU":return"le fil bleu (BU, 0 V)";case"BK":return"le fil noir (BK, la sortie)";case"fiche":return t&&"jack"===m(t)?"la fiche jack":"la fiche USB";case"moteur":return"la prise du moteur";default:if(t?.sorte==="sept-segments")return`le segment ${r.borne}`;return`la borne ${r.borne}`}}function f(e,t){if(t.element===n.G)return`${h(e,t)} de la carte`;let a=e.composants.find(e=>e.id===t.element);return a?`${h(e,t)} ${(0,r.Y)(p(a))}`:"un composant"}function g(e){return e>=1e6?`${(0,t.f)(e/1e6,2)} MΩ`:e>=1e3?`${(0,t.f)(e/1e3,2)} kΩ`:`${(0,t.f)(e,2)} Ω`}e.s(["Y",0,{bouton:{sortie:"contact",remarques:["Sans résistance de tirage, l'entrée est « en l'air » : INPUT_PULLUP, ou une résistance de 10 kΩ.","Ses quatre pattes sont reliées deux à deux à l'intérieur."]},interrupteur:{sortie:"contact",remarques:["La borne du milieu est le commun."]},"fin-de-course":{sortie:"contact",remarques:["C : le commun ; NO : ouvert au repos ; NC : fermé au repos.","Sans résistance de tirage, l'entrée est « en l'air » : INPUT_PULLUP."]},potentiometre:{sortie:"analogique",remarques:["Les deux bornes extrêmes entre GND et la tension de la carte (5 V ou 3,3 V), le curseur sur une entrée analogique."]},joystick:{alimentation:{min:3.3,max:5},sortie:"analogique",remarques:["VRx et VRy : deux potentiomètres ; SW : un bouton vers GND (INPUT_PULLUP)."]},ldr:{sortie:"analogique",remarques:["Avec une résistance fixe (10 kΩ) en pont diviseur ; plus de lumière, moins de résistance."]},lm35:{alimentation:{min:4,max:30},courant:{typique:.06},sortie:"analogique",remarques:["10 mV par °C, 0 V à 0 °C : 250 mV à 25 °C."]},tmp36:{alimentation:{min:2.7,max:5.5},courant:{typique:.05},sortie:"analogique",remarques:["10 mV par °C, 500 mV à 0 °C : 750 mV à 25 °C."]},dht:{alimentation:{min:3.3,max:5.5},courant:{typique:1.5,max:2.5},sortie:"logique",remarques:["Une mesure toutes les 1 s (DHT11) ou 2 s (DHT22) au plus.","DATA a besoin d'une résistance de tirage ; les modules l'ont déjà."]},bmp280:{alimentation:{min:1.71,max:3.6},courant:{typique:.003},sortie:"i2c",remarques:["Beaucoup de modules n'ont pas de régulateur : 3,3 V seulement.","SDO à GND : adresse 0x76 ; SDO à VCC : 0x77."]},"hc-sr04":{alimentation:{min:4.5,max:5.5},courant:{typique:15},sortie:"logique",remarques:["Echo sort en 5 V : sur une carte en 3,3 V (ESP32, UNO Q), un pont diviseur sur Echo.","De 2 cm à 4 m environ."]},pir:{alimentation:{min:4.5,max:20},courant:{typique:.065},sortie:"logique",remarques:["Sa sortie monte à 3,3 V : elle se lit sur toutes les cartes.","Au démarrage, il lui faut une minute pour se régler."]},"obstacle-ir":{alimentation:{min:3.3,max:5},courant:{typique:20},sortie:"logique",remarques:["OUT passe à l'état bas quand un obstacle est devant ; le potentiomètre règle la distance."]},"suiveur-ligne":{alimentation:{min:3.3,max:5},courant:{typique:20},sortie:"logique",remarques:["DO : noir ou blanc, réglé au potentiomètre ; AO : la mesure, en analogique."]},as5600:{alimentation:{min:3,max:5.5},courant:{typique:6.5},sortie:"i2c",remarques:["Adresse I²C 0x36, qu'on ne peut pas changer.","L'aimant diamétral à 0,5 à 3 mm du capteur (ton DT1 : 1 mm environ)."]},"effet-hall":{alimentation:{min:4.5,max:24},courant:{typique:4.4},sortie:"logique",remarques:["Sortie à collecteur ouvert : une résistance de tirage (INPUT_PULLUP) ; elle passe à l'état bas devant un aimant."]},hx711:{alimentation:{min:2.6,max:5.5},courant:{typique:1.5},sortie:"logique",remarques:["DT et SCK : sa liaison à lui, pas de l'I²C ; n'importe quelles broches.","La jauge se fixe par ses deux bouts, la flèche gravée dans le sens de la charge."]},mpu6050:{alimentation:{min:3,max:5},courant:{typique:3.9},sortie:"i2c",remarques:["Adresse 0x68 (AD0 à GND ou en l'air), 0x69 avec AD0 au VCC.","Il dort au démarrage : écrire 0 dans le registre 0x6B le réveille."]},"ky-040":{alimentation:{min:3.3,max:5},sortie:"logique",remarques:["CLK et DT : deux signaux décalés d'un quart de période ; le sens se lit à l'ordre de leurs fronts.","SW : le bouton de l'axe, vers GND (INPUT_PULLUP)."]},ina219:{alimentation:{min:3,max:5.5},courant:{typique:1},sortie:"i2c",remarques:["Le courant mesuré entre par VIN+ et sort par VIN− : il se branche en série, côté +.","Jusqu'à 26 V et 3,2 A, avec le shunt de 0,1 Ω du module."]},vl53l0x:{alimentation:{min:2.6,max:5.5},courant:{typique:19},sortie:"i2c",remarques:["Adresse 0x29 ; on la change par programme, à chaque démarrage.","Son laser infrarouge est de classe 1 : sans danger pour les yeux."]},led:{courant:{typique:10,max:20},remarques:["Toujours en série avec une résistance : R = (U − U_LED) / I.","La patte la plus longue est l'anode (+)."]},"led-rgb":{courant:{typique:10,max:20},remarques:["Une résistance par couleur ; rouge 2,0 V, vert et bleu 3,2 V environ.","Cathode commune : le commun à GND ; anode commune : le commun au + et la couleur s'allume à l'état bas."]},ws2812:{alimentation:{min:3.5,max:5.3},courant:{typique:20,max:60},sortie:"logique",remarques:["Jusqu'à 60 mA par LED en blanc à fond : au-delà de quelques LED, une alimentation externe.","Commandées en 3,3 V, elles marchent le plus souvent, pas toujours."]},buzzer:{alimentation:{min:3.5,max:5.5},courant:{typique:30},remarques:["Actif : il sonne dès qu'il est alimenté. Passif : il lui faut tone()."]},servomoteur:{alimentation:{min:4.8,max:6},courant:{typique:200,max:700},remarques:["Jamais alimenté par la carte : une alimentation externe, et la masse commune (ton README).","Le signal se commande en 3,3 V comme en 5 V."]},"moteur-cc":{courant:{typique:150,max:1e3},remarques:["Jamais sur une broche de la carte : par un pont en H ou un transistor."]},"pont-h":{alimentation:{min:5,max:35},courant:{typique:36,max:2e3},remarques:["12V : l'alimentation des moteurs ; 5V : la logique (le module la fournit si 12V dépasse 7 V).","Il perd environ 2 V : un moteur de 6 V a besoin de 8 V environ."]},"moteur-pas-a-pas":{alimentation:{min:5,max:5},courant:{typique:100},remarques:["2 048 pas par tour en pas complets (réduction de 1/64 environ).","Branché sur sa carte ULN2003, jamais sur la carte."]},"driver-pas-a-pas":{alimentation:{min:5,max:12},remarques:["IN1 à IN4 sur quatre sorties de la carte ; + et − sur une alimentation externe de 5 V."]},relais:{alimentation:{min:4.5,max:5.5},courant:{typique:70},sortie:"contact",remarques:["Sur beaucoup de modules, IN commande le relais à l'état bas.","Le contact (COM, NO, NC) coupe la puissance : 10 A sous 250 V au plus."]},lcd:{alimentation:{min:4.5,max:5.5},courant:{typique:25},sortie:"i2c",remarques:["Ses résistances de tirage I²C tirent à 5 V : sur une carte en 3,3 V, attention.","Adresse 0x27 ou 0x3F selon le module ; le potentiomètre du dos règle le contraste."]},oled:{alimentation:{min:3.3,max:5},courant:{typique:20},sortie:"i2c",remarques:["Adresse 0x3C, parfois 0x3D."]},"sept-segments":{courant:{typique:10,max:20},remarques:["Une résistance par segment, comme pour une LED ; environ 2 V par segment."]},resistance:{remarques:["1/4 W : la puissance U × I qu'elle dissipe reste sous 0,25 W."]},alimentation:{remarques:["Son − relié au GND de la carte : la masse commune."]},inductif:{alimentation:{min:6,max:36},courant:{typique:10},sortie:"logique",remarques:["NPN à fermeture : BK passe à 0 V devant le métal ; INPUT_PULLUP sur la carte.","Il veut 6 à 36 V : 12 V, et une sortie qui ne doit jamais envoyer ce 12 V sur une broche."]},capacitif:{alimentation:{min:6,max:36},courant:{typique:10},sortie:"logique",remarques:["Il voit le métal, le bois, le plastique, l'eau à travers une paroi.","Sa portée se règle à la vis du dos."]},ils:{sortie:"contact",remarques:["Un contact qui se ferme devant un aimant, sans le toucher : INPUT_PULLUP.","Le verre se casse : ne plie pas ses pattes au ras du tube."]},"fourche-optique":{alimentation:{min:3.3,max:5},courant:{typique:15},sortie:"logique",remarques:["DO change d'état à chaque fente du disque : on compte les fronts.","La lumière du jour gêne : la fente à l'ombre."]},ds18b20:{alimentation:{min:3,max:5.5},courant:{typique:1},sortie:"logique",remarques:["Une résistance de 4,7 kΩ entre DATA et VCC.","Une mesure en 12 bits dure 750 ms."]},max6675:{alimentation:{min:3,max:5.5},courant:{typique:1.5},sortie:"logique",remarques:["Le thermocouple a un sens : + et − du module.","Une mesure toutes les 220 ms au plus."]},debitmetre:{alimentation:{min:5,max:18},courant:{typique:15},sortie:"logique",remarques:["F = 7,5 × Q : 7,5 impulsions par seconde pour 1 L/min.","La flèche du corps dans le sens de l'eau."]},pression:{alimentation:{min:4.75,max:5.25},courant:{typique:10},sortie:"analogique",remarques:["0,5 V à 0 MPa, 4,5 V à 1,2 MPa : P = (U − 0,5) × 1,2 / 4.","Sous 0,5 V ou au-dessus de 4,5 V : un fil coupé ou un court-circuit."]},acs712:{alimentation:{min:4.5,max:5.5},courant:{typique:10},sortie:"analogique",remarques:["VCC / 2 à 0 A ; 185 mV par ampère (calibre 5 A).","Le courant mesuré passe par IP+ et IP−, isolé de la carte."]},diviseur:{sortie:"analogique",remarques:["S = U / 5 : 25 V au plus sur une Uno (5 V au convertisseur), 16,5 V sur une carte en 3,3 V.","Son − est relié au GND de la carte."]},vibration:{alimentation:{min:3.3,max:5},courant:{typique:15},sortie:"logique",remarques:["DO passe à l'état haut quand ça vibre ; le potentiomètre règle le seuil.","Il vibre par à-coups : on compte les impulsions sur une durée."]},son:{alimentation:{min:3.3,max:5},courant:{typique:5},sortie:"analogique",remarques:["AO suit le son (autour de VCC / 2) ; DO passe le seuil réglé au potentiomètre.","Il entend un claquement, pas des décibels : il n'est pas étalonné."]},couleur:{alimentation:{min:3.3,max:5},courant:{typique:3},sortie:"i2c",remarques:["Adresse 0x29 (la même que le VL53L0X).","Sa LED blanche éclaire l'objet : à quelques millimètres."]},clavier:{sortie:"contact",remarques:["4 lignes, 4 colonnes : 8 broches pour 16 touches.","La bibliothèque Keypad balaye les lignes et lit les colonnes."]},rfid:{alimentation:{min:3,max:3.6},courant:{typique:26},sortie:"logique",remarques:["3,3 V seulement : jamais sur le 5V.","Bus SPI : D10 à D13 sur l'Uno, RST sur une autre broche."]},nema17:{courant:{typique:1500},remarques:["200 pas par tour (1,8°) ; deux bobines : 1A-1B et 2A-2B.","Jamais sur la carte : par un driver (A4988)."]},a4988:{alimentation:{min:8,max:35},courant:{typique:5},remarques:["VMOT : 8 à 35 V pour le moteur ; VDD : 3 à 5,5 V pour la logique.","Un condensateur de 100 µF sur VMOT ; le courant se règle au potentiomètre (Vref)."]},"motoreducteur-codeur":{courant:{typique:300,max:2e3},sortie:"logique",remarques:["C1 et C2 : deux voies décalées d'un quart de période ; le sens se lit à leur ordre.","Le moteur (M1, M2) par un pont en H ; le codeur (VCC, GND) en 3,3 ou 5 V."]},"servo-continu":{alimentation:{min:4.8,max:6},courant:{typique:150,max:800},remarques:["1 500 µs : il s'arrête ; plus long ou plus court : il tourne dans un sens ou l'autre.","Il ne sait pas où il est : pas d'angle, une vitesse."]},tb6612:{alimentation:{min:2.7,max:13.5},courant:{typique:2,max:1200},remarques:["VM : 4,5 à 13,5 V pour les moteurs ; VCC : 2,7 à 5,5 V pour la logique.","STBY à l'état haut, sinon rien ne bouge."]},mosfet:{remarques:["SIG commande la grille ; la charge entre V+ et V−, son alimentation sur VIN.","Un IRF520 conduit mal sous 5 V et presque pas sous 3,3 V."]},electrovanne:{courant:{typique:400},remarques:["Une bobine : une diode de roue libre en parallèle.","Elle a un sens de passage, et une pression minimale pour s'ouvrir."]},pompe:{courant:{typique:400,max:1500},remarques:["Un moteur : par un MOSFET ou un relais, jamais sur la carte.","Elle ne tourne jamais à sec."]},ventilateur:{courant:{typique:150},remarques:["Il souffle dans le sens de la flèche de son cadre.","Sa vitesse se règle en MLI par un MOSFET."]},electroaimant:{courant:{typique:300},remarques:["Une bobine : une diode de roue libre en parallèle.","Il tient une pièce en acier, pas de l'aluminium."]},solenoide:{courant:{typique:1e3},remarques:["Une bobine : une diode de roue libre en parallèle.","Il pousse quelques secondes, pas en continu : il chauffe."]},tm1637:{alimentation:{min:3.3,max:5},courant:{typique:30,max:80},sortie:"logique",remarques:["CLK et DIO : deux broches quelconques (sa liaison à lui, pas de l'I²C).","Le deux-points s'allume avec le deuxième chiffre."]},max7219:{alimentation:{min:4,max:5.5},courant:{typique:50,max:320},sortie:"logique",remarques:["DIN, CS, CLK : trois broches ; plusieurs matrices se chaînent par DOUT.","Toutes les LED allumées à fond : 320 mA, par une alimentation externe."]},diode:{remarques:["La bague blanche marque la cathode.","En roue libre : la cathode du côté du +."]},"usb-pc":{remarques:["5 V, 500 mA au plus sur un port USB 2.0, 900 mA sur un port USB 3.","C'est aussi par lui qu'on téléverse le programme."]},"bloc-usb":{remarques:["5 V, et le courant écrit dessus (1 à 3 A).","Il alimente la carte comme le PC, sans téléverser."]},"batterie-usb":{remarques:["Sa capacité est donnée à 3,7 V : à 5 V, il en reste environ les deux tiers.","Beaucoup se coupent seules quand le courant est trop faible."]},"bloc-jack":{remarques:["7 à 12 V pour l'Uno, + au centre de la fiche.","Le régulateur de la carte dissipe (U − 5 V) × I : il chauffe."]},"pile-9v":{remarques:["Environ 500 mAh : quelques heures pour une Uno seule, quelques minutes avec un moteur."]},"piles-aa":{remarques:["1,5 V par pile alcaline : 4 piles font 6 V, 6 piles 9 V.","Environ 2 500 mAh, cinq fois une pile 9 V."]},"batterie-lithium":{remarques:["3,7 V en moyenne, 4,2 V pleine, 3,0 V vide.","Jamais en court-circuit : elle chauffe, elle peut prendre feu."]},platine:{remarques:["Les trous a à e d'une colonne sont reliés, f à j aussi ; une ligne + ou − est reliée sur sa longueur."]}},"U",0,[{id:"entree",nom:"Entrées"},{id:"capteur",nom:"Capteurs"},{id:"actionneur",nom:"Actionneurs"},{id:"afficheur",nom:"Afficheurs"},{id:"alimentation",nom:"Alimentations"},{id:"passif",nom:"Passifs"}],"M",0,s,"u",0,i,"V",0,{rouge:2,orange:2,jaune:2.1,vert:2.2,bleu:3.2,blanc:3.2},"O",0,d,"q",0,function(e,r){if(r===n.G)return a.v[e.carte].bornes.map(e=>e.nom);let t=e.composants.find(e=>e.id===r);return t?d(t):[]},"g",0,u,"x",0,function(e,r,t,a){return{id:r,repere:t,position:a,rotation:0,sorte:e,...{potentiometre:{valeur:1e4},dht:{modele:"DHT11"},bmp280:{adresse:118},hx711:{portee:5},mpu6050:{adresse:104},ina219:{adresse:64},led:{couleur:"rouge"},"led-rgb":{commun:"cathode"},ws2812:{nombre:8},buzzer:{actif:!0},servomoteur:{impulsion0:500,impulsion180:2400},lcd:{adresse:39},oled:{adresse:60},"sept-segments":{commun:"cathode"},resistance:{valeur:220},alimentation:{tension:5},platine:{taille:"demi"},acs712:{calibre:5},"usb-pc":{port:"usb2"},"bloc-usb":{courant:2},"batterie-usb":{capacite:1e4},"bloc-jack":{tension:9},"pile-9v":{raccord:"jack"},"piles-aa":{nombre:4},"batterie-lithium":{forme:"lipo",capacite:1e3}}[e]??{}}},"Z",0,function(e,t,a){return`${(0,r.Y)(f(e,t))} ${(0,r.a)(f(e,a))}`},"o",0,function(e){let r=s[e.sorte].nom,a=r.charAt(0).toUpperCase()+r.slice(1);switch(e.sorte){case"resistance":case"potentiometre":return`${a} ${g(e.valeur)}`;case"led":return`${a} ${e.couleur}`;case"led-rgb":case"sept-segments":return`${a} \xe0 ${e.commun} commune`;case"ws2812":return`${a} (${e.nombre})`;case"buzzer":return`${a} ${e.actif?"actif":"passif"}`;case"servomoteur":return`${a} (${(0,t.f)(e.impulsion0)} \xb5s \xe0 0\xb0, ${(0,t.f)(e.impulsion180)} \xb5s \xe0 180\xb0)`;case"dht":return`Capteur de temp\xe9rature et d'humidit\xe9 ${e.modele}`;case"hx711":return`Capteur de force ${(0,t.f)(e.portee)} kg (HX711)`;case"acs712":return`${a}, calibre ${e.calibre} A`;case"bmp280":case"mpu6050":case"ina219":case"lcd":case"oled":return`${a}, adresse 0x${e.adresse.toString(16).toUpperCase()}`;case"alimentation":return`${a} ${(0,t.f)(e.tension,2)} V`;case"usb-pc":return`${a}, port ${"usb2"===e.port?"USB 2.0 (500 mA)":"USB 3 (900 mA)"}`;case"bloc-usb":return`${a} 5 V, ${(0,t.f)(e.courant,1)} A`;case"batterie-usb":return`${a} ${(0,t.f)(e.capacite)} mAh`;case"bloc-jack":return`${a} ${(0,t.f)(e.tension,1)} V`;case"pile-9v":return`${a}, coupleur ${"jack"===e.raccord?"à fiche jack":"à fils"}`;case"piles-aa":return`${a} (${e.nombre} piles, ${(0,t.f)(1.5*e.nombre,1)} V)`;case"batterie-lithium":return`${a} ${"lipo"===e.forme?"LiPo":"18650"}, ${(0,t.f)(e.capacite)} mAh`;case"platine":return`${a} (${"demi"===e.taille?"demi-platine, 30 colonnes":"pleine, 63 colonnes"})`;default:return a}},"D",0,m,"v",0,h,"G",0,function(e){return`la carte ${e.nom}`},"w",0,f,"W",0,p,"n",0,g,"_",0,function(e,r){let t=s[r].prefixe;if(!t)return"";let a=new Set(e.composants.map(e=>e.repere.trim())),n=1;for(;a.has(`${t}${n}`);)n+=1;return`${t}${n}`}])},89897,73002,e=>{"use strict";var r=e.i(41083),t=e.i(45410),a=e.i(20759),n=e.i(75379),s=e.i(93807);let i="#c62828",l="#1d1f22",o=e=>`url(#${e.p}metal)`;function u(e,r,t,a,n,s="#2b2f33",i=1.3){let l=(r+a)/2;e.chemin(`M${r} ${t}C${l} ${t} ${l} ${n} ${a} ${n}`,{trait:s,epaisseur:i,bouts:"round"})}function c(e,r,t){e.rect(r-7,t-2.1,4,4.2,"#3a3f45",{rayon:.6}),e.rect(r-3.2,t-1.4,3.2,2.8,o(e),{trait:"#6f7780",epaisseur:.12,rayon:.25}),e.rect(r-2.6,t-.5,2.2,1,"#2a2d31",{rayon:.15})}function d(e,r,t){e.rect(r-8.5,t-2.3,4.5,4.6,l,{rayon:.8}),e.rect(r-4.2,t-1.6,4.2,3.2,o(e),{trait:"#6f7780",epaisseur:.12,rayon:.3}),e.rect(r-.6,t-.6,.6,1.2,"#1a1a1a")}function m(e,r,t,a,n,s,o=t,c=a){for(let[d,m,p]of(u(e,r,t,n-1.2,o,i,.9),u(e,r,a,n-1.2,c,l,.9),[["+",o,i],["-",c,l]]))e.rect(n-1.6,m-.55,1.6,1.1,"#c3c8ce",{rayon:.2}),e.texte(n-2.4,m-.9,"+"===d?"+":"−",1.2,{gras:!0,couleur:p}),s[d]={x:n,y:m}}let p=e=>`url(#${e.p}metal)`,h="#1f6fd1",f="#1d1f22",g="#c62828",b="#e8b400";function v(e,r,t,a,n,s,i){e.barretteMale(t,a,r.length,n),r.forEach((r,l)=>{let o=n?t+2.54*l:t,u=n?a:a+2.54*l;s[r]={x:o,y:u};let c=r.replace(/\.\d+$/,"");"dessus"===i?e.texte(o,u-1.8,c,.75,{gras:!0}):"dessous"===i?e.texte(o,u+2.6,c,.75,{gras:!0}):"droite"===i?e.texte(o+1.7,u+.28,c,.75,{gras:!0,ancre:"start"}):e.texte(o-1.7,u+.28,c,.75,{gras:!0,ancre:"end"})})}function x(e,r,t,a,n=!0){e.circuit(r,t,a,1,n?[{x:2.4,y:2.4,r:1.3},{x:r-2.4,y:2.4,r:1.3}]:[])}function y(e,r,t,a,n){for(let s of t){let t=(r.x+a)/2;e.chemin(`M${r.x} ${r.y}C${t} ${r.y} ${t} ${s.y} ${a-1.2} ${s.y}`,{trait:s.couleur,epaisseur:.9,bouts:"round"}),e.rect(a-1.6,s.y-.5,1.6,1,"#c3c8ce",{rayon:.2}),e.texte(a-2.4,s.y-.85,s.nom,.85,{gras:!0,ancre:"end",couleur:"#33414f"}),n[s.nom]={x:a,y:s.y}}}let D=(e,r,t,a,n,s)=>e.puce(r,t,a,n,[s],"soic"),V="#9aa3ad",S=e=>`url(#${e.p}metal)`,C=e=>`url(#${e.p}or)`;function A(e,r,t){let a=r[0],n=r[r.length-1],s=Math.min(a.x,n.x)-2.6,i=Math.min(a.y,n.y)-2.6,l=Math.abs(n.x-a.x)+5.2,o=Math.abs(n.y-a.y)+5.2;for(let a of(e.rect(s,i,l,o,"#2766c7",{trait:"#163f80",epaisseur:.15,rayon:.4}),r))t?e.rect(s+.3,a.y-2.2,l-.6,4.4,"#2f74d8",{rayon:.3}):e.rect(a.x-2.2,i+.3,4.4,o-.6,"#2f74d8",{rayon:.3}),e.rond(a.x,a.y,1.45,S(e),{trait:"#6f7780",epaisseur:.12}),e.chemin(`M${a.x-1} ${a.y+.35}L${a.x+1} ${a.y-.35}`,{trait:"#5a6168",epaisseur:.35})}function L(e,r,t,a){e.rond(r,t,a,"#1f2d44",{trait:"#0d1420",epaisseur:.12}),e.chemin(`M${r+.5*a} ${t-.866*a}A${a} ${a} 0 0 1 ${r+.5*a} ${t+.866*a}Z`,{fond:"#8597b3"}),e.rond(r,t,.72*a,"#c3c8ce",{trait:"#8c939a",epaisseur:.08}),e.chemin(`M${r-.45*a} ${t}H${r+.45*a}M${r} ${t-.45*a}V${t+.45*a}`,{trait:"#7d858d",epaisseur:.18})}function I(e,r,t){for(let a of t)e.pastille(r,a,"soudee");for(let a of t)e.rect(r,a-.32,6.4,.64,C(e));return e.rect(r+1.2,t[0]-1.27,2.6,t[t.length-1]-t[0]+2.54,"#26282c",{trait:"#111214",rayon:.2}),r+6}function w(e,r,t,a,n,s,i,l=.78){e.barretteMale(t,a,r.length,n),r.forEach((r,o)=>{let u=n?t+2.54*o:t,c=n?a:a+2.54*o;i[r]={x:u,y:c},"dessous"===s?e.texte(u,c+2.55,r,l,{gras:!0}):"dessus"===s?e.texte(u,c-1.75,r,l,{gras:!0}):e.texte(u+1.75,c+.3,r,.8,{ancre:"start",gras:!0})})}let N=["a","b","c","d","e","f","g","h","i","j"],q=e=>e<5?12.7+2.54*e:30.48+(e-5)*2.54,U=[["+haut",2.6,"#d32f2f",1.2],["-haut",5.14,"#1565c0",6.6],["-bas",49.46,"#1565c0",48],["+bas",52,"#d32f2f",53.4]];function P(e){let r=(0,a.g)(e.taille),t=10.4+(r-1)*2.54,n=[],s=e=>Math.round(1e3*e)/1e3;for(let e=1;e<=r;e+=1){let r=s(5.2+(e-1)*2.54);N.forEach((t,a)=>n.push({borne:`${t}${e}`,x:r,y:q(a)}))}for(let[e,a]of U)for(let i=0;i<r;i+=1){if(i%6==5)continue;let r=s(5.2+1.27+2.54*i);if(r>t-4)break;n.push({borne:e,x:r,y:a})}return n}function M(e,r={}){let t={};switch(e.sorte){case"fin-de-course":{let e=new s.r(20,12.4);for(let r of(e.rect(4.6,2.4,1.6,.9,"#c62828",{rayon:.2}),e.chemin("M1.8 3.2L17.4 0.9",{trait:"#7d858d",epaisseur:.95}),e.chemin("M1.8 3.2L17.4 0.9",{trait:"#e3e7ea",epaisseur:.45}),e.rond(18.1,1.1,1.15,S(e),{trait:"#6f7780",epaisseur:.12}),e.rond(18.1,1.1,.35,"#6f7780"),e.rect(0,3.2,20,6.4,"#1e2024",{trait:"#0b0c0d",rayon:.5}),e.rect(.5,3.6,19,.45,"#ffffff",{opacite:.08}),[5.6,14.4]))e.rond(r,6.4,1.25,"#0c0d0f"),e.rond(r,6.4,.85,"#e9edf1");for(let[r,a]of[["C",3],["NO",10],["NC",17]])e.rect(a-.95,9.6,1.9,2.8,S(e),{trait:"#6f7780",epaisseur:.1,rayon:.15}),e.rond(a,11.1,.4,"#5f666d"),e.texte(a,8.95,r,1,{gras:!0}),t[r]={x:a,y:12.1};return e.fin(t)}case"ldr":{let e=new s.r(5.08,10);return e.chemin("M1.27 4.6V9.6M3.81 4.6V9.6",{trait:V,epaisseur:.5}),e.rond(2.54,2.55,2.5,"#efe2c3",{trait:"#a88c5c",epaisseur:.15}),e.chemin("M0.96 1.25H4.12V1.77H0.96V2.29H4.12V2.81H0.96V3.33H4.12V3.85H0.96",{trait:"#c4672c",epaisseur:.28}),e.rond(2.54,2.55,2.5,"none",{trait:"#ffffff",epaisseur:.2,opacite:.5}),e.rond(1.7,1.55,.6,"#ffffff",{opacite:.35}),t["1"]={x:1.27,y:9.6},t["2"]={x:3.81,y:9.6},e.fin(t)}case"lm35":case"tmp36":{let r=new s.r(5.6,10);r.chemin("M1.53 4.5V5.3L0.26 7.1V9.8M2.8 4.5V9.8M4.07 4.5V5.3L5.34 7.1V9.8",{trait:V,epaisseur:.42}),r.chemin("M0.3 4.7V1.5C0.3 0.6 1 0 1.9 0H3.7C4.6 0 5.3 0.6 5.3 1.5V4.7Z",{fond:"#1f2125",trait:"#000000",epaisseur:.1}),r.rect(.75,.6,4.1,3.7,"#2a2d32",{rayon:.3});let[a,n]="lm35"===e.sorte?["LM35","DZ"]:["TMP36","GZ"];return r.texte(2.8,2.2,a,.82,{couleur:"#a5abb2",gras:!0}),r.texte(2.8,3.3,n,.7,{couleur:"#a5abb2"}),t["+Vs"]={x:.26,y:9.8},t.Vout={x:2.8,y:9.8},t.GND={x:5.34,y:9.8},r.fin(t)}case"bmp280":{let e=new s.r(15.2,11.6);return e.circuit(15.2,11.6,"#5c2d91",.8,[{x:12.7,y:8.6,r:1.5}]),w(e,["VCC","GND","SCL","SDA","CSB","SDO"],1.27,1.35,!0,"dessous",t),e.rect(5.4,6.2,2.5,2,S(e),{trait:"#6f7780",epaisseur:.1,rayon:.15}),e.rond(6,6.7,.18,"#4c5258"),e.cms(2.2,7.6,"r",!0),e.cms(3.6,7.6,"r",!0),e.cms(9.8,7.2,"c",!0),e.texte(6.7,10.6,"GY-BMP280",.8,{gras:!0}),e.fin(t)}case"obstacle-ir":{let e=new s.r(31,14.5);e.circuit(31,14.5,"#1f5fbf",.8,[{x:16,y:12.2,r:1.3}]),e.chemin("M2.2 3.4H4.4M2.2 4.6H4.4M2.2 9.9H4.4M2.2 11.1H4.4",{trait:V,epaisseur:.4}),e.rect(-4.2,2.5,6.8,3,"#dbe6f2",{trait:"#9fb2c6",epaisseur:.12,rayon:1.5}),e.rect(-3.4,3.1,1.2,1.8,"#7d8792",{rayon:.3,opacite:.7}),e.rect(-4.2,9,6.8,3,"#1d1f23",{trait:"#000000",epaisseur:.12,rayon:1.5}),e.rect(-3.6,9.4,4.6,.5,"#ffffff",{opacite:.15,rayon:.25}),e.rect(8.4,3.6,6.4,6.4,"#2f6fd1",{trait:"#1d4d99",rayon:.4}),e.rond(11.6,6.8,1.75,"#e0c879",{trait:"#8a6d25",epaisseur:.12}),e.chemin("M10.5 6.8H12.7M11.6 5.7V7.9",{trait:"#8a6d25",epaisseur:.4}),e.puce(16.4,4.4,4.9,3.9,["LM393"],"soic"),e.led(22.6,3.4,"#ff2a2a",!0),e.led(22.6,10.6,"#3ddc5a",!!r.allume),e.cms(18,10.6,"r"),e.cms(20,1.6,"r"),e.cms(9.5,11.6,"c");let a=[4.46,7,9.54];["VCC","GND","OUT"].forEach((r,t)=>e.texte(26.2,a[t]+.3,r,.8,{ancre:"end",gras:!0}));let n=I(e,27.4,a);return["VCC","GND","OUT"].forEach((e,r)=>t[e]={x:n,y:a[r]}),e.fin(t)}case"suiveur-ligne":{let e=new s.r(32,14);e.circuit(32,14,"#1f5fbf",.8,[{x:14.4,y:11.8,r:1.3}]),e.rect(1,2,5.8,10,"#1b1c1f",{trait:"#000000",epaisseur:.12,rayon:.4}),e.rond(3.9,4.6,1.7,"#3466d6",{trait:"#1d3f86",epaisseur:.12}),e.rond(3.9,9.4,1.7,"#2a2c31",{trait:"#000000",epaisseur:.12}),e.rond(3.4,4.1,.5,"#ffffff",{opacite:.35}),e.rond(3.4,8.9,.5,"#ffffff",{opacite:.2}),e.rect(8.6,1.6,6.4,6.4,"#2f6fd1",{trait:"#1d4d99",rayon:.4}),e.rond(11.8,4.8,1.75,"#e0c879",{trait:"#8a6d25",epaisseur:.12}),e.chemin("M10.7 4.8H12.9M11.8 3.7V5.9",{trait:"#8a6d25",epaisseur:.4}),e.puce(17,5,4.9,3.9,["LM393"],"soic"),e.led(23.6,2.6,"#ff2a2a",!0),e.led(23.6,11.4,"#3ddc5a",!!r.allume),e.cms(9.8,10.6,"r"),e.cms(19.4,11.4,"c");let a=[3.19,5.73,8.27,10.81],n=["VCC","GND","DO","AO"];n.forEach((r,t)=>e.texte(27.2,a[t]+.3,r,.8,{ancre:"end",gras:!0}));let i=I(e,28.4,a);return n.forEach((e,r)=>t[e]={x:i,y:a[r]}),e.fin(t)}case"as5600":{let e=new s.r(23,23);return e.circuit(23,23,"#3949ab",1,[{x:3,y:20,r:1.4},{x:20,y:20,r:1.4}]),w(e,["VCC","GND","SDA","SCL","DIR","OUT","GPO"],3.88,1.4,!0,"dessous",t),e.puce(9,10.5,5,4,["AS5600"],"soic"),e.brut('<circle cx="11.5" cy="12.5" r="4.2" fill="none" stroke="#f6c453" stroke-width="0.25" stroke-dasharray="0.8 0.6"/>'),e.texte(11.5,18.4,"aimant",.75,{couleur:"#f6c453"}),e.cms(5.6,9.6,"c",!0),e.cms(17.4,9.6,"c",!0),e.cms(6.6,15.8,"r"),e.cms(16.4,15.8,"r"),e.texte(11.5,21.6,"AS5600",.9,{gras:!0}),e.fin(t)}case"effet-hall":{let e=new s.r(18,15);return e.circuit(18,15,"#1d1e21",.8,[{x:2.5,y:2.5,r:1.3}]),e.chemin("M10.6 4.4V6.4M12.1 4.4V6.4M13.6 4.4V6.4",{trait:V,epaisseur:.4}),e.rect(9.9,.6,4.4,3.8,"#222326",{trait:"#000000",epaisseur:.1,rayon:.3}),e.texte(12.1,2.2,"3144",.75,{couleur:"#a5abb2",gras:!0}),e.texte(12.1,3.3,"EUA",.6,{couleur:"#a5abb2"}),e.led(4.2,7.2,"#ff2a2a",!0),e.led(4.2,9.6,"#ff2a2a",!!r.allume),e.cms(8,8.4,"r"),e.cms(14.6,8.4,"r"),w(e,["VCC","GND","OUT"],6.46,13.6,!0,"dessus",t),e.fin(t)}case"ws2812":{let a=Math.min(e.nombre,8),n=6.9+(a-1)*6.2+5.9,i=new s.r(n,10);i.circuit(n,10,"#1b1c1f",.6);let l=[2.46,5,7.54];["5V","DIN","GND"].forEach((e,r)=>{i.pastille(1.3,l[r],"nue",{carree:!0}),i.texte(2.35,l[r]+.22,e,.6,{ancre:"start",gras:!0})}),["5V","DO","GND"].forEach((e,r)=>{i.pastille(n-1.3,l[r],"nue",{carree:!0}),i.texte(n-2.35,l[r]+.22,e,.6,{ancre:"end",gras:!0})});for(let e=0;e<a;e+=1){let t=6.9+6.2*e;i.ledRvb(t,5,5,r.pixels?.[e]??null),e<a-1&&i.cms(t+3.1,5,"c",!0)}return t["5V"]={x:1.3,y:l[0]},t.DIN={x:1.3,y:l[1]},t.GND={x:1.3,y:l[2]},t.DOUT={x:n-1.3,y:l[1]},e.nombre>a&&i.texte(n/2,12.2,`${e.nombre} LED en tout : les ${a} premi\xe8res dessin\xe9es`,1.1,{couleur:"#33414f"}),i.fin(t)}case"moteur-cc":{let e=new s.r(63.5,22.4);for(let r of(e.rect(0,0,37,22.4,"#f2c230",{trait:"#b8901d",epaisseur:.2,rayon:1.2}),e.rect(1.2,1.2,34.6,20,"#f5ca3f",{rayon:.8}),[5.4,17]))e.rond(28.5,r,1.6,"#c99a1a"),e.rond(28.5,r,1.05,"#f7f3e6");e.rond(11.5,11.2,4.2,"#e8b520",{trait:"#b8901d",epaisseur:.15});let a=r.angle??0;for(let r of(e.brut(`<g transform="rotate(${a} 11.5 11.2)"><path d="M10.2 9.0H12.8V13.4H10.2Z" fill="#f7f7f5" stroke="#b9bfc5" stroke-width="0.12"/><path d="M9.3 10.4H13.7V12.0H9.3Z" fill="#f7f7f5" stroke="#b9bfc5" stroke-width="0.12"/></g>`),e.rect(37,2,20,18.4,S(e),{trait:"#78808a",epaisseur:.15,rayon:1}),[6,11.2,16.4]))e.chemin(`M38 ${r}H56`,{trait:"#ffffff",epaisseur:.12,opacite:.4});for(let[r,a]of(e.rect(57,3,3,16.4,"#2a2c30",{rayon:1}),[["1",6.2],["2",16.2]]))e.rect(59.6,a-.9,3.4,1.8,"#d9b85a",{trait:"#8a6d25",epaisseur:.08,rayon:.3}),e.rond(62.2,a,.4,"#5f4a18"),t[r]={x:62.6,y:a};return e.fin(t)}case"pont-h":{let e=new s.r(43,43);e.circuit(43,43,"#b71c1c",1.2,[{x:2.8,y:2.8,r:1.5},{x:40.2,y:2.8,r:1.5}]),e.rect(12.5,.5,18,21,"#1c1d20",{trait:"#000000",epaisseur:.12,rayon:.4});for(let r=0;r<9;r+=1)e.rect(13.2+1.95*r,1,.9,20,"#2d2f34",{rayon:.2});e.rect(14,21.5,15,2.6,"#222326",{rayon:.2});for(let r=0;r<15;r+=1)e.rect(14.4+.97*r,24.1,.4,1.3,"#c3c8ce");for(let[r,a,n]of(e.texte(21.5,23.3,"L298N",.9,{couleur:"#a5abb2",gras:!0}),L(e,8.5,28.5,3.2),L(e,34.5,28.5,3.2),e.sot223(18.8,28.6),e.led(28,32.4,"#ff2a2a",!0),e.cms(25,29,"r",!0),e.cms(14,31,"c",!0),e.texte(28.5,27.6,"L298N",1.5,{gras:!0}),A(e,[{x:2.6,y:15},{x:2.6,y:20}],!0),A(e,[{x:40.4,y:15},{x:40.4,y:20}],!0),A(e,[{x:4,y:40.4},{x:9,y:40.4},{x:14,y:40.4}],!1),[["OUT1",2.6,15],["OUT2",2.6,20],["OUT3",40.4,15],["OUT4",40.4,20],["12V",4,40.4],["GND",9,40.4],["5V",14,40.4]]))t[r]={x:a,y:n};return e.texte(6,15.35,"OUT1",.85,{ancre:"start",gras:!0}),e.texte(6,20.35,"OUT2",.85,{ancre:"start",gras:!0}),e.texte(37,15.35,"OUT3",.85,{ancre:"end",gras:!0}),e.texte(37,20.35,"OUT4",.85,{ancre:"end",gras:!0}),e.texte(4,37,"+12V",.8,{gras:!0}),e.texte(9,37,"GND",.8,{gras:!0}),e.texte(14,37,"+5V",.8,{gras:!0}),w(e,["ENA","IN1","IN2","IN3","IN4","ENB"],22,40.6,!0,"dessus",t),e.fin(t)}case"moteur-pas-a-pas":{let e=new s.r(57,30);for(let r of(e.rect(.5,11.5,42,7,S(e),{trait:"#78808a",epaisseur:.15,rayon:3.5}),[4,39]))e.rond(r,15,2.1,"#5f666d"),e.rond(r,15,1.7,"#e9edf1");return e.rect(33.5,11,6.5,8,"#2f63c9",{trait:"#1f468f",epaisseur:.12,rayon:.8}),e.rond(21.5,15,14,S(e),{trait:"#78808a",epaisseur:.2}),e.rond(21.5,15,11.5,"none",{trait:"#ffffff",epaisseur:.25,opacite:.5}),e.rond(21.5,7,4.4,"#c9ced3",{trait:"#78808a",epaisseur:.15}),e.brut(`<g transform="rotate(${r.angle??0} 21.5 7)"><circle cx="21.5" cy="7" r="2.5" fill="#d4b46a" stroke="#8a6d25" stroke-width="0.12"/><path d="M19.6 6.2H23.4M19.6 7.8H23.4" stroke="#8a6d25" stroke-width="0.25"/></g>`),["#1f5fd1","#f08cc0","#f2c230","#f08a24","#d32f2f"].forEach((r,t)=>{let a=12.6+1.2*t,n=11.4+1.8*t;e.chemin(`M40 ${a}C45 ${a} 47 ${n} 52 ${n}`,{trait:r,epaisseur:.75})}),e.rect(52,9.6,4.6,10.8,"#f3efe4",{trait:"#bdb293",epaisseur:.12,rayon:.4}),e.rect(52.8,10.4,1.4,9.2,"#d9d1bb",{rayon:.2}),t.prise={x:56.2,y:15},e.fin(t)}case"driver-pas-a-pas":{let e=new s.r(35,32);e.circuit(35,32,"#1f7a3a",1,[{x:2.4,y:2.4,r:1.4},{x:32.6,y:2.4,r:1.4},{x:2.4,y:29.6,r:1.4}]),w(e,["IN1","IN2","IN3","IN4"],1.4,9,!1,"droite",t),e.rect(14.8,.6,12.4,5.8,"#f3efe4",{trait:"#bdb293",epaisseur:.12,rayon:.4}),e.rect(15.5,1.2,11,2.6,"#d9d1bb",{rayon:.2});for(let r=0;r<5;r+=1)e.rect(16.1+2.5*r-.3,4.4,.6,.6,"#c3c8ce");return t.moteur={x:21,y:3.4},e.rect(7,11.4,20.3,7.6,"#2a2b2f",{rayon:.3}),e.puce(7.5,12,19.3,6.4,["ULN2003APG"],"dip"),["A","B","C","D"].forEach((t,a)=>{var n,s;n=9+4*a,(s=!!r.segments?.[a])&&e.lueur(n,24,2.6,"#ff3b3b",.85),e.rond(n,24,1.6,s?"#ff3b3b":"#f0d4d4",{trait:"#a35a5a",epaisseur:.1,opacite:s?1:.9}),e.rond(n-.45,23.55,.45,"#ffffff",{opacite:.6}),e.texte(9+4*a,27,t,.85,{gras:!0})}),e.cms(28.4,13,"c",!0),e.cms(30.4,13,"r",!0),e.barretteMale(28.5,30.5,2),t["-"]={x:28.5,y:30.5},t["+"]={x:31.04,y:30.5},e.texte(28.5,28.5,"−",1.1,{gras:!0}),e.texte(31.04,28.5,"+",1.1,{gras:!0}),e.texte(29.8,26.6,"5-12V",.75),e.barretteMale(21,30.5,2),e.rect(19.6,29,5,3,"#1c1d20",{trait:"#000000",epaisseur:.1,rayon:.3}),e.texte(22.3,28.3,"ON",.75,{gras:!0}),e.fin(t)}case"relais":{let e=new s.r(50,26);for(let[a,n]of(e.circuit(50,26,"#1f5fbf",1,[{x:3.2,y:3.2,r:1.4},{x:3.2,y:22.8,r:1.4}]),w(e,["VCC","GND","IN"],1.4,10.46,!1,"droite",t),e.sot23(8,5.8,3),e.cms(11.6,6.6,"r"),e.rect(8.4,15.4,3.4,1.6,"#1c1d1f",{rayon:.15}),e.rect(8.9,15.4,.5,1.6,"#c3c8ce"),e.led(8.6,20.6,"#ff2a2a",!0),e.led(12,20.6,"#3ddc5a",!!r.allume),e.rect(15.5,5,19.2,15.6,"#2a6fd1",{trait:"#1a4a96",epaisseur:.15,rayon:.6}),e.rect(16.2,5.7,17.8,14.2,"#3079de",{rayon:.4}),e.texte(25.1,9.2,"SRD-05VDC-SL-C",1,{gras:!0}),["10A 250VAC  10A 125VAC","10A 30VDC  10A 28VDC"].forEach((r,t)=>e.texte(25.1,12.4+1.5*t,r,.72)),A(e,[{x:46.1,y:6.5},{x:46.1,y:13},{x:46.1,y:19.5}],!0),[["NO",6.5],["COM",13],["NC",19.5]]))t[a]={x:46.1,y:n},e.texte(42.6,n+.3,a,.85,{ancre:"end",gras:!0});return e.fin(t)}case"oled":{let e=new s.r(27,27.3);return e.circuit(27,27.3,"#1b4fa3",1,[{x:2,y:2,r:1},{x:25,y:2,r:1},{x:2,y:25.3,r:1},{x:25,y:25.3,r:1}]),w(e,["GND","VCC","SCL","SDA"],9.69,1.4,!0,"dessous",t),e.rect(.4,5.2,26.2,19.2,"#0b0c10",{trait:"#000000",epaisseur:.12,rayon:.3}),e.rect(2.6,7.4,21.8,10.9,"#05060a"),r.texte&&r.texte.split("\n").slice(0,4).forEach((r,t)=>e.texte(3.2,9.4+2.6*t,r.slice(0,21),1.7,{ancre:"start",couleur:"#e8f1ff"})),e.chemin("M2 5.2L9 5.2L4 24.4H0.4V20Z",{fond:"#ffffff",opacite:.04}),e.rect(9.5,24.4,8,2.4,"#c98a3c",{rayon:.2}),e.fin(t)}case"alimentation":{let r=new s.r(30,20);for(let[a,n,s]of(r.rect(0,0,30,20,"#3a4047",{trait:"#1e2328",epaisseur:.2,rayon:1.2}),r.rect(1,1,28,18,"#474e56",{rayon:.8}),r.rect(2.4,3.4,16.4,8.2,"#0f1a12",{trait:"#05080a",epaisseur:.12,rayon:.4}),r.texte(15.8,9.4,e.tension.toFixed(2).replace(".",","),4.2,{ancre:"end",couleur:"#57e389",gras:!0}),r.texte(16.4,9.4,"V",1.6,{ancre:"start",couleur:"#57e389",gras:!0}),r.texte(10.6,15.6,"alimentation",1.2,{couleur:"#c9d1d9"}),[["+",6,"#c62828"],["-",14,"#22252b"]]))r.rond(25.4,n,2.5,s,{trait:"#000000",epaisseur:.15}),r.rond(25.4,n,1.6,"none",{trait:"#ffffff",epaisseur:.15,opacite:.25}),r.rond(25.4,n,.85,"#c3c8ce",{trait:"#5f666d",epaisseur:.1}),r.texte(21.6,n+.55,"+"===a?"+":"−",1.6,{gras:!0,couleur:"#f4f6f8"}),t[a]={x:25.4,y:n};return r.fin(t)}case"ina219":{let e=new s.r(25.4,23.4);for(let[r,t]of(e.circuit(25.4,23.4,"#5c2d91",1,[{x:2.6,y:2.6,r:1.4},{x:22.8,y:2.6,r:1.4}]),A(e,[{x:10.2,y:4.2},{x:15.2,y:4.2}],!1),e.texte(10.2,8.7,"VIN+",.8,{gras:!0}),e.texte(15.2,8.7,"VIN−",.8,{gras:!0}),e.rect(6,10.4,6.4,3.2,"#c3c8ce",{rayon:.15}),e.rect(6.6,10.4,5.2,3.2,"#1c1d1f"),e.texte(9.2,12.4,"R100",.9,{gras:!0}),e.puce(15,10.2,4.9,3.9,["INA219"],"soic"),[["A0",11.2],["A1",13.6]]))e.rect(2,t-.55,.9,1.1,C(e)),e.rect(3.2,t-.55,.9,1.1,C(e)),e.texte(1.8,t+.3,r,.7,{ancre:"end",gras:!0});return e.cms(22,11.2,"c",!0),e.cms(22,14,"r",!0),w(e,["VCC","GND","SCL","SDA","VIN-","VIN+"],6.35,21.9,!0,"dessus",t),e.fin(t)}case"vl53l0x":{let e=new s.r(25,13);return e.circuit(25,13,"#5c2d91",1,[{x:2.6,y:3.6,r:1.4},{x:22.4,y:3.6,r:1.4}]),e.rect(10.3,1.6,4.4,2.4,"#1b1c1f",{trait:"#000000",epaisseur:.1,rayon:.3}),e.rond(11.4,2.8,.55,"#3a2f4a",{trait:"#6b5a80",epaisseur:.08}),e.rond(13.6,2.8,.55,"#2a2f3a",{trait:"#5a6a80",epaisseur:.08}),e.rond(11.25,2.65,.18,"#ffffff",{opacite:.4}),e.texte(12.5,5.6,"VL53L0X",.7,{gras:!0}),e.sot23(5,5),e.cms(17.6,5.6,"c",!0),e.cms(19.4,5.6,"r",!0),w(e,["VIN","GND","SCL","SDA","GPIO1","XSHUT"],6.15,11.4,!0,"dessus",t,.6),e.fin(t)}case"platine":{let r=(0,a.g)(e.taille),n=10.4+(r-1)*2.54,i=new s.r(n,54.6);i.rect(0,0,n,54.6,"#f3f1ea",{trait:"#cfcabb",epaisseur:.3,rayon:1.2}),i.rect(0,26.2,n,2.6,"#e3e0d6"),i.chemin(`M0 26.2H${n}M0 28.8H${n}`,{trait:"#d3cfc2",epaisseur:.12});let l=P(e);for(let e of l)t[e.borne]||(t[e.borne]={x:e.x,y:e.y});for(let e=1;e<=r;e+=1){if(1!==e&&e%5!=0)continue;let r=5.2+(e-1)*2.54;i.texte(r,9.6,String(e),1.1,{couleur:"#8a8677"}),i.texte(r,45.4,String(e),1.1,{couleur:"#8a8677"})}for(let[e,r,t,a]of(N.forEach((e,r)=>{i.texte(2.4,q(r)+.4,e,1.1,{couleur:"#8a8677"}),i.texte(n-2.4,q(r)+.4,e,1.1,{couleur:"#8a8677"})}),U))i.chemin(`M5.2 ${a}H${n-5.2}`,{trait:t,epaisseur:.35}),i.texte(1.6,r+.45,"+"===e[0]?"+":"−",1.6,{couleur:t,gras:!0});return i.brut(l.map(e=>{let r,t;return r=e.x,t=e.y,`<rect x="${r-.5}" y="${t-.5}" width="1" height="1" rx="0.12" fill="#3b3b3b"/><rect x="${r-.3}" y="${t-.3}" width="0.6" height="0.6" fill="#1e1e1e"/>`}).join("")),i.fin(t)}default:return function(e){let r={};switch(e.sorte){case"usb-pc":{let t=new s.r(44,22);return t.rect(1,.5,24,15,"#2b2f36",{rayon:1}),t.rect(2.2,1.7,21.6,12.4,"#3d6ea8",{rayon:.4}),t.rect(2.2,1.7,21.6,4,"#ffffff",{opacite:.08}),t.texte(13,9.6,"PC",3.6,{gras:!0,couleur:"#e8f1fb"}),t.chemin("M0 15.5H26L28 19H-0Z",{fond:"#c9ced4",trait:"#8a929b",epaisseur:.15}),t.rect(23.4,16.2,2.4,1.2,"#1d1f22",{rayon:.15}),t.texte(13,21.6,"usb2"===e.port?"USB 2.0 : 500 mA":"USB 3 : 900 mA",1.5,{gras:!0,couleur:"#33414f"}),u(t,26,16.8,37,10),c(t,44,10),r.fiche={x:44,y:10},t.fin(r)}case"bloc-usb":{let t=new s.r(38,20);return t.rect(0,5.6,2.4,1.3,o(t),{rayon:.3}),t.rect(0,13.1,2.4,1.3,o(t),{rayon:.3}),t.rect(2.2,1,18,18,"#f3f4f6",{trait:"#b9c0c8",epaisseur:.2,rayon:2}),t.texte(11.2,8.6,"5 V",3,{gras:!0,couleur:"#33414f"}),t.texte(11.2,12.6,`${(0,n.f)("bloc-usb"===e.sorte?e.courant:0,1)} A`,2.4,{gras:!0,couleur:"#33414f"}),t.texte(11.2,16.4,"secteur 230 V",1.1,{couleur:"#6b7d8f"}),u(t,20.2,10,31,10),c(t,38,10),r.fiche={x:38,y:10},t.fin(r)}case"batterie-usb":{let t=new s.r(40,18);t.rect(0,1,28,16,"#26292e",{trait:"#111",epaisseur:.2,rayon:2.4}),t.rect(1,2,26,4,"#ffffff",{opacite:.05,rayon:1.4});for(let e=0;e<4;e+=1)t.rond(4+2.2*e,13.6,.55,"#3fa9ff",{opacite:.9});return t.texte(14,7.6,`${(0,n.f)("batterie-usb"===e.sorte?e.capacite:0)} mAh`,2.2,{gras:!0,couleur:"#e8eef4"}),t.texte(14,10.6,"5 V 2,1 A",1.4,{couleur:"#9fb3c8"}),t.rect(26.6,7.6,1.6,2.8,"#111",{rayon:.2}),u(t,28.2,9,33,9),c(t,40,9),r.fiche={x:40,y:9},t.fin(r)}case"bloc-jack":{let t=new s.r(44,20);return t.rect(0,5.6,2.4,1.3,o(t),{rayon:.3}),t.rect(0,13.1,2.4,1.3,o(t),{rayon:.3}),t.rect(2.2,1,19,18,"#2a2d31",{trait:"#111",epaisseur:.2,rayon:1.6}),t.texte(11.7,8.2,`${(0,n.f)("bloc-jack"===e.sorte?e.tension:0,1)} V`,3.2,{gras:!0,couleur:"#e8eef4"}),t.texte(11.7,11.6,"⎓ 1 A",1.6,{couleur:"#c9d1d9"}),t.rond(11.7,15.2,1.2,"none",{trait:"#c9d1d9",epaisseur:.2}),t.rond(11.7,15.2,.35,"#c9d1d9"),t.texte(8.6,15.8,"−",1.4,{gras:!0,couleur:"#c9d1d9"}),t.texte(14.9,15.8,"+",1.4,{gras:!0,couleur:"#c9d1d9"}),u(t,21.2,10,35.5,10),d(t,44,10),r.fiche={x:44,y:10},t.fin(r)}case"pile-9v":{let t="jack"===e.raccord,a=new s.r(t?46:36,20);return a.rect(0,2,26,16,"#d9a521",{trait:"#7a5c10",epaisseur:.2,rayon:1.2}),a.rect(0,2,11,16,"#1d1f22",{rayon:1.2}),a.rect(6,2,5,16,"#1d1f22"),a.texte(5.6,11.8,"9 V",3.2,{gras:!0,couleur:"#f6d77a"}),a.texte(18.6,11,"6LR61",1.6,{gras:!0,couleur:"#3b2a05"}),a.rect(26,5,3,3.2,o(a),{rayon:.5}),a.rect(26,11.8,3,3.2,o(a),{rayon:1.6}),a.rect(28.4,4,2.6,12,l,{rayon:.6}),t?(u(a,31,10,37.5,10),d(a,46,10),r.fiche={x:46,y:10}):m(a,31,7,13,36,r),a.fin(r)}case"piles-aa":{let t="piles-aa"===e.sorte?e.nombre:4,a=6.4*t+2,i=new s.r(a+9,24);i.rect(0,0,a,24,"#1d1f22",{rayon:1.2});for(let e=0;e<t;e+=1){let r=1.2+6.4*e,t=e%2==0;i.rect(r,1.8,5.6,20.4,"#c0c6cc",{rayon:1.4}),i.rect(r,t?1.8:8,5.6,14.2,"#d33a2c",{rayon:1.4}),i.texte(r+2.8,12.6,"AA",1.5,{gras:!0,couleur:"#ffffff"}),i.texte(r+2.8,t?4.4:20.6,"+",1.4,{gras:!0,couleur:"#ffffff"})}return i.texte(a/2,23.4,`${t} \xd7 1,5 V = ${(0,n.f)(1.5*t,1)} V`,1.1,{gras:!0,couleur:"#c9d1d9"}),m(i,a,8,16,a+9,r),i.fin(r)}case"batterie-lithium":{let t="lipo"===e.forme,a="batterie-lithium"===e.sorte?e.capacite:0;if(t){let e=new s.r(36,16);return e.rect(0,1,24,14,"#b8c0c9",{trait:"#7d8791",epaisseur:.2,rayon:1.2}),e.rect(2,3,20,10,"#1f6fb5",{rayon:.6}),e.texte(12,7.4,"LiPo 3,7 V",1.8,{gras:!0,couleur:"#ffffff"}),e.texte(12,10.6,`${(0,n.f)(a)} mAh`,1.6,{couleur:"#dbe9f7"}),e.rect(24,5.6,2,4.8,"#e9e3d0",{rayon:.3}),m(e,26,7,9,36,r,6,10),e.fin(r)}let i=new s.r(46,16);return i.rect(0,1,36,14,"#1d1f22",{rayon:1}),i.rect(2,3,30,10,"#2e7d4f",{rayon:4.6}),i.rect(31,5.6,2,4.8,o(i),{rayon:.6}),i.texte(16,7.6,"18650  3,7 V",1.7,{gras:!0,couleur:"#ffffff"}),i.texte(16,10.6,`${(0,n.f)(a)} mAh`,1.5,{couleur:"#cdebd8"}),m(i,36,5.4,10.6,46,r,6,10),i.fin(r)}default:return null}}(e)??function(e,r={}){let t={};switch(e.sorte){case"inductif":case"capacitif":{let a="capacitif"===e.sorte,n=new s.r(50,16);return!function(e,r,t,a,n){e.rect(0,3,2.4,t,"#e8e2c8",{rayon:.5}),e.rect(2.4,3,r,t,p(e),{trait:"#6f7780",epaisseur:.15,rayon:.4});for(let a=0;+a<r-1;a+=1)e.chemin(`M${3+a} 3L${3.6+a} ${3+t}`,{trait:"#7d858d",epaisseur:.12});e.rect(2.4+.35*r,2.2,2.4,t+1.6,"#9aa3ad",{rayon:.4}),e.rect(2.4+.7*r,2.2,2.4,t+1.6,"#9aa3ad",{rayon:.4}),e.rect(2.4+r,3+.2*t,4,.6*t,a,{rayon:.6}),e.texte(2.4+r/2,3+t+2.2,n,1,{gras:!0,couleur:"#33414f"})}(n,a?26:22,a?10:8,"#2a2d31",a?"LJC18A3-H-Z/BX":"LJ12A3-4-Z/BX"),n.led(a?20:17,2.2,"#ff2a2a",!!r.allume),y(n,{x:a?32.4:28.4,y:8},[{nom:"BN",couleur:"#7a4a21",y:3},{nom:"BU",couleur:h,y:8},{nom:"BK",couleur:f,y:13}],50,t),n.fin(t)}case"ils":{let e=new s.r(30,8);return e.chemin("M0 4H6M24 4H30",{trait:"#9aa3ad",epaisseur:.6}),e.rect(6,1.6,18,4.8,"#dfeef8",{trait:"#9ab8cc",epaisseur:.15,rayon:2.4,opacite:.85}),e.chemin(`M6 4H${r.allume?15.2:14.6}M24 4H${r.allume?14.8:15.4}`,{trait:"#8a6d2a",epaisseur:.5}),r.allume||e.chemin("M15.4 4L14.6 3.4",{trait:"#8a6d2a",epaisseur:.5}),t["1"]={x:0,y:4},t["2"]={x:30,y:4},e.texte(15,7.8,"ILS",1,{gras:!0,couleur:"#33414f"}),e.fin(t)}case"fourche-optique":{let e=new s.r(22,26);return x(e,22,26,"#1f5fbf"),e.rect(6,1,4,10,"#1d1f22",{rayon:.4}),e.rect(12,1,4,10,"#1d1f22",{rayon:.4}),e.rect(10,1,2,10,"#ffffff",{opacite:.15}),D(e,6.5,13,9,3.6,"LM393"),e.led(4,18.6,"#ff2a2a",!0),e.led(18,18.6,"#3ddc5a",!!r.allume),v(e,["VCC","GND","DO","AO"],7.2,23.6,!0,t,"dessus"),e.fin(t)}case"ds18b20":{let e=new s.r(46,12);return e.rect(0,3.5,24,5,p(e),{trait:"#6f7780",epaisseur:.15,rayon:2.5}),e.rect(23,4,3,4,"#1d1f22",{rayon:.6}),e.texte(12,10.8,"DS18B20",1.1,{gras:!0,couleur:"#33414f"}),y(e,{x:26,y:6},[{nom:"VCC",couleur:g,y:1.5},{nom:"DATA",couleur:b,y:6},{nom:"GND",couleur:f,y:10.5}],46,t),e.fin(t)}case"max6675":{let e=new s.r(40,18);return e.chemin("M0 4H10",{trait:p(e),epaisseur:1.6,bouts:"round"}),e.chemin("M10 4C14 4 13 9 16 9",{trait:"#8a6d2a",epaisseur:.9}),e.texte(5,2.4,"thermocouple K",.9,{couleur:"#33414f"}),e.rect(16,1,24,16,"#b3261e",{trait:"#7a1912",epaisseur:.15,rayon:.8}),e.rect(17,7,4,5,"#1f6fd1",{rayon:.4}),e.texte(19,14.6,"+  −",.9,{gras:!0}),D(e,23,5.2,5.6,4.6,"MAX6675"),v(e,["GND","VCC","SCK","CS","SO"],37.5,3.4,!1,t,"gauche"),e.fin(t)}case"debitmetre":{let e=new s.r(48,18);return e.rect(0,6,6,7,p(e),{rayon:.6}),e.rect(26,6,6,7,p(e),{rayon:.6}),e.rect(5,3,22,13,"#1d1f22",{rayon:3}),e.rond(16,9.5,4.6,"#2b2f33",{trait:"#3a3f45",epaisseur:.3}),e.chemin("M9 1.6H22l-1.2-1M22 1.6l-1.2 1",{trait:"#33414f",epaisseur:.3}),e.texte(16,17.6,"YF-S201",1,{gras:!0,couleur:"#33414f"}),y(e,{x:18,y:3.2},[{nom:"VCC",couleur:g,y:3},{nom:"GND",couleur:f,y:8},{nom:"signal",couleur:b,y:13}],48,t),e.fin(t)}case"pression":{let e=new s.r(46,14);return e.rect(0,4.5,5,5,"#c9a227",{rayon:.4}),e.rect(5,2,4,10,"#b08a1c",{rayon:.4}),e.rect(9,3,14,8,p(e),{trait:"#6f7780",epaisseur:.15,rayon:1}),e.rect(23,4,4,6,"#1d1f22",{rayon:.6}),e.texte(16,13.6,"0–1,2 MPa",1,{gras:!0,couleur:"#33414f"}),y(e,{x:27,y:7},[{nom:"VCC",couleur:g,y:2.5},{nom:"GND",couleur:f,y:7},{nom:"signal",couleur:b,y:11.5}],46,t),e.fin(t)}case"acs712":{let r=new s.r(31,13);return x(r,31,13,"#c62828",!1),r.rect(1,2,8,9,"#1f6fd1",{rayon:.5}),r.rond(3,4.4,1,p(r)),r.rond(3,8.6,1,p(r)),t["IP+"]={x:3,y:4.4},t["IP-"]={x:3,y:8.6},r.texte(7,4.8,"IP+",.7,{gras:!0}),r.texte(7,9,"IP−",.7,{gras:!0}),D(r,12,4.4,5,4,"ACS712"),r.texte(16,12,"acs712"===e.sorte?`${e.calibre} A`:"",.9,{gras:!0}),v(r,["VCC","OUT","GND"],28.5,3.9,!1,t,"gauche"),r.fin(t)}case"diviseur":{let e=new s.r(26,14);return x(e,26,14,"#c62828",!1),e.rect(1,2,7,10,"#1f6fd1",{rayon:.5}),e.rond(3.6,4.6,1,p(e)),e.rond(3.6,9.4,1,p(e)),t.VCC={x:3.6,y:4.6},t.GND={x:3.6,y:9.4},e.texte(7,3.2,"VCC",.6,{gras:!0}),e.texte(7,12.4,"GND",.6,{gras:!0}),e.cms(12,5,"r"),e.cms(12,9,"r"),e.texte(15.2,7.4,"0–25 V",.8,{gras:!0}),v(e,["S","+","-"],23.5,4.5,!1,t,"gauche"),e.fin(t)}case"vibration":case"son":{let a="son"===e.sorte,n=new s.r(32,15);return x(n,32,15,a?"#b3261e":"#1f5fbf",!1),a?(n.rond(4.6,7.5,4,"#c3c8ce",{trait:"#6f7780",epaisseur:.2}),n.rond(4.6,7.5,3,"#2b2f33")):(n.rect(1.6,4.6,7,5.8,"#d8dde2",{trait:"#7d858d",epaisseur:.15,rayon:.4}),n.texte(5.1,8.3,"SW-420",.7,{gras:!0,couleur:"#33414f"})),n.rect(11,2,4.6,4.6,"#1f6fd1",{rayon:.4}),n.rond(13.3,4.3,1.4,"#e8e2c8"),D(n,11,8,6,3.4,"LM393"),n.led(19.4,3,"#ff2a2a",!0),n.led(19.4,12,"#3ddc5a",!!r.allume),v(n,a?["AO","GND","+","DO"]:["VCC","GND","DO"],29.5,3.8,!1,t,"gauche"),n.fin(t)}case"couleur":{let e=new s.r(20.3,20.3);return x(e,20.3,20.3,"#1f3f7a"),e.rect(7.4,6,5.4,5.4,"#ffffff",{trait:"#c3c8ce",epaisseur:.2,rayon:.4}),e.rect(8.6,7.2,3,3,"#3a3f45"),e.led(10.1,13.4,"#ffffff",!0),v(e,["LED","INT","SDA","SCL","3V3","GND","VIN"],2.53,18.2,!0,t,"dessus"),e.fin(t)}case"clavier":{let e=new s.r(30,46);return e.rect(0,0,30,32,"#f3f4f6",{trait:"#b9c0c8",epaisseur:.2,rayon:1}),["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"].forEach((r,t)=>{let a=2+t%4*7,n=2+7.4*Math.floor(t/4);e.rect(a,n,5.6,6,/[A-D]/.test(r)?"#c62828":"#1f6fd1",{rayon:.8}),e.texte(a+2.8,n+4,r,2.2,{gras:!0,couleur:"#ffffff"})}),e.rect(6.1,32,18,9,"#d9d2bd",{rayon:.4}),v(e,["L1","L2","L3","L4","C1","C2","C3","C4"],6.1,43,!0,t,"dessus"),e.fin(t)}case"rfid":{let e=new s.r(40,60);x(e,40,60,"#1f5fbf");for(let r=0;r<4;r+=1)e.rect(4+1.6*r,6+1.6*r,32-3.2*r,34-3.2*r,"none",{trait:"#c9a227",epaisseur:.5,rayon:2});return D(e,15,43,10,6,"RC522"),v(e,["SDA","SCK","MOSI","MISO","IRQ","GND","RST","3.3V"],11.1,57.5,!0,t,"dessus"),e.fin(t)}case"nema17":{let e=new s.r(48,22);for(let[r,t]of(e.rect(0,0,22,22,"#2b2f33",{rayon:1.6}),e.rect(1.4,1.4,19.2,19.2,"#3a3f45",{rayon:1.2}),e.rond(11,11,5,p(e),{trait:"#6f7780",epaisseur:.2}),e.rond(11,11,1.4,"#9aa3ad"),[[2.6,2.6],[19.4,2.6],[2.6,19.4],[19.4,19.4]]))e.rond(r,t,.8,"#1d1f22");return e.texte(11,21.2,"NEMA 17",1,{gras:!0,couleur:"#e8eef4"}),y(e,{x:22,y:11},[{nom:"1A",couleur:f,y:3},{nom:"1B",couleur:"#2e9e44",y:8.3},{nom:"2A",couleur:g,y:13.6},{nom:"2B",couleur:h,y:19}],48,t),e.fin(t)}case"a4988":{let e=new s.r(20.3,22);e.circuit(20.3,22,"#2e7d32",.6,[]),e.rect(6.4,6,7.4,7.4,"#9aa3ad",{trait:"#6f7780",epaisseur:.15,rayon:.4});for(let r=0;r<5;r+=1)e.rect(6.8+1.4*r,6.4,.7,6.6,"#7d858d");return e.rond(10.1,16.4,1.4,"#e8e2c8",{trait:"#9aa3ad",epaisseur:.2}),e.texte(10.1,20.4,"A4988",1,{gras:!0}),v(e,["EN","MS1","MS2","MS3","RST","SLP","STEP","DIR"],1.3,1.4,!1,t,"droite"),v(e,["VMOT","GND","2B","2A","1A","1B","VDD","GND.2"],19,1.4,!1,t,"gauche"),e.fin(t)}case"motoreducteur-codeur":{let e=new s.r(50,18);return e.rect(0,7,4,4,p(e),{rayon:.4}),e.rect(4,2,12,14,"#c9a227",{trait:"#8a6d2a",epaisseur:.2,rayon:1}),e.rect(16,3,14,12,p(e),{trait:"#6f7780",epaisseur:.2,rayon:1.2}),e.rect(30,2.5,4,13,"#1f6fd1",{rayon:.6}),e.texte(23,9.8,"JGA25-370",.9,{gras:!0,couleur:"#33414f"}),y(e,{x:34,y:9},[{nom:"M1",couleur:g,y:1.5},{nom:"M2",couleur:"#f5f5f5",y:4.5},{nom:"VCC",couleur:h,y:7.5},{nom:"GND",couleur:f,y:10.5},{nom:"C1",couleur:b,y:13.5},{nom:"C2",couleur:"#2e9e44",y:16.5}],50,t),e.fin(t)}case"servo-continu":{let e=new s.r(40,14);return e.rect(0,1,23,12,"#1d1f22",{rayon:1}),e.rond(6,7,3.4,"#f3f4f6",{trait:"#b9c0c8",epaisseur:.2}),e.texte(14.8,7.8,"FS90R",1.2,{gras:!0,couleur:"#e8eef4"}),e.texte(14.8,10.2,"360°",.9,{couleur:"#c9d1d9"}),y(e,{x:23,y:7},[{nom:"signal",couleur:"#f08a24",y:2.5},{nom:"V+",couleur:g,y:7},{nom:"GND",couleur:"#7a4a21",y:11.5}],40,t),e.fin(t)}case"tb6612":{let e=new s.r(20.3,22);return e.circuit(20.3,22,"#c62828",.6,[]),D(e,6.6,8,7,5.6,"TB6612"),e.texte(10.1,18.6,"TB6612FNG",.9,{gras:!0}),v(e,["VM","VCC","GND","AO1","AO2","BO2","BO1","GND.2"],1.3,1.4,!1,t,"droite"),v(e,["PWMA","AIN2","AIN1","STBY","BIN1","BIN2","PWMB","GND.3"],19,1.4,!1,t,"gauche"),e.fin(t)}case"mosfet":{let e=new s.r(34,24);for(let[a,n,s]of(x(e,34,24,"#5c2d91"),e.rect(12,3,9,10,"#1d1f22",{rayon:.4}),e.rect(12,1,9,3,p(e),{rayon:.4}),e.texte(16.5,9.6,"IRF520",.8,{gras:!0}),e.led(16.5,16,"#ff2a2a",!!r.allume),[["V+",28,5],["V-",28,10],["VIN",28,15],["GND.2",28,20]]))e.rond(n,s,1.2,p(e),{trait:"#6f7780",epaisseur:.1}),e.texte(n-2,s+.3,a.replace(".2",""),.75,{gras:!0,ancre:"end"}),t[a]={x:n,y:s};return e.rect(25.8,2.6,4.4,19.8,"none",{trait:"#1f6fd1",epaisseur:.5,rayon:.6}),v(e,["SIG","VCC","GND"],3,9,!1,t,"droite"),e.fin(t)}case"electrovanne":{let e=new s.r(40,22);return e.rect(0,12,5,6,"#c9a227",{rayon:.4}),e.rect(19,12,5,6,"#c9a227",{rayon:.4}),e.rect(4,10,16,10,"#b08a1c",{trait:"#8a6d2a",epaisseur:.2,rayon:.8}),e.rect(6,.5,12,10,"#1d1f22",{rayon:1}),e.texte(12,6.4,"12 V",1.6,{gras:!0,couleur:"#e8eef4"}),e.chemin("M7 15H17l-1.2-1M17 15l-1.2 1",{trait:"#3b2a05",epaisseur:.3}),y(e,{x:18,y:5},[{nom:"+",couleur:g,y:3},{nom:"-",couleur:f,y:8}],40,t),e.fin(t)}case"pompe":case"ventilateur":case"electroaimant":case"solenoide":{let r=new s.r(40,22);if("pompe"===e.sorte)r.rect(0,4,22,14,"#1d1f22",{rayon:3}),r.rect(22,7,4,3,"#2b2f33"),r.rect(22,12,4,3,"#2b2f33"),r.texte(11,12.4,"pompe 12 V",1.3,{gras:!0,couleur:"#e8eef4"});else if("ventilateur"===e.sorte){r.rect(0,0,22,22,"#1d1f22",{rayon:1.6}),r.rond(11,11,9.6,"#2b2f33");for(let e=0;e<7;e+=1){let t=2*e*Math.PI/7;r.chemin(`M11 11L${11+8.6*Math.cos(t)} ${11+8.6*Math.sin(t)}`,{trait:"#4a5058",epaisseur:2.4,bouts:"round"})}r.rond(11,11,3.2,"#3a3f45"),r.texte(11,11.6,"12 V",1,{gras:!0,couleur:"#e8eef4"})}else"electroaimant"===e.sorte?(r.rect(0,3,20,16,p(r),{trait:"#6f7780",epaisseur:.2,rayon:1.4}),r.rond(0,11,.01,"none"),r.rect(-.01,7,1.2,8,"#9aa3ad"),r.texte(10,11.8,"12 V",1.6,{gras:!0,couleur:"#33414f"})):(r.rect(4,4,16,14,"#9aa3ad",{trait:"#6f7780",epaisseur:.2,rayon:.6}),r.rect(6,6,12,10,"#c9a227",{rayon:1}),r.rect(0,9,5,4,p(r),{rayon:.6}),r.texte(12,11.8,"JF-0530B",.9,{gras:!0,couleur:"#3b2a05"}));return y(r,{x:"ventilateur"===e.sorte?22:20,y:11},[{nom:"+",couleur:g,y:7},{nom:"-",couleur:f,y:15}],40,t),r.fin(t)}case"tm1637":{let e=new s.r(42,24);x(e,42,24,"#1f5fbf"),e.rect(3,4,32,14,"#1d1f22",{rayon:.6});for(let r=0;r<4;r+=1)e.texte(7.6+7.6*r+ +(r>=2),15.2,"8",9,{gras:!0,couleur:"#3a1414"});return e.rond(19.4,8.4,.5,"#3a1414"),e.rond(19.4,13,.5,"#3a1414"),v(e,["CLK","DIO","VCC","GND"],39.5,7.2,!1,t,"gauche"),e.fin(t)}case"max7219":{let e=new s.r(32,42);return x(e,32,42,"#1f5fbf",!1),e.rect(0,0,32,32,"#1d1f22",{rayon:.6}),e.matrice(2.6,2.6,8,8,3.8,()=>!1,"#ff3030"),D(e,10,33,12,3.6,"MAX7219"),v(e,["VCC","GND","DIN","CS","CLK"],10.9,39.6,!0,t,"dessus"),e.fin(t)}case"diode":{let e=new s.r(20,4);return e.chemin("M0 2H6M14 2H20",{trait:"#9aa3ad",epaisseur:.6}),e.rect(6,.6,8,2.8,"#1d1f22",{rayon:.6}),e.rect(12,.6,1.2,2.8,"#d8dde2"),t.anode={x:0,y:2},t.cathode={x:20,y:2},e.fin(t)}default:return null}}(e,r)}}e.s(["C",0,M,"n",0,P],73002);let G={__gabarit:"",toString:()=>""};function k(e,...r){let t=e[0];return r.forEach((r,a)=>{t+=function e(r){return null==r||!1===r||r===G?"":Array.isArray(r)?r.map(e).join(""):"object"==typeof r&&"__gabarit"in r?r.__gabarit:String(r)}(r)+e[a+1]}),{__gabarit:t,toString:()=>t}}function B(e,...r){return k(e,...r).__gabarit}class O{shadowRoot=null;renderRoot=null;dispatchEvent(){return!0}requestUpdate(){}addEventListener(){}removeEventListener(){}getAttribute(){return null}}let T=e=>({type:"analog",channel:e}),E=(e,r=0)=>({type:"i2c",signal:e,bus:r}),$=(e,r=0)=>({type:"spi",signal:e,bus:r}),z=(e,r=0)=>({type:"usart",signal:e,bus:r}),R=()=>({type:"power",signal:"GND"}),F=e=>({type:"power",signal:"VCC",voltage:e}),j=[" ","Spacebar"],H=k`
  <pattern id="pins-female" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
    <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
    <path
      transform="translate(1.079, 1.658) rotate(180 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.25"
    ></path>
    <path
      transform="translate(1.841, 1.658) rotate(90 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.3; fill: #fff"
    ></path>
    <path
      transform="translate(1.841, 0.896)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.15; fill: #fff"
    ></path>
    <path
      transform="translate(1.079, 0.896) rotate(270 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.35"
    ></path>
  </pattern>
`,W=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,14,17,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,30,1,1,14,16,16,15,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,7,1,1,1,1,1,7,0,17,10,31,4,31,4,4,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,30,17,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,6,4,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,17,17,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,21,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,5,7,0,28,4,4,4,0,0,0,0,0,0,0,4,4,4,7,0,0,0,0,0,1,2,4,0,0,0,0,6,6,0,0,0,0,31,16,31,16,8,4,0,0,0,31,16,12,4,2,0,0,0,8,4,6,5,4,0,0,0,4,31,17,16,12,0,0,0,31,4,4,4,31,0,0,0,8,31,12,10,9,0,0,0,2,31,18,10,2,0,0,0,0,14,8,8,31,0,0,0,15,8,15,8,15,0,0,0,0,21,21,16,12,0,0,0,0,31,0,0,0,0,31,16,20,12,4,4,2,0,16,8,4,6,5,4,4,0,4,31,17,17,16,8,4,0,0,31,4,4,4,4,31,0,8,31,8,12,10,9,8,0,2,31,18,18,18,18,9,0,4,31,4,31,4,4,4,0,0,30,18,17,16,8,6,0,2,30,9,8,8,8,4,0,0,31,16,16,16,16,31,0,10,31,10,10,8,4,2,0,0,3,16,19,16,8,7,0,0,31,16,8,4,10,17,0,2,31,18,10,2,2,28,0,0,17,17,18,16,8,6,0,0,30,18,21,24,8,6,0,8,7,4,31,4,4,2,0,0,21,21,21,16,8,4,0,14,0,31,4,4,4,2,0,2,2,2,6,10,2,2,0,4,4,31,4,4,2,1,0,0,14,0,0,0,0,31,0,0,31,16,10,4,10,1,0,4,31,8,4,14,21,4,0,8,8,8,8,8,4,2,0,0,4,8,17,17,17,17,0,1,1,31,1,1,1,30,0,0,31,16,16,16,8,6,0,0,2,5,8,16,16,0,0,4,31,4,4,21,21,4,0,0,31,16,16,10,4,8,0,0,14,0,14,0,14,16,0,0,4,2,1,17,31,16,0,0,16,16,10,4,10,1,0,0,31,2,31,2,2,28,0,2,2,31,18,10,2,2,0,0,14,8,8,8,8,31,0,0,31,16,31,16,16,31,0,14,0,31,16,16,8,4,0,9,9,9,9,8,4,2,0,0,4,5,5,21,21,13,0,0,1,1,17,9,5,3,0,0,31,17,17,17,17,31,0,0,31,17,17,16,8,4,0,0,3,0,16,16,8,7,0,4,9,2,0,0,0,0,0,7,5,7,0,0,0,0,0,0,0,18,21,9,9,22,0,10,0,14,16,30,17,30,0,0,0,14,17,15,17,15,1,0,0,14,1,6,17,14,0,0,0,17,17,17,25,23,1,0,0,30,5,9,17,14,0,0,0,12,18,17,17,15,1,0,0,30,17,17,17,30,16,0,0,28,4,4,5,2,0,0,8,11,8,0,0,0,0,8,0,12,8,8,8,8,8,0,5,2,5,0,0,0,0,0,4,14,5,21,14,4,0,2,2,7,2,7,2,30,0,14,0,13,19,17,17,17,0,10,0,14,17,17,17,14,0,0,0,13,19,17,17,15,1,0,0,22,25,17,17,30,16,0,14,17,31,17,17,14,0,0,0,0,26,21,11,0,0,0,0,14,17,17,10,27,0,10,0,17,17,17,17,25,22,31,1,2,4,2,1,31,0,0,0,31,10,10,10,25,0,31,0,17,10,4,10,17,0,0,0,17,17,17,17,30,16,0,16,15,4,31,4,4,0,0,0,31,2,30,18,17,0,0,0,31,21,31,17,17,0,0,4,0,31,0,4,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31]),_={green:"#6cb201",blue:"#000eff"},X={red:"#ff8080",green:"#80ff80",blue:"#8080ff",yellow:"#ffff80",orange:"#ffcf80",white:"#ffffff",purple:"#ff80ff"},K=(e,r,t)=>Math.max(Math.min(t,r),e);class Z extends O{color="red";pressed=!1;label="";xray=!1;static pushbuttonCounter=0;uniqueId;pinInfo=[{name:"1.l",x:0,y:2.2,signals:[]},{name:"2.l",x:0,y:21,signals:[]},{name:"1.r",x:28,y:2.2,signals:[]},{name:"2.r",x:28,y:21,signals:[]}];constructor(){super(),this.uniqueId="pushbutton"+Z.pushbuttonCounter++}static get styles(){return B`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .button-active-circle {
        opacity: 0;
      }

      button:active .button-active-circle {
        opacity: 1;
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `}renderSVG(){let{color:e,uniqueId:r,xray:t}=this,a=this.pressed?`url(#grad-down-${r})`:`url(#grad-up-${r})`;return k`<svg
      width="7.4129977mm"
      height="6mm"
      version="1.1"
      viewBox="-3 0 7.4954476 6"
      id="svg17"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
    >
      <defs id="defs8">
        <linearGradient id="grad-up-${r}" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#ffffff" offset="0" id="stop1" />
          <stop stop-color="${e}" offset="0.3" id="stop2" />
          <stop stop-color="${e}" offset="0.5" id="stop3" />
          <stop offset="1" id="stop4" />
        </linearGradient>
        <linearGradient
          id="grad-down-${r}"
          x1="9.8219995"
          x2="2.178"
          y1="9.8219995"
          y2="2.178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ffffff" offset="0" id="stop5" />
          <stop stop-color="${e}" offset="0.3" id="stop6" />
          <stop stop-color="${e}" offset="0.5" id="stop7" />
          <stop offset="1" id="stop8" />
        </linearGradient>
      </defs>
      <rect
        x="-2.2698734"
        y="-0.033367086"
        width="6.0667338"
        height="6.0667338"
        rx="0.22244692"
        ry="0.22244692"
        fill="#464646"
        id="rect8"
        style="stroke-width:0.505561"
      />
      <rect
        x="-1.8907025"
        y="0.3458038"
        width="5.3083925"
        height="5.3083925"
        rx="0.1066734"
        ry="0.1066734"
        fill="#eaeaea"
        id="rect9"
        style="stroke-width:0.505561"
      />
      <g
        class="clickable-element"
        id="g17"
        transform="matrix(0.50556117,0,0,0.50556117,-2.2698734,-0.03336708)"
      >
        <circle cx="6" cy="6" r="3.822" fill="${a}" id="circle15" />
        <circle
          class="button-active-circle"
          cx="6"
          cy="6"
          r="3.822"
          fill="url(#grad-down-${r})"
          id="circle16"
          style="fill:url(#grad-down-$%7BuniqueId%7D)"
        />
        <circle
          cx="6"
          cy="6"
          r="2.9000001"
          fill="${e}"
          stroke="#2f2f2f"
          stroke-opacity="0.47"
          stroke-width="0.08"
          id="circle17"
        />
        <rect
          style="fill:#b3b3b3;stroke-width:1.72987;paint-order:stroke markers fill"
          id="rect18"
          width="1.455145"
          height="0.85429525"
          x="-1.4441905"
          y="0.59993488"
          rx="0.014974313"
        />
        ${t?k`
             <rect
       style="opacity:0.3;fill:#b3b3b3;stroke-width:3.86235;paint-order:stroke markers fill"
       id="rect18-7"
       width="12.124171"
       height="0.51113945"
       x="-0.047361366"
       y="0.90351838"
       rx="0.12476496" />
    <rect
       style="opacity:0.3;fill:#b3b3b3;stroke-width:3.86235;paint-order:stroke markers fill"
       id="rect18-7-4"
                width="12.124171"
                height="0.51113945"
                x="-0.098103404"
                y="10.614529"
                rx="0.12476496"
              />
            `:""}
        <rect
          style="fill:#b3b3b3;stroke-width:1.69238;paint-order:stroke markers fill"
          id="rect18-5"
          width="1.3927531"
          height="0.85429525"
          x="-1.3971666"
          y="10.694777"
          rx="0.014332262"
        />
        <rect
          style="fill:#b3b3b3;stroke-width:1.69238;paint-order:stroke markers fill"
          id="rect18-0"
          width="1.3927531"
          height="0.85429525"
          x="11.989052"
          y="0.59516686"
          rx="0.014332262"
        />
        <rect
          style="fill:#b3b3b3;stroke-width:1.69238;paint-order:stroke markers fill"
          id="rect18-0-4"
          width="1.3927531"
          height="0.85429525"
          x="11.985411"
          y="10.744086"
          rx="0.014332262"
        />
      </g>
    </svg>`}render(){let{color:e,label:r}=this;return k`
      <button
        aria-label="${r} ${e} pushbutton 6mm"
       
       
       
       
       
       
       
      >
        ${this.renderSVG()}
      </button>
      <span class="label">${this.label}</span>
    `}down(){this.pressed||(this.pressed=!0,this.dispatchEvent(new Event("button-press")))}up(e){!this.pressed||(("object"==typeof navigator?navigator.userAgent:"").indexOf("Macintosh")>=0?e.metaKey:e.ctrlKey)||(this.pressed=!1,this.dispatchEvent(new Event("button-release")))}}let Y={[-2]:"#C3C7C0",[-1]:"#F1D863",0:"#000000",1:"#8F4814",2:"#FB0000",3:"#FC9700",4:"#FCF800",5:"#00B800",6:"#0000FF",7:"#A803D6",8:"#808080",9:"#FCFCFC"},J={"7segment":class extends O{color="red";offColor="#444";background="black";digits=1;colon=!1;colonValue=!1;pins="top";values=[0,0,0,0,0,0,0,0];get pinInfo(){let e=e=>{let{startX:r,cols:t,bottomY:a}=this.pinPositions,n=(e-1)%t,s=1-Math.floor((e-1)/t),i="top"===this.pins?s?a+1:1:s?a+2:0;return{number:e,x:(r+1.27+(s?n:t-n-1)*2.54)*3.78,y:3.78*i}};switch(this.digits){case 4:return[{name:"A",...e(13),signals:[],description:"Segment A"},{name:"B",...e(9),signals:[],description:"Segment B"},{name:"C",...e(4),signals:[],description:"Segment C"},{name:"D",...e(2),signals:[],description:"Segment D"},{name:"E",...e(1),signals:[],description:"Segment E"},{name:"F",...e(12),signals:[],description:"Segment F"},{name:"G",...e(5),signals:[],description:"Segment G"},{name:"DP",...e(3),signals:[],description:"Decimal Point"},{name:"DIG1",...e(14),signals:[],description:"Digit 1 Common"},{name:"DIG2",...e(11),signals:[],description:"Digit 2 Common"},{name:"DIG3",...e(10),signals:[],description:"Digit 3 Common"},{name:"DIG4",...e(6),signals:[],description:"Digit 4 Common"},{name:"COM",...e(7),signals:[],description:"Common pin"},{name:"CLN",...e(8),signals:[],description:"Colon"}];case 3:return[{name:"A",...e(11),signals:[],description:"Segment A"},{name:"B",...e(7),signals:[],description:"Segment B"},{name:"C",...e(4),signals:[],description:"Segment C"},{name:"D",...e(2),signals:[],description:"Segment D"},{name:"E",...e(1),signals:[],description:"Segment E"},{name:"F",...e(10),signals:[],description:"Segment F"},{name:"G",...e(5),signals:[],description:"Segment G"},{name:"DP",...e(3),signals:[],description:"Decimal Point"},{name:"DIG1",...e(12),signals:[],description:"Digit 1 Common"},{name:"DIG2",...e(9),signals:[],description:"Digit 2 Common"},{name:"DIG3",...e(8),signals:[],description:"Digit 3 Common"}];case 2:return[{name:"DIG1",...e(8),signals:[],description:"Digit 1 Common"},{name:"DIG2",...e(7),signals:[],description:"Digit 2 Common"},{name:"A",...e(10),signals:[],description:"Segment A"},{name:"B",...e(9),signals:[],description:"Segment B"},{name:"C",...e(1),signals:[],description:"Segment C"},{name:"D",...e(4),signals:[],description:"Segment D"},{name:"E",...e(3),signals:[],description:"Segment E"},{name:"F",...e(6),signals:[],description:"Segment F"},{name:"G",...e(5),signals:[],description:"Segment G"},{name:"DP",...e(2),signals:[],description:"Decimal Point"}];default:return[{name:"COM.1",...e(3),signals:[],description:"Common"},{name:"COM.2",...e(8),signals:[],description:"Common"},{name:"A",...e(7),signals:[],description:"Segment A"},{name:"B",...e(6),signals:[],description:"Segment B"},{name:"C",...e(4),signals:[],description:"Segment C"},{name:"D",...e(2),signals:[],description:"Segment D"},{name:"E",...e(1),signals:[],description:"Segment E"},{name:"F",...e(9),signals:[],description:"Segment F"},{name:"G",...e(10),signals:[],description:"Segment G"},{name:"DP",...e(5),signals:[],description:"Decimal Point"}]}}static get styles(){return B`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `}get pinPositions(){let{digits:e}=this,r=Math.ceil((4===e?14:3===e?12:10)/2);return{startX:(12.55*e-2.54*r)/2,bottomY:"extend"===this.pins?21:18,cols:r}}get yOffset(){return 2*("extend"===this.pins)}update(e){(e.has("digits")||e.has("pins"))&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}renderDigit(e,r){let t=e=>this.values[r+e]?this.color:this.offColor;return k`
      <g transform="skewX(-8) translate(${e}, ${this.yOffset+2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${t(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${t(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${t(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${t(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${t(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${t(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${t(6)} />
      </g>
      <circle cx="${e+7.4}" cy="${this.yOffset+16}" r="0.89" fill="${t(7)}" />
    `}renderColon(){let{yOffset:e}=this,r=1.5+12.7*Math.round(this.digits/2),t=this.colonValue?this.color:this.offColor;return k`
      <g transform="skewX(-8)"  fill="${t}">
        <circle cx="${r}" cy="${e+5.75}" r="0.89" />
        <circle cx="${r}" cy="${e+13.25}" r="0.89" />
      </g>
    `}renderPins(){let{cols:e,bottomY:r,startX:t}=this.pinPositions;return k`
      <g fill="url(#pin-pattern)" transform="translate(${t}, 0)">
        <rect height="2" width=${2.54*e} />
        <rect height="2" width=${2.54*e} transform="translate(0, ${r})" />
      </g>
    `}render(){let{digits:e,colon:r,pins:t,yOffset:a}=this,n=12.55*e,s="extend"===t?23:22,i=[];for(let r=0;r<e;r++)i.push(this.renderDigit(3.5+12.7*r,8*r));return k`
      <svg
        width="${n}mm"
        height="${s}mm"
        version="1.1"
        viewBox="0 0 ${n} ${s}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${"extend"===t?k`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`:k`<circle cx="1.27" cy="1" r="0.5" fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${a}" width="${n}" height="20.5" />
        ${i}<!-- -->
        ${r?this.renderColon():null}<!-- -->
        ${"none"!==t?this.renderPins():null}
      </svg>
    `}},"analog-joystick":class extends O{xValue=0;yValue=0;pressed=!1;knob;pinInfo=[{name:"VCC",x:33,y:115.8,signals:[F()]},{name:"VERT",x:42.6012,y:115.8,signals:[T(0)]},{name:"HORZ",x:52.2024,y:115.8,signals:[T(1)]},{name:"SEL",x:61.8036,y:115.8,signals:[]},{name:"GND",x:71.4048,y:115.8,signals:[R()]}];static get styles(){return B`
      #knob {
        transition: transform 0.3s;
      }

      #knob:hover {
        fill: #222;
      }

      #knob:focus {
        outline: none;
        stroke: #4d90fe;
        stroke-width: 0.5;
      }

      .controls {
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }

      #knob:focus ~ .controls,
      #knob:hover ~ .controls {
        opacity: 1;
      }

      .controls:hover {
        opacity: 1;
      }

      .controls path {
        pointer-events: none;
      }

      .controls .region {
        pointer-events: fill;
        fill: none;
      }

      .controls .region:hover + path {
        fill: #fff;
      }

      .controls circle:hover {
        stroke: #fff;
      }

      .controls circle.pressed {
        fill: #fff;
      }
    `}render(){let{xValue:e,yValue:r}=this;return k`
      <svg
        width="27.2mm"
        height="31.8mm"
        viewBox="0 0 27.2 31.8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="noise" primitiveUnits="objectBoundingBox">
            <feTurbulence baseFrequency="2 2" type="fractalNoise" />
            <feColorMatrix
              values=".1 0 0 0 .1
                      .1 0 0 0 .1
                      .1 0 0 0 .1
                      0 0 0 0 1"
            />
            <feComposite in2="SourceGraphic" operator="lighter" />
            <feComposite result="body" in2="SourceAlpha" operator="in" />
          </filter>
          <radialGradient id="g-knob" cx="13.6" cy="13.6" r="10.6" gradientUnits="userSpaceOnUse">
            <stop offset="0" />
            <stop offset="0.9" />
            <stop stop-color="#777" offset="1" />
          </radialGradient>
          <radialGradient
            id="g-knob-base"
            cx="13.6"
            cy="13.6"
            r="13.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#444" offset=".8" />
            <stop stop-color="#555" offset=".9" />
            <stop offset="1" />
          </radialGradient>
          <path
            id="pin"
            fill="silver"
            stroke="#a2a2a2"
            stroke-width=".024"
            d="M8.726 29.801a.828.828 0 00-.828.829.828.828 0 00.828.828.828.828 0 00.829-.828.828.828 0 00-.829-.829zm-.004.34a.49.49 0 01.004 0 .49.49 0 01.49.489.49.49 0 01-.49.49.49.49 0 01-.489-.49.49.49 0 01.485-.49z"
          />
        </defs>
        <path
          d="M1.3 0v31.7h25.5V0zm2.33.683a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.5 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-20.5 26.8a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.4 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-12.7 2.66a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.57 0a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.49.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm-7.62.007a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488zm10.2.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488z"
          fill="#bd1e34"
        />
        <g fill="#fff" font-family="sans-serif" stroke-width=".03">
          <text text-anchor="middle" font-size="1.2" letter-spacing=".053">
            <tspan x="4.034" y="25.643">Analog</tspan>
            <tspan x="4.061" y="27.159">Joystick</tspan>
          </text>
          <text transform="rotate(-90)" text-anchor="start" font-size="1.2">
            <tspan x="-29.2" y="9.2">VCC</tspan>
            <tspan x="-29.2" y="11.74">VERT</tspan>
            <tspan x="-29.2" y="14.28">HORZ</tspan>
            <tspan x="-29.2" y="16.82">SEL</tspan>
            <tspan x="-29.2" y="19.36">GND</tspan>
          </text>
        </g>
        <ellipse cx="13.6" cy="13.7" rx="13.6" ry="13.7" fill="url(#g-knob-base)" />
        <path
          d="M48.2 65.5s.042.179-.093.204c-.094.017-.246-.077-.322-.17-.094-.115-.082-.205-.009-.285.11-.122.299-.075.299-.075s-.345-.303-.705-.054c-.32.22-.228.52.06.783.262.237.053.497-.21.463-.18-.023-.252-.167-.21-.256.038-.076.167-.122.167-.122s-.149-.06-.324.005c-.157.06-.286.19-.276.513v1.51s.162-.2.352-.403c.214-.229.311-.384.53-.366.415.026.714-.159.918-.454.391-.569.085-1.2-.178-1.29"
          fill="#fff"
        />
        <circle
          id="knob"
          cx="13.6"
          cy="13.6"
          transform="translate(${-(2.5*e)}, ${-(2.5*r)})"
          r="10.6"
          fill="url(#g-knob)"
          filter="url(#noise)"
          tabindex="0"
         
         
        />
        <g fill="none" stroke="#fff" stroke-width=".142">
          <path
            d="M7.8 31.7l-.383-.351v-1.31l.617-.656h1.19l.721.656.675-.656h1.18l.708.656.662-.656h1.25l.643.656.63-.656h1.21l.695.656.636-.656h1.17l.753.656v1.3l-.416.39"
          />
          <path
            d="M9.5 31.7l.381-.344.381.331M12.1 31.7l.381-.344.381.331M14.7 31.7l.381-.344.381.331M17.2 31.7l.381-.344.381.331"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </g>
        <g class="controls" stroke-width="0.6" stroke-linejoin="bevel" fill="#aaa">
          <rect
            class="region"
            y="8.5"
            x="1"
            height="10"
            width="7"
           
           
          />
          <path d="m 7.022,11.459 -3.202,2.497 3.202,2.497" />

          <rect
            class="region"
            y="1.38"
            x="7.9"
            height="7"
            width="10"
           
           
          />
          <path d="m 16.615,7.095 -2.497,-3.202 -2.497,3.202" />

          <rect
            class="region"
            y="8.5"
            x="18"
            height="10"
            width="7"
           
           
          />
          <path d="m 19.980,16.101 3.202,-2.497 -3.202,-2.497" />

          <rect
            class="region"
            y="17"
            x="7.9"
            height="7"
            width="10"
           
           
          />
          <path d="m 11.620,20.112 2.497,3.202 2.497,-3.202" />

          <circle
            cx="13.6"
            cy="13.6"
            r="3"
            stroke="#aaa"
            class=${this.pressed?"pressed":""}
           
           
          />
        </g>
        <use xlink:href="#pin" x="0" />
        <use xlink:href="#pin" x="2.54" />
        <use xlink:href="#pin" x="5.08" />
        <use xlink:href="#pin" x="7.62" />
        <use xlink:href="#pin" x="10.16" />
      </svg>
    `}keydown(e){switch(e.key){case"ArrowUp":this.yValue=1,this.valueChanged();break;case"ArrowDown":this.yValue=-1,this.valueChanged();break;case"ArrowLeft":this.xValue=1,this.valueChanged();break;case"ArrowRight":this.xValue=-1,this.valueChanged()}j.includes(e.key)&&this.press()}keyup(e){switch(e.key){case"ArrowUp":case"ArrowDown":this.yValue=0,this.valueChanged();break;case"ArrowLeft":case"ArrowRight":this.xValue=0,this.valueChanged()}j.includes(e.key)&&this.release()}mousedown(e,r,t){r&&(this.xValue=r),t&&(this.yValue=t),this.valueChanged(),this.knob?.focus(),e.preventDefault()}mouseup(e,r){e&&(this.xValue=0),r&&(this.yValue=0),this.valueChanged(),this.knob?.focus()}press(e){this.pressed=!0,this.dispatchEvent(new InputEvent("button-press")),this.knob?.focus(),e?.preventDefault()}release(){this.pressed=!1,this.dispatchEvent(new InputEvent("button-release")),this.knob?.focus()}valueChanged(){this.dispatchEvent(new InputEvent("input"))}},"arduino-nano":class extends O{led13=!1;ledRX=!1;ledTX=!1;ledPower=!1;resetPressed=!1;resetButton;pinInfo=[{name:"12",x:19.7,y:4.8,signals:[$("MISO")]},{name:"11",x:29.3,y:4.8,signals:[$("MOSI"),{type:"pwm"}]},{name:"10",x:38.9,y:4.8,signals:[$("SS"),{type:"pwm"}]},{name:"9",x:48.5,y:4.8,signals:[{type:"pwm"}]},{name:"8",x:58.1,y:4.8,signals:[]},{name:"7",x:67.7,y:4.8,signals:[]},{name:"6",x:77.3,y:4.8,signals:[{type:"pwm"}]},{name:"5",x:86.9,y:4.8,signals:[{type:"pwm"}]},{name:"4",x:96.5,y:4.8,signals:[]},{name:"3",x:106.1,y:4.8,signals:[{type:"pwm"}]},{name:"2",x:115.7,y:4.8,signals:[]},{name:"GND.2",x:125.3,y:4.8,signals:[{type:"power",signal:"GND"}]},{name:"RESET.2",x:134.9,y:4.8,signals:[]},{name:"0",x:144.5,y:4.8,signals:[z("TX")]},{name:"1",x:154.1,y:4.8,signals:[z("RX")]},{name:"13",x:19.7,y:62.4,signals:[$("SCK")]},{name:"3.3V",x:29.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"AREF",x:38.9,y:62.4,signals:[]},{name:"A0",x:48.5,y:62.4,signals:[T(0)]},{name:"A1",x:58.1,y:62.4,signals:[T(1)]},{name:"A2",x:67.7,y:62.4,signals:[T(2)]},{name:"A3",x:77.3,y:62.4,signals:[T(3)]},{name:"A4",x:86.9,y:62.4,signals:[T(4),E("SDA")]},{name:"A5",x:96.5,y:62.4,signals:[T(5),E("SCL")]},{name:"A6",x:106.1,y:62.4,signals:[T(6)]},{name:"A7",x:115.7,y:62.4,signals:[T(7)]},{name:"5V",x:125.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"RESET",x:134.9,y:62.4,signals:[]},{name:"GND.1",x:144.5,y:62.4,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:154.1,y:62.4,signals:[{type:"power",signal:"VCC"}]},{name:"12.2",x:163.7,y:43.2,signals:[$("MISO")],noBreadboard:!0},{name:"5V.2",x:154.1,y:43.2,signals:[{type:"power",signal:"VCC",voltage:5}],noBreadboard:!0},{name:"13.2",x:163.7,y:33.6,signals:[$("SCK")],noBreadboard:!0},{name:"11.2",x:154.1,y:33.6,signals:[$("MOSI"),{type:"pwm"}],noBreadboard:!0},{name:"RESET.3",x:163.7,y:24,signals:[],noBreadboard:!0},{name:"GND.3",x:154.1,y:24,signals:[{type:"power",signal:"GND"}],noBreadboard:!0}];static get styles(){return B`
      text {
        font-size: 1px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){let{ledPower:e,led13:r,ledRX:t,ledTX:a}=this;return k`
      <svg
        width="44.9mm"
        height="17.8mm"
        viewBox="-1.4 0 44.9 17.8"
        font-weight="bold"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="solderPlate" style="color-interpolation-filters:sRGB;">
            <feTurbulence result="r0" type="fractalNoise" baseFrequency="1" numOctaves="1" />
            <feComposite
              result="r1"
              in="r0"
              in2="SourceGraphic"
              operator="arithmetic"
              k1=".6"
              k2=".6"
              k3="1.2"
              k4=".25"
            />
            <feBlend result="r2" in="r1" in2="SourceGraphic" mode="luminosity" />
            <feComposite result="r3" in="r2" in2="SourceGraphic" operator="in" />
          </filter>
          <pattern id="pins-tqfp-0.5mm" width="1" height=".5" patternUnits="userSpaceOnUse">
            <rect fill="#333" width="1" height=".2" y=".17" />
          </pattern>
          <pattern id="pins-pth-0.75" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".375" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <pattern id="pins-pth-1.00" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".5" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#333" filter="url(#solderPlate)" />
            <rect x=".6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width=".05" />
          </g>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation=".5" />
          </filter>
        </defs>

        <!-- PCB -->
        <g id="pcb" fill="#fff">
          <rect width="43.5" height="17.8" x="0" y="0" fill="#1b7e84" />
          <circle cx="1" cy="1" r=".889" />
          <circle cx="42.42" cy="1" r=".889" />
          <circle cx="42.42" cy="16.6" r=".889" />
          <circle cx="1" cy="16.6" r=".889" />
        </g>

        <!-- silkscreen -->
        <g id="silkscreen" fill="#eee" text-anchor="middle">
          <rect x="30.48" y="0" width="2.54" height="3.2" />
          <rect x="35.56" y="14.6" width="2.54" height="3.2" />
          <g fill="#1b7e84" transform="translate(1.27 1.27)">
            <circle r=".85" cx="30.48" />
            <circle r=".85" cx="35.56" cy="15.24" />
          </g>
          <g transform="translate(1.27 3)">
            <text x="2.54">D12</text>
            <text x="5.08">D11</text>
            <text x="7.62">D10</text>
            <text x="10.16">D9</text>
            <text x="12.7">D8</text>
            <text x="15.24">D7</text>
            <text x="17.78">D6</text>
            <text x="20.32">D5</text>
            <text x="22.86">D4</text>
            <text x="25.4">D3</text>
            <text x="27.94">D2</text>
            <text x="30.48" fill="#1b7e84">GND</text>
            <text x="33.02">RST</text>
            <text x="35.56" font-size="200%">↓</text>
            <text x="35.56" y="1">RX0</text>
            <text x="38.1" font-size="200%">↑</text>
            <text x="38.1" y="1">TX1</text>
          </g>
          <g transform="translate(1.27 15.5)">
            <text x="2.54">D13</text>
            <text x="5.08">3V3</text>
            <text x="7.62">AREF</text>
            <text x="10.16">A0</text>
            <text x="12.7">A1</text>
            <text x="15.24">A2</text>
            <text x="17.78">A3</text>
            <text x="20.32">A4</text>
            <text x="22.86">A5</text>
            <text x="25.4">A6</text>
            <text x="27.94">A7</text>
            <text x="30.48">5V</text>
            <text x="33.02">RST</text>
            <text x="35.56" fill="#1b7e84">GND</text>
            <text x="38.1">VIN</text>
          </g>
          <g transform="rotate(90)">
            <text x="8.7" y="-22.5">RESET</text>
            <text x="5.6" y="-32.2">TX</text>
            <text x="5.6" y="-30.7" font-size="200%">↓</text>
            <text x="7.6" y="-32.2">RX</text>
            <text x="7.6" y="-30.7" font-size="200%">↑</text>
            <text x="9.6" y="-30.7">ON</text>
            <text x="11.6" y="-30.7">L</text>
          </g>
        </g>

        <!-- MCU -->
        <g id="mcu" transform="rotate(45 -2.978 23.39)">
          <g fill="url(#pins-tqfp-0.5mm)" filter="url(#solderPlate)">
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" />
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" transform="rotate(90)" />
          </g>
          <rect x="-2.275" y="-2.275" width="4.55" height="4.55" fill="#444" />
          <circle transform="rotate(45)" cx=".012" cy="-2.5" r=".35" fill="#222" />
        </g>

        <!-- pins -->
        <g id="pins" fill="url(#pins-pth-0.75)">
          <g id="pins-pin1" fill="#333" filter="url(#solderPlate)">
            <rect x="${38.495}" y="${.395}" width="1.75" height="1.75" />
            <rect x="${38.495}" y="${16.51-.875}" width="1.75" height="1.75" />
          </g>
          <rect x="2.54" width="${38.1}" height="2.54" />
          <rect x="2.54" y="${15.24}" width="${38.1}" height="2.54" />
        </g>

        <!-- programming header -->
        <g id="pgm-header" fill="url(#pins-pth-1.00)" stroke="#eee" stroke-width=".1">
          <g id="pgm-pin1" stroke="none" fill="#333" filter="url(#solderPlate)">
            <rect x="${16.5*2.54-.875}" y="${10.555}" width="1.75" height="1.75" />
          </g>
          <rect x="${38.1}" y="${5.08}" width="${5.08}" height="${7.62}" />
        </g>

        <!-- USB mini type B -->
        <g id="usb-mini-b" stroke-width=".1" paint-order="stroke fill">
          <g fill="#333" filter="url(#solderPlate)">
            <rect x=".3" y="3.8" width="1.6" height="9.8" />
            <rect x="5.5" y="3.8" width="1.6" height="9.8" />
            <rect x="7.3" y="7.07" width="1.1" height=".48" />
            <rect x="7.3" y="7.82" width="1.1" height=".48" />
            <rect x="7.3" y="8.58" width="1.1" height=".48" />
            <rect x="7.3" y="9.36" width="1.1" height=".48" />
            <rect x="7.3" y="10.16" width="1.1" height=".48" />
          </g>
          <rect x="-1.4" y="4.8" width="8.9" height="7.8" fill="#999" stroke-width=".26" />
          <rect x="-1.25" y="5" width="8.6" height="7.4" fill="#ccc" stroke="#bbb" />
          <g fill="none" stroke="#333" stroke-width=".26" stroke-linecap="round">
            <path d="m2.6 5.9h-3.3v0.9h3.3m0 3.7h-3.3v0.9h3.3M-0.6 7.6l4.3 0.3v1.5l-4.3 0.3" />
            <path d="m3.3 7.9v1.5" stroke-width="1" stroke-linecap="butt" />
            <path d="m6 6.4v4.5" stroke-width=".35" />
          </g>
        </g>

        <!-- LEDs -->
        <g transform="translate(27.7 5)">
          <use xlink:href="#led-body" />
          ${a&&k`<circle cx="1.3" cy=".55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 7)">
          <use xlink:href="#led-body" />
          ${t&&k`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 9)">
          <use xlink:href="#led-body" />
          ${e&&k`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 11)">
          <use xlink:href="#led-body" />
          ${r&&k`<circle cx="1.3" cy=".55" r="1.3" fill="#ffff80" filter="url(#ledFilter)" />`}
        </g>

        <!-- reset button -->
        <g stroke-width=".1" paint-order="fill stroke">
          <rect x="24.3" y="6.3" width="1" height="4.8" filter="url(#solderPlate)" fill="#333" />
          <rect x="23.54" y="6.8" width="2.54" height="3.8" fill="#ccc" stroke="#888" />
          <circle
            id="reset-button"
            cx="24.8"
            cy="8.7"
            r="1"
            fill="#eeb"
            stroke="#777"
            tabindex="0"
           
           
           
           
           
           
           
          />
        </g>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}},"arduino-uno":class extends O{led13=!1;ledRX=!1;ledTX=!1;ledPower=!1;resetPressed=!1;resetButton;pinInfo=[{name:"A5.2",x:87,y:9,signals:[T(5),E("SCL")]},{name:"A4.2",x:97,y:9,signals:[T(4),E("SDA")]},{name:"AREF",x:106,y:9,signals:[]},{name:"GND.1",x:115.5,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:125,y:9,signals:[$("SCK")]},{name:"12",x:134.5,y:9,signals:[$("MISO")]},{name:"11",x:144,y:9,signals:[$("MOSI"),{type:"pwm"}]},{name:"10",x:153.5,y:9,signals:[$("SS"),{type:"pwm"}]},{name:"9",x:163,y:9,signals:[{type:"pwm"}]},{name:"8",x:173,y:9,signals:[]},{name:"7",x:189,y:9,signals:[]},{name:"6",x:198.5,y:9,signals:[{type:"pwm"}]},{name:"5",x:208,y:9,signals:[{type:"pwm"}]},{name:"4",x:217.5,y:9,signals:[]},{name:"3",x:227,y:9,signals:[{type:"pwm"}]},{name:"2",x:236.5,y:9,signals:[]},{name:"1",x:246,y:9,signals:[z("TX")]},{name:"0",x:255.5,y:9,signals:[z("RX")]},{name:"IOREF",x:131,y:191.5,signals:[]},{name:"RESET",x:140.5,y:191.5,signals:[]},{name:"3.3V",x:150,y:191.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:160,y:191.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:169.5,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:179,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:188.5,y:191.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208,y:191.5,signals:[T(0)]},{name:"A1",x:217.5,y:191.5,signals:[T(1)]},{name:"A2",x:227,y:191.5,signals:[T(2)]},{name:"A3",x:236.5,y:191.5,signals:[T(3)]},{name:"A4",x:246,y:191.5,signals:[T(4),E("SDA")]},{name:"A5",x:255.5,y:191.5,signals:[T(5),E("SCL")]}];static get styles(){return B`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){let{ledPower:e,led13:r,ledRX:t,ledTX:a}=this;return k`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${H}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- reset button -->
        <rect x="3.816" y="1.4125" width="6.2151" height="6.0268" fill="#9b9b9b" />
        <g fill="#e6e6e6">
          <rect x="2.1368" y="1.954" width="1.695" height=".84994" />
          <rect x="2.121" y="3.8362" width="1.695" height=".84994" />
          <rect x="2.0974" y="5.8608" width="1.695" height=".84994" />
          <rect x="10.031" y="6.0256" width="1.695" height=".84994" />
          <rect x="10.008" y="1.9528" width="1.695" height=".84994" />
        </g>
        <circle
          id="reset-button"
          cx="6.9619"
          cy="4.5279"
          r="1.5405"
          fill="#960000"
          stroke="#777"
          stroke-width="0.15"
          tabindex="0"
         
         
         
         
         
         
         
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${.38+15.24}" height="2.54" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <g fill="#252728">
            <circle cx="33.269" cy="36.847" r="1" />
            <circle cx="59.939" cy="36.847" r="1" />
            <path d="M65 38.05a1.13 1.13 0 010-2.26v2.27z" />
          </g>
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${e&&k`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${r&&k`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${a&&k`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${t&&k`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&#160;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&#160;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">UNO</text>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}},buzzer:class extends O{hasSignal=!1;pinInfo=[{name:"1",x:27,y:84,signals:[]},{name:"2",x:37,y:84,signals:[]}];static get styles(){return B`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `}renderSVG(){return k`<svg
      width="17mm"
      height="20mm"
      version="1.1"
      viewBox="0 0 17 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m7.23 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
      <path d="m9.77 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
      <g stroke="#000">
        <g>
          <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
          <circle
            cx="8.5"
            cy="8.5"
            r="6.3472"
            fill="none"
            stroke-width=".3"
            style="paint-order:normal"
          />
          <circle
            cx="8.5"
            cy="8.5"
            r="4.3488"
            fill="none"
            stroke-width=".3"
            style="paint-order:normal"
          />
        </g>
        <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
      </g>
    </svg>`}render(){let e=this.hasSignal;return k`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${e?"":"hidden"}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>
        ${this.renderSVG()}
      </div>
    `}},dht22:class extends O{pinInfo=[{name:"VCC",x:15,y:114.9,signals:[{type:"power",signal:"VCC"}],number:1},{name:"SDA",x:24.5,y:114.9,signals:[],number:2},{name:"NC",x:34.1,y:114.9,signals:[],number:3},{name:"GND",x:43.8,y:114.9,signals:[{type:"power",signal:"GND"}],number:4}];render(){return k`
      <svg
        width="15.1mm"
        height="30.885mm"
        version="1.1"
        viewBox="0 0 15.1 30.885"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="3.57" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="6.11" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="8.65" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="11.19" y="23.885" width=".75" height="7" rx=".2" />
        </g>
        <path
          d="M15.05 23.995V5.033m0 0c0-.107-1.069-4.962-2.662-4.96L2.803.09C1.193.09.05 4.926.05 5.033v18.962c0 .107.086.192.192.192h14.616a.192.192 0 00.192-.192M7.615.948h.004c1.08 0 1.956.847 1.956 1.892s-.876 1.892-1.956 1.892-1.956-.847-1.956-1.892c0-1.044.873-1.89 1.952-1.892zM4.967 8.66H5.9a.21.21 0 01.211.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.212-.21V8.87a.21.21 0 01.212-.211zm2.168 0h.934a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm2.152 0h.935a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm5.757 0v1.356m0 0h-3.217a.553.553 0 01-.554-.554v-.249a.55.55 0 01.554-.553h3.217M.05 8.66h3.282c.307 0 .554.247.554.553v.25a.552.552 0 01-.554.553H.05m0 1.054h3.282c.307 0 .554.247.554.554v.249a.552.552 0 01-.554.554H.05m4.917-1.357H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.212-.21v-.935a.21.21 0 01.212-.21zm2.168 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.211.211h-.934a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.153 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.539 0h3.217v1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553zM.05 13.547h3.282c.307 0 .553.247.553.554v.249a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.169 0h.933a.21.21 0 01.212.211v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm5.757 1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553h3.217m0 3.791h-3.218a.553.553 0 01-.553-.554v-.249c0-.306.247-.553.553-.553h3.218m-14.994 0h3.282c.307 0 .553.247.553.553v.25a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zm2.169 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.21h-.934a.21.21 0 01-.211-.21v-.934a.21.21 0 01.211-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zM.05 18.362h3.282c.307 0 .553.247.553.554v.25a.552.552 0 01-.553.552H.05m4.916-1.355H5.9a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm2.169 0h.933a.21.21 0 01.212.21v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.934a.21.21 0 01.21-.211zm2.152 0h.934a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm5.757 1.355h-3.218a.552.552 0 01-.553-.553v-.25c0-.306.247-.552.553-.552h3.218M10.49 5.056V7.31a.192.192 0 01-.193.193h-.85a.192.192 0 01-.193-.193V5.056H8.23v2.286a.192.192 0 01-.192.192h-.851a.192.192 0 01-.193-.192V5.056H5.94v2.286a.192.192 0 01-.193.192h-.85a.192.192 0 01-.193-.192V5.056C.033 5.025.05 5.033.05 5.033m15 0l-4.56.023v0"
          fill="#f2f2f2"
          stroke="#000"
          stroke-linecap="round"
          stroke-width=".1"
        />
        <text
          x="3.7415893"
          y="22.863354"
          fill="#000000"
          font-family="sans-serif"
          font-size="2.2px"
          stroke-width=".05"
          style="line-height:1.25"
        >
          DHT22
        </text>
      </svg>
    `}},"esp32-devkit-v1":class extends O{led1=!1;ledPower=!1;pinInfo=[{name:"VIN",x:5,y:158.5,signals:[{type:"power",signal:"VCC"}]},{name:"GND.2",x:5,y:149,signals:[{type:"power",signal:"GND"}]},{name:"D13",x:5,y:139.5,signals:[$("MOSI",0),{type:"pwm"}]},{name:"D12",x:5,y:130.4,signals:[$("MISO",0),{type:"pwm"}]},{name:"D14",x:5,y:120,signals:[$("SCK",0),{type:"pwm"}]},{name:"D27",x:5,y:110.8,signals:[{type:"pwm"}]},{name:"D26",x:5,y:101,signals:[{type:"pwm"}]},{name:"D25",x:5,y:91.3,signals:[{type:"pwm"}]},{name:"D33",x:5,y:81.7,signals:[{type:"pwm"}]},{name:"D32",x:5,y:72.2,signals:[{type:"pwm"}]},{name:"D35",x:5,y:62.9,signals:[]},{name:"D34",x:5,y:53.1,signals:[]},{name:"VN",x:5,y:44,signals:[]},{name:"VP",x:5,y:34,signals:[]},{name:"EN",x:5,y:24,signals:[]},{name:"3V3",x:101.3,y:158.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"GND.1",x:101.3,y:149,signals:[{type:"power",signal:"GND"}]},{name:"D15",x:101.3,y:139.5,signals:[$("SS",0),{type:"pwm"}]},{name:"D2",x:101.3,y:130.4,signals:[{type:"pwm"}]},{name:"D4",x:101.3,y:120,signals:[{type:"pwm"}]},{name:"RX2",x:101.3,y:110.8,signals:[z("RX",2),{type:"pwm"}]},{name:"TX2",x:101.3,y:101,signals:[z("TX",2),{type:"pwm"}]},{name:"D5",x:101.3,y:91.3,signals:[$("SS",1),{type:"pwm"}]},{name:"D18",x:101.3,y:81.7,signals:[$("SCK",1),{type:"pwm"}]},{name:"D19",x:101.3,y:72.2,signals:[$("MISO",1),{type:"pwm"}]},{name:"D21",x:101.3,y:62.9,signals:[E("SDA"),{type:"pwm"}]},{name:"RX0",x:101.3,y:53.1,signals:[z("RX",0),{type:"pwm"}]},{name:"TX0",x:101.3,y:44,signals:[z("TX",0),{type:"pwm"}]},{name:"D22",x:101.3,y:34,signals:[E("SCL"),{type:"pwm"}]},{name:"D23",x:101.3,y:24,signals:[$("MOSI",1),{type:"pwm"}]}];render(){let{ledPower:e,led1:r}=this;return k`
      <svg
        width="28.2mm"
        height="54.053mm"
        version="1.1"
        viewBox="0 0 107 201"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="4.6" width="5" patternUnits="userSpaceOnUse">
            <path
              d="m3.5 2.85c0.268 1.82e-4 0.525-0.106 0.716-0.296 0.187-0.19 0.296-0.445 0.297-0.713l5.7e-4 -0.836c1.82e-4 -0.268-0.109-0.525-0.296-0.716-0.19-0.19-0.447-0.296-0.715-0.297l-3.5-0.0024-0.0019 2.85z"
              fill="#d1c479"
              stroke-width="3.11"
            />
          </pattern>
          <pattern id="small-pin-pattern" height="4.6" width="2.5" patternUnits="userSpaceOnUse">
            <path
              d="m1.4 1.32c0-0.138-0.0547-0.271-0.153-0.37-0.098-0.0965-0.23-0.153-0.368-0.153h-0.432c-0.138 0-0.271 0.0563-0.37 0.153-0.098 0.098-0.153 0.231-0.153 0.37v1.81h1.47z"
              fill="#f5f9f0"
              stroke-width="1.61"
            />
          </pattern>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <!-- Board -->
        <path
          d="m7.56 0c-4.19 0-7.56 3.37-7.56 7.56v181c0 4.19 3.37 7.56 7.56 7.56h91.5c4.19 0 7.56-3.37 7.56-7.56v-181c0-4.19-3.37-7.56-7.56-7.56zm1.11 2.5a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.9 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm3.75 15.8a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 0.438a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.15a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.8 0.344a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.27a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.24a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0.0762 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 0.0371a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.422a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.115a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.4 9.54a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.346a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm3.79 24.7a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.7 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- ESP32 Chip -->
        <rect transform="translate(85,34)" width="4.8" height="55" fill="url(#pin-pattern)"></rect>
        <rect
          transform="translate(20.5,87) rotate(180)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect
          transform="translate(80,98) rotate(90)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect x="20" y="24.8" width="65.6" height="73.3" fill="#808080" fill-rule="evenodd" />

        <!-- Regulator -->
        <g fill="#ececec" fill-rule="evenodd">
          <rect x="19.3" y="143" width="7.21" height="11.5" />
          <rect x="39.8" y="139" width="6.59" height="3.07" />
          <rect x="40" y="147" width="6.59" height="3.07" />
          <rect x="40.2" y="156" width="6.59" height="3.07" />
        </g>
        <rect x="26.3" y="137" width="14" height="24.7" fill="#4d4d4d" fill-rule="evenodd" />

        <!-- Buttons -->
        <g stroke-width="1.24">
          <rect x="77.6" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="83.2" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m80.7 190h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m80.7 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="81" y="190" width="5.23" height="2.59" />
            <rect x="81" y="173" width="5.23" height="2.59" />
            <path
              d="m84.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m81.8 190c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>
        <g stroke-width="1.24">
          <rect x="17.7" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="23.3" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m20.8 189h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m20.8 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="21" y="189" width="5.23" height="2.59" />
            <rect x="21" y="172" width="5.23" height="2.59" />
            <path
              d="m24.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m21.9 189c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- USB Connection -->
        <path
          d="m66.4 197 1.06 2.24c0.0651 0.142 0.0731 0.302 0.0207 0.448-0.0525 0.147-0.16 0.266-0.301 0.332-0.14 0.0665-0.302 0.0744-0.448 0.022-0.146-0.0525-0.266-0.16-0.332-0.301l-0.724-1.54-3e-3 0.207c-6e-3 0.488-0.206 0.955-0.556 1.3-0.35 0.342-0.821 0.529-1.31 0.522l-22.2-0.29c-0.489-6e-3 -0.955-0.206-1.3-0.556-0.341-0.35-0.529-0.821-0.522-1.31l3e-3 -0.207-0.764 1.52c-0.0701 0.14-0.192 0.244-0.34 0.292-0.147 0.0486-0.307 0.0365-0.446-0.0336l-1e-3 -1e-5c-0.138-0.0701-0.244-0.192-0.292-0.34-0.0486-0.147-0.0365-0.307 0.0336-0.447l1.11-2.21-0.602-8e-3 0.269-20.6 28.2 0.369-0.269 20.6z"
          fill="#cecccb"
          stroke-width="1.26"
        />
        <path
          d="m60.7 177-0.0236 1.8c-7.9e-4 0.0607 0.0301 0.116 0.0802 0.148 0.522 0.329 3.38 2.12 3.38 2.12l-0.0217 1.66-1.74-0.0227-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.66-0.0217 0.0413-3.16c2e-3 -0.136-0.0496-0.265-0.143-0.361-0.0948-0.096-0.223-0.151-0.357-0.152l-1.58-0.0207-0.0172 1.31-6.46-0.0845 0.0172-1.31-1.58-0.0207c-0.134-2e-3 -0.264 0.0496-0.36 0.143-0.0973 0.0936-0.152 0.221-0.154 0.357l-0.0413 3.16-1.66-0.0217-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.74-0.0228 0.0217-1.66s2.91-1.73 3.43-2.03c0.0522-0.0309 0.0833-0.0848 0.0841-0.146l0.0236-1.8z"
          fill="#989898"
          stroke-width="1.26"
        />

        <!-- LEDs -->
        <g stroke-width="1.44">
          <rect x="35" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="35" y="111" width="3.83" height="5.31" fill="#f5ecde" />
          ${e&&k`<circle cx="37" cy="112.5" r="4" fill="red" filter="url(#ledFilter)" />`}

          <rect x="69.5" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="69.5" y="110" width="3.83" height="5.31" fill="#f5ecde" />
          ${r&&k`<circle cx="71.5" cy="112.5" r="4" fill="blue" filter="url(#ledFilter)" />`}
        </g>

        <!-- Small Chip-->
        <rect
          transform="translate(69,137)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(82.8,160.5) rotate(180)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(87.2,142) rotate(90)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(64,155.8) rotate(270)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect x="66.9" y="140" width="17.4" height="17.4" fill="#333" stroke-width="1.61" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px" transform="rotate(270)">
          <tspan x="-162.21" y="12.285">VIN</tspan>
          <tspan x="-153.37" y="12.317">GND</tspan>
          <tspan x="-143.03" y="12.269">D13</tspan>
          <tspan x="-132.81" y="12.130">D12</tspan>
          <tspan x="-123.10" y="12.514">D14</tspan>
          <tspan x="-113.82" y="12.481">D27</tspan>
          <tspan x="-103.55" y="12.580">D26</tspan>
          <tspan x="-94.204" y="12.509">D25</tspan>
          <tspan x="-84.482" y="12.632">D33</tspan>
          <tspan x="-74.139" y="12.294">D32</tspan>
          <tspan x="-64.263" y="12.750">D35</tspan>
          <tspan x="-54.385" y="12.631">D34</tspan>
          <tspan x="-44.529" y="12.468">VN</tspan>
          <tspan x="-35.205" y="12.546">VP</tspan>
          <tspan x="-25.439" y="12.846">EN</tspan>
          <tspan x="-163.01" y="95.712">3V3</tspan>
          <tspan x="-153.64" y="95.392">GND</tspan>
          <tspan x="-142.86" y="95.431">D15</tspan>
          <tspan x="-131.36" y="95.296">D2</tspan>
          <tspan x="-122.53" y="95.505">D4</tspan>
          <tspan x="-114.75" y="95.613">RX2</tspan>
          <tspan x="-104.84" y="95.442">TX2</tspan>
          <tspan x="-93.899" y="95.430">D5</tspan>
          <tspan x="-85.460" y="95.585">D18</tspan>
          <tspan x="-75.415" y="95.747">D19</tspan>
          <tspan x="-65.796" y="95.687">D21</tspan>
          <tspan x="-55.802" y="95.818">RX0</tspan>
          <tspan x="-45.850" y="95.613">TX0</tspan>
          <tspan x="-36.582" y="96.012">D22</tspan>
          <tspan x="-26.250" y="95.903">D23</tspan>
        </text>
        <text x="30" y="59" fill="#cecccb" font-family="sans-serif" font-size="15px">ESP32</text>

        <!-- Antenna -->
        <path
          d="m24.3 22.1v-18.8h8v11.5h10.2v-11h8.5v10.5h10v-10.5h17.8v20.2"
          fill="none"
          stroke="#4f4c48"
          stroke-width="1px"
        />
        <path d="m69.7 4.16v19.5" fill="none" stroke="#4f4c48" stroke-width="1px" />
      </svg>
    `}},"hc-sr04":class extends O{pinInfo=[{name:"VCC",x:71.3,y:94.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"TRIG",x:81.3,y:94.5,signals:[]},{name:"ECHO",x:91.3,y:94.5,signals:[]},{name:"GND",x:101.3,y:94.5,signals:[{type:"power",signal:"GND"}]}];render(){return k`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 45 25"
        height="25mm"
        width="45mm"
        font-family="monospace"
      >
        <defs>
          <pattern patternUnits="userSpaceOnUse" width="2" height="2" id="checkerboard">
            <path d="M0 0h1v1H0zM1 1h1v1H1z" />
          </pattern>
          <radialGradient id="grad1" cx="8.96" cy="10.04" r="3.58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#777" offset="0" />
            <stop stop-color="#b9b9b9" offset="1" />
          </radialGradient>
          <g id="sensor-unit">
            <circle cx="8.98" cy="10" r="8.61" fill="#dcdcdc" />
            <circle cx="8.98" cy="10" r="7.17" fill="#222" />
            <circle cx="8.98" cy="10" r="5.53" fill="#777" fill-opacity=".992" />
            <circle cx="8.98" cy="10" r="3.59" fill="url(#grad1)" />
            <circle cx="8.99" cy="10" r=".277" fill="#777" fill-opacity=".818" />
            <circle cx="8.98" cy="10" r="5.53" fill="url(#checkerboard)" opacity=".397" />
          </g>
        </defs>
        <path
          d="M0 0v20.948h45V0zm1.422.464a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zM1.422 18.484a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1z"
          fill="#456f93"
        />
        <path
          d="M15.293 5.888l2.934-2.934v3.124l2.944 2.943v10.143M23.269 19.037v-2.473l-.966-.965v-12.5l2.577 1.488 4.741 4.741"
          fill="none"
          stroke="#355a7c"
          stroke-width=".858"
        />
        <use xlink:href="#sensor-unit" />
        <use xlink:href="#sensor-unit" x="27.12" />
        <g fill="none" stroke="#505132" stroke-width=".368">
          <circle cx="43.4" cy="1.46" r="1" />
          <circle cx="43.4" cy="19.5" r="1" />
          <circle cx="1.43" cy="1.46" r="1" />
          <circle cx="1.43" cy="19.5" r="1" />
        </g>
        <rect
          ry="2.07"
          y=".626"
          x="17.111"
          height="4.139"
          width="10.272"
          fill="#878787"
          stroke="#424242"
          stroke-width=".368"
        />
        <g fill="black">
          <rect x="17.87" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="20.41" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="22.95" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="25.49" y="18" ry=".568" width="2.25" height="2.271" />
        </g>
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="18.61" y="19" width=".75" height="7" rx=".2" />
          <rect x="21.15" y="19" width=".75" height="7" rx=".2" />
          <rect x="23.69" y="19" width=".75" height="7" rx=".2" />
          <rect x="26.23" y="19" width=".75" height="7" rx=".2" />
        </g>
        <text font-weight="400" font-size="2.2" fill="#e6e6e6" stroke-width=".055">
          <tspan y="8" x="17.6">HC-SR04</tspan>
        </text>
        <text
          transform="rotate(-90)"
          font-weight="400"
          font-size="1.55"
          fill="#e6e6e6"
          stroke-width=".039"
        >
          <tspan x="-17.591" y="19.561">VCC</tspan>
          <tspan x="-17.591" y="22.101">TRIG</tspan>
          <tspan x="-17.591" y="24.641">ECHO</tspan>
          <tspan x="-17.591" y="27.181">GND</tspan>
        </text>
      </svg>
    `}},hx711:class extends O{type;pinInfo=[{name:"VCC",y:55,x:7,number:1,signals:[F()]},{name:"DT",y:36.3,x:7,number:2,signals:[]},{name:"SCK",y:46.2,x:7,number:3,signals:[]},{name:"GND",y:26.5,x:7,number:4,signals:[R()]}];get dimension(){switch(this.type){case"50kg":default:return{width:580,height:430};case"5kg":return{width:507,height:269};case"gauge":return{width:509,height:200}}}static get styles(){return B`
      text {
        user-select: none;
      }
    `}renderSensor(){switch(this.type){case"gauge":return k`
       <!-- Gauge Pressure Sensor -->
       <g
         transform="translate(412.5 99.5) scale(-1 1) translate(-94.5 -56.5)">
         <path d="m53.5 56.5l135-56" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 56.5l133-33" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m52.5 56.5l133-7" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m51.5 56.5l136 18" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <path
           d="m50.5 113c-14.636 0-26.5-25.296-26.5-56.5s11.864-56.5 26.5-56.5 26.5 25.296 26.5 56.5-11.864 56.5-26.5 56.5zm-1-88c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7zm0 77c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m0 54.1l33-5.1v17l-33-5.1v-6.8z" fill="#D8D8D8" stroke="#979797" />
         <circle cx="50" cy="57" r="20" fill="#D8D8D8" stroke="#979797" />
         <text
           transform="translate(50 56.5) scale(-1 1) translate(-50 -56.5)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="16"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="38.4414062" y="62">GP</tspan>
         </text>
       </g>`;case"5kg":return k`
       <!-- 5kg Load Sensor -->
       <g
         transform="translate(413 133.5) scale(-1 1) translate(-94 -133.5)">
         <path
           d="m0.5 0.5v266h62v-266h-62zm31 123c-12.698 0-23-9.8445-23-22 0-12.155 10.302-22 23-22s23 9.8445 23 22c0 12.155-10.302 22-23 22zm0 57c-12.698 0-23-9.8445-23-22s10.302-22 23-22 23 9.8445 23 22-10.302 22-23 22z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m53.5 51.5l133-10" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 57.5l131 8" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m55.5 64.5l130 27" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m56.5 71.5l131 43" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <rect x="3.5" y="43.5" width="57" height="33" rx="11" fill="url(#e)" stroke="#979797" />
         <text
           transform="translate(28.5 245) scale(-1 1) translate(-28.5 -245)"
           fill="#FBFBFB"
           font-family="Arial-ItalicMT, Arial"
           font-size="14"
           font-style="italic"
         >
           <tspan x="17.2138672" y="250">5kg</tspan>
         </text>
       </g>`;default:return k`
       <!-- 50kg Load Sensor -->
       <g
         transform="translate(448 212) scale(-1 1) translate(-131 -212)"
       >
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 106)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 212)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <g transform="translate(0 318)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path d="m128.5 53.5h82" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 68.5h60" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5h50" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 94.5h48" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5h36" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 371.25h94" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5v253" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 265.25h83" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 96.5v169" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 71.5v88" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5v9" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 159.25h71" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.5v212" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m147.25 58v212" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m162.25 48v317.5" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.25 154.5v104" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m129 376.23h6" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.15h-8" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 58.15h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 48.208h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 154.1h-52" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 260.2h-51" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 366.2h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 270.25h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <text
           transform="translate(94.5 265) scale(-1 1) translate(-94.5 -265)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="14"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="87.1137695" y="270">A-</tspan>
           <tspan x="87.5" y="164">E-</tspan>
           <tspan x="85.7431641" y="57">E+</tspan>
           <tspan x="86.2431641" y="377">A+</tspan>
         </text>
       </g>`}}render(){let{width:e,height:r}=this.dimension;return k`
      <svg
        width="${e/10}mm"
        height="${r/10}mm"
        viewBox="0 0 ${e} ${r}"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="f"
            d="m317 74c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 23c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-120c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm-298 98c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm9.5 115c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm0-156c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm-28.5-34h340v200h-340v-200z"
          />
          <path id="d" d="m0 0h340v200h-340v-200z" />
          <mask id="g" x="0" y="0" width="340" height="200" fill="white">
            <use xlink:href="#d" />
          </mask>
          <linearGradient id="a" y1="50%" y2="50%">
            <stop stop-color="#767676" offset="0" />
            <stop stop-color="#FFFEDF" offset="1" />
          </linearGradient>
          <radialGradient id="b" r="100%">
            <stop stop-color="#8A8A8A" offset="0" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="e"
            r="100%"
            gradientTransform="translate(.5 .5) scale(.58621 1) rotate(90) translate(-.5 -.5)"
          >
            <stop stop-color="#fff" offset="0" />
            <stop stop-color="#E7E7E7" offset="1" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="c" fill="white">
            <use xlink:href="#f" />
          </mask>
          <g
            fill="#1C8944"
            mask="url(#c)"
            stroke="#ADA216"
            stroke-dasharray="1,1"
            stroke-opacity=".53643"
            stroke-width="4"
          >
            <use mask="url(#g)" xlink:href="#d" />
          </g>
          <g fill="#D2CDC3" mask="url(#c)">
            <g transform="translate(10 34)">
              <rect y="25" width="17" height="18" />
              <rect x="298" width="17" height="18" />
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(6 27)">
              <rect x="298" y="1" width="26" height="147" stroke="#fff" stroke-width="2" />
              <rect x="1" y="25" width="25" height="102" stroke="#fff" stroke-width="2" />
              <text
                font-family="Arial-BoldItalicMT, Arial"
                font-size="14"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="28.4448242" y="45" fill="#FBFBFB">GND</tspan>
                <tspan x="28.1689453" y="69" fill="#FBFBFB">DT</tspan>
                <tspan x="27.2207031" y="94" fill="#FBFBFB">SCK</tspan>
                <tspan x="28.2207031" y="119" fill="#FBFBFB">VCC</tspan>
                <tspan x="274" y="45" fill="#FBFBFB">E-</tspan>
                <tspan x="274.492188" y="18" fill="#FBFBFB">E+</tspan>
                <tspan x="274.058594" y="117" fill="#FBFBFB">B-</tspan>
                <tspan x="274.050781" y="140" fill="#FBFBFB">B+</tspan>
                <tspan x="274.058594" y="69" fill="#FBFBFB">A-</tspan>
                <tspan x="274.050781" y="94" fill="#FBFBFB">A+</tspan>
                <tspan x="98.2929688" y="160" fill="#FBFBFB">Load Cell Amp</tspan>
                <tspan x="126.132812" y="140" fill="#FBFBFB">HX711</tspan>
              </text>
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(122 28)">
              <rect
                x="14.5"
                y=".5"
                width="36"
                height="98"
                fill="#434341"
                fill-rule="evenodd"
                stroke="#3B3939"
              />
              <rect x="51" y="2" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="15" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="27" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="40" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="52" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="65" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="77" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="90" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect
                transform="translate(7 5) scale(-1 1) translate(-7 -5)"
                y="2"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 18) scale(-1 1) translate(-7 -18)"
                y="15"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 31) scale(-1 1) translate(-7 -31)"
                y="28"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 43) scale(-1 1) translate(-7 -43)"
                y="40"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 56) scale(-1 1) translate(-7 -56)"
                y="53"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 68) scale(-1 1) translate(-7 -68)"
                y="65"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 80) scale(-1 1) translate(-7 -80)"
                y="77"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 93) scale(-1 1) translate(-7 -93)"
                y="90"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <circle
                cx="20"
                cy="5"
                r="3"
                fill="#211919"
                fill-opacity=".54978"
                fill-rule="evenodd"
                stroke="#000"
              />
              <text
                transform="translate(27 52) rotate(-90) translate(-27 -52)"
                fill="none"
                font-family="Arial-BoldItalicMT, Arial"
                font-size="12"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="9.09960938" y="56" fill="#BBBBBB">HX711</tspan>
              </text>
            </g>
          </g>
          ${this.renderSensor()}
        </g>
      </svg>
    `}},"ks2e-m-dc5":class extends O{pinInfo=[{name:"NO2",x:5.5,y:5.1,signals:[],number:8},{name:"NC2",x:25,y:5.1,signals:[],number:6},{name:"P2",x:45,y:5.1,signals:[],number:4},{name:"COIL2",x:74,y:5.1,signals:[{type:"power",signal:"GND"}],number:1},{name:"NO1",x:5.5,y:32.7,signals:[],number:9},{name:"NC1",x:25,y:32.7,signals:[],number:11},{name:"P1",x:45,y:32.7,signals:[],number:13},{name:"COIL1",x:74,y:32.7,signals:[],number:16}];render(){return k`
      <svg
        width="21mm"
        height="10mm"
        version="1.1"
        viewBox="0 0 21 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke-width=".4" fill="#f7b93c" stroke="#dda137">
          <rect x=".20" y=".20" width="20.6" height="9.61" ry=".58" />
          <rect x="20.2" y="4.5" width=".40" height="1" fill="#dda137" />
        </g>
        <g fill="none" stroke="#dda137" stroke-width=".47">
          <ellipse cx="1.6" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="6.68" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="11.76" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="19.38" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="1.6" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="6.68" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="11.76" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="19.38" cy="8.65" rx=".76" ry=".76" />
        </g>
        <text fill="#4a3510" font-family="sans-serif" font-size="2.8222px">
          <tspan x="1.07" y="6.03">KS2E-M-DC5</tspan>
        </text>
      </svg>
    `}},"ky-040":class extends O{angle=0;stepSize=18;pressed=!1;arrowTimer=null;static get styles(){return B`
      svg {
        user-select: none;
      }

      .arrow-container {
        cursor: pointer;
      }

      svg:hover .arrow {
        fill: #666;
        stroke: #666;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .arrow-container:hover .arrow {
        fill: white;
      }

      svg:hover .handle:hover {
        stroke: #ccc;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      svg:hover .handle.active {
        fill: white;
        stroke: white;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .handle {
        cursor: pointer;
      }

      g[tabindex]:focus {
        outline: none;
      }

      g[tabindex]:focus + .focus-indicator {
        opacity: 1;
      }
    `}pinInfo=[{name:"CLK",y:7.9,x:116,number:1,signals:[]},{name:"DT",y:17.4,x:116,number:2,signals:[]},{name:"SW",y:27,x:116,number:3,signals:[]},{name:"VCC",y:36.3,x:116,number:4,signals:[F()]},{name:"GND",y:45.5,x:116,number:5,signals:[R()]}];render(){return k`
      <svg
        width="30.815mm"
        height="18.63mm"
        version="1.1"
        viewBox="0 0 116 70.4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x1="158"
            x2="170"
            y1="86.5"
            y2="86.5"
            gradientTransform="translate(-75.1 -60.1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4d4d4d" offset="0" />
            <stop stop-color="#4d4d4d" stop-opacity="0" offset="1" />
          </linearGradient>
        </defs>

        <!-- Board -->
        <path
          d="m0 0v70.4h99v-70.4zm18 56.5a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5zm63.8 0.213a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- Rotator -->
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="9.05" y="17.4" width="6.95" height="2.47" rx=".756" />
          <rect x="9.15" y="26.5" width="6.95" height="2.47" rx=".756" />
          <rect x="9.05" y="36.1" width="6.95" height="2.47" rx=".756" />
        </g>

        <g tabindex="0">
          <rect x="12.2" y="8.05" width="48.4" height="41" rx="7.12" fill="#e6e6e6" />

          <circle cx="36.6" cy="28.5" r="13.5" fill="#666" />
          <rect x="32.5" y="7.87" width="7.42" height="41.5" fill="#666" />

          <!-- Handle -->
          <path
            transform="rotate(${this.angle}, 36.244, 28.5)"
            d="m36.3 21.4a7.03 7.14 0 0
              0-3.74 1.1v12.1a7.03 7.14 0 0 0 3.74 1.1 7.03 7.14 0 0 0 7.03-7.14 7.03 7.14 0 0
              0-7.03-7.14z"
            fill="#ccc"
            stroke="#060606"
            stroke-width=".3"
            class="handle ${this.pressed?"active":""}"
           
           
           
          />

          <!-- Counter Clockwise Arrow -->
          <g
            class="arrow-container"
           
           
           
           
          >
            <circle cx="20" cy="43" r="12" fill="red" opacity="0" />
            <path
              d="m21 44.5c-5.17-1.78-7.55-5.53-6.6-11.2 0.0662-0.327 0.107-0.938 0.272-1.06 0.204-0.137 0.312-0.116 0.39-0.1 0.0775 0.0152 0.139 0.0274 0.189 0.102 0.846 3.81 3.13 6.84 6.57 7.59 0.304-0.787 0.461-3.32 0.826-3.24 0.428 0.0848 4.31 5.73 4.93 6.65-0.978 0.839-6.07 4.44-6.95 4.28 0 0 0.206-2.19 0.362-2.96z"
              fill="#b3b3b3"
              stroke="#000"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>

          <!-- Clockwise Arrow -->
          <g
            class="arrow-container"
           
           
           
           
          >
            <circle cx="20" cy="15" r="12" fill="red" opacity="0" />
            <path
              d="m21.2 12.1c-5.17 1.78-7.55 5.53-6.6 11.2 0.0662 0.327 0.107 0.938 0.272 1.06 0.204 0.137 0.312 0.116 0.39 0.1 0.0775-0.0152 0.139-0.0274 0.189-0.102 0.846-3.81 3.13-6.84 6.57-7.59 0.304 0.787 0.461 3.32 0.826 3.24 0.428-0.0848 4.31-5.73 4.93-6.65-0.978-0.839-6.07-4.44-6.95-4.28 0 0 0.206 2.19 0.362 2.96z"
              fill="#b3b3b3"
              stroke="#022"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>
        </g>

        <!-- Focus indicator for the group above-->
        <rect
          class="focus-indicator"
          x="10.2"
          y="6.05"
          width="52.4"
          height="45"
          rx="7.12"
          stroke="white"
          stroke-width="2"
          fill="none"
          opacity="0"
        />

        <!-- Chip Pins -->
        <rect
          x="83"
          y="1.72"
          width="10.9"
          height="49.2"
          fill="url(#a)"
          fill-rule="evenodd"
          opacity=".65"
          stroke="#fff"
          stroke-width="1.16"
        />
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="86.9" y="6.54" width="28.9" height="2.47" rx=".877" />
          <rect x="86.8" y="15.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="25.6" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="34.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.6" y="44.1" width="28.9" height="2.47" rx=".877" />
        </g>
        <g fill="#ffffff" font-family="sans-serif" letter-spacing="0px" word-spacing="0px">
          <text x="65.55" y="12.13" font-size="7.29px" fill="#ffffff" stroke-width=".182">CLK</text>
          <text x="65.02" y="21.93" font-size="7.44px" fill="#ffffff">DT</text>
          <text x="65.29" y="31.26" font-size="7.54px" fill="#ffffff">SW</text>
          <text x="70.42" y="39.99" font-size="6.82px" fill="#ffffff">+</text>
          <text x="64.31" y="49.74" font-size="7.59px" fill="#ffffff">GND</text>
        </g>
      </svg>
    `}clockwiseStep(){this.angle=(this.angle+this.stepSize)%360,this.dispatchEvent(new InputEvent("rotate-cw"))}counterClockwiseStep(){this.angle=(this.angle-this.stepSize+360)%360,this.dispatchEvent(new InputEvent("rotate-ccw"))}press(){this.pressed||(this.dispatchEvent(new InputEvent("button-press")),this.pressed=!0)}release(){this.pressed&&(this.dispatchEvent(new InputEvent("button-release")),this.pressed=!1)}counterclockwiseArrowPress(){this.arrowTimer=setInterval(()=>{this.counterClockwiseStep()},300)}clockwiseArrowPress(){this.arrowTimer=setInterval(()=>{this.clockwiseStep()},300)}arrowRelease(){null!=this.arrowTimer&&(clearInterval(this.arrowTimer),this.arrowTimer=null)}keydown(e){switch(e.key){case"ArrowUp":case"ArrowRight":this.clockwiseStep(),e.preventDefault();break;case"ArrowDown":case"ArrowLeft":this.counterClockwiseStep(),e.preventDefault();break;case" ":this.press(),e.preventDefault()}}keyup(e){" "===e.key&&(e.preventDefault(),this.release())}},lcd1602:class extends O{color="black";background="green";characters=new Uint8Array(32);font=W;cursor=!1;blink=!1;cursorX=0;cursorY=0;backlight=!0;pins="full";screenOnly=!1;numCols=16;numRows=2;get text(){return Array.from(this.characters).map(e=>String.fromCharCode(e)).join("")}set text(e){this.characters=new Uint8Array(e.split("").map(e=>e.charCodeAt(0)))}static get styles(){return B`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}get panelHeight(){return 5.75*this.rows}get pinInfo(){let{panelHeight:e}=this,r=87.5+3.78*e;return"i2c"===this.pins?[{name:"GND",x:4,y:32,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:4,y:41.5,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"SDA",x:4,y:51,number:3,signals:[E("SDA")]},{name:"SCL",x:4,y:60.5,number:4,signals:[E("SCL")]}]:[{name:"VSS",x:32,y:r,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VDD",x:41.5,y:r,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"V0",x:51.5,y:r,number:3,signals:[]},{name:"RS",x:60.5,y:r,number:4,signals:[]},{name:"RW",x:70.5,y:r,number:5,signals:[]},{name:"E",x:80,y:r,number:6,signals:[]},{name:"D0",x:89.5,y:r,number:7,signals:[]},{name:"D1",x:99.5,y:r,number:8,signals:[]},{name:"D2",x:109,y:r,number:9,signals:[]},{name:"D3",x:118.5,y:r,number:10,signals:[]},{name:"D4",x:128,y:r,number:11,signals:[]},{name:"D5",x:137.5,y:r,number:12,signals:[]},{name:"D6",x:147,y:r,number:13,signals:[]},{name:"D7",x:156.5,y:r,number:14,signals:[]},{name:"A",x:166.5,y:r,number:15,signals:[]},{name:"K",x:176,y:r,number:16,signals:[]}]}get cols(){return this.numCols}get rows(){return this.numRows}update(e){e.has("pins")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}path(e){let r=[],{cols:t}=this;for(let a=0;a<e.length;a++){let n=a%t*3.55,s=5.95*Math.floor(a/t);for(let t=0;t<8;t++){let i=this.font[8*e[a]+t];for(let e=0;e<5;e++)if(i&1<<e){let a=(n+.6*e).toFixed(2),i=(s+.7*t).toFixed(2);r.push(`M ${a} ${i}h0.55v0.65h-0.55Z`)}}}return r.join(" ")}renderCursor(){let{cols:e,rows:r,cursor:t,cursorX:a,cursorY:n,blink:s,color:i}=this,l=12.45+3.55*a,o=12.55+5.95*n;if(a<0||a>=e||n<0||n>=r)return null;let u=[];return s&&u.push(k`
        <rect x="${l}" y="${o}" width="2.95" height="5.55" fill="${i}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `),t&&u.push(k`<rect x="${l}" y="${o+.7*7}" width="2.95" height="0.65" fill="${i}" />`),u}renderI2CPins(){return k`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text fill="white" font-size="1.5px" font-family= "monospace">
      <tspan y="6.8" x="0.7" fill="white">1</tspan>
      <tspan y="8.9" x="2.3" fill="white">GND</tspan>
      <tspan y="11.4" x="2.3" fill="white">VCC</tspan>
      <tspan y="14" x="2.3" fill="white">SDA</tspan>
      <tspan y="16.6" x="2.3" fill="white">SCL</tspan>
      </text>
    `}renderPins(e){return k`
      <g transform="translate(0, ${e+21.1})">
        <rect x="7.55" y="1" height="2.5" width="40.64" fill="url(#pins)" />
        <text fill="white" font-size="1.5px" font-family= "monospace">
          <tspan x="6" y="2.7">1</tspan>
          <tspan x="7.2" y="0.7">VSS</tspan>
          <tspan x="9.9" y="0.7">VDD</tspan>
          <tspan x="12.7" y="0.7">V0</tspan>
          <tspan x="15.2" y="0.7">RS</tspan>
          <tspan x="17.8" y="0.7">RW</tspan>
          <tspan x="20.8" y="0.7">E</tspan>
          <tspan x="22.7" y="0.7">D0</tspan>
          <tspan x="25.3" y="0.7">D1</tspan>
          <tspan x="27.9" y="0.7">D2</tspan>
          <tspan x="30.4" y="0.7">D3</tspan>
          <tspan x="33" y="0.7">D4</tspan>
          <tspan x="35.6" y="0.7">D5</tspan>
          <tspan x="38.2" y="0.7">D6</tspan>
          <tspan x="40.8" y="0.7">D7</tspan>
          <tspan x="43.6" y="0.7">A</tspan>
          <tspan x="46.2" y="0.7">K</tspan>
          <tspan x="48" y="2.7">16</tspan>
        </text>
      </g>
    `}render(){let{color:e,characters:r,background:t,pins:a,panelHeight:n,cols:s}=this,i=.5*!this.backlight,l=t in _?_[t]:_,o=3.5125*s,u=this.screenOnly?o:o+23.8,c=this.screenOnly?n:n+24.5,d=this.screenOnly?`12.45 12.55 ${o} ${n}`:`0 0 ${u} ${c}`;return k`
      <svg
        width="${u}mm"
        height="${c}mm"
        version="1.1"
        viewBox="${d}"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="${u}" height="${c}" fill="#087f45" />
        <rect x="4.95" y="5.7" width="${o+15}" height="${n+13.7}" />
        <rect
          x="7.55"
          y="10.3"
          width="${o+9.8}"
          height="${n+4.5}"
          rx="1.5"
          ry="1.5"
          fill="${l}"
        />
        <rect
          x="7.55"
          y="10.3"
          width="${o+9.8}"
          height="${n+4.5}"
          rx="1.5"
          ry="1.5"
          opacity="${i}"
        />
        ${"i2c"===a?this.renderI2CPins():null}
        ${"full"===a?this.renderPins(n):null}
        <rect
          x="${12.45}"
          y="${12.55}"
          width="${o}"
          height="${n}"
          fill="url(#characters)"
        />
        <path
          d="${this.path(r)}"
          transform="translate(${12.45}, ${12.55})"
          fill="${e}"
        />
        ${this.renderCursor()}
      </svg>
    `}},led:class extends O{value=!1;brightness=1;color="red";lightColor=null;label="";flip=!1;get pinInfo(){return[{name:"A",x:this.flip?15:25,y:42,signals:[],description:"Anode"},{name:"C",x:this.flip?25:15,y:42,signals:[],description:"Cathode"}]}static get styles(){return B`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `}update(e){e.has("flip")&&this.dispatchEvent(new CustomEvent("pininfo-change")),super.update(e)}renderSVG(){let{color:e,lightColor:r,flip:t}=this,a=r||X[e?.toLowerCase()]||e,n=this.brightness?.3+.7*this.brightness:0,s=this.value&&this.brightness>Number.EPSILON;return k`<svg
      width="40"
      height="50"
      transform="scale(${t?-1:1} 1)"
      version="1.2"
      viewBox="-10 -5 35.456 39.618"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
        <feGaussianBlur stdDeviation="2" />
      </filter>
      <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <rect x="2.5099" y="20.382" width="2.1514" height="9.8273" fill="#8c8c8c" />
      <path
        d="m12.977 30.269c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
        fill="#8c8c8c"
      />

      <path
        d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
        opacity=".3"
      />
      <path
        d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
        fill="#e6e6e6"
        opacity=".5"
      />
      <path
        d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
        fill="#d1d1d1"
        opacity=".9"
      />
      <g>
        <path
          d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          opacity=".7"
        />
        <path
          d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
          opacity=".25"
        />
        <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
      </g>
      <polygon
        points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
        fill="#666666"
      />
      <polygon
        points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
        fill="#666666"
      />
      <path
        d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
        fill="${e}"
        opacity=".65"
      />
      <g fill="#ffffff">
        <path
          d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
          opacity=".5"
        />
        <path
          d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
          opacity=".5"
        />
        <path
          d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
          opacity=".5"
        />
      </g>
      <g class="light" style="display: ${s?"":"none"}">
        <ellipse
          cx="8"
          cy="10"
          rx="10"
          ry="10"
          fill="${a}"
          filter="url(#light2)"
          style="opacity: ${n}"
        ></ellipse>
        <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
        <ellipse
          cx="8"
          cy="10"
          rx="3"
          ry="3"
          fill="white"
          filter="url(#light1)"
          style="opacity: ${n}"
        ></ellipse>
      </g>
    </svg> `}render(){return k`
      <div class="led-container">
        ${this.renderSVG()}
        <span class="led-label">${this.label}</span>
      </div>
    `}},mpu6050:class extends O{led1=!1;pinInfo=[{name:"INT",x:7.28,y:5.78,signals:[]},{name:"AD0",x:16.9,y:5.78,signals:[]},{name:"XCL",x:26.4,y:5.78,signals:[]},{name:"XDA",x:36,y:5.78,signals:[]},{name:"SDA",x:45.6,y:5.78,signals:[E("SDA")]},{name:"SCL",x:55.2,y:5.78,signals:[E("SCL")]},{name:"GND",x:64.8,y:5.78,signals:[R()]},{name:"VCC",x:74.4,y:5.78,signals:[F()]}];render(){let{led1:e}=this;return k`
      <svg
        width="21.6mm"
        height="16.2mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 81.6 61.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2.1" width="14" patternUnits="userSpaceOnUse">
            <path
              d=" m2.09 1.32c0.124 0 0.243-0.049 0.331-0.137 0.086-0.086 0.137-0.206 0.137-0.33v-0.387c0-0.124-0.050-0.242-0.137-0.33-0.087-0.087-0.207-0.137-0.331-0.137h-1.62v1.32z"
              fill="#f5f9f0"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m81.6 0h-81.6v61.2h81.6zm-10 44.9c3.8 0 6.88 3.08 6.88 6.88 0 3.8-3.08 6.89-6.88 6.89-3.8 0-6.89-3.09-6.89-6.89 0-3.8 3.09-6.88 6.89-6.88zm-61.6 0c3.8 0 6.89 3.08 6.89 6.88 0 3.8-3.09 6.89-6.89 6.89-3.8 0-6.88-3.09-6.88-6.89 0-3.8 3.08-6.88 6.88-6.88zm-2.74-41.9c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8-2.8-1.26-2.8-2.8 1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm-9.58 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8-2.81-1.26-2.81-2.8 1.26-2.81 2.81-2.81zm-9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81z"
          fill="#16619d"
        />

        <!-- Right Chip -->
        <g fill="#fefdf4">
          <rect x="74.5" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="33" width="2.01" height="4.81" />
          <rect x="71.2" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="23.1" width="2.01" height="4.81" />
          <rect x="74.5" y="33" width="2.01" height="4.81" />
        </g>
        <g fill="#31322e">
          <rect x="74.5" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="33" width="2.01" height="2.4" />
          <rect x="71.2" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="25.5" width="2.01" height="2.4" />
          <rect x="74.5" y="33" width="2.01" height="2.4" />
        </g>

        <!-- Resistors -->
        <g fill="#e5e5e5">
          <rect x="12" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="21.3" width="3.83" height="9.3" />
          <rect x="56.5" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="35.6" width="3.83" height="9.3" />
          <rect x="23.3" y="21.3" width="3.83" height="9.3" />
          <rect x="62.2" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="35.8" width="3.83" height="9.3" />
          <rect x="56.9" y="35.8" width="3.83" height="9.3" />
        </g>
        <path d="m76 42.6v-3.13h-7.59v3.13z" fill="#fefdf4" />
        <rect x="23.1" y="35.6" width="3.83" height="9.3" fill="#e5e5e5" />

        <g fill="#26232b">
          <rect x="17.7" y="23.4" width="3.83" height="5.31" />
          <rect x="56.5" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="23.4" width="3.83" height="5.31" />
          <rect x="17.7" y="37.7" width="3.83" height="5.31" />
        </g>
        <g fill="#d8c18d">
          <rect x="23.3" y="23.4" width="3.83" height="5.31" />
          <rect x="62.2" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="37.8" width="3.83" height="5.31" />
          <rect x="56.9" y="37.8" width="3.83" height="5.31" />
          <path d="m74.3 42.6v-3.13h-4.33v3.13z" />
        </g>
        <g>
          <rect x="23.1" y="37.7" width="3.83" height="5.31" fill="#a06352" />
          <rect x="31.8" y="47.1" width="15.6" height="6.03" fill="#f3c338" />
          <rect x="67.3" y="27.9" width="9.76" height="5.28" fill="#010303" />
        </g>

        <!-- MPU6050 Chip -->
        <rect transform="translate(47,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(32.3,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(46.5,40.7) rotate(90)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(32.3,26) rotate(270)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="31.8" y="25.4" width="15.6" height="15.6" />

        <!-- LED -->
        <rect x="12" y="23.4" width="3.83" height="5.31" fill="#f5ecde" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${e&&k`<circle cx="13.9" cy="25.5" r="3.5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- PCB Pins-->
        <g fill="none" stroke="#d0ae88" stroke-width=".648px">
          <circle cx="64.8" cy="5.78" r="2.81" />
          <circle cx="55.2" cy="5.78" r="2.81" />
          <circle cx="45.6" cy="5.78" r="2.81" />
          <circle cx="36" cy="5.78" r="2.81" />
          <circle cx="26.4" cy="5.78" r="2.81" />
          <circle cx="16.9" cy="5.78" r="2.81" />
          <circle cx="7.28" cy="5.78" r="2.81" />
          <circle cx="74.4" cy="5.78" r="2.81" />
        </g>

        <!-- Text -->
        <text
          transform="rotate(90)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.6px"
          x="10.056"
        >
          <tspan x="10.056" y="-6">INT</tspan>
          <tspan x="10.056" y="-15.5">AD0</tspan>
          <tspan x="10.056" y="-25.157">XCL</tspan>
          <tspan x="10.056" y="-34.5">XDA</tspan>
          <tspan x="10.056" y="-44.38">SDA</tspan>
          <tspan x="9.911" y="-54">SCL</tspan>
          <tspan x="10.057" y="-63.54">GND</tspan>
          <tspan x="10.057" y="-73">VCC</tspan>
        </text>
      </svg>
    `}},neopixel:class extends O{r=0;g=0;b=0;pinInfo=[{name:"VDD",y:3.5,x:1,number:1,signals:[F()]},{name:"DOUT",y:14,x:1,number:2,signals:[]},{name:"VSS",y:14,x:21,number:3,signals:[{type:"power",signal:"GND"}]},{name:"DIN",y:3.5,x:21,number:4,signals:[R()]}];render(){let{r:e,g:r,b:t}=this,a=e=>e>.001?.7+.3*e:0,n=Math.max(e,r,t),s=n-Math.min(e,r,t),i=Math.max(1,2-20*s),l=.1+Math.max(2*n-5*s,0),o=e=>{let r;return n?Math.floor(255*Math.min(((r=e/n)>.005?.1+.9*r:0)*i,1)):255},u=`rgb(${o(e)}, ${o(r)}, ${o(t)})`,c=242-(n>.1&&s<.2?Math.floor(50*n*(1-s/.2)):0),d=`rgb(${c}, ${c}, ${c})`;return k`
      <svg
        width="5.6631mm"
        height="5mm"
        version="1.1"
        viewBox="0 0 5.6631 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="light1" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="${Math.max(.1,n)}" />
        </filter>
        <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <rect x=".33308" y="0" width="5" height="5" fill="${d}" />
        <rect x="0" y=".5" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="0" y="3.1" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="5.3" y="3.1" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="5.3" y=".5" width=".35" height=".9" fill="#c3c2c3" />
        <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
        <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
        <g fill="#bfbfbf">
          <path
            d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
          />
          <path
            d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
          />
          <path
            d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
          />
          <path
            d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
          />
        </g>
        <path
          d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
          fill="#666"
        />
        <ellipse
          cx="2.5"
          cy="2.3"
          rx="0.3"
          ry="0.3"
          fill="red"
          opacity=${a(e)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.5"
          cy="3.2"
          rx="0.3"
          ry="0.3"
          fill="green"
          opacity=${a(r)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.3"
          cy="1.45"
          rx="0.3"
          ry="0.3"
          fill="blue"
          opacity=${a(t)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3"
          cy="2.5"
          rx="2.2"
          ry="2.2"
          opacity="${n>.005?l+n*(1-l):0}"
          fill="${u}"
          filter="url(#light2)"
        ></ellipse>
      </svg>
    `}},"pir-motion-sensor":class extends O{pinInfo=[{name:"VCC",y:92,x:36.178,number:1,signals:[F()]},{name:"OUT",y:92,x:45.9175,number:2,signals:[]},{name:"GND",y:92,x:55.6415,number:3,signals:[R()]}];render(){return k`
      <svg
        width="24mm"
        height="24.448mm"
        version="1.1"
        viewBox="0 0 90.7 92.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#c6bf95">
          <path
            d="m54.2 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m44.5 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m34.7 91c0 0.383 0.152 0.749 0.422 1.02s0.637 0.422 1.02 0.422 0.749-0.152 1.02-0.422 0.422-0.636 0.422-1.02v-26.1c0-0.234-0.19-0.423-0.424-0.423h-2.03c-0.234 0-0.424 0.189-0.424 0.423v26.1z"
          />
        </g>
        <path
          d="m90.7 0h-90.7v74.3h90.7zm-5.38 32.1c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78zm-77.1 0c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78z"
          fill="#253674"
        />
        <rect x="14.3" y="1.28" width="65.5" height="65.5" fill="#dde5e3" />
        <rect x="17.1" y="4.14" width="59.8" height="59.8" fill="#d1dfe1" />
        <circle cx="46.7" cy="33.8" r="31" fill="#d3d5d6" />
        <circle cx="46.7" cy="33.8" r="28.2" fill="#d9e1e1" />
        <clipPath id="a">
          <circle cx="52.5" cy="39.2" r="28.2" />
        </clipPath>
        <g transform="translate(-5.81 -5.45)" clip-path="url(#a)" fill="#fbfcfb">
          <path
            d="m52.8 13.7c11.2 2.94 21.3 18.3 21.8 30.5 0 0 6.16-8.84-2.25-20.6-7.05-9.89-19.5-9.87-19.5-9.87z"
          />
          <path
            d="m52.2 64.8c-7.37 0.013-19.8-6.53-22.1-14 0 0-0.102 4.33 6.99 10.2 5.95 4.94 15.1 3.75 15.1 3.75z"
          />
          <g fill="none" stroke="#d2d8d8" stroke-width=".4px">
            <path d="m32.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m49.3 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m65.6 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m81.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
          </g>
        </g>
        <text fill="#ffffff" font-family="sans-serif">
          <tspan x="33.293" y="73.864" font-size="9.88px">+</tspan>
          <tspan x="43.531" y="72.609" font-size="6.38px">D</tspan>
        </text>
        <path d="m57.9 70.8h-4.67v-0.81h4.67z" fill="#fff" />
      </svg>
    `}},potentiometer:class extends O{min=0;max=1023;value=0;step=1;startDegree=-135;endDegree=135;pressed=!1;pageToKnobMatrix=null;pinInfo=[{name:"GND",x:29,y:68.5,number:1,signals:[{type:"power",signal:"GND"}]},{name:"SIG",x:39,y:68.5,number:2,signals:[T(0)]},{name:"VCC",x:49,y:68.5,number:3,signals:[{type:"power",signal:"VCC"}]}];static get styles(){return B`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `}mapToMinMax(e,r,t){return e*(t-r)+r}percentFromMinMax(e,r,t){return(e-r)/(t-r)}renderSVG(){let e=K(0,1,this.percentFromMinMax(this.value,this.min,this.max)),r=(this.endDegree-this.startDegree)*e+this.startDegree;return k`<svg
      role="slider"
      width="20mm"
      height="20mm"
      version="1.1"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      @click="${this.focusInput}"
     
     
     
     
     
     
      style=${Object.entries({"--knob-angle":r+"deg"}).filter(([,e])=>null!=e&&""!==e).map(([e,r])=>`${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}:${r}`).join(";")}
    >
      <defs>
        <filter id="outline">
          <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
        </filter>
      </defs>
      <rect
        x=".15"
        y=".15"
        width="19.5"
        height="19.5"
        ry="1.23"
        fill="#045881"
        stroke="#045881"
        stroke-width=".30"
      />
      <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
      <ellipse
        id="knob"
        cx=${9.91}
        cy=${8.18}
        rx="7.27"
        ry="7.43"
        fill="#e4e8eb"
        stroke-width=".15"
      />
      <rect x="6" y="17" width="8" height="2" fill-opacity="0" stroke="#fff" stroke-width=".30" />
      <g stroke-width=".15">
        <text x="6.21" y="16.6">GND</text>
        <text x="9.2" y="16.63">SIG</text>
        <text x="11.5" y="16.59">VCC</text>
      </g>
      <g fill="#fff" stroke-width=".15">
        <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
        <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
        <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
        <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
      </g>
      <g fill="#b3b1b0" stroke-width=".15">
        <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
        <ellipse cx="10.22" cy="18" rx=".61" ry=".63" />
        <ellipse cx="12.76" cy="18" rx=".61" ry=".63" />
      </g>
      <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
      <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
      <rect x="0" y="9.5" width="1" height="1" fill="none" id="firefox-workaround" />
    </svg>`}render(){return k`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      ${this.renderSVG()}
    `}focusInput(){let e=this.shadowRoot?.querySelector(".hide-input");e?.focus()}onValueChange(e){let r=e.target;this.updateValue(parseFloat(r.value))}down(e){(0===e.button||window.navigator.maxTouchPoints)&&(this.pressed=!0,e.stopPropagation(),e.preventDefault(),this.updateKnobMatrix())}move(e){let{pressed:r}=this;r&&this.rotateHandler(e)}up(){this.pressed=!1}updateKnobMatrix(){let e=this.shadowRoot?.querySelector("#knob"),r=this.shadowRoot?.querySelector("#firefox-workaround");this.pageToKnobMatrix=e&&r?function(e,r,t){let{userAgent:a}=navigator;if(!(a.indexOf("Epiphany")>=0||a.indexOf("Safari")>=0))return e.getScreenCTM()?.inverse()||null;{let a,n,s,i,l,o,u=e.getCTM(),c=r?.getCTM(),d=r?.getBoundingClientRect(),m=r?.ownerSVGElement?.getBoundingClientRect();if(!d||!m||!c||!u)return null;let p=m.x+m.width/2,h=m.y+m.height/2,f=p-(d.x+d.width/2),g=Math.atan2(h-(d.y+d.height/2),f)/Math.PI*180,b=new DOMMatrix().rotate(g),v=(a=b.transformPoint({x:t.left,y:t.top}),n=b.transformPoint({x:t.right,y:t.top}),s=b.transformPoint({x:t.left,y:t.bottom}),i=b.transformPoint({x:t.right,y:t.bottom}),l=Math.min(a.x,n.x,s.x,i.x),o=Math.min(a.y,n.y,s.y,i.y),new DOMRect(l,o,Math.max(a.x,n.x,s.x,i.x)-l,Math.max(a.y,n.y,s.y,i.y)-o)),x=v.width/d.width,y=v.height/d.height,D=c.inverse().multiply(u);return b.inverse().translate(v.left,v.top).multiply(D.inverse()).scale(x,y).translate(-d.left,-d.top)}}(e,r,new DOMRect(0,9.5,1,1)):null}rotateHandler(e){if(e.stopPropagation(),e.preventDefault(),!this.pageToKnobMatrix)return;let r="touchmove"===e.type,t=new DOMPointReadOnly(r?e.touches[0].pageX:e.pageX,r?e.touches[0].pageY:e.pageY).matrixTransform(this.pageToKnobMatrix),a=9.91-t.x,n=8.18-t.y,s=Math.round(180*Math.atan2(n,a)/Math.PI);s<0&&(s+=360),s-=90,a>0&&n<=0&&s>0&&(s-=360),s=K(this.startDegree,this.endDegree,s);let i=this.percentFromMinMax(s,this.startDegree,this.endDegree),l=this.mapToMinMax(i,this.min,this.max);this.updateValue(l)}updateValue(e){let r=Math.round(K(this.min,this.max,e)/this.step)*this.step;this.value=Math.round(100*r)/100,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}},"pushbutton-6mm":Z,resistor:class extends O{value="1000";pinInfo=[{name:"1",x:0,y:5.65,signals:[]},{name:"2",x:58.8,y:5.65,signals:[]}];static get styles(){return B`
      :host {
        display: flex;
      }
    `}breakValue(e){let r=e>=1e10?9:e>=1e9?8:e>=1e8?7:e>=1e7?6:e>=1e6?5:e>=1e5?4:e>=1e4?3:e>=1e3?2:e>=100?1:e>=10?0:e>=1?-1:-2,t=Math.round(e/10**r);return 0===e?[0,0]:[Math.round(t%100),r]}render(){let{value:e}=this,r=parseFloat(e),[t,a]=this.breakValue(r),n=Y[Math.floor(t/10)],s=Y[t%10],i=Y[a];return k`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.558" height=".63826" fill="#aaa" />
        <g stroke-width=".14479" fill="#d5b597">
          <path
            id="body"
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
          />
          <use xlink:href="#body" fill="url(#a)" opacity=".44886" />
          <rect x="4" y="0" width="1" height="3" fill="${n}" clip-path="url(#g)" />

          <path d="m6 0.29411v2.4117h0.96v-2.4117z" fill="${s}" />
          <path d="m7.8 0.29411v2.4117h0.96v-2.4117z" fill="${i}" />

          <rect x="10.69" y="0" width="1" height="3" fill="#F1D863" clip-path="url(#g)" />
          <clippath id="g">
            <use xlink:href="#body" />
          </clippath>
        </g>
      </svg>
    `}},"rgb-led":class extends O{ledRed=0;ledGreen=0;ledBlue=0;pinInfo=[{name:"R",x:8.5,y:44,signals:[]},{name:"COM",x:18,y:54,signals:[]},{name:"G",x:26.4,y:44,signals:[]},{name:"B",x:35.7,y:44,signals:[]}];render(){let{ledRed:e,ledGreen:r,ledBlue:t}=this,a=Math.max(e,r,t),n=a?.2+.6*a:0;return k`
      <svg
        width="42.129"
        height="72.582"
        version="1.2"
        viewBox="-17 -10 37.3425 57.5115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- LED Legs -->
        <g fill="none" stroke="#9D9999" stroke-linecap="round" stroke-width="1.5px">
          <path d="m4.1 15.334 3.0611 9.971" />
          <path d="m8 14.4 5.9987 4.0518 1.1777 6.5679" stroke-linejoin="round" />
          <path d="m-4.3 14.184-5.0755 5.6592-0.10206 6.1694" stroke-linejoin="round" />
          <path d="m-1.1 15.607-0.33725 18.4" />
        </g>

        <!-- LED Body -->
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          opacity=".3"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="#e6e6e6"
          opacity=".5"
        />
        <path
          d="m8.3435 5.65v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          fill="#d1d1d1"
          opacity=".9"
        />
        <g transform="translate(-5.8295 -7.351)">
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            opacity=".7"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
            opacity=".25"
          />
          <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
        </g>
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648 2.2032 16.107 3.1961 16.107"
          fill="#666"
        />
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241 11.215 9.0338 7.4117 13.095"
          fill="#666"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="white"
          opacity=".65"
        />
        <g transform="translate(-5.8295 -7.351)" fill="#fff">
          <path
            d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
            opacity=".5"
          />
          <path
            d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
            opacity=".5"
          />
          <path
            d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
            opacity=".5"
          />
        </g>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="ledFilterRed" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*e}" />
        </filter>
        <filter id="ledFilterGreen" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*r}" />
        </filter>
        <filter id="ledFilterBlue" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*t}" />
        </filter>

        <circle
          cx="1.7"
          cy="3"
          r="${5*e+2}"
          fill="rgb(255, 0, 0)"
          opacity="${Math.min(20*e,.3)}"
          filter="url(#ledFilterRed)"
        />
        <circle
          cx="2.7"
          cy="5"
          r="${5*r+2}"
          fill="rgb(0, 255, 0)"
          opacity="${Math.min(20*r,.3)}"
          filter="url(#ledFilterGreen)"
        />
        <circle
          cx="0.7"
          cy="5"
          r="${5*t+2}"
          fill="rgb(1,85,253)"
          opacity="${Math.min(20*t,.3)}"
          filter="url(#ledFilterBlue)"
        />

        <circle
          cx="1.7"
          cy="4"
          r="10"
          fill="rgb(${255*e}, ${255*r+90*t}, ${255*t})"
          filter="url(#ledFilter)"
          opacity="${n}"
        />

        <!-- Grey hollow around the LED -->
        <circle
          cx="1.7"
          cy="4"
          r="13"
          stroke="#666"
          stroke-width="1"
          fill="none"
          filter="url(#ledFilter)"
          opacity="${n}"
        />
      </svg>
    `}},servo:class extends O{angle=0;horn="single";hornColor="#ccc";pinInfo=[{name:"GND",x:0,y:50,signals:[{type:"power",signal:"GND"}]},{name:"V+",x:0,y:59.5,signals:[{type:"power",signal:"VCC"}]},{name:"PWM",x:0,y:69,signals:[{type:"pwm"}]}];hornPath(){switch(this.horn){case"cross":return"m119.54 50.354h-18.653v-18.653a8.4427 8.4427 0 0 0-8.4427-8.4427h-1.9537a8.4427 8.4427 0 0 0-8.4427 8.4427v18.653h-18.653a8.4427 8.4427 0 0 0-8.4427 8.4427v1.9537a8.4427 8.4427 0 0 0 8.4427 8.4427h18.653v18.653a8.4427 8.4427 0 0 0 8.4427 8.4427h1.9537a8.4427 8.4427 0 0 0 8.4427-8.4427v-18.653h18.653a8.4427 8.4427 0 0 0 8.4426-8.4427v-1.9537a8.4427 8.4427 0 0 0-8.4426-8.4427zm-57.447 12.136a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm20.621-34.813a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 8.7543a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 55.438a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm0-8.7543a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm5.9215-17.42a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843zm14.704-3.205a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165z";case"double":return"m101.63 57.808c-0.0768-0.48377-0.16978-0.8838-0.23258-1.1629l-4.112-51.454c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.1004 51.447c-0.07443 0.28607-0.16746 0.69774-0.24421 1.1629a12.473 12.473 0 0 0 0 3.9306c0.07675 0.48377 0.16978 0.8838 0.24421 1.1629l4.1004 51.461c0 2.8654 2.6026 5.1912 5.8145 5.1912s5.8145-2.3258 5.8145-5.1912l4.1004-51.447c0.0744-0.28607 0.16746-0.69774 0.23258-1.1629a12.473 12.473 0 0 0 0.0116-3.9376zm-4.2376 7.8868a8.3426 8.3426 0 0 1-3.5375 2.1072c-0.25816 0.07443-0.52098 0.13955-0.7838 0.19072a8.7217 8.7217 0 0 1-1.1978 0.1442c-0.26747 0.01163-0.53726 0.01163-0.80473 0a8.7217 8.7217 0 0 1-1.1978-0.1442c-0.26282-0.05117-0.52563-0.11629-0.78379-0.19072a8.3729 8.3729 0 0 1 0-16.048c0.25816-0.07675 0.52098-0.13955 0.78379-0.19072a8.7217 8.7217 0 0 1 1.1978-0.1442c0.26747-0.01163 0.53726-0.01163 0.80473 0a8.7217 8.7217 0 0 1 1.1978 0.1442c0.26282 0.05117 0.52563 0.11396 0.7838 0.19072a8.3729 8.3729 0 0 1 3.5375 13.955zm-5.9215-54.996a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 72.565a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.3729a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791z";default:return"m101.6 59.589-4.3167-54.166c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.3167 54.166a8.3264 8.3264 0 0 0-0.10234 1.2792c0 5.047 4.5818 9.1381 10.234 9.1381s10.234-4.0911 10.234-9.1381a8.3264 8.3264 0 0 0-0.10233-1.2792zm-10.131-48.658a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm5.9215 29.412a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843z"}}render(){return k`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="45mm"
        height="31.63mm"
        version="1.1"
        viewBox="0 0 170.08 119.55"
      >
        <defs>
          <g id="pin">
            <rect x="0" y="-1.91" width="3.72" height="3.71" />
            <path d="m2.026 -1.91h13.532l-13.425 0.51865z" />
            <path d="m2.026 1.80h13.532l-13.425-0.50702z" />
            <rect fill="#ccc" x="0.33" y="-1.23" width="3.04" height="2.46" rx=".15" />
          </g>
        </defs>
        <g stroke-width="2.7" fill="none">
          <path
            stroke="#b44200"
            d="m 83.32,56.6 c0,0 -32.99,0.96 -43.32,0 -6.20,-0.58 -10.60,-6.20 -14.87,-6.31"
          />
          <path stroke="#ff2300" d="m83.326 59.6h-62.971" />
          <path
            stroke="#f47b00"
            d="m 83.32,62.6 c0,0 -32.60,-0.61 -43.33,-0.15 -6.87,0.29 -12.01,6.82 -14.77,6.73"
          />
        </g>
        <rect fill="#666" y="45.5" width="25.71" height="28" rx="1.14" />
        <use xlink:href="#pin" x="4.7" y="50.06" />
        <use xlink:href="#pin" x="4.7" y="59.66" />
        <use xlink:href="#pin" x="4.7" y="69.26" />
        <path
          fill="#4d4d4d"
          d="m163.92 66.867a7.09 7.09 0 1 1 5.8145-11.136 0.18 0.18 0 0 0 0.33-0.10234v-14.346h-17.664v36.98h17.676v-14.346a0.18 0.18 0 0 0-0.333-0.107 7.08 7.08 0 0 1-5.83 3.06z"
        />
        <path
          fill="#4d4d4d"
          d="m55.068 66.75a7.09 7.09 0 1 0-5.8261-11.136 0.18 0.18 0 0 1-0.33-0.10234v-14.346h17.676v36.98h-17.676v-14.346a0.18 0.18 0 0 1 0.333-0.107 7.08 7.08 0 0 0 5.83 3.06z"
        />
        <rect fill="#666" x="64.255" y="37.911" width="90.241" height="43.725" rx="5.3331" />
        <path fill="gray" d="m110.07 50.005h-14.42v19.537h14.42a9.7684 9.7684 0 0 0 0-19.537z" />
        <circle fill="#999" cx="91.467" cy="59.773" r="18.606" />
        <path
          fill=${this.hornColor}
          transform="translate(91.467 59.773) rotate(${this.angle??0}) translate(-91.467 -59.773)"
          d="${this.hornPath()}"
        />
        <circle fill="gray" cx="91.467" cy="59.773" r="8.3729" />
        <circle fill="#ccc" cx="91.467" cy="59.773" r="6.2494" />
        <path
          fill="#666"
          d="m94.911 62.543-2.3839-2.4165a0.42562 0.42562 0 0 1 0-0.60471l2.4281-2.3863a0.64657 0.64657 0 0 0 0.06512-0.8652 0.62797 0.62797 0 0 0-0.93032-0.05117l-2.4351 2.4049a0.4326 0.4326 0 0 1-0.60703 0l-2.3863-2.4165a0.6489 0.6489 0 0 0-0.8652-0.06512 0.63262 0.63262 0 0 0-0.05117 0.93032l2.4049 2.4328a0.42795 0.42795 0 0 1 0 0.60703l-2.4142 2.3863a0.65122 0.65122 0 0 0-0.06745 0.8652 0.63029 0.63029 0 0 0 0.93032 0.05117l2.4351-2.4049a0.42562 0.42562 0 0 1 0.60471 0l2.3863 2.4398a0.63262 0.63262 0 0 0 0.93032-0.04186 0.64657 0.64657 0 0 0-0.04419-0.8652z"
        />
      </svg>
    `}},"slide-switch":class extends O{value=0;pinInfo=[{name:"1",number:1,y:34,x:6.5,signals:[]},{name:"2",number:2,y:34,x:16,signals:[]},{name:"3",number:3,y:34,x:25.5,signals:[]}];static get styles(){return B`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      svg #handle {
        transition: transform 0.2s linear;
      }
      input:checked + svg #handle {
        transform: translate(2px, 0);
      }
      input:focus + svg #handle {
        stroke-width: 0.4px;
        stroke: #8080ff;
      }
    `}onClick(){let e=this.shadowRoot?.querySelector(".hide-input");e&&(e.checked=!e.checked,this.onValueChange(e),e?.focus())}onValueChange(e){this.value=+!!e.checked,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}renderSVG(){return k`<svg
      width="8.5mm"
      height="9.23mm"
      version="1.1"
      viewBox="0 0 8.5 9.23"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      @click="${this.onClick}"
    >
      <defs>
        <radialGradient
          id="a"
          cx="9.33"
          cy="122"
          r="4.25"
          gradientTransform="matrix(1.75 -.511 .28 .959 -41.2 8.15)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#808080" offset="0" />
          <stop stop-color="#b5b5b5" offset="1" />
        </radialGradient>
      </defs>
      <g fill="#aaa" stroke-width=".0673">
        <rect x="4" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        <rect x="1.54" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        <rect x="6.5" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
      </g>
      <path
        id="handle"
        d="m2.74 0.128 0.145-0.128 0.177 0.0725 0.174-0.0725 0.151 0.0725 0.154-0.0725 0.151 0.0725 0.128-0.0725 0.134 0.0725 0.123-0.0725 0.145 0.128 2e-5 2h-1.48z"
        stroke-width=".0623"
      />
      <rect x="0" y="2.06" width="8.5" height="3.48" fill="url(#a)" stroke-width=".0548" />
      <rect x=".0322" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
      <rect x="6.95" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
      <rect x="2.55" y="4.74" width="3.47" height=".805" stroke-width=".0955" />
    </svg>`}render(){let{value:e}=this;return k`
      <input
        tabindex="0"
        type="checkbox"
        class="hide-input"
       
        @input="${e=>this.onValueChange(e.target)}"
      />
      ${this.renderSVG()}
    `}}};function Q(e){if(!e)return null;let r=parseFloat(e);return Number.isNaN(r)?null:e.endsWith("mm")?r:e.endsWith("in")?25.4*r:e.endsWith("cm")?10*r:r/3.78}function ee(e,r,t,a=[]){let n=function(e,r={}){let t,a=J[e],n=new a;Object.assign(n,r),"uniqueId"in n&&(n.uniqueId="x");let i=String(n.render()),l=[],o=/<svg[\s>]|<\/svg>/g,u=0,c=-1;for(;t=o.exec(i);)if(t[0].startsWith("</")){if(0==(u-=1)){let e=i.indexOf(">",c),r=i.slice(c+4,e),a=Q(/(?:^|\s)width="([^"]*)"/.exec(r)?.[1])??0,n=Q(/(?:^|\s)height="([^"]*)"/.exec(r)?.[1])??0;l.push({i:c,f:e,j:t.index,aire:a*n})}}else 0===u&&(c=t.index),u+=1;let{i:d,f:m,j:p}=l.sort((e,r)=>r.aire-e.aire)[0],h=i.slice(d+4,m),f=e=>RegExp(`(?:^|\\s)${e}="([^"]*)"`).exec(h)?.[1],g=Q(f("width"))??10,b=Q(f("height"))??10,v=(f("viewBox")??`0 0 ${3.78*g} ${3.78*b}`).trim().split(/[\s,]+/).map(Number),x=[...h.matchAll(/([\w:-]+)="([^"]*)"/g)].filter(([,e])=>!["width","height","viewBox","xmlns","xmlns:xlink","version","class","id"].includes(e)).map(([,e,r])=>`${e}="${r}"`).join(" "),y=i.slice(m+1,p).replace(/xlink:href=/g,"href=");for(let e of new Set([...y.matchAll(/\sid="([^"]+)"/g)].map(e=>e[1])))y=y.split(`id="${e}"`).join(`id="\xa7${e}"`).split(`url(#${e})`).join(`url(#\xa7${e})`).split(`href="#${e}"`).join(`href="#\xa7${e}"`);let D=`wk-${e}`,V=a.styles?function(e,r){let t,a=[],n=/([^{}]+)\{([^{}]*)\}/g;for(;t=n.exec(e);){let e=t[1].split(",").map(e=>e.trim()).filter(e=>e&&!e.includes(":host")&&!e.startsWith("@")&&!/^(from|to|\d+%)$/.test(e)&&!/input|:hover|:focus/.test(e)).map(e=>("svg"===e?`.${r}`:`.${r} ${e.replace(/^svg\s+/,"")}`).replace(/#([A-Za-z][\w-]*)/g,"#§$1"));e.length&&a.push(`${e.join(", ")} {${t[2]}}`)}return a.join("\n")}(String(a.styles),D):"",S=`${V?`<style>${V}</style>`:""}<g class="${D}" ${x}>${y}</g>`,C=S.split("§").join(`wk${(0,s.n)(S)}-`),A={};for(let e of n.pinInfo)A[e.name]=[e.x/3.78,e.y/3.78];return{markup:C,vue:{x:v[0],y:v[1],l:v[2],h:v[3]},largeur:g,hauteur:b,broches:A}}(e,r),i={};for(let[e,[r,s]]of Object.entries(n.broches))a.includes(e)||(i[t[e]??e]={x:r,y:s});let l=Object.values(i);return{largeur:Math.max(n.largeur,...l.map(e=>e.x+.5)),hauteur:Math.max(n.hauteur,...l.map(e=>e.y+.5)),formes:[],bornes:i,fond:{markup:n.markup,vue:n.vue,taille:{l:n.largeur,h:n.hauteur}}}}let er=Object.fromEntries(Array.from({length:14},(e,r)=>[String(r),`D${r}`])),et={rouge:"red",vert:"green",jaune:"yellow",orange:"orange",bleu:"blue",blanc:"white"};e.s(["l",0,function(e,a={}){let n=a.leds??{on:!0,l:!1,tx:!1,rx:!1},s=function(e,r){switch(e.id){case"uno":return ee("arduino-uno",{led13:r.l,ledTX:r.tx,ledRX:r.rx,ledPower:r.on},{...er,"A4.2":"SDA","A5.2":"SCL","GND.1":"GND","3.3V":"3V3"});case"nano":return ee("arduino-nano",{led13:r.l,ledTX:r.tx,ledRX:r.rx,ledPower:r.on},{...er,"GND.1":"GND",RESET:"RST","RESET.2":"RST.2","3.3V":"3V3"},["12.2","5V.2","13.2","11.2","RESET.3","GND.3"]);case"esp32-devkit-v1":return ee("esp32-devkit-v1",{led1:r.l,ledPower:r.on},{"GND.2":"GND","GND.1":"GND.2"});default:return null}}(e,n);if(s)return{...s,bornes:{...s.bornes,...r.k[e.id]}};let i=(0,t.f)(e,n,a.rvb??null);if(!i)throw Error(`La carte ${e.id} n'a pas de dessin.`);return{largeur:i.largeur,hauteur:i.hauteur,formes:[],bornes:{...i.bornes,"prise USB":function(e){let{usb:r,largeur:t,hauteur:a}=e.dessin,n=e=>({x:Math.max(0,Math.min(t,e.x)),y:Math.max(0,Math.min(a,e.y))});return n(r.y<0?{x:r.x+r.l/2,y:0}:r.y+r.h>a?{x:r.x+r.l/2,y:a}:r.x<0?{x:0,y:r.y+r.h/2}:r.x+r.l>t?{x:t,y:r.y+r.h/2}:{x:r.x+r.l/2,y:r.y+r.h/2})}(e)},fond:{markup:i.markup,vue:i.vue,taille:{l:i.largeur,h:i.hauteur}}}},"x",0,function(e,r={}){let t=function(e,r){switch(e.sorte){case"bouton":return ee("pushbutton-6mm",{pressed:!!r.appuye},{"1.l":"1","2.l":"2","1.r":"1.2","2.r":"2.2"});case"interrupteur":return ee("slide-switch",{},{});case"potentiometre":return ee("potentiometer",{value:r.valeur??512},{GND:"1",SIG:"curseur",VCC:"3"});case"joystick":return ee("analog-joystick",{},{VCC:"+5V",HORZ:"VRx",VERT:"VRy",SEL:"SW"});case"dht":{let r=ee("dht22",{},{SDA:"DATA"});return"DHT11"===e.modele&&r.fond&&(r.fond.markup=r.fond.markup.replace(/#f2f2f2/g,"#3d8fd1").replace(/#ccc/g,"#2a6fa8").replace(/DHT22/g,"DHT11")),r}case"hc-sr04":return ee("hc-sr04",{},{TRIG:"Trig",ECHO:"Echo"});case"pir":return ee("pir-motion-sensor",{},{});case"hx711":return ee("hx711",{type:e.portee>=50?"50kg":"5kg"},{});case"mpu6050":return ee("mpu6050",{led1:!0},{});case"ky-040":return ee("ky-040",{angle:(r.angle??0)%360},{VCC:"+"});case"led":return ee("led",{color:et[e.couleur],value:!!r.allume},{A:"anode",C:"cathode"});case"led-rgb":return ee("rgb-led",{ledRed:(r.rvb?.[0]??0)/255,ledGreen:(r.rvb?.[1]??0)/255,ledBlue:(r.rvb?.[2]??0)/255},{COM:"commun"});case"buzzer":return ee("buzzer",{hasSignal:!!r.son},{1:"-",2:"+"});case"servomoteur":return ee("servo",{angle:r.angle??90},{PWM:"signal"});case"lcd":return ee("lcd1602",{pins:"i2c",background:"blue",color:"white",...void 0!==r.texte?{text:r.texte}:{}},{});case"sept-segments":return ee("7segment",{digits:1,values:r.segments??[0,0,0,0,0,0,0,0]},{A:"a",B:"b",C:"c",D:"d",E:"e",F:"f",G:"g","COM.1":"commun","COM.2":"commun.2"});case"resistance":return ee("resistor",{value:String(e.valeur)},{});default:return null}}(e,r)??function(e){if(!e)throw Error("Ce composant n'a pas de dessin.");return{largeur:e.largeur,hauteur:e.hauteur,formes:[],bornes:e.bornes,fond:{markup:e.markup,vue:e.vue,taille:{l:e.largeur,h:e.hauteur}}}}(M(e,r));for(let r of(0,a.O)(e))t.bornes[r]||(t.bornes[r]={x:-99,y:-99});return t}],89897)},45410,93807,e=>{"use strict";var r=e.i(7372);let t=e=>String(Math.round(1e3*e)/1e3);function a(e,r){let t=parseInt(e.slice(1),16),a=e=>{let a=t>>e&255;return Math.max(0,Math.min(255,Math.round(r<1?a*r:a+(255-a)*(r-1))))};return`#${(a(16)<<16|a(8)<<8|a(0)).toString(16).padStart(6,"0")}`}function n(e){let r=5381;for(let t=0;t<e.length;t+=1)r=(r<<5)+r+e.charCodeAt(t)|0;return(r>>>0).toString(36)}class s{corps=[];x0=0;y0=0;x1;y1;p="§";bordDroit;bordBas;constructor(e,r){this.x1=e,this.y1=r,this.bordDroit=e,this.bordBas=r}etendre(e,r,t,a){this.x0=Math.min(this.x0,e,t),this.y0=Math.min(this.y0,r,a),this.x1=Math.max(this.x1,e,t),this.y1=Math.max(this.y1,r,a)}brut(e,r){this.corps.push(e),r&&this.etendre(...r)}rect(e,r,a,n,s,i={}){this.brut(`<rect x="${t(e)}" y="${t(r)}" width="${t(a)}" height="${t(n)}"${i.rayon?` rx="${t(i.rayon)}"`:""} fill="${s}"${i.trait?` stroke="${i.trait}" stroke-width="${t(i.epaisseur??.12)}"`:""}${i.tirets?` stroke-dasharray="${i.tirets}"`:""}${void 0!==i.opacite?` opacity="${i.opacite}"`:""}/>`,[e,r,e+a,r+n])}rond(e,r,a,n,s={}){this.brut(`<circle cx="${t(e)}" cy="${t(r)}" r="${t(a)}" fill="${n}"${s.trait?` stroke="${s.trait}" stroke-width="${t(s.epaisseur??.12)}"`:""}${void 0!==s.opacite?` opacity="${s.opacite}"`:""}/>`,[e-a,r-a,e+a,r+a])}chemin(e,r={}){this.brut(`<path d="${e}" fill="${r.fond??"none"}"${r.trait?` stroke="${r.trait}" stroke-width="${t(r.epaisseur??.12)}" stroke-linecap="${r.bouts??"round"}" stroke-linejoin="round"`:""}${void 0!==r.opacite?` opacity="${r.opacite}"`:""}/>`)}texte(e,r,a,n,s={}){let i=s.ancre??"middle",l=a.length*n*.58,o=s.rotation?` transform="rotate(${s.rotation} ${t(e)} ${t(r)})"`:"";this.brut(`<text x="${t(e)}" y="${t(r)}" font-size="${t(n)}" font-family="'IBM Plex Sans', Arial, sans-serif" font-weight="${s.gras?700:500}" fill="${s.couleur??"#f4f6f8"}" text-anchor="${i}"${s.espacement?` letter-spacing="${s.espacement}"`:""}${void 0!==s.opacite?` opacity="${s.opacite}"`:""}${o}>${a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</text>`);let u="start"===i?0:"middle"===i?-l/2:-l;-90===s.rotation?this.etendre(e-.8*n,r-u-l,e+.2*n,r-u):90===s.rotation?this.etendre(e-.2*n,r+u,e+.8*n,r+u+l):s.rotation||this.etendre(e+u,r-.8*n,e+u+l,r+.2*n)}lueur(e,r,a,n,s=.75){this.brut(`<circle cx="${t(e)}" cy="${t(r)}" r="${t(a)}" fill="${n}" opacity="${s}" filter="url(#${this.p}flou)"/>`)}circuit(e,r,n,s,i=[],l=!1){let o=`M${t(s)} 0H${t(e-s)}A${t(s)} ${t(s)} 0 0 1 ${t(e)} ${t(s)}V${t(r-s)}A${t(s)} ${t(s)} 0 0 1 ${t(e-s)} ${t(r)}H${t(s)}A${t(s)} ${t(s)} 0 0 1 0 ${t(r-s)}V${t(s)}A${t(s)} ${t(s)} 0 0 1 ${t(s)} 0Z`;for(let e of i)o+=`M${t(e.x+e.r)} ${t(e.y)}A${t(e.r)} ${t(e.r)} 0 1 0 ${t(e.x-e.r)} ${t(e.y)}A${t(e.r)} ${t(e.r)} 0 1 0 ${t(e.x+e.r)} ${t(e.y)}Z`;if(this.brut(`<path d="${o}" fill="${n}" fill-rule="evenodd" stroke="${a(n,.55)}" stroke-width="0.16"/>`,[0,0,e,r]),this.brut(`<path d="M${t(s)} 0.18H${t(e-s)}" stroke="#ffffff" stroke-opacity="0.08" stroke-width="0.25"/>`),l)for(let e of i)this.brut(`<circle cx="${t(e.x)}" cy="${t(e.y)}" r="${t(e.r+.45)}" fill="none" stroke="url(#${this.p}or)" stroke-width="0.75"/>`)}pastille(e,r,a,n={}){let s=this.p;if(n.bord){let[a,i,l,o]="gauche"===n.bord?[0,r-.75,e,1.5]:"droite"===n.bord?[e,r-.75,this.bordDroit-e,1.5]:"haut"===n.bord?[e-.75,0,1.5,r]:[e-.75,r,1.5,this.bordBas-r];this.corps.push(`<rect x="${t(a)}" y="${t(i)}" width="${t(l)}" height="${t(o)}" fill="url(#${s}or)"/>`)}this.corps.push(n.carree?`<rect x="${t(e-.85)}" y="${t(r-.85)}" width="1.7" height="1.7" rx="0.12" fill="url(#${s}or)"/>`:`<circle cx="${t(e)}" cy="${t(r)}" r="0.85" fill="url(#${s}or)"/>`),"nue"===a?this.corps.push(`<circle cx="${t(e)}" cy="${t(r)}" r="0.48" fill="#121314" stroke="#7a6326" stroke-width="0.08"/>`):this.corps.push(`<circle cx="${t(e)}" cy="${t(r)}" r="0.66" fill="url(#${s}etain)"/><rect x="${t(e-.32)}" y="${t(r-.32)}" width="0.64" height="0.64" fill="#9ba2a9" stroke="#6c737a" stroke-width="0.06"/>`),this.etendre(e-.85,r-.85,e+.85,r+.85)}barretteFemelle(e,r,a,n=!0){this.rect(e-1.27,r-1.27,n?2.54*a:2.54,n?2.54:2.54*a,"#2d2f33",{trait:"#141518",epaisseur:.12,rayon:.2});for(let s=0;s<a;s+=1){let a=e+(n?2.54*s:0),i=r+(n?0:2.54*s);this.corps.push(`<rect x="${t(a-.5)}" y="${t(i-.5)}" width="1" height="1" fill="#0b0c0d"/><path d="M${t(a-.5)} ${t(i+.5)}L${t(a-.75)} ${t(i+.75)}H${t(a+.75)}L${t(a+.5)} ${t(i+.5)}Z" fill="#ffffff" opacity="0.12"/><path d="M${t(a-.5)} ${t(i-.5)}L${t(a-.75)} ${t(i-.75)}H${t(a+.75)}L${t(a+.5)} ${t(i-.5)}Z" fill="#000000" opacity="0.3"/>`)}}barretteMale(e,r,a,n=!0){this.rect(e-1.27,r-1.27,n?2.54*a:2.54,n?2.54:2.54*a,"#26282c",{trait:"#111214",epaisseur:.12,rayon:.15});for(let s=0;s<a;s+=1){let a=e+(n?2.54*s:0),i=r+(n?0:2.54*s);this.corps.push(`<rect x="${t(a-.32)}" y="${t(i-.32)}" width="0.64" height="0.64" fill="url(#${this.p}or)" stroke="#8a6d25" stroke-width="0.06"/>`)}}usb(e,r,a,n,s,i){let l,o="gauche"===s||"droite"===s?n:a,u="gauche"===s||"droite"===s?a:n,c="haut"===s?`translate(${t(e)} ${t(r)})`:"bas"===s?`translate(${t(e+a)} ${t(r+n)}) rotate(180)`:"gauche"===s?`translate(${t(e)} ${t(r+n)}) rotate(-90)`:`translate(${t(e+a)} ${t(r)}) rotate(90)`,d=this.p;l="micro"===i?`<rect x="-0.55" y="${t(.48*u)}" width="${t(o+1.1)}" height="1.3" rx="0.2" fill="#a9b0b7"/><rect x="0" y="0" width="${t(o)}" height="${t(u)}" rx="0.35" fill="url(#${d}metal)" stroke="#78808a" stroke-width="0.12"/><path d="M0.45 0H${t(o-.45)}L${t(o-1.1)} 1.15H1.1Z" fill="#454b51"/><rect x="1.4" y="0.28" width="${t(o-2.8)}" height="0.32" fill="#1d2024"/><path d="M0.5 ${t(u-.75)}H${t(o-.5)}" stroke="#ffffff" stroke-opacity="0.45" stroke-width="0.1"/>`:`<rect x="-0.35" y="${t(u-1.7)}" width="0.55" height="1.1" fill="#a9b0b7"/><rect x="${t(o-.2)}" y="${t(u-1.7)}" width="0.55" height="1.1" fill="#a9b0b7"/><rect x="0" y="0" width="${t(o)}" height="${t(u)}" rx="0.7" fill="url(#${d}metal)" stroke="#78808a" stroke-width="0.12"/><rect x="0.45" y="0.22" width="${t(o-.9)}" height="1.05" rx="0.52" fill="#3a3f44"/><rect x="1.7" y="0.58" width="${t(o-3.4)}" height="0.32" rx="0.16" fill="#121417"/><path d="M0.4 ${t(.62*u)}H${t(o-.4)}" stroke="#ffffff" stroke-opacity="0.45" stroke-width="0.1"/>`,this.brut(`<g transform="${c}">${l}</g>`,[e,r,e+a,r+n])}bouton(e,r,t,n,s="#2f3237"){for(let[a,s]of[[e-.35,r+.25],[e+t-.15,r+.25],[e-.35,r+n-.75],[e+t-.15,r+n-.75]])this.rect(a,s,.5,.5,"#b9bfc5");this.rect(e,r,t,n,"#dde0e3",{trait:"#8a9198",epaisseur:.1,rayon:.2}),this.rect(e+.3,r+.3,t-.6,n-.6,"#aeb4ba",{rayon:.15});let i=.3*Math.min(t,n);this.rond(e+t/2,r+n/2,i,s,{trait:a(s,.5),epaisseur:.08}),this.rond(e+t/2-.3*i,r+n/2-.3*i,.4*i,"#ffffff",{opacite:.18})}led(e,r,t,n,s=!1){let[i,l]=s?[.8,1.6]:[1.6,.8];n&&this.lueur(e,r,2.1,t,.85);let o=e-i/2,u=r-l/2;this.rect(o,u,i,l,"#c9ced3",{rayon:.08}),this.rect(s?o:o+.32,s?u+.32:u,s?i:i-.64,s?l-.64:l,n?a(t,1.55):a(t,1.72)),n&&this.rond(e,r,.25,"#ffffff",{opacite:.9})}ledRvb(e,r,a,n){let s=n?Math.max(...n):0,i=n&&s>0?`rgb(${n.map(e=>Math.round(e/s*255)).join(",")})`:null;i&&this.lueur(e,r,1.15*a,i,.45+.5*s/255);let l=e-a/2,o=r-a/2;if(this.rect(l,o,a,a,"#f5f4ee",{trait:"#c7c3b3",epaisseur:.08,rayon:.12}),this.chemin(`M${t(l)} ${t(o+.22*a)}V${t(o)}H${t(l+.22*a)}Z`,{fond:"#b9b4a2"}),this.rond(e,r,.36*a,i??"#ebe7da",{trait:"#cdc8b6",epaisseur:.06}),i)this.rond(e,r,.16*a,"#ffffff",{opacite:.85});else{let t=.07*a;this.rect(e-.2*a,r-t,2*t,2*t,"#b0473f"),this.rect(e-t,r-t,2*t,2*t,"#4c9a52"),this.rect(e+.2*a-2*t,r-t,2*t,2*t,"#4a6fb5")}}puce(e,r,t,a,n,s){let i="#c3c8ce";if("qfp"===s||"soic"===s||"dip"===s){let n="dip"===s?2.54:"soic"===s?1.27:.5,l="dip"===s?.6:"soic"===s?.42:.22,o="dip"===s?.9:.7,u=Math.max(0,Math.floor((t-.8)/n)+1);for(let s=0;s<u;s+=1){let c=e+(t-(u-1)*n)/2+s*n-l/2;this.rect(c,r-o,l,o,i),this.rect(c,r+a,l,o,i)}if("qfp"===s){let s=Math.max(0,Math.floor((a-.8)/n)+1);for(let u=0;u<s;u+=1){let c=r+(a-(s-1)*n)/2+u*n-l/2;this.rect(e-o,c,o,l,i),this.rect(e+t,c,o,l,i)}}}if(this.rect(e,r,t,a,"#222326",{trait:"#0d0e10",epaisseur:.1,rayon:"bga"===s?.3:.15}),"qfn"===s)for(let[n,s]of[[0,t],[1,a]]){let l=Math.max(0,Math.floor((s-1)/.5));for(let o=0;o<l;o+=1){let u=(s-(l-1)*.5)/2+.5*o;0===n?(this.rect(e+u-.12,r-.05,.24,.35,i),this.rect(e+u-.12,r+a-.3,.24,.35,i)):(this.rect(e-.05,r+u-.12,.35,.24,i),this.rect(e+t-.3,r+u-.12,.35,.24,i))}}this.rond(e+Math.min(.7,.12*t),r+Math.min(.7,.12*a),Math.min(.28,.05*t),"#3c3e43");let l=Math.min(1.25,.86*t/(.6*Math.max(...n.map(e=>e.length),1)),.7*a/Math.max(1,n.length)/1.15);n.forEach((s,i)=>this.texte(e+t/2,r+a/2+(i-(n.length-1)/2)*l*1.2+.36*l,s,l,{couleur:"#a5abb2"}))}sot223(e,r){for(let t=0;t<3;t+=1)this.rect(e+.9+2.3*t-.35,r+3.5,.7,1.2,"#c3c8ce");this.rect(e+1.75,r-1.2,3,1.2,"#c3c8ce"),this.rect(e,r,6.5,3.5,"#222326",{trait:"#0d0e10",epaisseur:.1,rayon:.15})}sot23(e,r,t=5){for(let a of 5===t?[.35,1.3,2.25]:[.45,2.15])this.rect(e+a-.2,r+1.6,.4,.55,"#c3c8ce");for(let a of 5===t?[.35,2.25]:[1.3])this.rect(e+a-.2,r-.55,.4,.55,"#c3c8ce");this.rect(e,r,2.9,1.6,"#222326",{trait:"#0d0e10",epaisseur:.08,rayon:.1})}cms(e,r,t,a=!1){let[n,s]=a?[.8,1.6]:[1.6,.8],i=e-n/2,l=r-s/2;this.rect(i,l,n,s,"#c9ced3",{rayon:.06}),this.rect(a?i:i+.34,a?l+.34:l,a?n:n-.68,a?s-.68:s,"r"===t?"#1c1d1f":"#a9825a")}quartz(e,r,t,a){this.rect(e,r,t,a,"url(#"+this.p+"metal)",{trait:"#7d858d",epaisseur:.1,rayon:.25}),this.rect(e+.3,r+.3,t-.6,a-.6,"none",{trait:"#ffffff",epaisseur:.08,rayon:.15,opacite:.5})}antenneCeramique(e,r,t,a){this.rect(e,r,t,a,"#efebe0",{trait:"#bfb7a3",epaisseur:.08,rayon:.12}),this.rect(e,r,.7,a,"#c3c8ce",{rayon:.1}),this.rect(e+t-.7,r,.7,a,"#c3c8ce",{rayon:.1})}capot(e,r,t,a,n=[]){this.rect(e,r,t,a,`url(#${this.p}capot)`,{trait:"#858c93",epaisseur:.12,rayon:.35}),this.rect(e+.4,r+.4,t-.8,a-.8,"none",{trait:"#ffffff",epaisseur:.1,rayon:.25,opacite:.45});let s=r+a/2-n.reduce((e,r)=>e+1.35*r.taille,0)/2;for(let r of n)s+=1.35*r.taille,this.texte(e+t/2,s-.3*r.taille,r.t,r.taille,{couleur:"#6d747b",gras:r.gras,espacement:.05})}moduleEsp(e,r,a,n,s,i,l,o=!0){this.rect(e,r,a,n,"#1f2124",{trait:"#0b0c0d",epaisseur:.12,rayon:.3});let u="haut"===l?r:r+n-s,c=e+1.1,d=e+a-1.1,m="haut"===l?u+.65:u+s-.65,p="haut"===l?u+.62*s:u+.38*s,h="haut"===l?u+s+.4:u-.4,f=Math.max(.9,(d-c-1.2)/9),g=`M${t(c)} ${t(h)}V${t(m)}H${t(c+1.2)}`,b=c+1.2,v=!0;for(;b+f<=d+.01;)g+=`V${t(v?p:m)}H${t(b+f)}`,b+=f,v=!v;if(this.chemin(g,{trait:"#b89a55",epaisseur:.32,opacite:.85}),this.chemin(`M${t(c+1.2)} ${t(h)}V${t((h+p)/2)}`,{trait:"#b89a55",epaisseur:.32,opacite:.85}),o){let t="haut"===l?u+s+.8:r+.8,i="haut"===l?r+n-.8:u-.8;for(let r=t;r<=i;r+=1.27)this.rect(e-.2,r-.3,.75,.6,`url(#${this.p}or)`),this.rect(e+a-.55,r-.3,.75,.6,`url(#${this.p}or)`);let o="haut"===l?r+n-.55:r-.2;for(let r=e+2;r<=e+a-2;r+=1.27)this.rect(r-.3,o,.6,.75,`url(#${this.p}or)`)}let x=o?.75:.45,y="haut"===l?u+s+.35:r+x,D="haut"===l?r+n-x:u-.35;this.capot(e+x,y,a-2*x,D-y,i)}matrice(e,r,t,n,s,i=()=>!1,l="#6aa9ff"){for(let o=0;o<n;o+=1)for(let n=0;n<t;n+=1){let t=e+n*s,u=r+o*s,c=i(n,o);c&&this.lueur(t,u,.8*s,l,.7),this.rect(t-.4,u-.25,.8,.5,c?a(l,1.5):"#e3dfd2",{rayon:.05})}}jst(e,r,t,a,n){this.rect(e,r,t,a,"#f2ead6",{trait:"#bdb293",epaisseur:.1,rayon:.2}),this.rect(e+.6,r+.5,t-1.2,.45*a,"#cfc4a6",{rayon:.15});for(let a=0;a<n;a+=1){let s=e+t/2+(a-(n-1)/2)*2;this.rect(s-.3,r+.8,.6,.6,"#c3c8ce")}}ufl(e,r){this.rect(e-1.3,r-1.3,2.6,2.6,"url(#"+this.p+"metal)",{trait:"#7d858d",epaisseur:.1,rayon:.2}),this.rond(e,r,.95,"#e8ebee",{trait:"#7d858d",epaisseur:.1}),this.rond(e,r,.35,"#d9b85a")}fin(e){let r='<defs><radialGradient id="§or" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#fbe9a6"/><stop offset="0.6" stop-color="#d7b55a"/><stop offset="1" stop-color="#a5842e"/></radialGradient><radialGradient id="§etain" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#cdd2d7"/><stop offset="1" stop-color="#8c939a"/></radialGradient><linearGradient id="§metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1f3f5"/><stop offset="0.45" stop-color="#c8cdd3"/><stop offset="0.55" stop-color="#bbc1c7"/><stop offset="1" stop-color="#e2e5e8"/></linearGradient><linearGradient id="§capot" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e7eaed"/><stop offset="0.5" stop-color="#ced3d8"/><stop offset="1" stop-color="#b6bcc2"/></linearGradient><filter id="§flou" x="-1" y="-1" width="3" height="3"><feGaussianBlur stdDeviation="0.6"/></filter></defs>'+this.corps.join(""),t=`mc${n(r)}-`;r=r.split("§").join(t);let a=Math.floor(10*this.x0)/10,s=Math.floor(10*this.y0)/10,i=Math.ceil((this.x1-a)*10)/10,l=Math.ceil((this.y1-s)*10)/10,o={};for(let[r,t]of Object.entries(e))o[r]={x:t.x-a,y:t.y-s};return{markup:r,vue:{x:a,y:s,l:i,h:l},largeur:i,hauteur:l,bornes:o}}}e.s(["r",0,s,"n",0,n],93807);let i={t:"ESPRESSIF",taille:1,gras:!0},l="#ff2a2a",o={"esp32-devkitc":{pastilles:"soudee",etiquette:.85,rayon:1,usb:"micro",pieces:(e,r)=>{e.moduleEsp(4.95,.25,18,25.5,6.3,[i,{t:"ESP32-WROOM-32E",taille:1.35,gras:!0}],"haut"),e.texte(13.95,29.4,"ESP32-DevKitC V4",1.2,{gras:!0}),e.sot223(6.2,32.2),e.puce(16.2,31.6,5,5,["CP2102N"],"qfn"),e.cms(7.2,38.6,"c"),e.cms(9.4,38.6,"c"),e.cms(12,37.6,"r",!0),e.cms(14.2,38.6,"r"),e.cms(18.7,38.4,"c"),e.cms(21.6,33.8,"r",!0),e.cms(7.6,44,"r"),e.cms(10.6,44.6,"c",!0),e.cms(17.4,44.6,"c",!0),e.cms(20.4,41,"r"),e.led(21.4,45.4,l,r.leds.on,!0),e.bouton(5.3,49.4,3.6,3.1),e.texte(7.1,48.6,"EN",.8),e.bouton(19,49.4,3.6,3.1),e.texte(20.8,48.6,"BOOT",.8)}},"feather-esp32":{pastilles:"soudee",etiquette:1,dehors:!0,rayon:2,usb:"micro",pieces:(e,r)=>{e.jst(2.5,.5,4.4,5.6,2),e.bouton(16.5,.9,3.3,2.8),e.texte(18.15,4.7,"RST",.75),e.led(4.7,8.3,"#ffb020",!1),e.texte(4.7,9.9,"CHG",.7),e.led(18.2,6.6,l,r.leds.l),e.texte(18.2,8.2,"#13",.7),e.puce(8.9,8.5,4,4,["CP2104"],"qfn"),e.sot23(14.4,10.2),e.cms(15,14.4,"r"),e.cms(18,12.6,"c",!0),e.cms(6.2,13.8,"c",!0),e.cms(9.4,14.6,"r"),e.cms(11.8,14.6,"c"),e.texte(11.43,19.6,"HUZZAH32",1.8,{gras:!0}),e.texte(11.43,22,"ESP32 Feather",1.05),e.moduleEsp(2.43,25.3,18,25.5,6.3,[i,{t:"ESP32-WROOM-32",taille:1.35,gras:!0}],"bas")}},"esp32-s3-zero":{pastilles:"nue",auBord:!0,etiquette:.8,rayon:1.2,usb:"c",pieces:(e,r)=>{e.bouton(4.8,3.4,3,2.3),e.texte(6.3,6.7,"BOOT",.62),e.bouton(10.2,3.4,3,2.3),e.texte(11.7,6.7,"RST",.62),e.puce(5.9,7.8,6.2,6.2,["ESP32-S3","FH4R2"],"qfn"),e.quartz(5.3,15,2.5,2),e.cms(8.9,15.6,"c",!0),e.ledRvb(11.4,16,2.2,r.rvb),e.cms(5.4,18.1,"c"),e.cms(12.6,18.4,"r"),e.antenneCeramique(6.4,19.3,5.2,1.8),e.texte(9,23,"ESP32-S3-Zero",.9,{gras:!0})}},"esp32-s3-devkitc":{pastilles:"soudee",etiquette:.95,dehors:!0,rayon:1,usb:"micro",pieces:(e,r)=>{e.moduleEsp(3.75,.25,18,25.5,6.3,[i,{t:"ESP32-S3-WROOM-1",taille:1.3,gras:!0}],"haut"),e.texte(12.75,29.3,"ESP32-S3-DevKitC-1",1.15,{gras:!0}),e.sot223(5,32.2),e.puce(14.6,31.8,5,5,["CP2102N"],"qfn"),e.cms(5.6,38.6,"c"),e.cms(12.4,38.4,"r",!0),e.cms(16.4,38.8,"c"),e.cms(19.8,36,"r",!0),e.ledRvb(8,42,3.2,r.rvb),e.texte(8,44.9,"RGB",.75),e.led(18.6,42,l,r.leds.on,!0),e.cms(13,44,"c",!0),e.cms(6.2,48.6,"r"),e.cms(10.4,48.6,"c"),e.cms(15.2,48.6,"r"),e.cms(19.4,48.6,"c"),e.bouton(5.4,54,3.6,3.1),e.texte(7.2,53.2,"BOOT",.8),e.bouton(16.4,54,3.6,3.1),e.texte(18.2,53.2,"RST",.8),e.usb(14,61,7.5,4.5,"bas","micro"),e.texte(7.75,60.1,"UART",.75),e.texte(17.75,60.1,"USB",.75)}},"esp32-c3-supermini":{pastilles:"nue",auBord:!0,etiquette:.85,rayon:1.2,usb:"c",pieces:(e,r)=>{e.bouton(4.3,3.2,3,2.3),e.texte(5.8,6.5,"BOOT",.6),e.bouton(10.7,3.2,3,2.3),e.texte(12.2,6.5,"RST",.6),e.puce(6.5,7.4,5,5,["ESP32-C3","FH4"],"qfn"),e.quartz(4.4,13.4,2.4,1.9),e.sot23(11,13.6),e.led(7.8,15.8,l,r.leds.on),e.led(10.6,15.8,"#2f7dff",r.leds.l),e.cms(5,16.8,"c",!0),e.cms(13,16.8,"r",!0),e.antenneCeramique(5.9,18.4,6.2,1.8),e.texte(9,22.6,"C3 SuperMini",.95,{gras:!0})}},"esp32-c3-devkitm":{pastilles:"soudee",etiquette:.85,rayon:1,usb:"micro",pieces:(e,r)=>{e.moduleEsp(6.1,.25,13.2,16.6,4.6,[i,{t:"ESP32-C3-MINI-1",taille:.95,gras:!0}],"haut",!1),e.texte(12.7,19.8,"ESP32-C3-DevKitM-1",1,{gras:!0}),e.puce(14,21.4,4.4,4.4,["CP2102N"],"qfn"),e.ledRvb(9,23.6,2.8,r.rvb),e.texte(9,26.2,"RGB",.7),e.sot223(6,28.6),e.led(17.6,29.8,l,r.leds.on,!0),e.cms(14.6,28,"c",!0),e.cms(20,26.4,"r",!0),e.cms(12.8,34.6,"r"),e.cms(12.8,36.8,"c"),e.bouton(5,34.2,3.6,3.1),e.texte(6.8,33.4,"BOOT",.8),e.bouton(16.8,34.2,3.6,3.1),e.texte(18.6,33.4,"RST",.8)}},"xiao-esp32c3":{pastilles:"nue",auBord:!0,etiquette:.85,rayon:1.4,usb:"c",pieces:e=>{e.bouton(2.3,.5,2.2,1.8),e.texte(3.4,3.4,"B",.7),e.bouton(13.6,.5,2.2,1.8),e.texte(14.7,3.4,"R",.7),e.capot(4.7,4,8.7,12.9,[{t:"XIAO",taille:2,gras:!0},{t:"ESP32C3",taille:.95,gras:!0}]),e.ufl(9.05,19.5),e.cms(5.6,18.6,"c",!0),e.cms(12.5,18.6,"r",!0),e.cms(5.6,21.2,"r"),e.cms(12.5,21.2,"c")}},"uno-q":{pastilles:"femelle",etiquette:1,rayon:1.5,usb:"c",pieces:(e,r)=>{for(let[r,t,a,n]of(e.capot(14.5,9,10.5,10.5,[{t:"WCBN3536A",taille:.85,gras:!0}]),e.puce(28.5,8.8,12,8.5,["LPDDR4"],"bga"),e.puce(28,21.5,14,14,["QUALCOMM","QRB2210"],"bga"),e.puce(16.5,26.5,7,7,["STM32","U585"],"qfn"),e.puce(45.5,35.5,12,9.5,["eMMC"],"bga"),e.matrice(47,16.5,13,8,1.4),[[26,25,"c",!0],[26,30,"c",!0],[44.2,24,"r",!0],[44.2,29,"c",!0],[20,36,"r",!1],[33,39,"c",!1],[38,39,"r",!1],[10,30,"c",!0]]))e.cms(r,t,a,n);e.led(62,31.5,"#3ddc5a",r.leds.on),e.texte(62,33.6,"ON",.8),e.texte(10.5,45.5,"UNO Q",3,{gras:!0})}}},u="#33414f",c="#f6c453";e.s(["f",0,function(e,t,a){let n=o[e.id];if(!n)return null;let i=e.dessin,l=new s(i.largeur,i.hauteur);l.circuit(i.largeur,i.hauteur,i.couleur,n.rayon,(i.trous??[]).map(e=>({...e,r:1.6})),"femelle"===n.pastilles);let d=a??(t.l&&e.ledRgb?[64,64,64]:null);n.pieces(l,{leds:t,rvb:d}),l.usb(i.usb.x,i.usb.y,i.usb.l,i.usb.h,i.usb.y<0?"haut":i.usb.y+i.usb.h>i.hauteur?"bas":i.usb.x<0?"gauche":"droite",n.usb);let m={};for(let t of i.rangees){let a=t.bornes.length;if(t.dos){let e=t.x-2.2,r=t.y-3;l.rect(e,r,Math.abs((a-1)*t.dx)+9,Math.abs((a-1)*t.dy)+5.2,i.couleur,{trait:c,epaisseur:.25,rayon:1,tirets:"1 0.7"}),l.texte(t.x-1.2,t.y-1.6,"au dos",.95,{ancre:"start",couleur:c})}"femelle"===n.pastilles&&l.barretteFemelle(t.x,t.y,a,0!==t.dx);let s=0!==t.dx?t.y<i.hauteur/2?"haut":"bas":t.x<i.largeur/2?"gauche":"droite";t.bornes.forEach((a,o)=>{let c=t.x+o*t.dx,d=t.y+o*t.dy;"femelle"!==n.pastilles&&l.pastille(c,d,t.dos||"nue"===n.pastilles?"nue":"soudee",{bord:n.auBord&&!t.dos?s:void 0}),null!==a&&(m[a]={x:c,y:d},function(e,r,t,a,n,s,i){let l=s.etiquette,o=.36*l,c=!!s.dehors&&!n.dos;switch(n.cote){case"gauche":c?e.texte(r-1.45,t+o,a,l,{ancre:"end",couleur:u}):e.texte(r+1.35,t+o,a,l,{ancre:"start"});break;case"droite":c?e.texte(r+1.45,t+o,a,l,{ancre:"start",couleur:u}):e.texte(r-1.35,t+o,a,l,{ancre:"end"});break;case"haut":e.texte(r+.36*l,t+1.75,a,l,{ancre:"end",rotation:-90,couleur:t+1.75>i.hauteur?u:void 0});break;case"bas":e.texte(r+.36*l,t-1.75,a,l,{ancre:"start",rotation:-90})}}(l,c,d,(0,r.l)(e,a),t,n,i))})}return l.fin(m)}],45410)},16959,56857,e=>{"use strict";e.s(["v",()=>K,"k",()=>Y,"F",()=>Z,"x",()=>_],16959);var r,t=e.i(75379),a=e.i(7372);class n{trig;echo;distance;temperature;servi;constructor(e,r){this.trig=e,this.echo=r,this.distance=25,this.temperature=20,this.servi=-1}vitesse(){return 331.3+.606*this.temperature}dureeEcho(){return this.distance<2||this.distance>400?38e3:2*this.distance/100/this.vitesse()*1e6}impulsion(e,r,t,a){if(e!==this.echo||1!==r)return null;let n=-1,s=-1;for(let e=a.journal.length-1;e>=0;e-=1){let r=a.journal[e];if("broche"===r.sorte&&r.broche===this.trig){if(n<0){if(0!==r.niveau)return null;n=r.t}else if(1===r.niveau){s=r.t;break}}}return n<0||s<0||n-s<1e4||n===this.servi||t-n>6e7?null:(this.servi=n,{debut:n+25e4,duree:this.dureeEcho()})}}e.s(["f",0,n],56857);let s={titre:"Dessin : wokwi-elements (licence MIT, © Uri Shaked)",url:"https://github.com/wokwi/wokwi-elements"},i={titre:"Dessin : Méca & Cie, d'après les photos du fabricant (la place des pièces est à comparer à ta carte)"},l={titre:"Espressif, ESP32 Series Datasheet : cœurs, mémoires, convertisseurs, courants des broches",url:"https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf"},o={titre:"Espressif, ESP32-S3 Series Datasheet",url:"https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf"},u={titre:"Espressif, ESP32-C3 Series Datasheet : RISC-V à 160 MHz, 400 Ko de SRAM, broches de démarrage (GPIO2, 8, 9)",url:"https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf"},c=(e,r)=>({titre:`Cœur Arduino ESP32 3.3.8 de ton poste, variants/${e}/pins_arduino.h : ${r}`}),d=(e,r,t="LOW",a="HIGH")=>`// La LED de la carte clignote, et le moniteur s\xe9rie le dit.
void setup() {
  Serial.begin(${e});
  pinMode(LED_BUILTIN, OUTPUT);   // ${r}
}

void loop() {
  digitalWrite(LED_BUILTIN, ${a});
  Serial.println("LED allum\xe9e");
  delay(1000);
  digitalWrite(LED_BUILTIN, ${t});
  Serial.println("LED \xe9teinte");
  delay(1000);
}
`,m=e=>`// La LED RGB de la carte : rouge, vert, bleu, puis \xe9teinte.
void setup() {
  Serial.begin(115200);
}

void loop() {
  rgbLedWrite(RGB_BUILTIN, 64, 0, 0);   // ${e}
  Serial.println("rouge");
  delay(700);
  rgbLedWrite(RGB_BUILTIN, 0, 64, 0);
  Serial.println("vert");
  delay(700);
  rgbLedWrite(RGB_BUILTIN, 0, 0, 64);
  Serial.println("bleu");
  delay(700);
  rgbLedWrite(RGB_BUILTIN, 0, 0, 0);
  delay(700);
}
`,p=["Les broches sont en 3,3 V et ne supportent pas le 5 V : la sortie Echo d'un HC-SR04 passe par un pont diviseur.","« Connecting… » sans fin au téléversement : appuie sur BOOT au moment où l'IDE essaie de se connecter.","Un int fait 32 bits sur un ESP32, 16 sur l'Uno : un programme qui dépasse 32 767 sur l'Uno marche ici.","analogRead donne 0 à 4 095 (12 bits), pas 0 à 1 023 : une formule recopiée d'un programme d'Uno se trompe d'un facteur 4."],h={titre:"La résistance d'une LED sur une broche en 3,3 V",lignes:["R = (U − U_LED) / I","Pour une LED rouge à 10 mA : R = (3,3 − 2) / 0,010 = 130 Ω","On prend la valeur normalisée au-dessus : 150 Ω, ou 220 Ω (la LED brille un peu moins)."]},f={nano:{titre:"Arduino Nano",resume:"La petite sœur de l'Uno : le même ATmega328P à 16 MHz et les mêmes broches en 5 V, sur une carte de 18 × 45 mm qui se pique dans la platine d'essai. Elle a deux entrées analogiques de plus (A6 et A7) et pas de prise jack ; on la programme comme l'Uno.",grandeurs:[{nom:"Microcontrôleur",valeur:"ATmega328P (AVR, 8 bits), 16 MHz"},{nom:"Mémoire du programme",valeur:"32 Ko de flash, dont 2 Ko pour le chargeur de démarrage"},{nom:"Mémoire des variables",valeur:"2 Ko de SRAM"},{nom:"Mémoire qui reste hors tension",valeur:"1 Ko d'EEPROM"},{nom:"Tension des broches",valeur:"5 V"},{nom:"Alimentation",valeur:"par l'USB (5 V), ou 7 à 12 V sur VIN",note:"6 à 20 V au plus, comme l'Uno ; pas de prise jack."},{nom:"Courant par broche",valeur:"20 mA conseillés, 40 mA au plus",note:"La puce est celle de l'Uno : mêmes valeurs limites."},{nom:"Broches numériques",valeur:"14 (D0 à D13), dont 6 en MLI : 3, 5, 6, 9, 10, 11"},{nom:"Entrées analogiques",valeur:"8 (A0 à A7), sur 10 bits : 0 à 1 023 pour 0 à 5 V",note:"A6 et A7 ne sont que des entrées analogiques : ni digitalRead, ni sortie."},{nom:"Liaisons",valeur:"série : D0 (RX), D1 (TX) ; I²C : A4 (SDA), A5 (SCL) ; SPI : D10 à D13"},{nom:"Interruptions externes",valeur:"D2 et D3"},{nom:"LED",valeur:"L sur D13 (LED_BUILTIN) ; POW ; TX et RX"},{nom:"Dimensions",valeur:"18 × 45 mm, 7 g"}],broches:[{borne:"D0",role:"RX : réception de la liaison série (téléversement, moniteur)",niveau:"5 V"},{borne:"D1",role:"TX : émission de la liaison série",niveau:"5 V"},{borne:"D2",role:"numérique ; interruption externe 0",niveau:"5 V"},{borne:"D3",role:"numérique ; MLI ; interruption externe 1",niveau:"5 V"},{borne:"D4 à D9",role:"numériques ; MLI sur D5, D6, D9",niveau:"5 V"},{borne:"D10 à D12",role:"numériques ; MLI sur D10 et D11 ; SPI (SS, MOSI, MISO)",niveau:"5 V"},{borne:"D13",role:"numérique ; SCK (SPI) ; LED L",niveau:"5 V"},{borne:"A0 à A3",role:"entrées analogiques (10 bits), ou numériques 14 à 17",niveau:"0 à 5 V"},{borne:"A4",role:"entrée analogique ; SDA (I²C)",niveau:"0 à 5 V"},{borne:"A5",role:"entrée analogique ; SCL (I²C)",niveau:"0 à 5 V"},{borne:"A6 à A7",role:"entrées analogiques seulement",niveau:"0 à 5 V"},{borne:"AREF",role:"référence du convertisseur analogique"},{borne:"RST",role:"remise à zéro à l'état bas (deux bornes, reliées)"},{borne:"3V3",role:"sortie 3,3 V, faible courant : elle vient de la puce USB"},{borne:"5V",role:"sortie 5 V (ou entrée 5 V régulée)"},{borne:"VIN",role:"entrée 7 à 12 V"},{borne:"GND",role:"masse, 0 V (deux bornes, reliées)"}],calcul:{titre:"D'une valeur d'analogRead à une tension",lignes:["Le convertisseur compte 1 024 pas de 0 à 5 V : un pas vaut 5 / 1 024 ≈ 4,9 mV.","U ≈ N × 5 / 1 023 : pour N = 512, U ≈ 2,50 V.","Sur A6 ou A7, c'est la seule lecture possible."]},branchement:{carte:"nano",fils:[],texte:"La LED L est déjà sur la carte, reliée à D13 : le programme la fait clignoter sans aucun fil."},programme:{titre:"Blink, avec le moniteur série",source:d(9600,"LED_BUILTIN : la broche 13")},pieges:["Beaucoup de Nano vendues en kit sont des copies, avec une puce USB CH340 : Windows installe en général son pilote tout seul ; sinon, il faut l'installer.","Sur une copie, le téléversement échoue parfois : choisis « ATmega328P (Old Bootloader) » dans le menu Processeur.","A6 et A7 ne se lisent qu'avec analogRead : un bouton branché dessus avec digitalRead ne marche pas.","D0 et D1 servent au téléversement : un montage branché dessus peut l'empêcher.","La borne 3V3 donne peu de courant : un module en 3,3 V gourmand (radio, écran) se branche sur un régulateur."],sources:[{titre:"Arduino, page de la Nano : mémoires, broches, 18 × 45 mm, 7 g",url:"https://docs.arduino.cc/hardware/nano/"},{titre:"Arduino, Nano, fiche technique A000005",url:"https://docs.arduino.cc/resources/datasheets/A000005-datasheet.pdf"},{titre:"Microchip, fiche technique de l'ATmega328P : valeurs limites (40 mA par broche, 200 mA en tout)",url:"https://www.microchip.com/en-us/product/atmega328p"},{titre:"Cœur Arduino AVR 1.8.7 de ton poste, variants/eightanaloginputs/pins_arduino.h : A6 = 20, A7 = 21, entrées analogiques seulement"},s]},"uno-q":{titre:"Arduino UNO Q",resume:"L'Uno de demain : deux cerveaux sur la forme de l'Uno. Un microcontrôleur STM32U585 fait tourner les programmes Arduino en temps réel ; un processeur Qualcomm QRB2210 fait tourner Linux (Debian), le Wi-Fi et l'intelligence artificielle. Les connecteurs sont ceux de l'Uno, mais en 3,3 V. Le simulateur ne fait que le microcontrôleur.",grandeurs:[{nom:"Microcontrôleur",valeur:"STM32U585 (Arm Cortex-M33), jusqu'à 160 MHz"},{nom:"Mémoires du microcontrôleur",valeur:"2 Mo de flash, 786 Ko de SRAM"},{nom:"Processeur",valeur:"Qualcomm Dragonwing QRB2210 : 4 cœurs Cortex-A53 à 2,0 GHz, Debian Linux"},{nom:"Mémoires du processeur",valeur:"2 Go de RAM et 16 Go (ABX00162), ou 4 Go et 32 Go (ABX00173)"},{nom:"Tension des broches",valeur:"3,3 V (connecteurs de l'Uno)",note:"Elles tolèrent le 5 V en entrée, sauf A0 et A1 : à confirmer sur la fiche technique."},{nom:"Alimentation",valeur:"USB-C (5 V, jusqu'à 3 A), ou 7 à 24 V sur VIN"},{nom:"Courant par broche",valeur:"à vérifier",note:"Je ne l'ai pas trouvé dans ce que j'ai pu lire : la fiche technique ABX00162 le dira."},{nom:"Radio",valeur:"Wi-Fi 5 (2,4 et 5 GHz), Bluetooth 5.1 : module WCBN3536A"},{nom:"Afficheurs",valeur:"une matrice de 8 × 13 LED bleues ; 4 LED RGB, dont 2 pour le microcontrôleur (à vérifier)"},{nom:"Connecteurs",valeur:"ceux de l'Uno ; Qwiic (I²C) pour les modules Modulino ; des connecteurs rapides dessous"},{nom:"Dimensions",valeur:"68,85 × 53,34 mm (le format de l'Uno)"}],broches:[{borne:"D0",role:"RX de la liaison Serial (le moniteur passe par Monitor)",niveau:"3,3 V"},{borne:"D1",role:"TX de la liaison Serial",niveau:"3,3 V"},{borne:"D2 à D13",role:"numériques ; MLI sur 3, 5, 6, 9, 10, 11 (à vérifier)",niveau:"3,3 V"},{borne:"A0 à A5",role:"entrées analogiques, ou numériques 14 à 19 (à vérifier)",niveau:"0 à 3,3 V"},{borne:"SDA",role:"I²C, données",niveau:"3,3 V"},{borne:"SCL",role:"I²C, horloge",niveau:"3,3 V"},{borne:"AREF",role:"référence du convertisseur analogique"},{borne:"IOREF",role:"donne la tension des broches (3,3 V) aux cartes d'extension"},{borne:"RESET",role:"remise à zéro"},{borne:"3V3",role:"sortie 3,3 V"},{borne:"5V",role:"sortie 5 V"},{borne:"VIN",role:"entrée 7 à 24 V"},{borne:"GND",role:"masse, 0 V (trois bornes, reliées)"}],calcul:h,branchement:{carte:"uno-q",fils:[],texte:"Le programme ne demande aucun fil : il écrit dans le moniteur série, par Monitor."},programme:{titre:"Compter les secondes au moniteur (Monitor)",source:`// Sur l'UNO Q, le moniteur s\xe9rie passe par Monitor (Serial est la liaison de D0 et D1).
int secondes = 0;

void setup() {
  Monitor.begin(9600);
}

void loop() {
  Monitor.print("Depuis le d\xe9marrage : ");
  Monitor.print(secondes);
  Monitor.println(" s");
  secondes = secondes + 1;
  delay(1000);
}
`},pieges:["Le moniteur série passe par Monitor, pas par Serial : un programme d'Uno qui écrit avec Serial n'affiche rien. Le simulateur le signale.","Les broches sont en 3,3 V : elles tolèrent le 5 V en entrée, sauf A0 et A1 (à confirmer). Par prudence, l'Echo d'un HC-SR04 passe par un pont diviseur.","Le processeur Linux et son Wi-Fi ne sont pas simulés : seul le microcontrôleur l'est.","La numérotation des broches (A0 = 14), la résolution d'analogRead et la bibliothèque Servo sont à vérifier : le cœur Arduino de l'UNO Q n'est pas installé sur ton poste."],sources:[{titre:"Arduino, page de l'UNO Q : STM32U585 à 160 MHz, 2 Mo de flash, 786 Ko de SRAM, QRB2210, WCBN3536A, Qwiic",url:"https://docs.arduino.cc/hardware/uno-q/"},{titre:"Arduino, UNO Q, fiche technique ABX00162 : VIN 7 à 24 V, USB-C 5 V 3 A, connecteurs en 3,3 V, 68,85 × 53,34 mm",url:"https://docs.arduino.cc/resources/datasheets/ABX00162-datasheet.pdf"},{titre:"Electronic Design, la carte présentée : matrice de 8 × 13 LED bleues, 4 LED RGB",url:"https://www.electronicdesign.com/technologies/embedded/article/55321526/electronic-design-qualcomms-acquisition-of-arduino-creates-a-new-vibe-ai-and-signal-processing-on-the-uno-q"},i]},"esp32-devkit-v1":{titre:"ESP32 DevKit V1 (DOIT, 30 broches)",resume:"La carte ESP32 des kits : un module ESP-WROOM-32 (deux cœurs à 240 MHz, Wi-Fi et Bluetooth) et 30 broches en 3,3 V. Bien plus rapide qu'une Uno et avec bien plus de mémoire, elle se branche par un câble micro-USB. Ses broches ne supportent pas le 5 V.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32 (deux cœurs Xtensa LX6), 240 MHz"},{nom:"Mémoires",valeur:"4 Mo de flash (le programme), 520 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 4.2 et BLE"},{nom:"Tension des broches",valeur:"3,3 V",note:"Elles ne supportent pas le 5 V."},{nom:"Alimentation",valeur:"par le micro-USB (5 V), ou 5 V sur VIN ; un régulateur donne le 3,3 V"},{nom:"Courant par broche",valeur:"20 mA conseillés, 40 mA au plus"},{nom:"Entrées analogiques",valeur:"12 bits : 0 à 4 095 pour 0 à 3,3 V environ",note:"Les broches de l'ADC2 ne mesurent plus quand le Wi-Fi marche."},{nom:"Sorties analogiques",valeur:"2 vraies sorties analogiques (CNA de 8 bits) : D25 et D26"},{nom:"MLI",valeur:"sur toutes les sorties"},{nom:"Entrées seulement",valeur:"D34, D35, VP (GPIO36), VN (GPIO39) : ni sortie, ni résistance de tirage"},{nom:"Liaisons",valeur:"série : TX0, RX0 (l'USB) et TX2, RX2 ; I²C : D21 (SDA), D22 (SCL) ; SPI : D18, D19, D23, D5"},{nom:"LED",valeur:"bleue sur D2 (LED_BUILTIN), rouge d'alimentation"},{nom:"Dimensions",valeur:"28 × 54 mm environ"}],broches:[{borne:"EN",role:"remise à zéro (le bouton EN), à l'état bas"},{borne:"VP",role:"GPIO36 : entrée seulement ; analogique",niveau:"0 à 3,3 V"},{borne:"VN",role:"GPIO39 : entrée seulement ; analogique",niveau:"0 à 3,3 V"},{borne:"D34 à D35",role:"entrées seulement ; analogiques",niveau:"0 à 3,3 V"},{borne:"D32 à D33",role:"entrées-sorties ; analogiques (ADC1)",niveau:"3,3 V"},{borne:"D25 à D27",role:"entrées-sorties ; D25 et D26 : sorties analogiques (CNA)",niveau:"3,3 V"},{borne:"D12 à D15",role:"entrées-sorties ; D12 et D15 : broches de démarrage",niveau:"3,3 V"},{borne:"D2",role:"entrée-sortie ; LED bleue ; broche de démarrage",niveau:"3,3 V"},{borne:"D4",role:"entrée-sortie ; analogique (ADC2)",niveau:"3,3 V"},{borne:"D5",role:"entrée-sortie ; SS (SPI) ; broche de démarrage",niveau:"3,3 V"},{borne:"D18 à D19",role:"SCK et MISO (SPI)",niveau:"3,3 V"},{borne:"D21 à D22",role:"SDA et SCL (I²C)",niveau:"3,3 V"},{borne:"D23",role:"MOSI (SPI)",niveau:"3,3 V"},{borne:"TX0",role:"GPIO1 : la liaison série de l'USB",niveau:"3,3 V"},{borne:"RX0",role:"GPIO3 : la liaison série de l'USB",niveau:"3,3 V"},{borne:"TX2",role:"GPIO17 : deuxième liaison série",niveau:"3,3 V"},{borne:"RX2",role:"GPIO16 : deuxième liaison série",niveau:"3,3 V"},{borne:"VIN",role:"entrée 5 V (ou la sortie du 5 V de l'USB)"},{borne:"3V3",role:"sortie 3,3 V du régulateur"},{borne:"GND",role:"masse, 0 V (deux bornes)"}],calcul:h,branchement:{carte:"esp32-devkit-v1",fils:[],texte:"La LED bleue est déjà sur la carte, reliée à D2 : le programme la fait clignoter sans aucun fil."},programme:{titre:"Blink, avec le moniteur série",source:d(115200,"LED_BUILTIN : la broche 2, la LED bleue")},pieges:[...p,"D34, D35, VP et VN sont des entrées seulement : un pinMode(34, OUTPUT) ne fait rien sur la carte ; le simulateur le refuse.","D12 à l'état haut au démarrage empêche la carte de démarrer : rien de branché qui le tire vers le haut."],sources:[l,{titre:"Espressif, ESP32-WROOM-32 Datasheet : le module",url:"https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32_datasheet_en.pdf"},c("doitESP32devkitV1","LED_BUILTIN = 2"),s]},"esp32-devkitc":{titre:"ESP32-DevKitC V4 (38 broches)",resume:"La carte d'essai d'Espressif, le fabricant de l'ESP32 : un module ESP32-WROOM-32E, 38 broches, les boutons EN et Boot. Elle n'a pas de LED pour le programme. Ses six broches de la mémoire flash (GPIO6 à 11) sont sorties, mais ne servent pas.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32 (deux cœurs Xtensa LX6), 240 MHz"},{nom:"Module",valeur:"ESP32-WROOM-32E : 4 Mo de flash, antenne gravée",note:"Il existe avec une prise d'antenne (32UE), ou une PSRAM de 8 Mo (WROVER-E)."},{nom:"Mémoire des variables",valeur:"520 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 4.2 et BLE"},{nom:"Tension des broches",valeur:"3,3 V",note:"Elles ne supportent pas le 5 V."},{nom:"Alimentation",valeur:"par le micro-USB, ou 5 V sur la borne 5V"},{nom:"Courant par broche",valeur:"20 mA conseillés, 40 mA au plus"},{nom:"Entrées analogiques",valeur:"12 bits : 0 à 4 095 pour 0 à 3,3 V environ"},{nom:"Liaison USB",valeur:"une puce USB-série, jusqu'à 3 Mbit/s"},{nom:"Boutons",valeur:"EN (remise à zéro), Boot (téléversement)"},{nom:"LED",valeur:"une seule, rouge : la carte est alimentée"}],broches:[{borne:"3V3",role:"sortie 3,3 V"},{borne:"EN",role:"remise à zéro, à l'état bas"},{borne:"SVP",role:"GPIO36 : entrée seulement ; analogique",niveau:"0 à 3,3 V"},{borne:"SVN",role:"GPIO39 : entrée seulement ; analogique",niveau:"0 à 3,3 V"},{borne:"IO34 à IO35",role:"entrées seulement ; analogiques",niveau:"0 à 3,3 V"},{borne:"IO32 à IO33",role:"entrées-sorties ; analogiques (ADC1)",niveau:"3,3 V"},{borne:"IO25 à IO27",role:"entrées-sorties ; IO25 et IO26 : sorties analogiques (CNA)",niveau:"3,3 V"},{borne:"IO12 à IO15",role:"entrées-sorties ; IO12 et IO15 : broches de démarrage",niveau:"3,3 V"},{borne:"IO0",role:"le bouton Boot ; broche de démarrage",niveau:"3,3 V"},{borne:"IO2",role:"entrée-sortie ; broche de démarrage",niveau:"3,3 V"},{borne:"IO21 à IO23",role:"SDA (21), SCL (22), MOSI (23)",niveau:"3,3 V"},{borne:"IO16 à IO19",role:"RX2 (16), TX2 (17), SCK (18), MISO (19)",niveau:"3,3 V"},{borne:"TXD0",role:"GPIO1 : la liaison série de l'USB",niveau:"3,3 V"},{borne:"RXD0",role:"GPIO3 : la liaison série de l'USB",niveau:"3,3 V"},{borne:"CLK",role:"GPIO6 : la mémoire flash, à ne pas utiliser"},{borne:"SD0",role:"GPIO7 : la mémoire flash, à ne pas utiliser"},{borne:"SD1",role:"GPIO8 : la mémoire flash, à ne pas utiliser"},{borne:"SD2",role:"GPIO9 : la mémoire flash, à ne pas utiliser"},{borne:"SD3",role:"GPIO10 : la mémoire flash, à ne pas utiliser"},{borne:"CMD",role:"GPIO11 : la mémoire flash, à ne pas utiliser"},{borne:"5V",role:"entrée ou sortie 5 V (celui de l'USB)"},{borne:"GND",role:"masse, 0 V (trois bornes)"}],calcul:h,branchement:{carte:"esp32-devkitc",fils:[],texte:"La carte n'a pas de LED pour le programme : celui-ci écrit dans le moniteur série, sans aucun fil."},programme:{titre:"Compter les secondes au moniteur",source:`// La carte n'a pas de LED pour le programme : on \xe9crit au moniteur s\xe9rie.
void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.print("Depuis le d\xe9marrage : ");
  Serial.print(millis() / 1000);
  Serial.println(" s");
  delay(1000);
}
`},pieges:[...p,"CLK, SD0 à SD3 et CMD (GPIO6 à 11) sont reliées à la mémoire flash : y brancher quelque chose bloque la carte.","Il n'y a pas de LED pour le programme : un Blink d'Uno ne montre rien. Branche une LED (et sa résistance) sur IO2 par exemple."],sources:[{titre:"Espressif, ESP32-DevKitC V4, guide d'utilisation : les pièces, les versions du module, GPIO6 à 11 réservées à la flash",url:"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32/esp32-devkitc/user_guide.html"},l,{titre:"Espressif, ESP32-WROOM-32E / 32UE Datasheet : le module, sa flash de 4 Mo",url:"https://www.espressif.com/sites/default/files/documentation/esp32-wroom-32e_esp32-wroom-32ue_datasheet_en.pdf"},c("esp32","SDA = 21, SCL = 22"),i]},"feather-esp32":{titre:"Adafruit HUZZAH32 Feather",resume:"Un ESP32 au format Feather d'Adafruit : petit (51 × 23 mm), avec une prise de batterie au lithium et son chargeur. La carte marche sur batterie, se recharge par l'USB, et mesure la tension de sa batterie. Les noms de ses broches (A0, SCK, 13…) ne suivent pas ceux de l'ESP32.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32 (deux cœurs Xtensa LX6), 240 MHz"},{nom:"Mémoires",valeur:"4 Mo de flash, 520 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 4.2 et BLE"},{nom:"Tension des broches",valeur:"3,3 V"},{nom:"Alimentation",valeur:"par le micro-USB, ou une batterie lithium 3,7 V sur la prise JST"},{nom:"Régulateur 3,3 V",valeur:"500 mA en pointe, dont la moitié pour l'ESP32"},{nom:"Batterie",valeur:"chargée par l'USB ; sa tension se lit sur A13 (GPIO35), divisée par deux"},{nom:"Entrées analogiques",valeur:"12 bits : 0 à 4 095"},{nom:"Entrées seulement",valeur:"A2 (GPIO34), A3 (GPIO39), A4 (GPIO36)"},{nom:"Liaisons",valeur:"I²C : SDA (GPIO23), SCL (GPIO22) ; SPI : SCK, MO, MI ; série : RX (16), TX (17)"},{nom:"LED",valeur:"rouge sur 13 (LED_BUILTIN), près de la prise USB ; CHG : la charge"},{nom:"Dimensions",valeur:"51 × 23 mm (format Feather)"}],broches:[{borne:"RST",role:"remise à zéro"},{borne:"3V",role:"sortie 3,3 V du régulateur"},{borne:"A0",role:"GPIO26 ; analogique ; sortie analogique (CNA 2)",niveau:"3,3 V"},{borne:"A1",role:"GPIO25 ; analogique ; sortie analogique (CNA 1)",niveau:"3,3 V"},{borne:"A2",role:"GPIO34 : entrée seulement",niveau:"0 à 3,3 V"},{borne:"A3",role:"GPIO39 : entrée seulement",niveau:"0 à 3,3 V"},{borne:"A4",role:"GPIO36 : entrée seulement",niveau:"0 à 3,3 V"},{borne:"A5",role:"GPIO4 ; analogique",niveau:"3,3 V"},{borne:"SCK",role:"GPIO5 : horloge SPI",niveau:"3,3 V"},{borne:"MO",role:"GPIO18 : MOSI (SPI)",niveau:"3,3 V"},{borne:"MI",role:"GPIO19 : MISO (SPI)",niveau:"3,3 V"},{borne:"RX",role:"GPIO16 : réception série",niveau:"3,3 V"},{borne:"TX",role:"GPIO17 : émission série",niveau:"3,3 V"},{borne:"GPIO13",role:"entrée-sortie ; la LED rouge",niveau:"3,3 V"},{borne:"SDA",role:"GPIO23 : données I²C",niveau:"3,3 V"},{borne:"SCL",role:"GPIO22 : horloge I²C",niveau:"3,3 V"},{borne:"BAT",role:"le + de la batterie"},{borne:"EN",role:"à la masse, coupe le régulateur 3,3 V (la carte s'éteint)"},{borne:"USB",role:"le 5 V de la prise USB"},{borne:"GND",role:"masse, 0 V"}],calcul:{titre:"La tension de la batterie, sur A13",lignes:["Un pont de deux résistances égales divise la tension par deux : U_bat = 2 × U_A13.","U_A13 ≈ N × 3,3 / 4 095 ; pour N = 2 300 : U_A13 ≈ 1,85 V, U_bat ≈ 3,7 V.","Une batterie lithium est pleine à 4,2 V, vide vers 3,3 V."]},branchement:{carte:"feather-esp32",fils:[],texte:"La LED rouge est déjà sur la carte, reliée à 13 : le programme la fait clignoter sans aucun fil."},programme:{titre:"Blink, avec le moniteur série",source:d(115200,"LED_BUILTIN : la broche 13, la LED rouge")},pieges:[...p,"Les noms des broches ne sont pas leurs numéros : A0 est GPIO26, A5 est GPIO4. Dans le programme, écris A0 ou 26, pas 0.","EN à la masse éteint toute la carte : ce n'est pas une remise à zéro (celle-ci est RST).","Une batterie lithium se branche à l'endroit : la prise JST a un sens, et le + n'est pas toujours du même côté selon les fabricants."],sources:[{titre:"Adafruit, HUZZAH32 Feather, les broches : BAT, USB, EN, 3V, le régulateur de 500 mA, A13 sur GPIO35, la LED rouge sur 13",url:"https://learn.adafruit.com/adafruit-huzzah32-esp32-feather/pinouts"},l,c("feather_esp32","A0 = 26, A13 = 35, LED_BUILTIN = 13, SDA = 23, SCL = 22"),i]},"esp32-s3-zero":{titre:"Waveshare ESP32-S3-Zero",resume:"Un ESP32-S3 sur une carte de 18 × 23,5 mm, celle de ton AstroTrack : deux cœurs à 240 MHz, une prise USB-C reliée directement à la puce, une LED RGB adressable. Ses bords se soudent sur une carte ou sur une barrette ; six pastilles de plus sont au dos.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32-S3FH4R2 (deux cœurs Xtensa LX7), 240 MHz"},{nom:"Mémoires",valeur:"4 Mo de flash, 2 Mo de PSRAM, 512 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 5 (BLE), antenne céramique"},{nom:"Tension des broches",valeur:"3,3 V"},{nom:"Alimentation",valeur:"par l'USB-C, ou 5 V sur la borne 5V"},{nom:"Liaison USB",valeur:"l'USB de l'ESP32-S3, sans puce USB-série"},{nom:"Entrées analogiques",valeur:"12 bits ; A0 à A6 sur GPIO1 à 7"},{nom:"I²C",valeur:"pas de broches par défaut : Wire.begin(sda, scl)"},{nom:"LED",valeur:"une LED RGB adressable (WS2812) sur GPIO21"},{nom:"Boutons",valeur:"BOOT (GPIO0), RESET"},{nom:"Dimensions",valeur:"18 × 23,5 × 4,8 mm, 3,4 g"}],broches:[{borne:"5V",role:"entrée ou sortie 5 V (celui de l'USB)"},{borne:"3V3",role:"sortie 3,3 V"},{borne:"GND",role:"masse, 0 V"},{borne:"IO1 à IO7",role:"entrées-sorties ; analogiques A0 à A6",niveau:"3,3 V"},{borne:"IO3",role:"broche de démarrage, à éviter",niveau:"3,3 V"},{borne:"IO8 à IO18",role:"entrées-sorties ; MLI ; analogiques (IO8 à IO10 ADC1, au-delà ADC2)",niveau:"3,3 V"},{borne:"TX",role:"GPIO43 : émission série",niveau:"3,3 V"},{borne:"RX",role:"GPIO44 : réception série",niveau:"3,3 V"},{borne:"IO38 à IO42",role:"pastilles du dos ; entrées-sorties",niveau:"3,3 V"},{borne:"IO45",role:"pastille du dos ; broche de démarrage, à éviter",niveau:"3,3 V"}],calcul:{titre:"La couleur d'une LED RGB",lignes:["Trois LED dans un boîtier : rouge, vert, bleu, chacune réglée de 0 à 255 (8 bits).","256 × 256 × 256 = 16 777 216 couleurs.","rgbLedWrite(RGB_BUILTIN, 64, 0, 0) : du rouge, au quart de sa force."]},branchement:{carte:"esp32-s3-zero",fils:[],texte:"La LED RGB est déjà sur la carte, reliée à GPIO21 : le programme change sa couleur sans aucun fil."},programme:{titre:"La LED RGB : rouge, vert, bleu",source:m("RGB_BUILTIN : la LED de GPIO21")},pieges:["Le moniteur série passe par l'USB de la puce : dans l'IDE, « USB CDC On Boot » doit être sur Enabled (menu Outils), sinon Serial n'affiche rien.","Au premier téléversement, ou si la carte ne répond plus : maintiens BOOT, appuie sur RESET, relâche BOOT.","Wire.begin() sans broches ne marche pas : écris Wire.begin(sda, scl). Le simulateur le signale.","Sur certaines cartes, le rouge et le vert de la LED sont inversés : à vérifier sur la tienne.","GPIO21 commande la LED : ne t'en sers pas pour autre chose."],sources:[{titre:"Waveshare, ESP32-S3-Zero (page du produit) : 4 Mo de flash, 2 Mo de PSRAM",url:"https://www.waveshare.com/esp32-s3-zero.htm"},o,c("waveshare_esp32_s3_zero","A0 à A6 sur GPIO1 à 7, SDA = SCL = −1, la LED RGB sur 21"),{titre:"Ton README d'AstroTrack : GPIO0 pour BOOT, GPIO21 pour la LED, les broches 1 à 18, 38 à 42 et 45"},i]},"esp32-s3-devkitc":{titre:"ESP32-S3-DevKitC-1",resume:"La carte d'essai d'Espressif pour l'ESP32-S3 : un module ESP32-S3-WROOM-1, 44 broches, deux prises USB (l'une passe par une puce USB-série, l'autre va directement à la puce) et une LED RGB adressable.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32-S3 (deux cœurs Xtensa LX7), 240 MHz"},{nom:"Module",valeur:"ESP32-S3-WROOM-1 : 8 Mo de flash et plus selon la version (N8, N8R8, N16R8…)"},{nom:"Mémoire des variables",valeur:"512 Ko de SRAM, et la PSRAM des versions R"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 5 (BLE)"},{nom:"Tension des broches",valeur:"3,3 V"},{nom:"Prises USB",valeur:"UART (par la puce USB-série) ; USB (l'USB de l'ESP32-S3)"},{nom:"Entrées analogiques",valeur:"12 bits, sur GPIO1 à 20"},{nom:"I²C par défaut",valeur:"SDA sur GPIO8, SCL sur GPIO9"},{nom:"LED",valeur:"une LED RGB adressable sur GPIO48 (GPIO38 sur la version 1.1) ; une LED d'alimentation"},{nom:"Boutons",valeur:"Boot (GPIO0), Reset"}],broches:[{borne:"3V3",role:"sortie 3,3 V (deux bornes)"},{borne:"RST",role:"remise à zéro"},{borne:"GPIO4 à GPIO18",role:"entrées-sorties ; analogiques",niveau:"3,3 V"},{borne:"GPIO1 à GPIO2",role:"entrées-sorties ; analogiques",niveau:"3,3 V"},{borne:"GPIO3",role:"broche de démarrage",niveau:"3,3 V"},{borne:"GPIO19 à GPIO20",role:"D− et D+ de la prise USB",niveau:"3,3 V"},{borne:"GPIO35 à GPIO37",role:"la PSRAM sur les versions R8 : à éviter",niveau:"3,3 V"},{borne:"GPIO38 à GPIO42",role:"entrées-sorties",niveau:"3,3 V"},{borne:"GPIO0",role:"le bouton Boot ; broche de démarrage",niveau:"3,3 V"},{borne:"GPIO45 à GPIO46",role:"broches de démarrage",niveau:"3,3 V"},{borne:"GPIO47 à GPIO48",role:"entrées-sorties ; GPIO48 : la LED RGB (version 1.0)",niveau:"3,3 V"},{borne:"GPIO21",role:"entrée-sortie",niveau:"3,3 V"},{borne:"TX",role:"GPIO43 : la liaison série de la prise UART",niveau:"3,3 V"},{borne:"RX",role:"GPIO44 : la liaison série de la prise UART",niveau:"3,3 V"},{borne:"5V",role:"entrée ou sortie 5 V"},{borne:"GND",role:"masse, 0 V (quatre bornes)"}],calcul:h,branchement:{carte:"esp32-s3-devkitc",fils:[],texte:"La LED RGB est déjà sur la carte : le programme change sa couleur sans aucun fil."},programme:{titre:"La LED RGB : rouge, vert, bleu",source:m("RGB_BUILTIN : la LED de GPIO48")},pieges:["Deux prises USB : pour le moniteur série d'un programme simple, branche la prise UART.","La LED RGB est sur GPIO48 sur la version 1.0, sur GPIO38 sur la 1.1 : si elle ne s'allume pas, change la broche.","GPIO19 et GPIO20 sont l'USB : y brancher un capteur coupe la prise USB.","Sur les versions à PSRAM octale (R8), GPIO35 à 37 sont pris par la mémoire.","Les broches sont en 3,3 V et ne supportent pas le 5 V."],sources:[{titre:"Espressif, ESP32-S3-DevKitC-1 v1.1, guide d'utilisation : les deux prises, Boot, Reset, la LED RGB sur GPIO38 (GPIO48 en v1.0)",url:"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide_v1.1.html"},o,c("esp32s3","SDA = 8, SCL = 9, la LED RGB sur 48"),i]},"esp32-c3-supermini":{titre:"ESP32-C3 SuperMini",resume:"La plus petite des cartes ESP32 courantes (22,5 × 18 mm) : un ESP32-C3 à un cœur RISC-V de 160 MHz, le Wi-Fi et le Bluetooth, une prise USB-C reliée directement à la puce. Celle de ton Mini H2. Sans marque, elle n'a pas de documentation de fabricant : ses faits viennent de la puce et des fichiers du cœur Arduino.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32-C3 (un cœur RISC-V), 160 MHz"},{nom:"Mémoires",valeur:"4 Mo de flash, 400 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 5 (BLE)"},{nom:"Tension des broches",valeur:"3,3 V",note:"Elles ne supportent pas le 5 V."},{nom:"Alimentation",valeur:"par l'USB-C, ou 5 V sur la borne 5V"},{nom:"Liaison USB",valeur:"l'USB de l'ESP32-C3, sans puce USB-série"},{nom:"Entrées analogiques",valeur:"12 bits ; A0 à A5 sur GPIO0 à 5",note:"GPIO5 est sur l'ADC2, moins fiable."},{nom:"I²C par défaut",valeur:"SDA sur GPIO8, SCL sur GPIO9",note:"Les broches de la LED et du bouton BOOT : mieux vaut en choisir d'autres."},{nom:"LED",valeur:"bleue sur GPIO8 (LED_BUILTIN), allumée à l'état bas sur la plupart des cartes"},{nom:"Boutons",valeur:"BOOT (GPIO9), RST"},{nom:"Dimensions",valeur:"22,5 × 18 mm"}],broches:[{borne:"5V",role:"entrée ou sortie 5 V (celui de l'USB)"},{borne:"3V3",role:"sortie 3,3 V"},{borne:"GND",role:"masse, 0 V"},{borne:"GPIO0 à GPIO4",role:"entrées-sorties ; analogiques A0 à A4",niveau:"3,3 V"},{borne:"GPIO2",role:"broche de démarrage",niveau:"3,3 V"},{borne:"GPIO5 à GPIO7",role:"entrées-sorties ; MISO (5), MOSI (6), SS (7)",niveau:"3,3 V"},{borne:"GPIO8",role:"la LED bleue ; SDA par défaut ; broche de démarrage",niveau:"3,3 V"},{borne:"GPIO9",role:"le bouton BOOT ; SCL par défaut ; broche de démarrage",niveau:"3,3 V"},{borne:"GPIO10",role:"entrée-sortie",niveau:"3,3 V"},{borne:"GPIO20",role:"RX : réception série",niveau:"3,3 V"},{borne:"GPIO21",role:"TX : émission série",niveau:"3,3 V"}],calcul:h,branchement:{carte:"esp32-c3-supermini",fils:[],texte:"La LED bleue est déjà sur la carte, reliée à GPIO8 : le programme la fait clignoter sans aucun fil."},programme:{titre:"Blink, avec le moniteur série",source:d(115200,"LED_BUILTIN : GPIO8 ; la LED s'allume à l'état bas","HIGH","LOW")},pieges:["La LED bleue s'allume à l'état bas sur la plupart des cartes : digitalWrite(LED_BUILTIN, LOW) l'allume. À vérifier sur la tienne.","Le moniteur série passe par l'USB de la puce : « USB CDC On Boot » doit être sur Enabled (menu Outils de l'IDE).","L'I²C par défaut tombe sur GPIO8 et 9 (la LED et BOOT) : donne d'autres broches, comme ton TP du Mini H2 : Wire.begin(4, 5).","Si la carte ne se téléverse plus : maintiens BOOT, appuie sur RST, relâche BOOT.","Les broches sont en 3,3 V : rien en 5 V sur une broche."],sources:[u,c("nologo_esp32c3_super_mini","LED_BUILTIN = 8, SDA = 8, SCL = 9, A0 à A5 sur GPIO0 à 5"),{titre:"espboards.dev, ESP32-C3 Super Mini : 22,5 × 18 mm, 4 Mo de flash, 400 Ko de SRAM (carte sans marque, pas de fiche du fabricant)",url:"https://www.espboards.dev/esp32/esp32-c3-super-mini/"},i]},"esp32-c3-devkitm":{titre:"ESP32-C3-DevKitM-1",resume:"La carte d'essai d'Espressif pour l'ESP32-C3 : un module ESP32-C3-MINI-1 (la flash est dans la puce), 30 broches dont beaucoup de masses, une prise micro-USB par une puce USB-série, et une LED RGB adressable.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32-C3 (un cœur RISC-V), 160 MHz"},{nom:"Module",valeur:"ESP32-C3-MINI-1 : 4 Mo de flash intégrée, antenne gravée (MINI-1U : prise d'antenne)"},{nom:"Mémoire des variables",valeur:"400 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 5 (BLE)"},{nom:"Tension des broches",valeur:"3,3 V"},{nom:"Alimentation",valeur:"par le micro-USB ; un régulateur donne le 3,3 V"},{nom:"Liaison USB",valeur:"une puce USB-série, jusqu'à 3 Mbit/s"},{nom:"Entrées analogiques",valeur:"12 bits, sur GPIO0 à 4"},{nom:"LED",valeur:"une LED RGB adressable sur GPIO8 ; une LED rouge d'alimentation"},{nom:"Boutons",valeur:"Boot (GPIO9), Reset"}],broches:[{borne:"GPIO0 à GPIO4",role:"entrées-sorties ; analogiques",niveau:"3,3 V"},{borne:"GPIO2",role:"broche de démarrage",niveau:"3,3 V"},{borne:"GPIO5 à GPIO7",role:"entrées-sorties",niveau:"3,3 V"},{borne:"GPIO8",role:"la LED RGB ; SDA par défaut ; broche de démarrage",niveau:"3,3 V"},{borne:"GPIO9",role:"le bouton Boot ; SCL par défaut ; broche de démarrage",niveau:"3,3 V"},{borne:"GPIO10",role:"entrée-sortie",niveau:"3,3 V"},{borne:"GPIO18 à GPIO19",role:"D− et D+ de l'USB de la puce",niveau:"3,3 V"},{borne:"TX",role:"GPIO21 : la liaison série de la prise USB",niveau:"3,3 V"},{borne:"RX",role:"GPIO20 : la liaison série de la prise USB",niveau:"3,3 V"},{borne:"RST",role:"remise à zéro"},{borne:"3V3",role:"sortie 3,3 V (deux bornes)"},{borne:"5V",role:"entrée ou sortie 5 V (deux bornes)"},{borne:"GND",role:"masse, 0 V (dix bornes)"}],calcul:h,branchement:{carte:"esp32-c3-devkitm",fils:[],texte:"La LED RGB est déjà sur la carte, reliée à GPIO8 : le programme change sa couleur sans aucun fil."},programme:{titre:"La LED RGB : rouge, vert, bleu",source:m("RGB_BUILTIN : la LED de GPIO8")},pieges:["Le moniteur série passe par la puce USB-série : la carte s'utilise comme une Uno, sans réglage USB CDC.","GPIO8 commande la LED RGB et sert au démarrage : pas de capteur dessus.","Si la carte ne se téléverse plus : maintiens Boot, appuie sur Reset, relâche Boot.","Les broches sont en 3,3 V : rien en 5 V sur une broche."],sources:[{titre:"Espressif, ESP32-C3-DevKitM-1, guide d'utilisation : le module MINI-1 et sa flash de 4 Mo, la LED RGB sur GPIO8, Boot, Reset, le micro-USB",url:"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c3/esp32-c3-devkitm-1/user_guide.html"},u,c("esp32c3","la LED RGB sur 8, SDA = 8, SCL = 9"),i]},"xiao-esp32c3":{titre:"Seeed Studio XIAO ESP32C3",resume:"Un ESP32-C3 sur une carte de la taille d'un timbre (21 × 17,8 mm), avec une antenne externe et un chargeur de batterie. Ses broches portent les noms D0 à D10 de la famille XIAO, qui ne sont pas les numéros de l'ESP32-C3. Elle n'a pas de LED pour le programme.",grandeurs:[{nom:"Microcontrôleur",valeur:"ESP32-C3 (un cœur RISC-V), jusqu'à 160 MHz"},{nom:"Mémoires",valeur:"4 Mo de flash, 400 Ko de SRAM"},{nom:"Radio",valeur:"Wi-Fi 802.11 b/g/n (2,4 GHz), Bluetooth 5 (BLE) ; antenne externe sur prise U.FL, fournie"},{nom:"Tension des broches",valeur:"3,3 V"},{nom:"Alimentation",valeur:"5 V par l'USB-C ou la borne 5V ; batterie lithium 3,7 V sur les pastilles BAT du dos"},{nom:"Courant sur 3V3",valeur:"500 mA au plus",note:"La page de Seeed donne aussi 700 mA : prends la plus petite valeur."},{nom:"Charge de la batterie",valeur:"380 mA (rapide), 40 mA (d'entretien)"},{nom:"Broches",valeur:"11 numériques (D0 à D10), toutes en MLI ; 4 analogiques (A0 à A3)",note:"A3 est sur l'ADC2, peu fiable."},{nom:"Liaisons",valeur:"I²C : D4 (SDA), D5 (SCL) ; série : D6 (TX), D7 (RX) ; SPI : D8 à D10"},{nom:"Veille profonde",valeur:"44 µA"},{nom:"Boutons",valeur:"BOOT (GPIO9, la broche D9), RESET"},{nom:"Dimensions",valeur:"21 × 17,8 mm"}],broches:[{borne:"D0",role:"GPIO2 ; A0 ; broche de démarrage",niveau:"3,3 V"},{borne:"D1",role:"GPIO3 ; A1",niveau:"3,3 V"},{borne:"D2",role:"GPIO4 ; A2",niveau:"3,3 V"},{borne:"D3",role:"GPIO5 ; A3 (ADC2)",niveau:"3,3 V"},{borne:"D4",role:"GPIO6 ; SDA (I²C)",niveau:"3,3 V"},{borne:"D5",role:"GPIO7 ; SCL (I²C)",niveau:"3,3 V"},{borne:"D6",role:"GPIO21 ; TX (série)",niveau:"3,3 V"},{borne:"D7",role:"GPIO20 ; RX (série)",niveau:"3,3 V"},{borne:"D8",role:"GPIO8 ; SCK (SPI) ; broche de démarrage",niveau:"3,3 V"},{borne:"D9",role:"GPIO9 ; MISO (SPI) ; le bouton BOOT",niveau:"3,3 V"},{borne:"D10",role:"GPIO10 ; MOSI (SPI)",niveau:"3,3 V"},{borne:"5V",role:"entrée ou sortie 5 V (celui de l'USB)"},{borne:"3V3",role:"sortie 3,3 V, 500 mA au plus"},{borne:"GND",role:"masse, 0 V"}],calcul:h,branchement:{carte:"xiao-esp32c3",fils:[],texte:"Le bouton BOOT de la carte est sur D9 : le programme le lit, sans aucun fil."},programme:{titre:"Lire le bouton BOOT (D9)",source:`// Le bouton BOOT de la carte est reli\xe9 \xe0 D9 (GPIO9) : appuy\xe9, il met D9 \xe0 l'\xe9tat bas.
void setup() {
  Serial.begin(115200);
  pinMode(D9, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(D9) == LOW) {
    Serial.println("BOOT appuy\xe9");
  } else {
    Serial.println("BOOT rel\xe2ch\xe9");
  }
  delay(500);
}
`},pieges:["D0 n'est pas GPIO0 : c'est GPIO2. Dans le programme, écris D0 (ou 2), pas 0.","Il n'y a pas de LED_BUILTIN : un Blink d'Uno ne se compile pas. Branche une LED (et sa résistance) sur une broche.","Si l'IDE reste bloqué au téléversement : appuie une fois sur RESET ; sinon, maintiens BOOT en branchant l'USB, puis relâche.","Sans son antenne vissée sur la prise U.FL, le Wi-Fi porte très mal.","Le moniteur série passe par l'USB de la puce : « USB CDC On Boot » doit être sur Enabled."],sources:[{titre:"Seeed Studio, XIAO ESP32C3, prise en main : mémoires, 21 × 17,8 mm, courants, BOOT sur GPIO9, pas de LED_BUILTIN",url:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/"},u,c("XIAO_ESP32C3","D0 = 2, … D10 = 10, SDA = 6, SCL = 7"),i]}};class g{nom="AS5600";brut=0;aimant=!0;pointeur=0;registres=new Uint8Array(256);tourner(e){this.brut=Math.round((e%360+360)%360*(4096/360))%4096}ecrire(e){if(0!==e.length){this.pointeur=255&e[0];for(let r=1;r<e.length;r+=1)this.registres[this.pointeur+r-1&255]=255&e[r]}}lire(e){let r=[];for(let t=0;t<e;t+=1)r.push(this.registre(this.pointeur)),this.pointeur=this.pointeur+1&255;return r}registre(e){let r=this.aimant?this.brut:0;switch(e){case 11:return this.aimant?32:16;case 12:case 14:return r>>8&15;case 13:case 15:return 255&r;case 26:return this.aimant?128:255;default:return this.registres[e]}}}class b{nom="MPU6050";acceleration=[0,0,1];rotation=[0,0,0];temperature=25;pointeur=0;registres=new Uint8Array(256);constructor(){this.registres[107]=64}incliner(e,r){let t=e*Math.PI/180,a=r*Math.PI/180;this.acceleration=[-Math.sin(a),Math.sin(t)*Math.cos(a),Math.cos(t)*Math.cos(a)]}ecrire(e){if(0!==e.length){this.pointeur=255&e[0];for(let r=1;r<e.length;r+=1)this.registres[this.pointeur+r-1&255]=255&e[r]}}lire(e){let r=[];for(let t=0;t<e;t+=1)r.push(this.registre(this.pointeur)),this.pointeur=this.pointeur+1&255;return r}registre(e){let r;if(117===e)return 104;if(e<59||e>72)return this.registres[e];if(64&this.registres[107])return 0;let t=16384>>(this.registres[28]>>3&3),a=131/(1<<(this.registres[27]>>3&3)),n=[...this.acceleration.map(e=>e*t),(this.temperature-36.53)*340,...this.rotation.map(e=>e*a)],s=e-59;return[(r=65535&Math.max(-32768,Math.min(32767,Math.round(n[s>>1]))))>>8,255&r][1&s]}}class v{nom="INA219";bus=0;courant=0;shunt=.1;pointeur=0;config=14751;calibration=0;ecrire(e){if(0!==e.length&&(this.pointeur=7&e[0],e.length>=3)){let r=(255&e[1])<<8|255&e[2];0===this.pointeur&&(this.config=32768&r?14751:r),5===this.pointeur&&(this.calibration=65534&r)}}lire(e){let r=65535&this.registre(this.pointeur),t=[r>>8,255&r];return Array.from({length:e},(e,r)=>t[r%2])}registre(e){let r=Math.max(-32e3,Math.min(32e3,Math.round(this.courant*this.shunt/1e-5))),t=Math.max(0,Math.min(8e3,Math.round(this.bus/.004))),a=Math.trunc(r*this.calibration/4096);switch(e){case 0:return this.config;case 1:return r;case 2:return t<<3|2;case 3:return this.calibration?Math.trunc(a*t/5e3):0;case 4:return this.calibration?a:0;case 5:return this.calibration;default:return 0}}}let x={titre:"Dessin : wokwi-elements (licence MIT, © Uri Shaked)",url:"https://github.com/wokwi/wokwi-elements"},y={titre:"Dessin : Méca & Cie, d'après le modèle le plus courant (à comparer au tien)"},D={titre:"Microchip, fiche technique de l'ATmega328P : résistances de tirage internes de 20 à 50 kΩ",url:"https://www.microchip.com/en-us/product/atmega328p"},V={titre:"Texas Instruments, LM393 : le comparateur des modules",url:"https://www.ti.com/lit/ds/symlink/lm393.pdf"},S=(e,r)=>({nom:e,unite:"",min:0,max:1,pas:1,depart:0,etats:r}),C=(e,r)=>e?{[r]:0}:{},A={bouton:{titre:"Bouton-poussoir",resume:"Le bouton de 6 × 6 mm des platines d'essai : tant qu'on appuie, il relie ses deux côtés ; relâché, il les sépare. Ses quatre pattes sont reliées deux à deux à l'intérieur. Il se lit avec digitalRead, et une résistance de tirage (INPUT_PULLUP).",grandeurs:[{nom:"Contact",valeur:"ouvert au repos, fermé tant qu'on appuie"},{nom:"Courant coupé",valeur:"50 mA au plus, sous 5 à 24 V continu",note:"Un bouton commande une entrée, jamais un moteur."},{nom:"Rebonds",valeur:"5 ms au plus",note:"À l'appui, le contact s'ouvre et se ferme plusieurs fois."},{nom:"Force d'appui",valeur:"1 à 2,5 N selon le modèle"},{nom:"Dimensions",valeur:"6 × 6 mm ; pattes au pas de 6,5 × 4,5 mm"}],broches:[{borne:"1",role:"un côté du contact, relié à 1.2"},{borne:"1.2",role:"relié à 1, à l'intérieur"},{borne:"2",role:"l'autre côté du contact, relié à 2.2"},{borne:"2.2",role:"relié à 2, à l'intérieur"}],calcul:{titre:"La résistance de tirage",lignes:["Relâché, INPUT_PULLUP tire l'entrée à 5 V par une résistance de 20 à 50 kΩ dans la puce : digitalRead lit HIGH.","Appuyé, le bouton met l'entrée à 0 V : digitalRead lit LOW. Le courant : I = 5 / 35 000 ≈ 0,14 mA.","La logique est inversée : appuyé = LOW."]},branchement:{carte:"uno",fils:[{de:"1",vers:"D2",couleur:"jaune"},{de:"2",vers:"GND",couleur:"noir"}],texte:"Une patte sur D2, l'autre côté sur GND : appuyé, D2 passe à 0 V. Pas de résistance : celle de la puce suffit (INPUT_PULLUP)."},programme:{titre:"Le bouton allume la LED L",source:`// Le bouton sur D2, vers GND : appuy\xe9, D2 lit LOW.
const int BOUTON = 2;
int avant = HIGH;

void setup() {
  Serial.begin(9600);
  pinMode(BOUTON, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  int etat = digitalRead(BOUTON);
  digitalWrite(LED_BUILTIN, etat == LOW);
  if (etat != avant) {
    if (etat == LOW) Serial.println("appuy\xe9");
    else Serial.println("rel\xe2ch\xe9");
    avant = etat;
  }
  delay(20);   // le temps des rebonds
}
`},essai:{reglages:[S("Le bouton",["relâché","appuyé"])],tensions:([e])=>C(e,"1"),etat:([e])=>({appuye:!!e})},pieges:["Sans résistance de tirage, l'entrée est « en l'air » : elle lit n'importe quoi. INPUT_PULLUP, ou une résistance de 10 kΩ.","Avec INPUT_PULLUP, appuyé se lit LOW : la condition est if (digitalRead(2) == LOW).","1 et 1.2 sont reliées : brancher les deux fils du même côté, c'est un bouton toujours « appuyé ». En diagonale, on ne se trompe pas.","Les rebonds : pour compter des appuis, un appui en compte plusieurs. Attendre 20 ms, ou ne compter que le passage de HIGH à LOW."],sources:[{titre:"Omron, B3F (bouton de 6 × 6 mm) : 50 mA sous 24 V, rebonds de 5 ms au plus",url:"https://omronfs.omron.com/en_US/ecb/products/pdf/en-b3f.pdf"},D,x]},interrupteur:{titre:"Interrupteur à glissière",resume:"Un inverseur : sa borne du milieu (le commun) est reliée à l'une ou l'autre des bornes extrêmes, selon la position. Avec une extrémité à GND et l'autre au 5V, le commun donne directement 0 ou 5 V à une entrée, sans résistance de tirage.",grandeurs:[{nom:"Contact",valeur:"inverseur à deux positions : le commun (2) relié à 1 ou à 3"},{nom:"Courant coupé",valeur:"0,5 A sous 50 V continu au plus (SS12D00, le modèle courant)"},{nom:"Rebonds",valeur:"quelques millisecondes au basculement"},{nom:"Broches",valeur:"3, en ligne"}],broches:[{borne:"1",role:"une extrémité"},{borne:"2",role:"le commun, au milieu"},{borne:"3",role:"l'autre extrémité"}],calcul:{titre:"Pourquoi pas de résistance ici",lignes:["1 au GND, 3 au 5V : le commun est toujours relié à l'un des deux.","L'entrée lit 0 V ou 5 V, jamais « en l'air » : pas besoin de résistance de tirage.","Le commun ne touche jamais 1 et 3 à la fois : pas de court-circuit entre 5V et GND."]},branchement:{carte:"uno",fils:[{de:"1",vers:"GND",couleur:"noir"},{de:"2",vers:"D2",couleur:"jaune"},{de:"3",vers:"5V",couleur:"rouge"}],texte:"Les extrémités au GND et au 5V, le commun (au milieu) sur D2."},programme:{titre:"Lire la position",source:`// L'interrupteur : le commun sur D2, les extr\xe9mit\xe9s au GND et au 5V.
const int INTER = 2;

void setup() {
  Serial.begin(9600);
  pinMode(INTER, INPUT);
}

void loop() {
  if (digitalRead(INTER) == HIGH) Serial.println("position 3 : marche");
  else Serial.println("position 1 : arr\xeat");
  delay(500);
}
`},essai:{reglages:[S("L'interrupteur",["côté 1","côté 3"])],tensions:([e],r)=>({2:e?r:0})},pieges:["Le commun est la borne du milieu : un fil d'entrée sur une extrémité donne une entrée en l'air dans une des positions.","0,5 A au plus : il commande une entrée ou une LED, pas un moteur.","Sur une carte en 3,3 V (ESP32, UNO Q), l'extrémité va au 3V3, pas au 5V."],sources:[{titre:"Fiche du vendeur de l'interrupteur SS12D00 : 0,5 A sous 50 V continu"},x]},"fin-de-course":{titre:"Fin de course (micro-rupteur à levier)",resume:"Un micro-rupteur à levier et galet : la pièce qui arrive en butée appuie sur le levier, le contact bascule. Il a un commun (C) et deux contacts : NO, ouvert au repos, et NC, fermé au repos. C'est le capteur de position des systèmes automatisés.",grandeurs:[{nom:"Contact",valeur:"inverseur : C relié à NC au repos, à NO quand le levier est enfoncé"},{nom:"Courant coupé",valeur:"5 A sous 250 V alternatif (micro-rupteur courant, à vérifier sur le tien)",note:"La carte n'y fait passer que quelques dixièmes de mA."},{nom:"Rebonds",valeur:"quelques millisecondes"},{nom:"Raccordement",valeur:"trois cosses (à souder, ou à fiches)"}],broches:[{borne:"C",role:"le commun"},{borne:"NO",role:"normalement ouvert : relié à C quand le levier est enfoncé"},{borne:"NC",role:"normalement fermé : relié à C au repos"}],calcul:{titre:"NO ou NC : la sécurité",lignes:["En NO, l'information « en butée » arrive quand le contact se ferme : un fil coupé ne se voit pas.","En NC, elle arrive quand le contact s'ouvre : un fil coupé se lit comme « en butée », la machine s'arrête.","C'est pourquoi les arrêts et les fins de course de sécurité se câblent en NC (sécurité positive)."]},branchement:{carte:"uno",fils:[{de:"C",vers:"GND",couleur:"noir"},{de:"NO",vers:"D2",couleur:"jaune"}],texte:"C au GND, NO sur D2 : levier enfoncé, D2 passe à 0 V (INPUT_PULLUP)."},programme:{titre:"Détecter la butée",source:`// Le fin de course : C au GND, NO sur D2. Levier enfonc\xe9 : D2 lit LOW.
const int FDC = 2;

void setup() {
  Serial.begin(9600);
  pinMode(FDC, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  bool enButee = digitalRead(FDC) == LOW;
  digitalWrite(LED_BUILTIN, enButee);
  if (enButee) Serial.println("en but\xe9e");
  else Serial.println("libre");
  delay(300);
}
`},essai:{reglages:[S("Le levier",["libre","enfoncé"])],tensions:([e])=>C(e,"NO")},pieges:["NO et NC inversés : la logique du programme est inversée. Vérifie à l'ohmmètre, levier libre puis enfoncé.","Sans INPUT_PULLUP, NO ouvert laisse l'entrée en l'air.","Les rebonds : pour compter des passages, ne compte que le changement d'état, ou attends 20 ms.","Un fin de course de sécurité se câble en NC : un fil coupé arrête la machine."],sources:[{titre:"Micro-rupteurs à levier courants (KW11, Omron SS) : contact inverseur C, NO, NC ; 5 A sous 250 V~ selon le modèle"},D,y]},potentiometre:{titre:"Potentiomètre 10 kΩ",resume:"Une piste résistante entre ses deux bornes extrêmes, et un curseur qui glisse dessus quand on tourne l'axe. Branché entre GND et 5 V, c'est un pont diviseur réglable : le curseur donne une tension de 0 à 5 V, que lit analogRead.",grandeurs:[{nom:"Résistance totale",valeur:"10 kΩ, à ±20 % en général"},{nom:"Loi",valeur:"linéaire (marquée B)",note:"Un potentiomètre logarithmique (marqué A) est pour le son."},{nom:"Course",valeur:"environ 270 à 300° selon le modèle"},{nom:"Sortie",valeur:"U = Vcc × α, α la position du curseur (0 à 1)"}],broches:[{borne:"1",role:"une extrémité de la piste (GND)"},{borne:"curseur",role:"le curseur : la tension réglée"},{borne:"3",role:"l'autre extrémité (5 V ou 3,3 V)"}],calcul:{titre:"Le pont diviseur",lignes:["U = Vcc × α : le curseur au quart de sa course donne 5 × 0,25 = 1,25 V.","Sur l'Uno, N = 1 023 × α : N ≈ 256.","Pour commander un servomoteur : angle = map(N, 0, 1023, 0, 180)."]},branchement:{carte:"uno",fils:[{de:"1",vers:"GND",couleur:"noir"},{de:"curseur",vers:"A0",couleur:"jaune"},{de:"3",vers:"5V",couleur:"rouge"}],texte:"Les extrémités au GND et au 5V, le curseur sur A0."},programme:{titre:"Lire la position du curseur",source:`// Le potentiom\xe8tre : le curseur sur A0, les extr\xe9mit\xe9s au GND et au 5V.
void setup() {
  Serial.begin(9600);
}

void loop() {
  int n = analogRead(A0);          // 0 \xe0 1023
  float u = n * 5.0 / 1023.0;      // la tension, en V
  Serial.print("N = ");
  Serial.print(n);
  Serial.print("   U = ");
  Serial.print(u, 2);
  Serial.println(" V");
  delay(300);
}
`},essai:{reglages:[{nom:"Position du curseur",unite:"%",min:0,max:100,pas:1,depart:50}],tensions:([e],r)=>({curseur:r*e/100}),etat:([e])=>({valeur:Math.round(e/100*1023)})},pieges:["Le curseur au 5V et une extrémité au GND : tourné au bout, c'est un court-circuit entre 5V et GND. Les extrémités au 5V et au GND, toujours.","La lecture bouge de 1 ou 2 points sans qu'on touche à rien : c'est normal (le bruit du convertisseur).","Sur une carte en 3,3 V, l'extrémité va au 3V3 : au 5V, l'entrée reçoit trop."],sources:[{titre:"Le pont diviseur : U = Vcc × R₂ / (R₁ + R₂), cours d'électricité"},x]},joystick:{titre:"Joystick analogique",resume:"Deux potentiomètres de 10 kΩ à angle droit, un pour chaque axe, et un bouton qu'on enfonce en appuyant sur le manche. Au repos, chaque axe donne la moitié de la tension : 512 environ sur une Uno. On le lit avec deux analogRead et un digitalRead.",grandeurs:[{nom:"Axes",valeur:"deux potentiomètres de 10 kΩ (X et Y)"},{nom:"Bouton",valeur:"SW, relié à GND quand on appuie"},{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Au repos",valeur:"Vcc / 2 sur VRx et VRy : N ≈ 512 sur l'Uno",note:"Rarement juste 512 : de quelques points autour."}],broches:[{borne:"GND",role:"masse"},{borne:"+5V",role:"alimentation (3,3 V sur une carte en 3,3 V)"},{borne:"VRx",role:"l'axe X : une tension de 0 à Vcc",niveau:"analogique"},{borne:"VRy",role:"l'axe Y : une tension de 0 à Vcc",niveau:"analogique"},{borne:"SW",role:"le bouton : à GND quand on appuie",niveau:"numérique"}],calcul:{titre:"De la position à une vitesse",lignes:["N va de 0 à 1 023, 512 au milieu : v = (N − 512) / 512 donne −1 à +1.","Une zone morte (|N − 512| < 30) évite qu'un moteur tourne au repos."]},branchement:{carte:"uno",fils:[{de:"GND",vers:"GND",couleur:"noir"},{de:"+5V",vers:"5V",couleur:"rouge"},{de:"VRx",vers:"A0",couleur:"jaune"},{de:"VRy",vers:"A1",couleur:"orange"},{de:"SW",vers:"D2",couleur:"bleu"}],texte:"VRx sur A0, VRy sur A1, SW sur D2 (INPUT_PULLUP), +5V au 5V, GND au GND."},programme:{titre:"Lire les deux axes et le bouton",source:`// Le joystick : VRx sur A0, VRy sur A1, SW sur D2.
void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT_PULLUP);
}

void loop() {
  int x = analogRead(A0);
  int y = analogRead(A1);
  Serial.print("X = ");
  Serial.print(x);
  Serial.print("   Y = ");
  Serial.print(y);
  if (digitalRead(2) == LOW) Serial.print("   bouton appuy\xe9");
  Serial.println();
  delay(300);
}
`},essai:{reglages:[{nom:"Manche, axe X",unite:"%",min:-100,max:100,pas:1,depart:0},{nom:"Manche, axe Y",unite:"%",min:-100,max:100,pas:1,depart:0},S("Le bouton",["relâché","appuyé"])],tensions:([e,r,t],a)=>({VRx:a/2*(1+e/100),VRy:a/2*(1+r/100),...t?{SW:0}:{}})},pieges:["SW n'a pas de résistance de tirage sur la plupart des modules : INPUT_PULLUP, sinon il lit n'importe quoi.","Au repos, ce n'est pas exactement 512 : prévois une zone morte.","Sur une carte en 3,3 V, +5V se branche au 3V3 : au 5V, les axes envoient trop de tension."],sources:[{titre:"Le module joystick courant (KY-023) : deux potentiomètres de 10 kΩ et un bouton"},x]},ldr:{titre:"Photorésistance (LDR)",resume:"Une résistance qui baisse quand la lumière augmente : quelques kΩ en plein jour, plus d'un mégohm dans le noir. Montée en pont diviseur avec une résistance fixe de 10 kΩ, elle donne une tension que lit analogRead. Elle dit s'il fait clair ou sombre, sans mesurer les lux.",grandeurs:[{nom:"Résistance à 10 lux",valeur:"8 à 20 kΩ (GL5528)"},{nom:"Résistance dans le noir",valeur:"1 MΩ au moins, 10 s après l'extinction"},{nom:"Pente γ",valeur:"0,7 environ : R est divisée par 5 quand l'éclairement est multiplié par 10"},{nom:"Couleur la mieux vue",valeur:"540 nm (vert)"},{nom:"Temps de réponse",valeur:"20 ms à l'allumage, 30 ms à l'extinction"},{nom:"Valeurs limites",valeur:"150 V continu, 100 mW"}],broches:[{borne:"1",role:"une patte (pas de sens)"},{borne:"2",role:"l'autre patte"}],calcul:{titre:"Le pont diviseur, et le modèle de l'essai",lignes:["LDR entre 5V et A0, 10 kΩ entre A0 et GND : U = 5 × 10 / (10 + R_LDR), R en kΩ.","Au soleil (R ≈ 1 kΩ) : U ≈ 4,5 V ; dans une pièce (R ≈ 15 kΩ) : U = 2 V ; dans le noir : U ≈ 0 V.","L'essai prend R = 15 kΩ × (10 / E)^0,7, E en lux : le milieu de la fiche GL5528. Ta LDR peut s'en écarter du simple au double."]},branchement:{carte:"uno",fils:[{de:"1",vers:"5V",couleur:"rouge"},{de:"2",vers:"A0",couleur:"jaune"}],texte:"La LDR entre le 5V et A0, et une résistance de 10 kΩ entre A0 et GND (sur la platine) : plus de lumière, plus de tension sur A0."},programme:{titre:"Clair ou sombre",source:`// La LDR entre 5V et A0, 10 kΩ entre A0 et GND.
const int SEUIL = 300;   // \xe0 r\xe9gler dans ta salle

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  int n = analogRead(A0);
  Serial.print("N = ");
  Serial.print(n);
  if (n < SEUIL) {
    Serial.println("   sombre : la LED s'allume");
    digitalWrite(LED_BUILTIN, HIGH);
  } else {
    Serial.println("   clair");
    digitalWrite(LED_BUILTIN, LOW);
  }
  delay(300);
}
`},essai:{reglages:[{nom:"Éclairement",unite:"lux",min:1,max:2e3,pas:1,depart:300}],tensions:([e],r)=>({2:10*r/(10+15*Math.pow(10/Math.max(1,e),.7))})},pieges:["Sans la résistance fixe, A0 reçoit toujours 5 V : la LDR seule ne donne pas de tension.","Le seuil dépend de la salle : mesure-le avec le moniteur série avant de l'écrire dans le programme.","Elle ne mesure pas les lux : pour une vraie mesure, un capteur étalonné (BH1750).","Elle contient du cadmium : elle ne se jette pas à la poubelle."],sources:[{titre:"Fiche de la photorésistance GL5528 (série GL55) : 8 à 20 kΩ à 10 lux, 1 MΩ dans le noir, γ ≈ 0,7, 540 nm"},y]},lm35:{titre:"Capteur de température LM35",resume:"Un capteur de température dans un boîtier de transistor : sa tension de sortie vaut 10 mV par degré Celsius, 0 V à 0 °C. Pas de calcul compliqué ni d'étalonnage : θ = U / 10 mV. Le modèle courant, le LM35DZ, mesure de 0 à 100 °C.",grandeurs:[{nom:"Sortie",valeur:"10 mV/°C, 0 V à 0 °C : 250 mV à 25 °C"},{nom:"Étendue",valeur:"0 à 100 °C (LM35DZ)",note:"Le LM35 va de −55 à 150 °C, avec une alimentation négative en plus."},{nom:"Précision à 25 °C",valeur:"±0,6 °C typique, ±1,5 °C au plus (LM35D)"},{nom:"Alimentation",valeur:"4 à 30 V",note:"Pas en 3,3 V : sur un ESP32, il se branche au 5 V."},{nom:"Courant",valeur:"60 µA"},{nom:"Échauffement propre",valeur:"0,08 °C dans l'air calme"}],broches:[{borne:"+Vs",role:"alimentation, à gauche face plate vers soi",niveau:"4 à 30 V"},{borne:"Vout",role:"la sortie : 10 mV/°C",niveau:"analogique"},{borne:"GND",role:"masse, à droite"}],calcul:{titre:"De la valeur lue à la température",lignes:["θ = U / 0,01 = 100 × U.","Sur l'Uno, U = N × 5 / 1 023 : θ = N × 500 / 1 023 ≈ N × 0,49.","Un point du convertisseur vaut 0,49 °C : la carte ne voit pas mieux que le demi-degré."]},branchement:{carte:"uno",fils:[{de:"+Vs",vers:"5V",couleur:"rouge"},{de:"Vout",vers:"A0",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"Face plate vers toi : +Vs au 5V, Vout sur A0, GND au GND."},programme:{titre:"Afficher la température",source:`// Le LM35 : Vout sur A0. 10 mV par degr\xe9, 0 V \xe0 0 \xb0C.
void setup() {
  Serial.begin(9600);
}

void loop() {
  int n = analogRead(A0);
  float u = n * 5.0 / 1023.0;    // la tension, en V
  float theta = u * 100.0;       // 10 mV par \xb0C
  Serial.print("Temp\xe9rature : ");
  Serial.print(theta, 1);
  Serial.println(" \xb0C");
  delay(1000);
}
`},essai:{reglages:[{nom:"Température",unite:"°C",min:0,max:100,pas:.5,depart:22}],tensions:([e])=>({Vout:e/100})},pieges:["Branché à l'envers, il chauffe très vite : face plate vers toi, +Vs à gauche.","Il lui faut 4 V au moins : sur une carte en 3,3 V, alimente-le au 5V (sa sortie reste sous 1 V, sans danger).","Il ne donne pas de températures négatives dans ce montage : sous 0 °C, la sortie reste à 0 V.","Avec de longs fils, la mesure saute : un condensateur de 100 nF entre +Vs et GND, près du capteur."],sources:[{titre:"Texas Instruments, LM35 : 10 mV/°C, 4 à 30 V, 60 µA, précision du LM35D",url:"https://www.ti.com/lit/ds/symlink/lm35.pdf"},y]},tmp36:{titre:"Capteur de température TMP36",resume:"Le cousin du LM35 : 10 mV par degré, mais décalé de 500 mV, pour mesurer sous 0 °C sans alimentation négative. Il marche dès 2,7 V : il va aussi sur les cartes en 3,3 V.",grandeurs:[{nom:"Sortie",valeur:"10 mV/°C, 500 mV à 0 °C : 750 mV à 25 °C"},{nom:"Étendue",valeur:"−40 à +125 °C (sortie de 0,1 à 1,75 V)"},{nom:"Précision",valeur:"±1 °C à 25 °C, ±2 °C sur l'étendue (typique)"},{nom:"Alimentation",valeur:"2,7 à 5,5 V"},{nom:"Courant",valeur:"moins de 50 µA"}],broches:[{borne:"+Vs",role:"alimentation, à gauche face plate vers soi",niveau:"2,7 à 5,5 V"},{borne:"Vout",role:"la sortie : 10 mV/°C, décalée de 0,5 V",niveau:"analogique"},{borne:"GND",role:"masse, à droite"}],calcul:{titre:"De la valeur lue à la température",lignes:["θ = (U − 0,5) / 0,01 = 100 × U − 50.","À 25 °C : U = 0,75 V ; à −10 °C : U = 0,40 V.","Sur l'Uno, U = N × 5 / 1 023."]},branchement:{carte:"uno",fils:[{de:"+Vs",vers:"5V",couleur:"rouge"},{de:"Vout",vers:"A0",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"Face plate vers toi : +Vs au 5V, Vout sur A0, GND au GND."},programme:{titre:"Afficher la température",source:`// Le TMP36 : Vout sur A0. 10 mV par degr\xe9, 500 mV \xe0 0 \xb0C.
void setup() {
  Serial.begin(9600);
}

void loop() {
  int n = analogRead(A0);
  float u = n * 5.0 / 1023.0;
  float theta = (u - 0.5) * 100.0;
  Serial.print("Temp\xe9rature : ");
  Serial.print(theta, 1);
  Serial.println(" \xb0C");
  delay(1000);
}
`},essai:{reglages:[{nom:"Température",unite:"°C",min:-40,max:125,pas:.5,depart:22}],tensions:([e])=>({Vout:.5+e/100})},pieges:["Le décalage oublié : θ = 100 × U donne 75 °C dans une salle à 25 °C.","Branché à l'envers, il chauffe : face plate vers toi, +Vs à gauche.","Il ressemble au LM35 : lis le marquage sur la face plate avant d'écrire la formule."],sources:[{titre:"Analog Devices, TMP35/TMP36/TMP37 : 10 mV/°C, 750 mV à 25 °C, 2,7 à 5,5 V",url:"https://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf"},y]},dht:{titre:"Capteur de température et d'humidité DHT11 (ou DHT22)",resume:"Un capteur d'humidité et de température qui envoie ses mesures, déjà calculées, sur un seul fil (DATA), avec son propre protocole. Le DHT11 (bleu) est le moins cher et le moins précis ; le DHT22 (blanc) mesure aussi sous 0 °C, au dixième. Il se lit avec une bibliothèque.",grandeurs:[{nom:"Humidité (DHT11)",valeur:"20 à 90 % HR, ±5 % HR, au pour cent"},{nom:"Température (DHT11)",valeur:"0 à 50 °C, ±2 °C, au degré"},{nom:"Humidité (DHT22)",valeur:"0 à 100 % HR, ±2 % HR (±5 % au plus), au dixième"},{nom:"Température (DHT22)",valeur:"−40 à 80 °C, ±0,5 °C, au dixième"},{nom:"Cadence",valeur:"une mesure par seconde (DHT11), toutes les 2 s (DHT22), au plus vite"},{nom:"Alimentation",valeur:"3,3 à 5,5 V"},{nom:"Courant",valeur:"0,5 à 2,5 mA pendant la mesure"},{nom:"Liaison",valeur:"un fil, avec une résistance de tirage de 5 kΩ environ (déjà sur les modules)"}],broches:[{borne:"VCC",role:"alimentation",niveau:"3,3 à 5,5 V"},{borne:"DATA",role:"les données, dans les deux sens",niveau:"numérique"},{borne:"NC",role:"non connectée"},{borne:"GND",role:"masse"}],calcul:{titre:"Ce que veut dire 60 % HR",lignes:["L'humidité relative : la vapeur d'eau dans l'air, rapportée au plus qu'il puisse en contenir à cette température.","Le même air, réchauffé, a une humidité relative plus basse : il contient autant d'eau, mais pourrait en contenir plus."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"DATA",vers:"D2",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"VCC au 5V, DATA sur D2, GND au GND ; une résistance de 10 kΩ entre DATA et VCC si le capteur est nu (les modules l'ont déjà)."},programme:{titre:"Lire l'humidité et la température",bibliotheque:"DHT sensor library (Adafruit)",source:`// Le DHT11 : DATA sur D2. Biblioth\xe8que \xab DHT sensor library \xbb d'Adafruit.
#include <DHT.h>

DHT capteur(2, DHT11);   // DHT22 pour un DHT22

void setup() {
  Serial.begin(9600);
  capteur.begin();
}

void loop() {
  delay(2000);   // pas plus d'une mesure par seconde
  float h = capteur.readHumidity();
  float t = capteur.readTemperature();
  if (isnan(h) || isnan(t)) {
    Serial.println("Lecture rat\xe9e");
    return;
  }
  Serial.print("Humidit\xe9 : ");
  Serial.print(h, 0);
  Serial.print(" %   Temp\xe9rature : ");
  Serial.print(t, 1);
  Serial.println(" \xb0C");
}
`},pieges:["Lu trop souvent, il rend « nan » : une mesure par seconde au plus (deux secondes pour le DHT22).","DHT11 ou DHT22 : le type écrit dans le programme doit être le bon, sinon les valeurs sont fausses.","Le capteur nu (4 broches) a besoin d'une résistance de tirage sur DATA ; le module (3 broches) l'a déjà.","Il réagit lentement : souffle dessus, l'humidité monte en quelques secondes."],sources:[{titre:"Aosong, DHT11 : 20 à 90 % HR ±5 %, 0 à 50 °C ±2 °C, 3,3 à 5,5 V",url:"https://www.mouser.com/datasheet/2/758/DHT11-Technical-Data-Sheet-Translated-Version-1143054.pdf"},{titre:"Aosong, DHT22 (AM2302) : 0 à 100 % HR ±2 %, −40 à 80 °C ±0,5 °C",url:"https://www.sparkfun.com/datasheets/Sensors/Temperature/DHT22.pdf"},x]},bmp280:{titre:"Capteur de pression BMP280",resume:"Un baromètre de Bosch, avec un thermomètre : il mesure la pression de l'air (de 300 à 1 100 hPa) assez finement pour sentir un mètre de différence d'altitude. Il parle en I²C (ou en SPI) et se lit avec une bibliothèque. Le module violet GY-BMP280 n'a pas de régulateur : 3,3 V seulement.",grandeurs:[{nom:"Pression",valeur:"300 à 1 100 hPa"},{nom:"Précision",valeur:"±1 hPa ; ±0,12 hPa d'une mesure à l'autre (environ ±1 m d'altitude)"},{nom:"Température",valeur:"−40 à 85 °C, ±1 °C"},{nom:"Alimentation de la puce",valeur:"1,71 à 3,6 V",note:"Le module GY-BMP280 n'a pas de régulateur : il se branche au 3V3."},{nom:"Courant",valeur:"2,7 µA à une mesure par seconde"},{nom:"Liaison",valeur:"I²C, adresse 0x76 (SDO à GND) ou 0x77 (SDO au VCC) ; ou SPI"},{nom:"Identifiant",valeur:"0x58 (registre 0xD0)",note:"Un BME280, son cousin qui mesure aussi l'humidité, répond 0x60."}],broches:[{borne:"VCC",role:"alimentation",niveau:"3,3 V"},{borne:"GND",role:"masse"},{borne:"SCL",role:"horloge I²C (ou SPI)"},{borne:"SDA",role:"données I²C (ou SPI)"},{borne:"CSB",role:"choix de la liaison : à l'état haut, I²C (le module le tire déjà)"},{borne:"SDO",role:"l'adresse I²C : à GND, 0x76 ; au VCC, 0x77"}],calcul:{titre:"De la pression à l'altitude",lignes:["h = 44 330 × (1 − (p / p₀)^(1 / 5,255)), p₀ la pression au niveau de la mer (1 013,25 hPa par défaut).","Près du sol, 1 hPa de moins, c'est environ 8,3 m de plus.","La météo change p₀ : pour une altitude juste, prends p₀ du jour."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"3V3",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"SCL",vers:"SCL",couleur:"jaune"},{de:"SDA",vers:"SDA",couleur:"bleu"}],texte:"VCC au 3V3 (pas au 5V), GND au GND, SCL et SDA sur les bornes SCL et SDA de l'Uno (A5 et A4)."},programme:{titre:"Pression, température, altitude",bibliotheque:"Adafruit BMP280 Library",source:`// Le BMP280 en I\xb2C, \xe0 l'adresse 0x76. Biblioth\xe8que \xab Adafruit BMP280 \xbb.
#include <Wire.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 capteur;

void setup() {
  Serial.begin(9600);
  if (!capteur.begin(0x76)) {
    Serial.println("BMP280 absent : v\xe9rifie les fils et l'adresse");
    while (true) {}
  }
}

void loop() {
  Serial.print("Pression : ");
  Serial.print(capteur.readPressure() / 100.0, 1);   // Pa -> hPa
  Serial.print(" hPa   Temp\xe9rature : ");
  Serial.print(capteur.readTemperature(), 1);
  Serial.print(" \xb0C   Altitude : ");
  Serial.print(capteur.readAltitude(1013.25), 0);
  Serial.println(" m");
  delay(1000);
}
`},pieges:["Branché au 5V, le module sans régulateur s'abîme : 3V3.","La bibliothèque cherche 0x77 par défaut ; le module courant répond à 0x76 : capteur.begin(0x76).","« Absent » alors que tout est branché : c'est peut-être un BME280 (identifiant 0x60), qui a sa propre bibliothèque.","L'altitude dépend de la météo : sans la pression du jour au niveau de la mer, elle est fausse de plusieurs dizaines de mètres."],sources:[{titre:"Bosch Sensortec, BMP280 : 300 à 1 100 hPa, ±1 hPa, 1,71 à 3,6 V, adresses 0x76 et 0x77, la formule d'altitude",url:"https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmp280-ds001.pdf"},y]},pir:{titre:"Détecteur de mouvement (PIR, HC-SR501)",resume:"Un détecteur infrarouge passif : il voit la chaleur d'un corps qui bouge, derrière sa lentille de Fresnel (le dôme blanc). Quand quelqu'un passe, sa sortie monte à 3,3 V pendant une durée réglable. C'est le détecteur des éclairages automatiques et des alarmes.",grandeurs:[{nom:"Alimentation",valeur:"4,5 à 20 V (5 V en général)"},{nom:"Courant au repos",valeur:"moins de 65 µA"},{nom:"Sortie",valeur:"3,3 V quand il détecte, 0 V sinon",note:"Elle se lit sur toutes les cartes, en 5 V comme en 3,3 V."},{nom:"Portée",valeur:"jusqu'à 6 à 7 m, réglable (potentiomètre Sx)"},{nom:"Angle",valeur:"un cône d'environ 110°"},{nom:"Durée de la sortie haute",valeur:"de quelques secondes à quelques minutes (potentiomètre Tx)"},{nom:"Redéclenchement",valeur:"cavalier H : la durée repart à chaque mouvement ; L : une seule fois"},{nom:"Mise en route",valeur:"une minute environ, le temps qu'il se règle sur la pièce"}],broches:[{borne:"VCC",role:"alimentation",niveau:"5 V"},{borne:"OUT",role:"la sortie : 3,3 V quand il détecte",niveau:"numérique"},{borne:"GND",role:"masse"}],branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"OUT",vers:"D2",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"VCC au 5V, OUT sur D2, GND au GND."},programme:{titre:"Signaler un mouvement",source:`// Le PIR : OUT sur D2. OUT monte \xe0 l'\xe9tat haut quand il d\xe9tecte.
const int PIR = 2;
int avant = LOW;

void setup() {
  Serial.begin(9600);
  pinMode(PIR, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  int etat = digitalRead(PIR);
  digitalWrite(LED_BUILTIN, etat);
  if (etat != avant) {
    if (etat == HIGH) Serial.println("mouvement !");
    else Serial.println("plus rien");
    avant = etat;
  }
  delay(50);
}
`},essai:{reglages:[S("Devant le capteur",["personne","quelqu'un bouge"])],tensions:([e])=>({OUT:3.3*!!e})},pieges:["Pendant la première minute, il se déclenche tout seul : laisse-le se régler avant de tester.","Il voit un mouvement de chaleur, pas une présence : quelqu'un d'immobile finit par disparaître.","La sortie reste haute toute la durée réglée (Tx) : pour un essai en classe, tourne Tx au plus court.","Il ne voit pas à travers une vitre : le verre arrête l'infrarouge lointain."],sources:[{titre:"Adafruit, PIR Motion Sensor : sortie en 3,3 V, les deux potentiomètres, le cavalier de redéclenchement",url:"https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor"},x]},"obstacle-ir":{titre:"Détecteur d'obstacle infrarouge (FC-51)",resume:"Une LED infrarouge éclaire devant le module ; une photodiode reçoit ce qui revient. Un comparateur (LM393) compare à un seuil réglé au potentiomètre : devant un obstacle, la sortie passe à l'état bas et une LED du module s'allume. Il détecte, il ne mesure pas la distance.",grandeurs:[{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Courant",valeur:"20 mA environ (vendeur)"},{nom:"Portée",valeur:"2 à 30 cm, réglable au potentiomètre (vendeur)"},{nom:"Angle",valeur:"35° environ (vendeur)"},{nom:"Sortie",valeur:"numérique : état bas devant un obstacle"}],broches:[{borne:"VCC",role:"alimentation",niveau:"3,3 à 5 V"},{borne:"GND",role:"masse"},{borne:"OUT",role:"la sortie : à l'état bas devant un obstacle",niveau:"numérique"}],branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"OUT",vers:"D2",couleur:"jaune"}],texte:"VCC au 5V, GND au GND, OUT sur D2."},programme:{titre:"Signaler un obstacle",source:`// Le FC-51 : OUT sur D2. Devant un obstacle, OUT passe \xe0 l'\xe9tat bas.
void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  bool obstacle = digitalRead(2) == LOW;
  digitalWrite(LED_BUILTIN, obstacle);
  if (obstacle) Serial.println("obstacle");
  else Serial.println("voie libre");
  delay(200);
}
`},essai:{reglages:[S("Devant le module",["rien","un obstacle"])],tensions:([e],r)=>({OUT:e?0:r}),etat:([e])=>({allume:!!e})},pieges:["Un objet noir renvoie peu d'infrarouge : il est vu bien plus près qu'un objet blanc, ou pas du tout.","Le soleil et certaines lampes envoient de l'infrarouge : près d'une fenêtre, il se trompe.","La sortie est active à l'état bas : obstacle = LOW.","Règle la portée au potentiomètre, avec la LED du module, avant d'écrire le programme."],sources:[{titre:"Fiche du vendeur du module FC-51 : 3,3 à 5 V, 2 à 30 cm, 35°"},V,y]},"suiveur-ligne":{titre:"Capteur suiveur de ligne (TCRT5000)",resume:"Un TCRT5000 regarde le sol de tout près : sa LED infrarouge l'éclaire, son phototransistor reçoit ce qui revient. Une surface blanche renvoie beaucoup, une ligne noire presque rien. Le module donne la mesure (AO) et une sortie tout ou rien réglée au potentiomètre (DO). C'est le capteur des robots suiveurs de ligne.",grandeurs:[{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Courant",valeur:"20 mA environ"},{nom:"Distance de travail",valeur:"2,5 mm au mieux ; de 0,2 à 15 mm (TCRT5000)"},{nom:"Lumière",valeur:"infrarouge, 950 nm"},{nom:"Sorties",valeur:"AO : analogique ; DO : numérique, par un comparateur LM393"}],broches:[{borne:"VCC",role:"alimentation",niveau:"3,3 à 5 V"},{borne:"GND",role:"masse"},{borne:"DO",role:"sortie tout ou rien : à l'état bas sur le blanc (sur la plupart des modules)",niveau:"numérique"},{borne:"AO",role:"la mesure : basse sur le blanc, haute sur le noir",niveau:"analogique"}],calcul:{titre:"Régler le seuil",lignes:["Mesure AO sur le blanc, puis sur la ligne noire, avec le moniteur série.","Le seuil se met au milieu : seuil = (N_blanc + N_noir) / 2.","L'essai prend un modèle simple : AO = Vcc × (1 − r), r la part de lumière renvoyée."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"DO",vers:"D2",couleur:"bleu"},{de:"AO",vers:"A0",couleur:"jaune"}],texte:"VCC au 5V, GND au GND, DO sur D2, AO sur A0."},programme:{titre:"Sur la ligne, ou à côté",source:`// Le TCRT5000 : DO sur D2, AO sur A0.
void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT);
}

void loop() {
  int n = analogRead(A0);
  Serial.print("AO = ");
  Serial.print(n);
  if (digitalRead(2) == HIGH) Serial.println("   sur la ligne noire");
  else Serial.println("   sur le blanc");
  delay(200);
}
`},essai:{reglages:[{nom:"Lumière renvoyée (0 : noir, 100 : blanc)",unite:"%",min:0,max:100,pas:1,depart:80}],tensions:([e],r)=>({AO:r*(1-e/100),DO:e>50?0:r}),etat:([e])=>({allume:e>50})},pieges:["Trop haut au-dessus du sol (plus de 1 cm), il ne voit plus la différence : 2 à 5 mm.","Le sens de DO change selon les modules : vérifie avec la LED du module sur le blanc et sur le noir.","La lumière du jour gêne : un cache noir autour du capteur aide."],sources:[{titre:"Vishay, TCRT5000 : 950 nm, 2,5 mm au mieux, de 0,2 à 15 mm",url:"https://www.vishay.com/docs/83760/tcrt5000.pdf"},V,y]},as5600:{titre:"Capteur d'angle magnétique AS5600",resume:"Un capteur qui lit l'angle d'un aimant qui tourne au-dessus de lui, sans le toucher : 4 096 positions par tour. On le lit en I²C, à l'adresse 0x36. C'est le codeur de ton Mini H2 (DT1) : un aimant diamétral au bout de l'arbre, le capteur en face.",grandeurs:[{nom:"Résolution",valeur:"12 bits : 4 096 positions par tour, 0,088° chacune"},{nom:"Alimentation",valeur:"3,3 V ou 5 V (deux montages de la puce)"},{nom:"Courant",valeur:"6,5 mA"},{nom:"Liaison",valeur:"I²C, adresse 0x36 (fixe), jusqu'à 1 MHz"},{nom:"Sortie OUT",valeur:"l'angle en tension (analogique) ou en MLI, selon le réglage"},{nom:"Aimant",valeur:"diamétral, à 0,5 à 3 mm du capteur"},{nom:"Registres",valeur:"RAW ANGLE : 0x0C et 0x0D ; STATUS : 0x0B (aimant vu) ; AGC : 0x1A"}],broches:[{borne:"VCC",role:"alimentation",niveau:"3,3 ou 5 V"},{borne:"GND",role:"masse"},{borne:"SDA",role:"données I²C"},{borne:"SCL",role:"horloge I²C"},{borne:"DIR",role:"le sens : à GND, l'angle croît dans le sens horaire (vu de dessus)"},{borne:"OUT",role:"l'angle en tension ou en MLI"},{borne:"GPO",role:"sortie de réglage (programmation de la puce)"}],calcul:{titre:"Du nombre lu à l'angle",lignes:["L'angle brut : 12 bits, de 0 à 4 095, sur deux octets (0x0C : les 4 bits de poids fort, 0x0D : les 8 autres).","brut = (octet1 & 0x0F) × 256 + octet2.","α = brut × 360 / 4 096 : brut = 1 024 donne 90°."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"SDA",vers:"SDA",couleur:"bleu"},{de:"SCL",vers:"SCL",couleur:"jaune"}],texte:"VCC au 5V, GND au GND, SDA et SCL sur les bornes SDA et SCL de l'Uno. DIR à GND pour fixer le sens."},programme:{titre:"Lire l'angle de l'aimant",source:`// L'AS5600 en I\xb2C, \xe0 l'adresse 0x36 : l'angle brut dans les registres 0x0C et 0x0D.
#include <Wire.h>

const int AS5600 = 0x36;

void setup() {
  Serial.begin(9600);
  Wire.begin();
}

void loop() {
  Wire.beginTransmission(AS5600);
  Wire.write(0x0C);                 // RAW ANGLE, poids fort
  Wire.endTransmission(false);
  Wire.requestFrom(AS5600, 2);
  int fort = Wire.read();
  int faible = Wire.read();
  int brut = (fort & 0x0F) * 256 + faible;
  float angle = brut * 360.0 / 4096.0;
  Serial.print("Angle : ");
  Serial.print(angle, 1);
  Serial.println(" \xb0");
  delay(300);
}
`},essai:{reglages:[{nom:"Angle de l'aimant",unite:"°",min:0,max:359,pas:1,depart:90}],i2c:{adresse:54,creer:()=>new g,regler:(e,[r])=>e.tourner(r)}},pieges:["DIR laissé en l'air : le sens change au hasard. Relie DIR à GND (ou au VCC).","Il faut un aimant diamétral (pôles nord et sud côte à côte), pas un aimant de frigo : sinon l'angle ne change pas.","L'adresse 0x36 est fixe : deux AS5600 sur le même bus ne se distinguent pas (il faut un multiplexeur I²C).","Aimant trop loin : AGC (0x1A) monte à 255, et l'angle devient faux. Rapproche-le (0,5 à 3 mm)."],sources:[{titre:"ams OSRAM, AS5600 : 12 bits, 0x36, 6,5 mA, l'aimant à 0,5 à 3 mm, les registres",url:"https://ams-osram.com/products/sensor-solutions/position-sensors/ams-as5600-position-sensor"},{titre:"Ton TP « Programmer l'ESP32 », Mini H2 (DT1) : l'AS5600 en I²C"},y]},"effet-hall":{titre:"Capteur à effet Hall (A3144)",resume:"Un capteur qui bascule quand un aimant passe devant lui : sa sortie, à collecteur ouvert, se met à la masse devant le pôle sud. Avec un aimant collé sur une roue, il compte les tours : c'est un tachymètre.",grandeurs:[{nom:"Alimentation",valeur:"4,5 à 24 V",note:"Sur une carte en 3,3 V, alimente-le au 5V ; sa sortie se tire au 3,3 V."},{nom:"Courant",valeur:"4,4 mA"},{nom:"Sortie",valeur:"à collecteur ouvert, 25 mA au plus : à la masse devant un aimant"},{nom:"Aimant",valeur:"le pôle sud, devant la face marquée ; le pôle nord ne fait rien"},{nom:"Comportement",valeur:"tout ou rien : il retombe quand l'aimant s'éloigne"}],broches:[{borne:"VCC",role:"alimentation",niveau:"4,5 à 24 V"},{borne:"GND",role:"masse"},{borne:"OUT",role:"la sortie : à la masse devant l'aimant (INPUT_PULLUP)",niveau:"numérique"}],calcul:{titre:"Des passages à la fréquence de rotation",lignes:["Un aimant sur la roue : un passage par tour.","n (tr/min) = passages comptés en 1 s × 60.","10 passages en une seconde : 600 tr/min."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"OUT",vers:"D2",couleur:"jaune"}],texte:"VCC au 5V, GND au GND, OUT sur D2 (INPUT_PULLUP)."},programme:{titre:"Compter les tours d'une roue",source:`// Le capteur \xe0 effet Hall : OUT sur D2. Devant l'aimant, OUT passe \xe0 l'\xe9tat bas.
const int HALL = 2;
int avant = HIGH;
int passages = 0;
unsigned long debut = 0;

void setup() {
  Serial.begin(9600);
  pinMode(HALL, INPUT_PULLUP);
}

void loop() {
  int etat = digitalRead(HALL);
  if (avant == HIGH && etat == LOW) passages = passages + 1;   // l'aimant arrive
  avant = etat;
  if (millis() - debut >= 1000) {
    Serial.print(passages * 60);
    Serial.println(" tr/min");
    passages = 0;
    debut = millis();
  }
}
`},essai:{reglages:[S("L'aimant",["loin","devant le capteur"])],tensions:([e])=>C(e,"OUT"),etat:([e])=>({allume:!!e})},pieges:["L'aimant à l'envers (pôle nord) ne fait rien : retourne-le.","La sortie est à collecteur ouvert : sans résistance de tirage (INPUT_PULLUP), elle est en l'air quand l'aimant est loin.","Il lui faut 4,5 V au moins : pas au 3V3.","Pour compter, on compte le passage de HIGH à LOW, pas l'état LOW : sinon un aimant arrêté compte sans fin."],sources:[{titre:"Allegro, A3141 à A3144 (fiche technique) : 4,5 à 24 V, 4,4 mA, sortie à collecteur ouvert de 25 mA"},y]}},L={titre:"Dessin : Méca & Cie, d'après le modèle le plus courant (à comparer au tien)"},I=(e,r,t,a,n,s)=>({titre:e,resume:s,grandeurs:[{nom:"Tension",valeur:"12 V continu"},{nom:"Courant",valeur:r},...t],broches:[{borne:"+",role:"le fil rouge : V+ du module MOSFET (ou le contact du relais)"},{borne:"-",role:"le fil noir : V− du module MOSFET"}],pieges:[...a,"Jamais sur une broche de la carte : par un module MOSFET ou un relais, sur une alimentation de 12 V."],sources:[{titre:n},L],calcul:{titre:"Branchement",lignes:["Par le module MOSFET : le + de la charge sur V+, son − sur V− ; le 12 V sur VIN et GND du module ; SIG sur une broche MLI de la carte. Une diode 1N4007 en parallèle sur la charge, la bague (cathode) du côté du +."]}}),w={nema17:{titre:"Moteur pas à pas NEMA 17",resume:"Le moteur des imprimantes 3D et des petites machines à commande numérique : 200 pas par tour (1,8°), un couple qui tient la position à l'arrêt. Bipolaire, à deux bobines, il se commande par un driver (A4988) qui envoie le courant dans le bon ordre.",grandeurs:[{nom:"Pas",valeur:"1,8° : 200 pas par tour (3 200 en 1/16 de pas)"},{nom:"Bobines",valeur:"deux : 1A-1B et 2A-2B"},{nom:"Courant",valeur:"1,5 à 2 A par phase (17HS4401 : 1,7 A)"},{nom:"Couple de maintien",valeur:"0,4 N·m environ (17HS4401)"},{nom:"Carré",valeur:"42,3 mm (NEMA 17 : 1,7 pouce)"}],broches:[{borne:"1A",role:"bobine A"},{borne:"1B",role:"bobine A"},{borne:"2A",role:"bobine B"},{borne:"2B",role:"bobine B"}],calcul:{titre:"Le pas et la vitesse",lignes:["Un pas : 360 / 200 = 1,8°.","Une vis au pas de 8 mm : un pas fait avancer de 8 / 200 = 0,04 mm.","n = f × 60 / 200 : 400 pas par seconde, 120 tr/min."]},pieges:["Les deux fils d'une bobine se trouvent à l'ohmmètre (quelques ohms entre eux) ; inverser une bobine inverse le sens.","Jamais débranché pendant que le driver est alimenté : le driver grille.","Il chauffe même à l'arrêt : le driver le tient en position."],sources:[{titre:"Fiche du moteur 17HS4401 (NEMA 17) : 1,8°, 1,7 A, 0,4 N·m"},L]},a4988:{titre:"Driver de moteur pas à pas A4988",resume:"Le petit module de Pololu qui commande un moteur pas à pas bipolaire : une impulsion sur STEP, un pas ; DIR choisit le sens. Il découpe le courant des bobines (8 à 35 V sur VMOT) et fait des micro-pas, jusqu'au 1/16 de pas. C'est le driver des imprimantes 3D.",grandeurs:[{nom:"Alimentation du moteur",valeur:"8 à 35 V sur VMOT"},{nom:"Logique",valeur:"3 à 5,5 V sur VDD"},{nom:"Courant",valeur:"1 A par phase sans radiateur, 2 A au plus avec"},{nom:"Micro-pas",valeur:"1, 1/2, 1/4, 1/8, 1/16 (MS1 à MS3)"},{nom:"Réglage du courant",valeur:"au potentiomètre : I = Vref / (8 × Rs)",note:"Rs dépend du module (0,068 Ω sur les plus courants) : vérifie le tien."}],broches:[{borne:"STEP",role:"une impulsion : un pas"},{borne:"DIR",role:"le sens"},{borne:"EN",role:"à l'état bas : le moteur est alimenté"},{borne:"RST",role:"relié à SLP sur la plupart des montages"},{borne:"VMOT",role:"l'alimentation du moteur (12 V)"},{borne:"VDD",role:"la logique (5 V de la carte)"},{borne:"1A",role:"bobine A du moteur"}],calcul:{titre:"Les pas par tour",lignes:["En pas entiers : 200 impulsions par tour.","En 1/16 de pas : 200 × 16 = 3 200 impulsions par tour.","Vref = 0,8 V, Rs = 0,068 Ω : I = 0,8 / (8 × 0,068) ≈ 1,5 A."]},branchement:{carte:"uno",fils:[{de:"STEP",vers:"D3",couleur:"jaune"},{de:"DIR",vers:"D4",couleur:"vert"},{de:"VDD",vers:"5V",couleur:"rouge"},{de:"GND.2",vers:"GND",couleur:"noir"}],texte:"STEP sur D3, DIR sur D4 ; RST relié à SLP ; VMOT et GND sur une alimentation de 12 V, avec un condensateur de 100 µF."},programme:{titre:"Un tour dans un sens, un tour dans l'autre",source:`// Un A4988 : STEP sur D3, DIR sur D4 ; 200 pas par tour (pas entiers).
const int STEP_PIN = 3;
const int DIR_PIN = 4;
const int PAS_PAR_TOUR = 200;

void tourner(int pas) {
  for (int i = 0; i < pas; i++) {
    digitalWrite(STEP_PIN, HIGH);   // une impulsion sur STEP : un pas
    delayMicroseconds(800);
    digitalWrite(STEP_PIN, LOW);
    delayMicroseconds(800);
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(STEP_PIN, OUTPUT);
  pinMode(DIR_PIN, OUTPUT);
}

void loop() {
  digitalWrite(DIR_PIN, HIGH);
  tourner(PAS_PAR_TOUR);
  Serial.println("un tour dans le sens 1");
  delay(500);
  digitalWrite(DIR_PIN, LOW);
  tourner(PAS_PAR_TOUR);
  Serial.println("un tour dans le sens 2");
  delay(500);
}
`},essai:{reglages:[],lecture:e=>e("DIR").niveau?"DIR = 1 : le moteur tourne dans le sens 1.":"DIR = 0 : le moteur tourne dans le sens 2."},pieges:["Sans condensateur de 100 µF sur VMOT, les pointes de tension tuent le driver.","Le courant se règle avant de brancher le moteur : trop fort, le moteur chauffe ; trop faible, il saute des pas.","RST en l'air : le driver ne fait rien. Relie RST à SLP.","Le module chauffe : au-delà de 1 A, un radiateur."],sources:[{titre:"Pololu, A4988 Stepper Motor Driver Carrier : 8 à 35 V, 2 A, 1/16 de pas",url:"https://www.pololu.com/product/1182"},{titre:"Allegro MicroSystems, fiche technique de l'A4988"},L]},"motoreducteur-codeur":{titre:"Motoréducteur à codeur (JGA25-370)",resume:"Un moteur à courant continu, un réducteur et, au dos, un codeur à effet Hall à deux voies : en comptant les impulsions, on connaît la vitesse et la position de l'arbre, et leur ordre donne le sens. C'est la base d'un asservissement de vitesse ou de position.",grandeurs:[{nom:"Tension du moteur",valeur:"6 ou 12 V (selon le modèle)"},{nom:"Codeur",valeur:"11 impulsions par tour du moteur, sur chaque voie"},{nom:"Réduction",valeur:"1:34 sur ce modèle : 11 × 34 = 374 impulsions par tour de sortie"},{nom:"Codeur, alimentation",valeur:"3,3 à 5 V"},{nom:"Voies",valeur:"C1 et C2, décalées d'un quart de période"}],broches:[{borne:"M1",role:"le moteur : par un pont en H"},{borne:"M2",role:"le moteur : par un pont en H"},{borne:"VCC",role:"l'alimentation du codeur (5 V)"},{borne:"GND",role:"masse"},{borne:"C1",role:"la voie A du codeur"},{borne:"C2",role:"la voie B : en avance ou en retard sur C1 selon le sens"}],calcul:{titre:"La vitesse de l'arbre",lignes:["n = f × 60 / 374 : f, les impulsions de C1 par seconde.","Avec 374 impulsions par seconde : n = 60 tr/min.","Le réducteur : la vitesse du moteur est 34 fois plus grande, le couple 34 fois plus faible au rendement près."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"bleu"},{de:"GND",vers:"GND",couleur:"noir"},{de:"C1",vers:"D2",couleur:"jaune"},{de:"C2",vers:"D3",couleur:"vert"}],texte:"Le codeur : C1 sur D2, C2 sur D3. Le moteur (M1, M2) par un pont en H."},programme:{titre:"La vitesse et le sens, par interruption",source:`// Le codeur d'un JGA25-370 : 374 impulsions par tour de sortie, compt\xe9es par interruption.
const int C1 = 2;   // INT0 sur l'Uno
const int C2 = 3;
volatile long impulsions = 0;

// Appel\xe9e \xe0 chaque front montant de C1, m\xeame pendant le delay de loop().
void compter() {
  if (digitalRead(C2) == LOW) impulsions++;   // C2 encore bas : C1 est en avance, sens 1
  else impulsions--;
}

void setup() {
  Serial.begin(9600);
  pinMode(C1, INPUT);
  pinMode(C2, INPUT);
  attachInterrupt(digitalPinToInterrupt(C1), compter, RISING);
}

void loop() {
  delay(1000);
  noInterrupts();            // copier le compte sans qu'une interruption le change en route
  long n = impulsions;
  impulsions = 0;
  interrupts();
  Serial.print(n * 60.0 / 374, 1);   // n = f \xd7 60 / 374
  Serial.println(" tr/min");
}
`},essai:{reglages:[{nom:"Vitesse de l'arbre",unite:"tr/min",min:0,max:300,pas:10,depart:60}],signaux:(r=e=>374*e[0]/60,()=>{let e=0,t=0,a=0;return{regler:(n,s)=>{a+=e*(s-t)/1e9,t=s,e=r(n)},tensions:(r,n)=>{let s=Math.floor(4*(a+e*(r-t)/1e9))%4;return{C1:s<2?n:0,C2:1===s||2===s?n:0}},fronts:(r,n,s)=>"C1"===r?_(a,t,e,Math.max(n,t),s):"C2"===r?_(a,t,e,Math.max(n,t),s,.5):[]}})},pieges:["À 300 tr/min, 1 870 impulsions par seconde : la lecture dans loop() en rate, attachInterrupt les compte toutes. La fonction d'interruption reste courte (pas de Serial dedans).","Les couleurs des fils changent d'un fabricant à l'autre : lis la sérigraphie du connecteur.","Le moteur (M1, M2) ne va jamais sur la carte : par un pont en H ou un TB6612."],sources:[{titre:"Fiche du motoréducteur JGA25-370 à codeur : 11 impulsions par tour du moteur, réduction selon le modèle"},L]},"servo-continu":{titre:"Servomoteur à rotation continue (FS90R)",resume:"Un servomoteur dont on a retiré la butée et le potentiomètre de recopie : il tourne sans fin, et l'impulsion règle sa vitesse et son sens au lieu de son angle. 1 500 µs l'arrête. C'est le moteur des petits robots, sans pont en H.",grandeurs:[{nom:"Arrêt",valeur:"1 500 µs (à régler : chaque servomoteur a son point neutre)"},{nom:"Pleine vitesse",valeur:"vers 1 000 µs dans un sens, 2 000 µs dans l'autre"},{nom:"Vitesse",valeur:"de l'ordre de 110 tr/min sous 6 V, à vide"},{nom:"Alimentation",valeur:"4,8 à 6 V"}],broches:[{borne:"signal",role:"l'impulsion, sur une broche de la carte"},{borne:"V+",role:"le + d'une alimentation externe de 5 à 6 V"},{borne:"GND",role:"masse, commune avec la carte"}],branchement:{carte:"uno",fils:[{de:"signal",vers:"D9",couleur:"orange"},{de:"GND",vers:"GND",couleur:"marron"}],texte:"Le signal sur D9 ; V+ et GND sur une alimentation de 5 V, son − au GND de la carte."},programme:{titre:"Avancer, s'arrêter, reculer",source:`// Un servomoteur \xe0 rotation continue sur D9.
#include <Servo.h>

Servo roue;

void setup() {
  Serial.begin(9600);
  roue.attach(9);
}

void loop() {
  roue.writeMicroseconds(1700);   // un sens, \xe0 mi-vitesse
  Serial.println("avance");
  delay(2000);
  roue.writeMicroseconds(1500);   // arr\xeat
  Serial.println("arr\xeat");
  delay(1000);
  roue.writeMicroseconds(1300);   // l'autre sens
  Serial.println("recule");
  delay(2000);
}
`},essai:{reglages:[]},pieges:["À 1 500 µs, il tourne encore doucement : son point neutre se règle (vis du dessous, ou en changeant la valeur).","Il ne sait pas où il est : pour une position, un codeur ou un servomoteur normal.","Comme tout servomoteur : alimenté à part, jamais par le 5V de la carte."],sources:[{titre:"FeeTech, fiche du FS90R : rotation continue, 1 500 µs au neutre, 4,8 à 6 V"},L]},tb6612:{titre:"Double pont en H TB6612FNG",resume:"Le successeur du L298N pour les petits moteurs : deux ponts en H dans une puce, sans radiateur, et qui marche avec une carte en 3,3 V comme en 5 V. Pour chaque moteur, deux entrées (AIN1, AIN2) donnent le sens, PWMA la vitesse en MLI ; STBY réveille le tout.",grandeurs:[{nom:"Alimentation des moteurs",valeur:"4,5 à 13,5 V sur VM"},{nom:"Logique",valeur:"2,7 à 5,5 V sur VCC"},{nom:"Courant",valeur:"1,2 A par moteur en continu, 3,2 A en pointe"},{nom:"Chute de tension",valeur:"faible (transistors MOSFET) : bien moins que les 2 V du L298N"}],broches:[{borne:"AIN1",role:"le sens du moteur A"},{borne:"AIN2",role:"le sens du moteur A"},{borne:"PWMA",role:"la vitesse du moteur A (MLI)"},{borne:"STBY",role:"à l'état haut : le module marche"},{borne:"AO1",role:"le moteur A"},{borne:"VM",role:"l'alimentation des moteurs"},{borne:"VCC",role:"la logique"}],branchement:{carte:"uno",fils:[{de:"AIN1",vers:"D7",couleur:"jaune"},{de:"AIN2",vers:"D8",couleur:"vert"},{de:"PWMA",vers:"D5",couleur:"orange"},{de:"STBY",vers:"D6",couleur:"blanc"},{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"AIN1 sur D7, AIN2 sur D8, PWMA sur D5 (MLI), STBY sur D6 ; VM sur l'alimentation des moteurs."},programme:{titre:"Le moteur A à 70 %, puis arrêté",source:`// TB6612FNG : AIN1 sur D7, AIN2 sur D8, PWMA sur D5, STBY sur D6.
const int AIN1 = 7;
const int AIN2 = 8;
const int PWMA = 5;
const int STBY = 6;

void setup() {
  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMA, OUTPUT);
  pinMode(STBY, OUTPUT);
  digitalWrite(STBY, HIGH);   // le module se r\xe9veille
}

void loop() {
  digitalWrite(AIN1, HIGH);   // sens 1
  digitalWrite(AIN2, LOW);
  analogWrite(PWMA, 178);     // 178 / 255 : 70 %
  delay(2000);
  analogWrite(PWMA, 0);       // arr\xeat
  delay(1000);
}
`},essai:{reglages:[],lecture:e=>{if(!e("STBY").niveau)return"STBY à 0 : le module est en veille, rien ne tourne.";let r=e("PWMA"),t=r.mli??255*r.niveau;if(0===t)return"PWMA à 0 : le moteur A est arrêté.";let a=e("AIN1").niveau&&!e("AIN2").niveau?"1 (AIN1 = 1)":!e("AIN1").niveau&&e("AIN2").niveau?"2 (AIN2 = 1)":null;return a?`Le moteur A tourne dans le sens ${a}, \xe0 ${Math.round(100*t/255)} % de la tension.`:"AIN1 = AIN2 : le moteur A freine."}},pieges:["STBY en l'air ou à 0 : rien ne bouge. Relie-le à une broche, ou au VCC.","1,2 A par moteur : pour des moteurs plus gros, un autre driver.","VM et VCC sont deux alimentations : le GND est commun aux deux et à la carte."],sources:[{titre:"Toshiba, fiche technique du TB6612FNG : VM 4,5 à 13,5 V, 1,2 A par moteur"},{titre:"Pololu, TB6612FNG Dual Motor Driver Carrier",url:"https://www.pololu.com/product/713"},L]},mosfet:{titre:"Module MOSFET IRF520",resume:"Un transistor MOSFET sur un module : la carte commande sa grille (SIG), il laisse passer le courant d'une charge en 12 V (une pompe, une électrovanne, un ventilateur, une bande de LED). En MLI, il en règle la puissance. Il ne commute que du continu.",grandeurs:[{nom:"Charge",valeur:"jusqu'à 24 V, quelques ampères (sans radiateur, 1 A environ)"},{nom:"Commande",valeur:"SIG : 5 V pour conduire"},{nom:"Seuil de grille",valeur:"2 à 4 V : à 5 V, il conduit à moitié ; à 3,3 V, presque pas",note:"Sur une ESP32, un module à MOSFET « logique » (IRLZ44N, AOD4184)."},{nom:"MLI",valeur:"oui : analogWrite sur SIG règle la puissance de la charge"}],broches:[{borne:"SIG",role:"la commande, sur une broche MLI"},{borne:"VCC",role:"non relié sur la plupart des modules (la LED)"},{borne:"GND",role:"masse, commune avec la carte"},{borne:"V+",role:"le + de la charge"},{borne:"V-",role:"le − de la charge : le MOSFET le relie à la masse"},{borne:"VIN",role:"le + de l'alimentation de la charge (12 V)"},{borne:"GND.2",role:"le − de l'alimentation de la charge"}],branchement:{carte:"uno",fils:[{de:"SIG",vers:"D9",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"SIG sur D9 (MLI), GND au GND ; la charge sur V+ et V−, le 12 V sur VIN et GND."},programme:{titre:"Démarrer une charge en douceur",source:`// Un module MOSFET sur D9 : la charge monte de 0 \xe0 100 % en 2 s, tient, s'arr\xeate.
const int SIG = 9;

void setup() {
  pinMode(SIG, OUTPUT);
}

void loop() {
  for (int p = 0; p <= 255; p += 5) {
    analogWrite(SIG, p);
    delay(40);
  }
  delay(2000);
  analogWrite(SIG, 0);
  delay(2000);
}
`},essai:{reglages:[],lecture:e=>{let r=e("SIG"),t=r.mli??255*r.niveau;return 0===t?"SIG à 0 : la charge est arrêtée.":`La charge re\xe7oit ${Math.round(100*t/255)} % du temps la tension de VIN.`}},pieges:["Une bobine (électrovanne, électroaimant, moteur) : une diode de roue libre en parallèle, sinon la pointe de tension à la coupure tue le MOSFET.","L'IRF520 n'est pas un MOSFET « logique » : à 3,3 V, il ne conduit presque pas, et il chauffe à 5 V sous fort courant.","Le GND de la carte et le − de l'alimentation 12 V sont reliés : la masse commune."],sources:[{titre:"Vishay, fiche technique de l'IRF520 : 100 V, 9,2 A, seuil de grille de 2 à 4 V",url:"https://www.vishay.com/docs/91017/irf520.pdf"},L]},electrovanne:I("Électrovanne 12 V (normalement fermée)","0,3 à 0,5 A environ",[{nom:"Repos",valeur:"fermée : l'eau passe quand la bobine est alimentée"},{nom:"Pression",valeur:"0,02 à 0,8 MPa le plus souvent : une pression minimale pour s'ouvrir"}],["Une bobine : sans diode de roue libre, la coupure envoie une pointe de plusieurs dizaines de volts.","Elle a un sens : la flèche du corps dans le sens du fluide.","Alimentée longtemps, elle chauffe : c'est normal, jusqu'à 60 °C environ."],"Fiches d'électrovannes 12 V courantes (corps en laiton, normalement fermées, 0,02 à 0,8 MPa)","La vanne commandée électriquement d'un circuit d'eau ou d'air : la bobine attire un noyau qui ouvre le passage. Normalement fermée, elle ne laisse passer que sous tension. Elle se commande comme un vérin par son distributeur : par un relais ou un module MOSFET, avec sa diode."),pompe:I("Pompe à eau 12 V","0,3 à 0,6 A en marche, plus au démarrage",[{nom:"Débit",valeur:"de l'ordre de 2 à 4 L/min (selon le modèle)"},{nom:"Hauteur",valeur:"quelques mètres"}],["Jamais à sec : la pompe chauffe et s'abîme.","Au démarrage, elle demande plus de courant : l'alimentation doit le tenir.","En MLI par le MOSFET, son débit se règle ; une diode en parallèle (c'est un moteur)."],"Fiches de pompes 12 V courantes (pompes à membrane ou centrifuges)","Un petit moteur à courant continu et sa turbine, pour faire circuler de l'eau : un arrosage, un refroidissement, un banc de mécanique des fluides avec le débitmètre. Elle se commande par un module MOSFET, qui en règle aussi le débit en MLI."),ventilateur:I("Ventilateur 12 V","0,1 à 0,2 A",[{nom:"Taille",valeur:"40, 60 ou 80 mm le plus souvent"},{nom:"Sens",valeur:"la flèche du cadre : le sens de l'air"}],["Il ne tourne que dans un sens : le + sur le fil rouge.","En MLI à basse fréquence, il siffle : c'est normal.","Certains ont un troisième fil (le compte-tours) : il se lit comme une fourche optique."],"Fiches de ventilateurs 12 V courants (40 à 80 mm, 0,1 à 0,2 A)","Le ventilateur d'un boîtier d'ordinateur : il refroidit un montage, sèche, extrait de l'air. Sa vitesse se règle en MLI par un module MOSFET. C'est la charge d'une régulation de température (avec une sonde DS18B20)."),electroaimant:I("Électroaimant de maintien 12 V","0,2 à 0,4 A",[{nom:"Force",valeur:"de quelques kg à quelques dizaines de kg, au contact"},{nom:"Matière",valeur:"il attire l'acier, pas l'aluminium ni l'inox austénitique"}],["Une bobine : une diode de roue libre en parallèle.","Sa force chute vite avec l'écart : au contact, elle est la plus grande.","Coupé, il peut garder un peu d'aimantation : la pièce reste collée un instant."],"Fiches d'électroaimants de maintien 12 V courants (force au contact)","Une bobine autour d'un noyau d'acier : sous tension, il tient une pièce en acier, il la lâche quand on coupe. Une pince de robot, une serrure de porte, un tri de pièces. Il se commande par un module MOSFET ou un relais, avec sa diode."),solenoide:I("Solénoïde poussoir 12 V (JF-0530B)","1 A environ",[{nom:"Course",valeur:"10 mm"},{nom:"Force",valeur:"quelques newtons"},{nom:"Service",valeur:"intermittent : il chauffe s'il reste alimenté"}],["Une bobine : une diode de roue libre en parallèle.","Il pousse quelques secondes : alimenté en continu, il chauffe.","Un ressort le ramène : sans ressort, il reste sorti."],"Fiche du solénoïde JF-0530B : 12 V, 1 A, course 10 mm","Un noyau qui sort (ou rentre) quand la bobine est alimentée : un petit vérin électrique tout ou rien, pour pousser une pièce, verrouiller, frapper. Il se commande par un module MOSFET ou un relais, avec sa diode de roue libre."),diode:{titre:"Diode 1N4007",resume:"La diode de redressement la plus courante : elle laisse passer le courant dans un sens seulement. Sur une bobine (électrovanne, électroaimant, moteur, relais), elle sert de diode de roue libre : à la coupure, elle écoule le courant de la bobine au lieu de laisser une pointe de tension griller le transistor.",grandeurs:[{nom:"Courant",valeur:"1 A en continu"},{nom:"Tension inverse",valeur:"1 000 V au plus"},{nom:"Chute de tension",valeur:"0,7 à 1 V en conduction"},{nom:"Repère",valeur:"la bague blanche : la cathode"}],broches:[{borne:"anode",role:"le côté sans bague : vers le − de la charge (V−)"},{borne:"cathode",role:"le côté de la bague : vers le + de la charge (V+)"}],calcul:{titre:"Pourquoi une diode de roue libre",lignes:["Une bobine s'oppose à la coupure du courant : u = L × di/dt.","Couper 0,5 A en une microseconde dans 10 mH donnerait des milliers de volts.","La diode, en parallèle et à l'envers, laisse le courant s'éteindre doucement dans la bobine."]},pieges:["À l'envers (bague vers le −), elle court-circuite l'alimentation dès qu'on commande la charge.","Elle va au plus près de la bobine, en parallèle sur ses deux fils.","Les modules relais ont déjà la leur, pour leur propre bobine : pas pour la charge qu'ils commandent."],sources:[{titre:"Vishay, fiche technique des 1N4001 à 1N4007 : 1 A, 1 000 V (1N4007)",url:"https://www.vishay.com/docs/88503/1n4001.pdf"},L]},tm1637:{titre:"Afficheur 4 chiffres TM1637",resume:"Quatre afficheurs 7 segments et leur puce TM1637, avec un deux-points au milieu : une heure, un compteur, une température. Deux broches seulement (CLK, DIO), au lieu des 12 d'afficheurs en direct. Il se pilote avec la bibliothèque TM1637Display.",grandeurs:[{nom:"Chiffres",valeur:"4, et un deux-points"},{nom:"Liaison",valeur:"CLK et DIO, sur deux broches quelconques (pas de l'I²C)"},{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Luminosité",valeur:"8 niveaux (setBrightness de 0 à 7)"}],broches:[{borne:"CLK",role:"l'horloge"},{borne:"DIO",role:"les données"},{borne:"VCC",role:"5 V"},{borne:"GND",role:"masse"}],branchement:{carte:"uno",fils:[{de:"CLK",vers:"D2",couleur:"jaune"},{de:"DIO",vers:"D3",couleur:"vert"},{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"CLK sur D2, DIO sur D3."},programme:{titre:"Compter les secondes",bibliotheque:"TM1637 (Avishay Orpaz)",source:`// Un TM1637 : CLK sur D2, DIO sur D3.
#include <TM1637Display.h>

TM1637Display afficheur(2, 3);

void setup() {
  afficheur.setBrightness(5);
}

void loop() {
  afficheur.showNumberDec(millis() / 1000);   // les secondes depuis le d\xe9marrage
  delay(200);
}
`},pieges:["Ce n'est pas de l'I²C, même s'il y a deux fils : n'importe quelles broches, pas SDA et SCL.","Au-delà de 9 999, il n'affiche plus que les 4 derniers chiffres.","Le deux-points ne s'allume que par showNumberDecEx (ou setSegments)."],sources:[{titre:"Titan Micro Electronics, fiche technique du TM1637"},{titre:"Bibliothèque TM1637Display",url:"https://github.com/avishorp/TM1637"},L]},max7219:{titre:"Matrice de LED 8 × 8 et son MAX7219",resume:"64 LED en 8 lignes et 8 colonnes, commandées par un MAX7219 : trois broches (DIN, CS, CLK) pour tout allumer, et plusieurs matrices se chaînent pour faire défiler un texte. Un panneau d'affichage, une flèche, un smiley. Elle se pilote avec la bibliothèque LedControl.",grandeurs:[{nom:"LED",valeur:"64 (8 × 8)"},{nom:"Liaison",valeur:"DIN, CS, CLK (comme du SPI) ; DOUT vers la matrice suivante"},{nom:"Alimentation",valeur:"4 à 5,5 V"},{nom:"Courant",valeur:"jusqu'à 320 mA toutes LED allumées à fond",note:"Plusieurs matrices : une alimentation externe."},{nom:"Luminosité",valeur:"16 niveaux (setIntensity de 0 à 15)"}],broches:[{borne:"VCC",role:"5 V"},{borne:"GND",role:"masse"},{borne:"DIN",role:"les données"},{borne:"CS",role:"la sélection"},{borne:"CLK",role:"l'horloge"}],branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"DIN",vers:"D12",couleur:"jaune"},{de:"CS",vers:"D10",couleur:"vert"},{de:"CLK",vers:"D11",couleur:"bleu"}],texte:"DIN sur D12, CLK sur D11, CS sur D10 (l'exemple de LedControl)."},programme:{titre:"Allumer une diagonale",bibliotheque:"LedControl (Eberhard Fahle)",source:`// Une matrice MAX7219 : DIN sur D12, CLK sur D11, CS sur D10.
#include <LedControl.h>

LedControl matrice(12, 11, 10, 1);   // DIN, CLK, CS, une matrice

void setup() {
  matrice.shutdown(0, false);   // elle d\xe9marre en veille : on la r\xe9veille
  matrice.setIntensity(0, 4);
  matrice.clearDisplay(0);
}

void loop() {
  for (int i = 0; i < 8; i++) {
    matrice.setLed(0, i, i, true);   // la diagonale, LED par LED
    delay(100);
  }
  delay(1000);
  matrice.clearDisplay(0);
}
`},pieges:["Au démarrage, le MAX7219 est en veille : shutdown(0, false), sinon rien ne s'allume.","Toutes les LED à fond : 320 mA, trop pour le port USB s'il y a plusieurs matrices.","Ses entrées attendent du 5 V : sur une carte en 3,3 V, elles marchent souvent, pas toujours."],sources:[{titre:"Analog Devices (Maxim), fiche technique du MAX7219",url:"https://www.analog.com/media/en/technical-documentation/data-sheets/MAX7219-MAX7221.pdf"},{titre:"Bibliothèque LedControl",url:"https://github.com/wayoda/LedControl"},L]}},N={titre:"Dessin : Méca & Cie, d'après le modèle le plus courant (à comparer au tien)"},q={titre:"Arduino, UNO R3, manuel A000066 : VIN et prise jack de 6 à 20 V au plus, 7 à 12 V conseillés",url:"https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf"},U={titre:"Adafruit, Li-Ion & LiPoly Batteries : 3,7 V en moyenne, 4,2 V chargée, coupure vers 3,0 V ; prise JST-PH à 2 broches",url:"https://learn.adafruit.com/li-ion-and-lipoly-batteries"},P={titre:"Dessin : Méca & Cie, d'après le modèle le plus courant (à comparer au tien)"},M={titre:"NF EN 60947-5-2 (détecteurs de proximité) : fil marron BN au +, bleu BU au 0 V, noir BK la sortie"};function G(e,r){return()=>{let t=0,a=0,n=0;return{regler:(e,s)=>{n+=t*(s-a)/1e9,a=s,t=r(e)},tensions:(r,s)=>({[e]:Math.floor(2*(n+t*(r-a)/1e9))%2==0?s:0}),fronts:(r,s,i)=>r===e?_(n,a,t,Math.max(s,a),i):[]}}}let k=(e,r,t,a)=>`// ${e}
const int CAPTEUR = ${r};
unsigned long debut = 0;
int avant = LOW;
long fronts = 0;

void setup() {
  Serial.begin(9600);
  pinMode(CAPTEUR, INPUT);
  debut = millis();
}

void loop() {
  // Un front montant : la broche passe de LOW \xe0 HIGH.
  int etat = digitalRead(CAPTEUR);
  if (etat == HIGH && avant == LOW) fronts++;
  avant = etat;

  if (millis() - debut >= 1000) {   // toutes les secondes
${t}
${a}
    fronts = 0;
    debut = millis();
  }
}
`,B=e=>`// Un capteur ${e} NPN : sa sortie BK passe \xe0 0 V devant la cible.
const int CAPTEUR = 2;

void setup() {
  Serial.begin(9600);
  pinMode(CAPTEUR, INPUT_PULLUP);   // la sortie NPN tire \xe0 la masse : la carte tire au +
}

void loop() {
  if (digitalRead(CAPTEUR) == LOW) Serial.println("pi\xe8ce d\xe9tect\xe9e");
  else Serial.println("rien");
  delay(500);
}
`,O={carte:"uno",fils:[{de:"BN",vers:"VIN",couleur:"marron"},{de:"BU",vers:"GND",couleur:"bleu"},{de:"BK",vers:"D2",couleur:"noir"}],texte:"L'Uno sur un bloc de 12 V (prise jack) : VIN donne ce 12 V au capteur. BK sur D2, en INPUT_PULLUP."},T={inductif:{titre:"Capteur inductif de proximité (LJ12A3-4-Z/BX, NPN)",resume:"Le détecteur des systèmes automatisés : un corps fileté M12 qui sent le métal sans le toucher, à 4 mm au plus. Sa sortie NPN à fermeture tire le fil noir à 0 V devant une pièce. Il s'alimente en 6 à 36 V : en classe, 12 V.",grandeurs:[{nom:"Portée nominale",valeur:"4 mm, sur de l'acier (moins sur l'aluminium, le cuivre)"},{nom:"Alimentation",valeur:"6 à 36 V continu"},{nom:"Sortie",valeur:"NPN à fermeture : BK à 0 V devant la cible"},{nom:"Fils",valeur:"BN marron (+), BU bleu (0 V), BK noir (la sortie)"},{nom:"Courant de sortie",valeur:"200 mA au plus"}],broches:[{borne:"BN",role:"le + de l'alimentation (12 V)"},{borne:"BU",role:"le 0 V, avec le GND de la carte"},{borne:"BK",role:"la sortie : 0 V devant le métal ; en INPUT_PULLUP sur la carte"}],branchement:O,programme:{titre:"Détecter une pièce",source:B("inductif")},essai:{reglages:[{nom:"Distance de la pièce",unite:"mm",min:0,max:10,pas:.5,depart:8}],tensions:e=>e[0]<=4?{BK:0}:{},etat:e=>({allume:e[0]<=4})},pieges:["Certains modèles ont une résistance de tirage vers leur + : BK monte alors à 12 V et grille la broche. Mesure BK au voltmètre, à vide : s'il monte à 12 V, un pont diviseur ou un optocoupleur.","Le 0 V du capteur (BU) va au GND de la carte : la masse commune.","La portée baisse sur l'aluminium et le cuivre : environ la moitié, ou moins."],sources:[{titre:"Fiche du fabricant LJ12A3-4-Z/BX : portée 4 mm, 6 à 36 V, NPN NO, 200 mA"},M,P]},capacitif:{titre:"Capteur capacitif de proximité (LJC18A3-H-Z/BX, NPN)",resume:"Le cousin du capteur inductif, en M18 : il voit aussi le bois, le plastique, le carton, et l'eau à travers une paroi (un niveau de cuve). Sa portée se règle à la vis du dos, jusqu'à 10 mm. Même sortie NPN, mêmes fils.",grandeurs:[{nom:"Portée",valeur:"1 à 10 mm, réglable (vis au dos)"},{nom:"Alimentation",valeur:"6 à 36 V continu"},{nom:"Sortie",valeur:"NPN à fermeture : BK à 0 V devant la cible"},{nom:"Ce qu'il voit",valeur:"presque tout : métal, bois, plastique, liquides"}],broches:[{borne:"BN",role:"le + de l'alimentation (12 V)"},{borne:"BU",role:"le 0 V, avec le GND de la carte"},{borne:"BK",role:"la sortie : 0 V devant la cible ; en INPUT_PULLUP"}],branchement:O,programme:{titre:"Détecter un objet",source:B("capacitif")},essai:{reglages:[{nom:"Distance de l'objet",unite:"mm",min:0,max:15,pas:.5,depart:12}],tensions:e=>e[0]<=8?{BK:0}:{},etat:e=>({allume:e[0]<=8})},pieges:["Une main, de l'humidité, de la poussière le déclenchent aussi : règle la portée au plus juste.","Comme l'inductif : vérifie que BK ne monte pas à 12 V avant de le relier à la carte.","Sa portée dépend de la matière : réglée sur du métal, elle est plus courte sur du bois."],sources:[{titre:"Fiche du fabricant LJC18A3-H-Z/BX : 1 à 10 mm réglables, 6 à 36 V, NPN NO"},M,P]},ils:{titre:"Interrupteur à lame souple (ILS)",resume:"Deux lames de fer dans un tube de verre : un aimant les rapproche, le contact se ferme, sans rien toucher. C'est le capteur de position des vérins pneumatiques (un aimant dans le piston), des portes, des compteurs.",grandeurs:[{nom:"Contact",valeur:"à fermeture : il se ferme devant un aimant"},{nom:"Distance de fermeture",valeur:"de 5 à 15 mm, selon l'aimant et l'ILS"},{nom:"Courant",valeur:"quelques centaines de mA au plus, sous 100 V au plus (selon le modèle)"},{nom:"Branchement",valeur:"comme un bouton : une patte sur une entrée en INPUT_PULLUP, l'autre au GND"}],broches:[{borne:"1",role:"une patte : sur l'entrée de la carte"},{borne:"2",role:"l'autre patte : au GND"}],branchement:{carte:"uno",fils:[{de:"1",vers:"D2",couleur:"jaune"},{de:"2",vers:"GND",couleur:"noir"}],texte:"Une patte sur D2 (INPUT_PULLUP), l'autre au GND."},programme:{titre:"La position d'un vérin",source:`// Un ILS sur D2 : LOW quand l'aimant du piston est en face.
const int ILS = 2;

void setup() {
  Serial.begin(9600);
  pinMode(ILS, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(ILS) == LOW) Serial.println("v\xe9rin sorti");
  else Serial.println("v\xe9rin rentr\xe9");
  delay(500);
}
`},essai:{reglages:[{nom:"Distance de l'aimant",unite:"mm",min:0,max:30,pas:1,depart:20}],tensions:e=>e[0]<=10?{1:0}:{},etat:e=>({allume:e[0]<=10})},pieges:["Le verre casse : plie les pattes à quelques millimètres du tube, jamais au ras.","Il rebondit à la fermeture (quelques ms) : comme un bouton, un petit delay ou un anti-rebond.","Un aimant trop fort le ferme de loin : il voit deux positions à la fois."],sources:[{titre:"Fiches de fabricants d'ILS (Littelfuse, Standex-Meder) : contact à fermeture, distance selon l'aimant"},P]},"fourche-optique":{titre:"Fourche optique à fente (compte-tours)",resume:"Une LED infrarouge et un phototransistor face à face dans une fourche : un disque à fentes qui tourne coupe la lumière, la sortie DO bat. En comptant les fentes par seconde, on a la vitesse de rotation. C'est le compte-tours des robots.",grandeurs:[{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Largeur de la fente",valeur:"5 mm environ"},{nom:"Sortie DO",valeur:"un état par fente (comparateur LM393)"},{nom:"Disque courant",valeur:"20 fentes"}],broches:[{borne:"VCC",role:"5 V"},{borne:"GND",role:"masse"},{borne:"DO",role:"la sortie logique : un front par fente"},{borne:"AO",role:"la sortie analogique, avant le comparateur"}],calcul:{titre:"La vitesse de rotation",lignes:["n = f × 60 / N : f, les fronts par seconde ; N, les fentes du disque.","40 fronts par seconde sur un disque de 20 fentes : n = 40 × 60 / 20 = 120 tr/min."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"DO",vers:"D2",couleur:"jaune"}],texte:"DO sur D2."},programme:{titre:"La vitesse d'un disque à 20 fentes",source:k("Le compte-tours : un disque de 20 fentes dans la fourche.",2,"    float tours = fronts * 60.0 / 20;   // n = f × 60 / N",'    Serial.print(tours, 0);\n    Serial.println(" tr/min");')},essai:{reglages:[{nom:"Vitesse du disque",unite:"tr/min",min:0,max:900,pas:30,depart:120}],signaux:G("DO",e=>20*e[0]/60)},pieges:["Lire la broche dans loop() rate des fronts dès que le programme fait autre chose (un delay, un affichage) : au-delà de quelques centaines par seconde, compte-les avec attachInterrupt (la fiche du motoréducteur à codeur).","Compter pendant une seconde, c'est compter à une impulsion près : 3 tr/min près avec 20 fentes. Une fenêtre plus longue, ou plus de fentes, est plus précise.","La lumière du soleil traverse le plastique : la fente à l'ombre.","Le potentiomètre règle le seuil : s'il est mal réglé, DO ne bat pas."],sources:[{titre:"Texas Instruments, LM393 : double comparateur, sortie à collecteur ouvert",url:"https://www.ti.com/lit/ds/symlink/lm393.pdf"},P]},ds18b20:{titre:"Sonde de température DS18B20 (étanche)",resume:"Le capteur de température en tube inox, étanche, au bout d'un câble : on le plonge dans un liquide, on le colle sur une pièce. Il donne la température en numérique, sur un seul fil (bus 1-Wire), au seizième de degré. Plusieurs sondes partagent le même fil.",grandeurs:[{nom:"Plage",valeur:"−55 à +125 °C (le câble des sondes étanches : souvent 85 °C au plus)"},{nom:"Précision",valeur:"±0,5 °C de −10 à +85 °C"},{nom:"Résolution",valeur:"9 à 12 bits : 0,5 à 0,0625 °C"},{nom:"Durée d'une mesure",valeur:"750 ms en 12 bits (94 ms en 9 bits)"},{nom:"Alimentation",valeur:"3,0 à 5,5 V"}],broches:[{borne:"VCC",role:"le fil rouge : 5 V"},{borne:"DATA",role:"le fil jaune : le bus 1-Wire, avec 4,7 kΩ vers VCC"},{borne:"GND",role:"le fil noir : masse"}],branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"DATA",vers:"D2",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"DATA sur D2, et une résistance de 4,7 kΩ entre DATA et 5V."},programme:{titre:"Lire la température",bibliotheque:"OneWire (Paul Stoffregen) et DallasTemperature (Miles Burton)",simulee:!0,source:`// Une sonde DS18B20 sur D2 (bus 1-Wire, 4,7 kΩ vers 5V).
#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire(2);
DallasTemperature capteurs(&oneWire);

void setup() {
  Serial.begin(9600);
  capteurs.begin();
}

void loop() {
  capteurs.requestTemperatures();          // la mesure : 750 ms en 12 bits
  float t = capteurs.getTempCByIndex(0);   // la premi\xe8re sonde du bus
  Serial.print("Temp\xe9rature : ");
  Serial.print(t, 2);
  Serial.println(" \xb0C");
}
`},essai:{reglages:[{nom:"Température",unite:"°C",min:-20,max:100,pas:.5,depart:21.5}],bibliotheques:e=>({ds18b20:e[0]})},pieges:["Sans la résistance de 4,7 kΩ entre DATA et VCC, la carte lit −127 °C : la sonde ne répond pas.","−127 °C, c'est « pas de sonde » (DEVICE_DISCONNECTED_C) : un fil, la résistance, ou la broche.","Une mesure dure 750 ms : pendant ce temps, requestTemperatures() bloque le programme.","La gaine des sondes étanches tient souvent 85 °C, pas les 125 °C de la puce."],sources:[{titre:"Analog Devices (Maxim), fiche technique du DS18B20 : −55 à +125 °C, ±0,5 °C, 750 ms en 12 bits",url:"https://www.analog.com/media/en/technical-documentation/data-sheets/DS18B20.pdf"},P]},max6675:{titre:"Thermocouple K et son module MAX6675",resume:"Pour les hautes températures : un thermocouple de type K (deux métaux soudés, qui donnent quelques millivolts) et le MAX6675, qui le lit et rend la température en numérique, au quart de degré, de 0 à 1 024 °C. Un four, une pièce qui sort d'usinage, un moteur.",grandeurs:[{nom:"Plage",valeur:"0 à 1 024 °C"},{nom:"Résolution",valeur:"0,25 °C (12 bits)"},{nom:"Durée d'une mesure",valeur:"220 ms au plus"},{nom:"Liaison",valeur:"SPI en lecture : SCK, CS, SO"},{nom:"Alimentation",valeur:"3,0 à 5,5 V"}],broches:[{borne:"GND",role:"masse"},{borne:"VCC",role:"5 V"},{borne:"SCK",role:"l'horloge"},{borne:"CS",role:"la sélection : à l'état bas pendant la lecture"},{borne:"SO",role:"la sortie des données"}],branchement:{carte:"uno",fils:[{de:"GND",vers:"GND",couleur:"noir"},{de:"VCC",vers:"5V",couleur:"rouge"},{de:"SCK",vers:"D6",couleur:"jaune"},{de:"CS",vers:"D5",couleur:"vert"},{de:"SO",vers:"D4",couleur:"bleu"}],texte:"SCK sur D6, CS sur D5, SO sur D4 (le programme de l'exemple de la bibliothèque)."},programme:{titre:"Lire la température du thermocouple",bibliotheque:"MAX6675 library (Adafruit)",simulee:!0,source:`// Un thermocouple K sur son module MAX6675.
#include <max6675.h>

// Les noms de l'exemple de la biblioth\xe8que (SCK est d\xe9j\xe0 le nom d'une broche de l'Uno).
const int thermoDO = 4;
const int thermoCS = 5;
const int thermoCLK = 6;
MAX6675 thermocouple(thermoCLK, thermoCS, thermoDO);

void setup() {
  Serial.begin(9600);
  delay(500);                 // le MAX6675 se met en route
}

void loop() {
  Serial.print("Temp\xe9rature : ");
  Serial.print(thermocouple.readCelsius(), 2);
  Serial.println(" \xb0C");
  delay(1000);                // une mesure toutes les 220 ms au plus
}
`},essai:{reglages:[{nom:"Température",unite:"°C",min:0,max:900,pas:5,depart:250}],bibliotheques:e=>({max6675:e[0]})},pieges:["Le thermocouple a un sens : + sur T+, − sur T− (le fil le plus magnétique est le −, pour un type K).","Lu trop vite, il rend la même valeur : une nouvelle mesure toutes les 220 ms au plus.","Il ne descend pas sous 0 °C : pour le froid, une sonde DS18B20."],sources:[{titre:"Analog Devices (Maxim), fiche technique du MAX6675 : 0 à 1 024 °C, 0,25 °C, 220 ms",url:"https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6675.pdf"},P]},debitmetre:{titre:"Débitmètre à turbine YF-S201",resume:"Une turbine dans un corps en plastique, avec un aimant et un capteur à effet Hall : l'eau la fait tourner, la sortie donne une impulsion par passage. La fréquence est proportionnelle au débit. On compte les impulsions par seconde, on a le débit ; on les additionne, on a le volume.",grandeurs:[{nom:"Débit",valeur:"1 à 30 L/min"},{nom:"Loi",valeur:"F = 7,5 × Q : F en Hz, Q en L/min"},{nom:"Volume",valeur:"450 impulsions par litre (7,5 × 60)"},{nom:"Alimentation",valeur:"5 à 18 V ; la sortie, au niveau de son alimentation"},{nom:"Raccords",valeur:"filetés G 1/2"}],broches:[{borne:"VCC",role:"le fil rouge : 5 V"},{borne:"GND",role:"le fil noir : masse"},{borne:"signal",role:"le fil jaune : les impulsions"}],calcul:{titre:"Le débit et le volume",lignes:["Q = F / 7,5 : 75 impulsions par seconde donnent Q = 10 L/min.","Le volume : V = impulsions / 450 (L).","Le débit en m³/h : Q × 0,06 ; 10 L/min = 0,6 m³/h."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"signal",vers:"D2",couleur:"jaune"}],texte:"Le signal sur D2."},programme:{titre:"Le débit, en L/min",source:k("Le débit d'un YF-S201 : F = 7,5 × Q.",2,"    float debit = fronts / 7.5;   // Q = F / 7,5 (L/min)",'    Serial.print("Débit : ");\n    Serial.print(debit, 1);\n    Serial.println(" L/min");')},essai:{reglages:[{nom:"Débit",unite:"L/min",min:0,max:30,pas:.5,depart:10}],signaux:G("signal",e=>7.5*e[0])},pieges:["Alimenté en 12 V, sa sortie monte à 12 V : sur une carte, il s'alimente en 5 V (en 3,3 V sur une ESP32, avec un pont diviseur).","Le coefficient 7,5 est celui du fabricant : étalonne-le avec un seau et un chronomètre.","Une impulsion de plus ou de moins dans la seconde : 0,13 L/min d'écart. Compte plus longtemps pour un petit débit.","La flèche du corps dans le sens de l'eau ; sous 1 L/min, la turbine ne tourne pas."],sources:[{titre:"Fiche du fabricant YF-S201 : 1 à 30 L/min, F = 7,5 × Q, 5 à 18 V"},P]},pression:{titre:"Capteur de pression analogique 0 à 1,2 MPa",resume:"Un transmetteur de pression en inox, à visser sur un circuit d'eau, d'air ou d'huile : il donne une tension de 0,5 V à 0 MPa à 4,5 V à pleine échelle. Commencer à 0,5 V (et pas 0 V) permet de voir un fil coupé. C'est la mesure de pression d'un circuit hydraulique ou pneumatique.",grandeurs:[{nom:"Plage",valeur:"0 à 1,2 MPa (12 bar) ; d'autres modèles de 0,5 à 5 MPa"},{nom:"Sortie",valeur:"0,5 à 4,5 V, proportionnelle à la pression"},{nom:"Alimentation",valeur:"5 V"},{nom:"Précision",valeur:"de l'ordre de 1 % de la pleine échelle (selon le modèle)"},{nom:"Raccord",valeur:"fileté G 1/4 le plus souvent"}],broches:[{borne:"VCC",role:"le fil rouge : 5 V"},{borne:"GND",role:"le fil noir : masse"},{borne:"signal",role:"le fil jaune : 0,5 à 4,5 V, sur une entrée analogique"}],calcul:{titre:"De la tension à la pression",lignes:["P = (U − 0,5) × 1,2 / 4 (MPa).","Pour U = 2,5 V : P = 2 × 1,2 / 4 = 0,6 MPa = 6 bar.","Sur l'Uno : U = N × 5 / 1 024 ; N = 512 donne 2,5 V."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"signal",vers:"A0",couleur:"jaune"}],texte:"Le signal sur A0."},programme:{titre:"Lire la pression",source:`// Un capteur 0 \xe0 1,2 MPa, sortie 0,5 \xe0 4,5 V, sur A0.
void setup() {
  Serial.begin(9600);
}

void loop() {
  int n = analogRead(A0);
  float u = n * 5.0 / 1024;               // la tension (V)
  float p = (u - 0.5) * 1.2 / 4;          // P = (U − 0,5) \xd7 1,2 / 4 (MPa)
  Serial.print("U = ");
  Serial.print(u, 2);
  Serial.print(" V   P = ");
  Serial.print(p * 10, 2);                // 1 MPa = 10 bar
  Serial.println(" bar");
  delay(500);
}
`},essai:{reglages:[{nom:"Pression",unite:"bar",min:0,max:12,pas:.1,depart:6}],tensions:e=>({signal:.5+4*e[0]/12})},pieges:["Sous 0,5 V : un fil coupé ou le capteur débranché. Au-dessus de 4,5 V : un court-circuit ou une surpression.","Il mesure la pression relative (par rapport à l'air) : 0 bar, c'est la pression atmosphérique.","Sur une carte en 3,3 V, 4,5 V est trop : un pont diviseur sur le signal."],sources:[{titre:"Fiches de fabricants de transmetteurs 0,5 à 4,5 V (0 à 1,2 MPa, 5 V, raccord G 1/4)"},P]},acs712:{titre:"Capteur de courant ACS712 (effet Hall)",resume:"Le courant à mesurer traverse le module par son bornier (IP+, IP−) ; une puce à effet Hall le sent sans contact électrique et donne une tension autour de VCC / 2. On mesure ainsi le courant d'un moteur, d'une charge, en continu ou en alternatif, isolé de la carte.",grandeurs:[{nom:"Calibres",valeur:"5 A, 20 A ou 30 A, selon le modèle"},{nom:"Sensibilité",valeur:"185 mV/A (5 A), 100 mV/A (20 A), 66 mV/A (30 A)"},{nom:"Sortie à 0 A",valeur:"VCC / 2, soit 2,5 V"},{nom:"Isolement",valeur:"le circuit mesuré est isolé de la carte (2,1 kV)"},{nom:"Alimentation",valeur:"5 V"}],broches:[{borne:"VCC",role:"5 V"},{borne:"OUT",role:"la tension, sur une entrée analogique"},{borne:"GND",role:"masse"},{borne:"IP+",role:"l'entrée du courant mesuré"},{borne:"IP-",role:"la sortie du courant mesuré"}],calcul:{titre:"De la tension au courant",lignes:["I = (U − 2,5) / S ; S = 0,185 V/A pour le 5 A.","U = 2,87 V : I = 0,37 / 0,185 = 2 A.","Sur l'Uno, un point vaut 4,9 mV : 26 mA pour le calibre 5 A."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"OUT",vers:"A0",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"OUT sur A0 ; le circuit mesuré passe par IP+ et IP−."},programme:{titre:"Mesurer un courant (calibre 5 A)",source:`// Un ACS712 5 A sur A0 : 2,5 V \xe0 0 A, 185 mV par amp\xe8re.
const float SENSIBILITE = 0.185;   // V/A (calibre 5 A)

void setup() {
  Serial.begin(9600);
}

void loop() {
  float u = analogRead(A0) * 5.0 / 1024;
  float i = (u - 2.5) / SENSIBILITE;   // I = (U − 2,5) / S
  Serial.print("I = ");
  Serial.print(i, 2);
  Serial.println(" A");
  delay(500);
}
`},essai:{reglages:[{nom:"Courant",unite:"A",min:-5,max:5,pas:.1,depart:2}],tensions:e=>({OUT:2.5+.185*e[0]})},pieges:["La sensibilité dépend du calibre écrit sur la puce (05B, 20A, 30A) : vérifie la tienne.","À 0 A, la carte lit rarement 512 pile : mesure le zéro au démarrage et retire-le.","Pour un moteur, la valeur saute : fais la moyenne de plusieurs mesures."],sources:[{titre:"Allegro MicroSystems, fiche technique de l'ACS712 : 185, 100 et 66 mV/A ; VCC / 2 à 0 A ; isolement 2,1 kV"},P]},diviseur:{titre:"Module diviseur de tension (0 à 25 V)",resume:"Deux résistances (30 kΩ et 7,5 kΩ) qui divisent une tension par 5 : la carte mesure ainsi jusqu'à 25 V, une batterie, un panneau solaire, une alimentation. C'est le pont diviseur des cours d'électricité, tout fait.",grandeurs:[{nom:"Résistances",valeur:"R1 = 30 kΩ, R2 = 7,5 kΩ"},{nom:"Rapport",valeur:"S = U × R2 / (R1 + R2) = U / 5"},{nom:"Tension mesurée",valeur:"25 V au plus sur une Uno (5 V à son entrée) ; 16,5 V sur une carte en 3,3 V"},{nom:"Courant pris au circuit",valeur:"I = U / 37,5 kΩ : 0,32 mA sous 12 V"}],broches:[{borne:"VCC",role:"le + de la tension à mesurer (bornier)"},{borne:"GND",role:"le − de la tension à mesurer (bornier)"},{borne:"S",role:"la tension divisée par 5, sur une entrée analogique"},{borne:"-",role:"au GND de la carte"}],calcul:{titre:"Le pont diviseur",lignes:["S = U × R2 / (R1 + R2) = U × 7,5 / 37,5 = U / 5.","Une batterie de 12,6 V donne S = 2,52 V ; sur l'Uno, N ≈ 516.","U = N × 5 / 1 024 × 5."]},branchement:{carte:"uno",fils:[{de:"S",vers:"A0",couleur:"jaune"},{de:"-",vers:"GND",couleur:"noir"}],texte:"S sur A0, − au GND ; la tension à mesurer sur le bornier."},programme:{titre:"Mesurer une tension jusqu'à 25 V",source:`// Le module diviseur : S = U / 5, sur A0.
void setup() {
  Serial.begin(9600);
}

void loop() {
  float s = analogRead(A0) * 5.0 / 1024;   // la tension \xe0 l'entr\xe9e de la carte
  float u = s * 5;                          // U = 5 \xd7 S
  Serial.print("U = ");
  Serial.print(u, 2);
  Serial.println(" V");
  delay(500);
}
`},essai:{reglages:[{nom:"Tension mesurée",unite:"V",min:0,max:25,pas:.1,depart:12.6}],tensions:e=>({S:e[0]/5})},pieges:["Au-delà de 25 V, la carte reçoit plus de 5 V sur A0 : elle grille. Sur une carte en 3,3 V, 16,5 V au plus.","Le − de la tension mesurée et le GND de la carte sont reliés : jamais sur le secteur.","La précision est celle des résistances (1 % ou 5 %) : compare à un multimètre."],sources:[{titre:"Modules diviseurs de tension courants : 30 kΩ et 7,5 kΩ, rapport 1/5, 25 V au plus"},P]},vibration:{titre:"Capteur de vibrations SW-420",resume:"Un petit ressort enfermé : quand le module vibre, il touche et décolle, et le comparateur LM393 en fait une sortie DO qui bat. On compte les impulsions sur une durée : plus il y en a, plus ça vibre. C'est une première surveillance de machine, pour la maintenance.",grandeurs:[{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Sortie DO",valeur:"à l'état haut quand ça vibre (à vérifier sur ton module : certains inversent)"},{nom:"Seuil",valeur:"réglé au potentiomètre"},{nom:"Ce qu'il dit",valeur:"il vibre ou non, par à-coups : pas une mesure d'accélération"}],broches:[{borne:"VCC",role:"5 V"},{borne:"GND",role:"masse"},{borne:"DO",role:"les impulsions quand ça vibre"}],branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"DO",vers:"D2",couleur:"jaune"}],texte:"DO sur D2."},programme:{titre:"Compter les vibrations",source:k("Les vibrations d'une machine : les impulsions du SW-420 par seconde.",2,"",'    Serial.print("Vibrations : ");\n    Serial.print(fronts);\n    Serial.println(fronts > 20 ? " par seconde : alerte" : " par seconde");')},essai:{reglages:[{nom:"Vibrations",unite:"chocs/s",min:0,max:60,pas:1,depart:10}],signaux:G("DO",e=>e[0]),etat:e=>({allume:e[0]>0})},pieges:["Il ne mesure pas une accélération : pour une analyse vibratoire, un accéléromètre (MPU6050).","Le seuil se règle au potentiomètre : trop sensible, il voit les pas dans la pièce.","Fixé mollement, il vibre moins que la machine : visse-le bien."],sources:[{titre:"Modules SW-420 courants : capteur à ressort SW-420, comparateur LM393, sortie DO, seuil réglable"},P]},son:{titre:"Capteur de son KY-038",resume:"Un micro électret et un comparateur : AO suit le son autour de VCC / 2, DO passe quand le bruit dépasse le seuil réglé au potentiomètre. Il entend un claquement, un choc, une machine qui démarre ; il ne mesure pas des décibels.",grandeurs:[{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"AO",valeur:"le son, autour de VCC / 2"},{nom:"DO",valeur:"à l'état haut au-dessus du seuil"},{nom:"Étalonnage",valeur:"aucun : un niveau relatif, pas des dB"}],broches:[{borne:"AO",role:"la sortie analogique"},{borne:"GND",role:"masse"},{borne:"+",role:"5 V"},{borne:"DO",role:"la sortie du seuil"}],branchement:{carte:"uno",fils:[{de:"AO",vers:"A0",couleur:"jaune"},{de:"GND",vers:"GND",couleur:"noir"},{de:"+",vers:"5V",couleur:"rouge"},{de:"DO",vers:"D2",couleur:"vert"}],texte:"AO sur A0, DO sur D2."},programme:{titre:"Le niveau sonore",source:`// Le KY-038 : AO sur A0, DO sur D2.
void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT);
}

void loop() {
  int n = analogRead(A0);
  Serial.print("Niveau : ");
  Serial.print(n);
  if (digitalRead(2) == HIGH) Serial.print("   au-dessus du seuil");
  Serial.println();
  delay(200);
}
`},essai:{reglages:[{nom:"Niveau sonore",unite:"%",min:0,max:100,pas:5,depart:30}],tensions:(e,r)=>({AO:r/2+e[0]/100*(r/2)*.9,...e[0]>60?{DO:r}:{DO:0}}),etat:e=>({allume:e[0]>60})},pieges:["AO oscille avec le son : une seule mesure tombe n'importe où. Prends le maximum sur 50 ms.","Il n'est pas étalonné : pour des décibels, un sonomètre.","Le seuil de DO se règle au potentiomètre, avec la LED du module."],sources:[{titre:"Joy-IT, fiche du module KY-038 : micro électret, sortie analogique et numérique, seuil réglable"},P]},couleur:{titre:"Capteur de couleur TCS34725",resume:"Une puce qui mesure la lumière rouge, verte, bleue et totale reçue, et une LED blanche pour éclairer l'objet. On trie des pièces par couleur sur un convoyeur. Il se lit en I²C, avec la bibliothèque d'Adafruit.",grandeurs:[{nom:"Mesures",valeur:"R, V, B et la lumière totale C, sur 16 bits"},{nom:"Liaison",valeur:"I²C, adresse 0x29"},{nom:"Alimentation",valeur:"3,3 à 5 V (régulateur sur le module)"},{nom:"Distance",valeur:"quelques millimètres, à l'abri de la lumière du jour"}],broches:[{borne:"VIN",role:"5 V"},{borne:"GND",role:"masse"},{borne:"3V3",role:"la sortie 3,3 V du module"},{borne:"SCL",role:"horloge I²C"},{borne:"SDA",role:"données I²C"},{borne:"INT",role:"interruption (facultative)"},{borne:"LED",role:"à la masse : la LED s'éteint"}],branchement:{carte:"uno",fils:[{de:"VIN",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"SCL",vers:"SCL",couleur:"jaune"},{de:"SDA",vers:"SDA",couleur:"bleu"}],texte:"En I²C : SCL et SDA."},programme:{titre:"Lire une couleur",bibliotheque:"Adafruit TCS34725",source:`// Le TCS34725 en I\xb2C, avec la biblioth\xe8que d'Adafruit.
#include <Wire.h>
#include <Adafruit_TCS34725.h>

Adafruit_TCS34725 capteur(TCS34725_INTEGRATIONTIME_50MS, TCS34725_GAIN_4X);

void setup() {
  Serial.begin(9600);
  if (!capteur.begin()) Serial.println("Pas de TCS34725 : v\xe9rifie SDA et SCL.");
}

void loop() {
  uint16_t r, v, b, c;
  capteur.getRawData(&r, &v, &b, &c);
  Serial.print("R ");
  Serial.print(r);
  Serial.print("  V ");
  Serial.print(v);
  Serial.print("  B ");
  Serial.println(b);
  delay(500);
}
`},pieges:["Adresse 0x29 : la même que le VL53L0X. Les deux ne vont pas sur le même bus sans changer celle du VL53L0X.","La lumière de la salle change les mesures : un cache noir autour du capteur.","Une couleur se reconnaît par ses proportions (R / C, V / C, B / C), pas par ses valeurs brutes."],sources:[{titre:"ams-OSRAM, fiche technique du TCS3472 : capteur RVB et lumière totale, I²C"},{titre:"Adafruit, Color Sensors (TCS34725)",url:"https://learn.adafruit.com/adafruit-color-sensors"},P]},clavier:{titre:"Clavier matriciel 4 × 4",resume:"Seize touches rangées en 4 lignes et 4 colonnes, sur une membrane : appuyer relie une ligne à une colonne. La carte met les lignes à l'état bas une par une et lit les colonnes : 8 broches pour 16 touches. Un code d'accès, une consigne tapée.",grandeurs:[{nom:"Touches",valeur:"16 : 0 à 9, A à D, * et #"},{nom:"Broches",valeur:"8 : 4 lignes (L1 à L4), 4 colonnes (C1 à C4)"},{nom:"Lecture",valeur:"par balayage : la bibliothèque Keypad"},{nom:"Connecteur",valeur:"une nappe à 8 broches au pas de 2,54 mm"}],broches:[{borne:"L1",role:"ligne 1 (1, 2, 3, A)"},{borne:"L4",role:"ligne 4 (*, 0, #, D)"},{borne:"C1",role:"colonne 1 (1, 4, 7, *)"},{borne:"C4",role:"colonne 4 (A, B, C, D)"}],branchement:{carte:"uno",fils:[{de:"L1",vers:"D9",couleur:"jaune"},{de:"L2",vers:"D8",couleur:"jaune"},{de:"L3",vers:"D7",couleur:"jaune"},{de:"L4",vers:"D6",couleur:"jaune"},{de:"C1",vers:"D5",couleur:"vert"},{de:"C2",vers:"D4",couleur:"vert"},{de:"C3",vers:"D3",couleur:"vert"},{de:"C4",vers:"D2",couleur:"vert"}],texte:"Les lignes sur D9 à D6, les colonnes sur D5 à D2."},programme:{titre:"Lire une touche",bibliotheque:"Keypad (Mark Stanley, Alexander Brevig)",source:`// Un clavier 4 \xd7 4 : lignes sur D9 \xe0 D6, colonnes sur D5 \xe0 D2.
#include <Keypad.h>

char touches[4][4] = {
  {'1', '2', '3', 'A'},
  {'4', '5', '6', 'B'},
  {'7', '8', '9', 'C'},
  {'*', '0', '#', 'D'}
};
byte lignes[4] = {9, 8, 7, 6};
byte colonnes[4] = {5, 4, 3, 2};
Keypad clavier(makeKeymap(touches), lignes, colonnes, 4, 4);

void setup() {
  Serial.begin(9600);
}

void loop() {
  char t = clavier.getKey();   // NO_KEY (0) si rien n'est appuy\xe9
  if (t) Serial.println(t);
}
`},pieges:["L'ordre des 8 fils change d'un clavier à l'autre : vérifie au multimètre en appuyant sur une touche.","Deux touches à la fois peuvent faire croire à une troisième (le « fantôme ») : une touche à la fois.","8 broches, c'est beaucoup sur une petite carte : il existe des claviers en I²C."],sources:[{titre:"Arduino Playground, bibliothèque Keypad : balayage des lignes, getKey()",url:"https://playground.arduino.cc/Code/Keypad/"},P]},rfid:{titre:"Lecteur RFID RC522",resume:"Le lecteur de badges à 13,56 MHz : il lit, sans contact, le numéro (UID) d'une carte ou d'un porte-clés posé à quelques centimètres. L'accès d'un poste, l'identification d'une pièce. Il se branche en SPI et se lit avec la bibliothèque MFRC522.",grandeurs:[{nom:"Fréquence",valeur:"13,56 MHz (badges MIFARE)"},{nom:"Distance de lecture",valeur:"jusqu'à 3 à 5 cm"},{nom:"Alimentation",valeur:"3,3 V seulement"},{nom:"Liaison",valeur:"SPI : SDA (sélection), SCK, MOSI, MISO, et RST"}],broches:[{borne:"SDA",role:"la sélection SPI (SS) : D10"},{borne:"SCK",role:"horloge SPI : D13"},{borne:"MOSI",role:"D11"},{borne:"MISO",role:"D12"},{borne:"RST",role:"remise à zéro : D9"},{borne:"3.3V",role:"3,3 V"},{borne:"GND",role:"masse"}],branchement:{carte:"uno",fils:[{de:"SDA",vers:"D10",couleur:"jaune"},{de:"SCK",vers:"D13",couleur:"vert"},{de:"MOSI",vers:"D11",couleur:"bleu"},{de:"MISO",vers:"D12",couleur:"violet"},{de:"RST",vers:"D9",couleur:"orange"},{de:"GND",vers:"GND",couleur:"noir"},{de:"3.3V",vers:"3V3",couleur:"rouge"}],texte:"En SPI sur D10 à D13, RST sur D9, alimenté en 3,3 V."},programme:{titre:"Lire le numéro d'un badge",bibliotheque:"MFRC522 (GithubCommunity)",source:`// Le RC522 en SPI : SDA sur D10, RST sur D9.
#include <SPI.h>
#include <MFRC522.h>

MFRC522 lecteur(10, 9);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  lecteur.PCD_Init();
}

void loop() {
  if (!lecteur.PICC_IsNewCardPresent()) return;
  if (!lecteur.PICC_ReadCardSerial()) return;
  Serial.print("Badge :");
  for (byte i = 0; i < lecteur.uid.size; i++) {
    Serial.print(" ");
    Serial.print(lecteur.uid.uidByte[i], HEX);
  }
  Serial.println();
  lecteur.PICC_HaltA();
}
`},pieges:["3,3 V seulement : sur le 5V, il grille.","Ses entrées supportent mal le 5 V des broches de l'Uno : beaucoup de montages marchent, mais un convertisseur de niveaux est plus sûr.","Le numéro d'un badge n'est pas un secret : il se copie. Pour un vrai contrôle d'accès, il faut plus."],sources:[{titre:"NXP, fiche technique du MFRC522 : lecteur 13,56 MHz, SPI, 3,3 V",url:"https://www.nxp.com/docs/en/data-sheet/MFRC522.pdf"},{titre:"Bibliothèque MFRC522 pour Arduino",url:"https://github.com/miguelbalboa/rfid"},P]}},E={titre:"Dessin : wokwi-elements (licence MIT, © Uri Shaked)",url:"https://github.com/wokwi/wokwi-elements"},$={titre:"Dessin : Méca & Cie, d'après le modèle le plus courant (à comparer au tien)"},z=[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"SCL",vers:"SCL",couleur:"jaune"},{de:"SDA",vers:"SDA",couleur:"bleu"}],R={hx711:{titre:"Capteur de force : jauge de contrainte et HX711",resume:"Une barre d'aluminium qui plie un peu sous la charge, et quatre jauges de contrainte collées dessus, en pont de Wheatstone. Le pont donne quelques millivolts : l'HX711 les amplifie et les convertit sur 24 bits. C'est la balance de la classe, et le capteur de force des essais de traction ou de flexion.",grandeurs:[{nom:"Jauge (5 kg, la plus courante)",valeur:"1,0 ± 0,15 mV/V à pleine charge ; surcharge sans dommage : 150 %",note:"Fiche du vendeur de la jauge en barre : à vérifier sur la tienne."},{nom:"Convertisseur",valeur:"HX711 : 24 bits, deux voies (A au gain 128 ou 64, B au gain 32)"},{nom:"Étendue d'entrée",valeur:"±20 mV sur la voie A au gain 128, alimenté en 5 V"},{nom:"Cadence",valeur:"10 mesures par seconde (80 avec la broche RATE au VCC)"},{nom:"Alimentation",valeur:"2,6 à 5,5 V ; il alimente lui-même le pont"},{nom:"Courant",valeur:"moins de 1,5 mA"},{nom:"Liaison",valeur:"DT (les données) et SCK (l'horloge) : sa liaison à lui, sur deux broches au choix"}],broches:[{borne:"GND",role:"masse"},{borne:"DT",role:"les données : l'HX711 les envoie bit par bit",niveau:"numérique"},{borne:"SCK",role:"l'horloge : la carte la donne",niveau:"numérique"},{borne:"VCC",role:"alimentation",niveau:"2,6 à 5,5 V"}],calcul:{titre:"Des points du convertisseur à la force",lignes:["À pleine charge, le pont donne U = S × E (S = 1 mV/V, E l'alimentation du pont). L'HX711 compte 2²⁴ points sur E / 128.","N = S × (m / m_max) × 2³¹ : l'alimentation s'élimine. Pour une jauge de 5 kg : 2³¹ × 0,001 / 5 000 ≈ 429,5 points par gramme.","C'est le facteur d'étalonnage. Sur ta jauge, on le mesure avec une masse connue : facteur = (N − N₀) / m.","La force : F = m × g ; 1 kg pèse 9,81 N."]},branchement:{carte:"uno",fils:[{de:"GND",vers:"GND",couleur:"noir"},{de:"DT",vers:"D2",couleur:"bleu"},{de:"SCK",vers:"D3",couleur:"jaune"},{de:"VCC",vers:"5V",couleur:"rouge"}],texte:"VCC au 5V, GND au GND, DT sur D2, SCK sur D3. La jauge se raccorde aux bornes E+, E−, A−, A+ du module (rouge, noir, blanc, vert, le plus souvent)."},programme:{titre:"Peser, et donner la force",bibliotheque:"HX711 Arduino Library (Bogdan Necula)",simulee:!0,source:`// Le capteur de force : DT sur D2, SCK sur D3. Biblioth\xe8que \xab HX711 \xbb de Bogdan Necula.
#include <HX711.h>

HX711 balance;
const float ETALONNAGE = 429.5;   // points par gramme : \xe0 mesurer avec une masse connue

void setup() {
  Serial.begin(9600);
  balance.begin(2, 3);
  balance.set_scale(ETALONNAGE);
  balance.tare();                  // rien sur la jauge : le z\xe9ro
  Serial.println("Z\xe9ro fait");
}

void loop() {
  float m = balance.get_units(5);  // la moyenne de 5 mesures, en g
  Serial.print("Masse : ");
  Serial.print(m, 0);
  Serial.print(" g   Force : ");
  Serial.print(m * 9.81 / 1000.0, 2);
  Serial.println(" N");
}
`},essai:{reglages:[{nom:"Masse posée sur la jauge",unite:"g",min:0,max:5e3,pas:10,depart:0}],bibliotheques:([e])=>({hx711:8e3+429.4967296*e})},pieges:["La tare se fait au démarrage : s'il y a déjà un objet sur la jauge, il devient le zéro.","Le facteur 429,5 est celui d'une jauge idéale : la tienne s'en écarte de 15 % (1,0 ± 0,15 mV/V). Étalonne-la avec une masse connue.","Une jauge se monte par ses deux bouts, en porte-à-faux, la flèche gravée dans le sens de la charge : posée à plat sur la table, elle ne plie pas.","Rouge et noir inversés avec blanc et vert : les mesures diminuent quand on charge. Échange A− et A+.","Une mesure dure 100 ms : get_units(5) prend une demi-seconde."],sources:[{titre:"Avia Semiconductor, HX711 : 24 bits, gains 128, 64 et 32, ±20 mV, 10 ou 80 mesures par seconde, 2,6 à 5,5 V, moins de 1,5 mA",url:"https://cdn.sparkfun.com/datasheets/Sensors/ForceFlex/hx711_english.pdf"},{titre:"Bogdan Necula, bibliothèque HX711 : begin, tare, set_scale, get_units",url:"https://github.com/bogde/HX711"},{titre:"Fiche du vendeur d'une jauge en barre de 5 kg : 1,0 ± 0,15 mV/V, surcharge de 150 %"},E]},mpu6050:{titre:"Accéléromètre et gyroscope MPU6050",resume:"Une centrale inertielle sur une puce : un accéléromètre et un gyroscope sur trois axes chacun. Immobile, l'accéléromètre ne voit que la pesanteur : on en tire l'inclinaison. Le gyroscope donne la vitesse de rotation. Il se lit en I²C, à l'adresse 0x68, sur le module GY-521.",grandeurs:[{nom:"Accéléromètre",valeur:"3 axes, ±2, ±4, ±8 ou ±16 g ; 16 384 points par g sur ±2 g"},{nom:"Gyroscope",valeur:"3 axes, ±250, ±500, ±1 000 ou ±2 000 °/s ; 131 points par °/s sur ±250 °/s"},{nom:"Convertisseurs",valeur:"16 bits, un par axe"},{nom:"Thermomètre",valeur:"T = brut / 340 + 36,53 (°C)"},{nom:"Alimentation",valeur:"3 à 5 V sur le module GY-521 (il a son régulateur ; la puce, 2,375 à 3,46 V)"},{nom:"Courant",valeur:"3,9 mA environ (gyroscope 3,6 mA, accéléromètre 0,5 mA)"},{nom:"Liaison",valeur:"I²C jusqu'à 400 kHz ; adresse 0x68 (AD0 à GND), 0x69 (AD0 au VCC)"},{nom:"Registres",valeur:"PWR_MGMT_1 : 0x6B ; mesures : 0x3B à 0x48 ; WHO_AM_I : 0x75 (rend 0x68)"}],broches:[{borne:"VCC",role:"alimentation",niveau:"3 à 5 V"},{borne:"GND",role:"masse"},{borne:"SCL",role:"horloge I²C"},{borne:"SDA",role:"données I²C"},{borne:"XDA",role:"bus I²C auxiliaire (un magnétomètre), données"},{borne:"XCL",role:"bus I²C auxiliaire, horloge"},{borne:"AD0",role:"l'adresse : à GND, 0x68 ; au VCC, 0x69"},{borne:"INT",role:"sortie d'interruption (une mesure prête)"}],calcul:{titre:"De l'accélération à l'inclinaison",lignes:["Posé à plat et immobile, il ne mesure que la pesanteur : a = (0 ; 0 ; 1 g).","Incliné, la pesanteur se partage sur les axes : roulis φ = atan2(ay, az) ; tangage θ = atan2(−ax, √(ay² + az²)).","Le gyroscope donne ω (°/s) : l'angle s'obtient en additionnant ω × Δt, mais il dérive. On mélange les deux (filtre complémentaire)."]},branchement:{carte:"uno",fils:z,texte:"VCC au 5V, GND au GND, SCL et SDA sur les bornes SCL et SDA de l'Uno. AD0 en l'air ou à GND : adresse 0x68."},programme:{titre:"Mesurer l'inclinaison",source:`// Le MPU6050 en I\xb2C (0x68) : on le r\xe9veille, on lit l'acc\xe9l\xe9ration, on en tire l'inclinaison.
#include <Wire.h>

const int MPU = 0x68;

int16_t lire16() {
  byte fort = Wire.read();
  byte faible = Wire.read();
  return (fort << 8) | faible;    // 16 bits sign\xe9s, poids fort d'abord
}

void setup() {
  Serial.begin(9600);
  Wire.begin();
  Wire.beginTransmission(MPU);
  Wire.write(0x6B);               // PWR_MGMT_1
  Wire.write(0);                  // il dort au d\xe9marrage : on le r\xe9veille
  Wire.endTransmission();
}

void loop() {
  Wire.beginTransmission(MPU);
  Wire.write(0x3B);               // ACCEL_XOUT_H
  Wire.endTransmission(false);
  Wire.requestFrom(MPU, 6);
  float ax = lire16() / 16384.0;  // \xb12 g : 16 384 points par g
  float ay = lire16() / 16384.0;
  float az = lire16() / 16384.0;
  float roulis = atan2(ay, az) * 180.0 / PI;
  float tangage = atan2(-ax, sqrt(ay * ay + az * az)) * 180.0 / PI;
  Serial.print("Roulis : ");
  Serial.print(roulis, 1);
  Serial.print(" \xb0   Tangage : ");
  Serial.print(tangage, 1);
  Serial.println(" \xb0");
  delay(200);
}
`},essai:{reglages:[{nom:"Roulis (autour de X)",unite:"°",min:-90,max:90,pas:1,depart:20},{nom:"Tangage (autour de Y)",unite:"°",min:-90,max:90,pas:1,depart:0}],i2c:{adresse:104,creer:()=>new b,regler:(e,[r,t])=>e.incliner(r,t)}},pieges:["Il dort au démarrage : sans l'écriture de 0 dans 0x6B, toutes les mesures valent 0.","Une valeur sur 16 bits signés : en int sur un ESP32 (32 bits), sans int16_t, −1 devient 65 535.","L'accéléromètre voit aussi les secousses : pendant un mouvement, l'inclinaison calculée est fausse.","Le lacet (la rotation autour de l'axe vertical) ne se mesure pas avec l'accéléromètre : la pesanteur ne change pas. Il faut le gyroscope, ou un magnétomètre.","Le gyroscope dérive : son angle intégré s'écarte de quelques degrés par minute."],sources:[{titre:"InvenSense, MPU-6000 / MPU-6050 Product Specification : étendues, sensibilités, alimentation, courants",url:"https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf"},{titre:"InvenSense, MPU-6000 / MPU-6050 Register Map : 0x3B à 0x48, 0x6B, 0x75, la formule de la température",url:"https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Register-Map1.pdf"},E]},"ky-040":{titre:"Codeur rotatif incrémental KY-040",resume:"Un bouton qui tourne sans fin, cran par cran, et qui s'enfonce. À chaque cran, ses deux voies, CLK et DT, changent l'une après l'autre : l'ordre dit le sens, le nombre de changements dit l'angle. C'est le principe des codeurs incrémentaux des machines : on compte les impulsions.",grandeurs:[{nom:"Crans",valeur:"20 par tour : 18° par cran"},{nom:"Signaux",valeur:"deux voies, CLK et DT, décalées d'un quart de période (en quadrature)"},{nom:"Résistances de tirage",valeur:"10 kΩ sur CLK et DT, sur le module ; pas sur SW"},{nom:"Bouton",valeur:"SW : à GND quand on enfonce l'axe"},{nom:"Alimentation",valeur:"3,3 à 5 V"},{nom:"Rebonds",valeur:"quelques millisecondes à chaque changement (contacts mécaniques)"}],broches:[{borne:"CLK",role:"la voie A",niveau:"numérique"},{borne:"DT",role:"la voie B, en retard ou en avance d'un quart sur CLK",niveau:"numérique"},{borne:"SW",role:"le bouton de l'axe, à GND quand on appuie (INPUT_PULLUP)",niveau:"numérique"},{borne:"+",role:"alimentation (celle des résistances de tirage)",niveau:"3,3 à 5 V"},{borne:"GND",role:"masse"}],calcul:{titre:"Des crans à l'angle et à la distance",lignes:["Un front descendant de CLK, c'est un cran. Si DT est encore à l'état haut, le sens est horaire.","α = position × 360 / 20 = 18° par cran : 5 crans, 90°.","Sur une roue de diamètre D : un cran fait π × D / 20. Pour D = 65 mm, 10,2 mm par cran."]},branchement:{carte:"uno",fils:[{de:"CLK",vers:"D2",couleur:"jaune"},{de:"DT",vers:"D3",couleur:"vert"},{de:"SW",vers:"D4",couleur:"bleu"},{de:"+",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"CLK sur D2, DT sur D3, SW sur D4, + au 5V, GND au GND."},programme:{titre:"Compter les crans, et le sens",source:`// Le codeur KY-040 : CLK sur D2, DT sur D3, SW sur D4.
const int CLK = 2;
const int DT = 3;
const int SW = 4;
int position = 0;
int avant;

void setup() {
  Serial.begin(9600);
  pinMode(CLK, INPUT);            // le module a ses r\xe9sistances de tirage
  pinMode(DT, INPUT);
  pinMode(SW, INPUT_PULLUP);      // pas celle du bouton
  avant = digitalRead(CLK);
}

void loop() {
  int clk = digitalRead(CLK);
  if (clk != avant && clk == LOW) {       // un front descendant de CLK : un cran
    if (digitalRead(DT) != clk) position++;   // DT encore haut : sens horaire
    else position--;
    Serial.print("Position : ");
    Serial.print(position);
    Serial.print(" cran(s), ");
    Serial.print(position * 18);
    Serial.println(" \xb0");
  }
  avant = clk;
  if (digitalRead(SW) == LOW) {
    position = 0;
    Serial.println("Remise \xe0 z\xe9ro");
    delay(300);
  }
}
`},essai:{reglages:[{nom:"Position du bouton",unite:"crans",min:-20,max:20,pas:1,depart:0},{nom:"L'axe",unite:"",min:0,max:1,pas:1,depart:0,etats:["relâché","enfoncé"]}],signaux:function(){let e=0,r=1,t=1,a=0,n=!1,s=[];return{regler:([r,t],i)=>{n=!!t;let l=Math.max(i,a);for(;e!==r;){let t=r>e?1:-1;for(let[e,r]of t>0?[[0,1],[0,0],[1,0],[1,1]]:[[1,0],[0,0],[0,1],[1,1]])l+=2e6,s.push({t:l,clk:e,dt:r});e+=t}a=l},tensions:(e,a)=>{for(;s.length&&s[0].t<=e;){let e=s.shift();r=e.clk,t=e.dt}return{CLK:r*a,DT:t*a,...n?{SW:0}:{}}}}},etat:([e])=>({angle:18*e})},pieges:["Compter tous les changements de CLK (montées et descentes) donne deux comptes par cran : on ne compte que les descentes.","Un delay() dans la boucle fait rater des crans quand on tourne vite : la boucle doit lire CLK sans arrêt (ou par une interruption).","SW n'a pas de résistance de tirage sur le module : INPUT_PULLUP, sinon il lit n'importe quoi.","C'est un codeur incrémental : il compte depuis le démarrage, il ne connaît pas sa position absolue (l'AS5600, si)."],sources:[{titre:"Le module KY-040 (vendeur) : codeur mécanique à 20 crans, résistances de tirage de 10 kΩ sur CLK et DT"},{titre:"Le codeur incrémental en quadrature : deux voies décalées d'un quart de période, cours d'automatisme"},E]},ina219:{titre:"Capteur de courant et de tension INA219",resume:"Il mesure le courant qui traverse un petit shunt de 0,1 Ω, et la tension du circuit, jusqu'à 26 V. La carte lit les deux en I²C et en tire la puissance. C'est la loi d'Ohm dans une puce : I = U_shunt / R_shunt. Il sert à mesurer la consommation d'un moteur ou d'un montage.",grandeurs:[{nom:"Tension du circuit (bus)",valeur:"0 à 26 V, 4 mV par point"},{nom:"Tension du shunt",valeur:"±320 mV au plus, 10 µV par point"},{nom:"Shunt du module",valeur:"0,1 Ω : ±3,2 A au plus, 0,1 mA par point"},{nom:"Convertisseur",valeur:"12 bits"},{nom:"Alimentation",valeur:"3 à 5,5 V"},{nom:"Courant",valeur:"0,7 mA (1 mA au plus)"},{nom:"Liaison",valeur:"I²C ; adresse 0x40 par défaut, 0x41, 0x44 ou 0x45 selon A0 et A1"},{nom:"Registres",valeur:"0x01 : le shunt ; 0x02 : le bus ; 0x04 : le courant (après la calibration, 0x05)"}],broches:[{borne:"VCC",role:"alimentation du module",niveau:"3 à 5,5 V"},{borne:"GND",role:"masse, commune avec le circuit mesuré"},{borne:"SCL",role:"horloge I²C"},{borne:"SDA",role:"données I²C"},{borne:"VIN-",role:"la sortie du courant mesuré, vers le récepteur"},{borne:"VIN+",role:"l'entrée du courant mesuré, depuis l'alimentation"}],calcul:{titre:"La loi d'Ohm sur le shunt",lignes:["I = U_shunt / R_shunt : 25 mV aux bornes de 0,1 Ω, c'est 250 mA.","Un point du registre du shunt vaut 10 µV, soit 10 µV / 0,1 Ω = 0,1 mA.","P = U × I : un moteur sous 12 V qui prend 250 mA consomme 3 W."]},branchement:{carte:"uno",fils:z,texte:"VCC au 5V, GND au GND, SCL et SDA sur les bornes SCL et SDA de l'Uno. Le circuit mesuré passe par VIN+ puis VIN− (en série, côté +), et son − va aussi au GND."},programme:{titre:"Tension, courant et puissance",source:`// L'INA219 en I\xb2C (0x40) : la tension du shunt de 0,1 Ω donne le courant (loi d'Ohm).
#include <Wire.h>

const int INA = 0x40;

uint16_t lireRegistre(byte registre) {
  Wire.beginTransmission(INA);
  Wire.write(registre);
  Wire.endTransmission();
  Wire.requestFrom(INA, 2);
  byte fort = Wire.read();
  byte faible = Wire.read();
  return (fort << 8) | faible;
}

void setup() {
  Serial.begin(9600);
  Wire.begin();
}

void loop() {
  int16_t brutShunt = lireRegistre(0x01);           // sign\xe9 : le courant peut s'inverser
  float ushunt = brutShunt * 0.01;                  // mV : 10 \xb5V par point
  float ubus = (lireRegistre(0x02) >> 3) * 0.004;    // V : 4 mV par point, bits 15 \xe0 3
  float i = ushunt / 0.1;                           // mA : I = U / R, R = 0,1 Ω
  Serial.print("U = ");
  Serial.print(ubus, 2);
  Serial.print(" V   I = ");
  Serial.print(i, 1);
  Serial.print(" mA   P = ");
  Serial.print(ubus * i / 1000.0, 2);
  Serial.println(" W");
  delay(500);
}
`},essai:{reglages:[{nom:"Tension du circuit mesuré",unite:"V",min:0,max:26,pas:.1,depart:12},{nom:"Courant dans le circuit",unite:"mA",min:0,max:3200,pas:10,depart:250}],i2c:{adresse:64,creer:()=>new v,regler:(e,[r,t])=>{e.bus=r,e.courant=t/1e3}}},pieges:["Il se branche en série, comme un ampèremètre : en parallèle sur l'alimentation, le shunt de 0,1 Ω fait un court-circuit.","Sans la masse commune entre le circuit mesuré et le module, la tension du bus est fausse.","Le registre du courant (0x04) reste à 0 tant que la calibration (0x05) n'est pas écrite : lire le shunt, c'est plus simple.","Au-delà de 26 V ou de 3,2 A, le module s'abîme ou sature."],sources:[{titre:"Texas Instruments, INA219 : 26 V, ±320 mV, 10 µV et 4 mV par point, les registres et la calibration",url:"https://www.ti.com/lit/ds/symlink/ina219.pdf"},{titre:"Adafruit, INA219 Current Sensor Breakout : le shunt de 0,1 Ω, ±3,2 A, les adresses",url:"https://learn.adafruit.com/adafruit-ina219-current-sensor-breakout"},$]},vl53l0x:{titre:"Capteur de distance laser VL53L0X",resume:"Un capteur à temps de vol : il envoie une impulsion de lumière infrarouge (un petit laser) et chronomètre son retour, comme le HC-SR04 avec le son, mais à la vitesse de la lumière. Il mesure jusqu'à 1,2 m environ dans son mode par défaut, sur une petite zone, et se lit en I²C avec une bibliothèque.",grandeurs:[{nom:"Portée",valeur:"jusqu'à 1,2 m dans le mode par défaut, 2 m dans le mode longue portée (cible blanche, en intérieur)"},{nom:"Émetteur",valeur:"laser infrarouge à 940 nm, de classe 1 (sans danger pour les yeux)"},{nom:"Champ de vision",valeur:"25°"},{nom:"Durée d'une mesure",valeur:"33 ms par défaut (de 20 ms, rapide, à 200 ms, précis)"},{nom:"Alimentation",valeur:"2,6 à 5,5 V sur le module (la puce : 2,6 à 3,5 V)"},{nom:"Courant",valeur:"19 mA environ pendant la mesure"},{nom:"Liaison",valeur:"I²C, adresse 0x29 ; XSHUT éteint le capteur, GPIO1 signale une mesure prête"}],broches:[{borne:"VIN",role:"alimentation",niveau:"2,6 à 5,5 V"},{borne:"GND",role:"masse"},{borne:"SCL",role:"horloge I²C"},{borne:"SDA",role:"données I²C"},{borne:"GPIO1",role:"sortie d'interruption : une mesure prête"},{borne:"XSHUT",role:"à l'état bas, éteint le capteur (pour en brancher plusieurs)"}],calcul:{titre:"Le temps de vol de la lumière",lignes:["d = c × t / 2, avec c = 3 × 10⁸ m/s : pour 1 m, l'aller-retour dure 2 / 3 × 10⁸ ≈ 6,7 ns.","Avec le son (HC-SR04), le même mètre dure 5,8 ms : un million de fois plus.","Le modèle de l'essai : la distance exacte jusqu'à 1,2 m ; au-delà, le capteur rend 8 190 (hors de portée)."]},branchement:{carte:"uno",fils:z.map(e=>"VCC"===e.de?{...e,de:"VIN"}:e),texte:"VIN au 5V, GND au GND, SCL et SDA sur les bornes SCL et SDA de l'Uno."},programme:{titre:"Mesurer une distance",bibliotheque:"VL53L0X (Pololu)",simulee:!0,source:`// Le VL53L0X en I\xb2C (0x29). Biblioth\xe8que \xab VL53L0X \xbb de Pololu.
#include <Wire.h>
#include <VL53L0X.h>

VL53L0X capteur;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  capteur.setTimeout(500);
  if (!capteur.init()) {
    Serial.println("VL53L0X absent : v\xe9rifie les fils");
    while (true) {}
  }
}

void loop() {
  int d = capteur.readRangeSingleMillimeters();   // 33 ms par mesure
  if (capteur.timeoutOccurred()) Serial.println("d\xe9lai d\xe9pass\xe9");
  else if (d >= 8190) Serial.println("hors de port\xe9e");
  else {
    Serial.print("Distance : ");
    Serial.print(d);
    Serial.println(" mm");
  }
  delay(100);
}
`},essai:{reglages:[{nom:"Distance de l'obstacle",unite:"mm",min:30,max:2e3,pas:5,depart:250}],bibliotheques:([e])=>({vl53l0x:e})},pieges:["Un petit film de protection couvre souvent ses fenêtres à la livraison : sans le retirer, les mesures sont fausses.","Hors de portée, il ne rend pas 0 mais 8 190 : à écarter dans le programme.","Une cible noire ou brillante, ou le soleil, réduisent beaucoup sa portée.","L'adresse 0x29 est la même pour tous : pour en brancher deux, on les éteint par XSHUT et on change l'adresse de l'un au démarrage."],sources:[{titre:"STMicroelectronics, VL53L0X : 940 nm, classe 1, 25°, portées des modes, durée de mesure, 0x29",url:"https://www.st.com/resource/en/datasheet/vl53l0x.pdf"},{titre:"Pololu, bibliothèque VL53L0X pour Arduino : init, readRangeSingleMillimeters, timeoutOccurred",url:"https://github.com/pololu/vl53l0x-arduino"},$]}},F={titre:"Dessin : wokwi-elements (licence MIT, © Uri Shaked)",url:"https://github.com/wokwi/wokwi-elements"},j={titre:"Dessin : Méca & Cie, d'après le modèle le plus courant (à comparer au tien)"},H={led:{titre:"LED de 5 mm",resume:"Une diode qui éclaire quand le courant la traverse dans le bon sens, de l'anode (+, la patte longue) vers la cathode (−, le méplat). Elle se branche toujours avec une résistance en série, qui fixe son courant : seule, elle grille, et la broche avec.",grandeurs:[{nom:"Tension à ses bornes",valeur:"2 V environ pour le rouge (1,8 à 2,5 V) ; 3 à 3,4 V pour le bleu et le blanc"},{nom:"Courant",valeur:"20 mA en fonctionnement normal ; 30 mA au plus en continu (rouge, L-53LID)",note:"10 mA suffisent souvent : elle brille déjà bien."},{nom:"Tension inverse",valeur:"5 V au plus"},{nom:"Couleur",valeur:"rouge : 625 nm environ"},{nom:"Repères",valeur:"la patte longue est l'anode (+) ; le méplat du boîtier est côté cathode (−)"}],broches:[{borne:"anode",role:"le + : la patte longue, côté broche de la carte"},{borne:"cathode",role:"le − : la patte courte, côté méplat, vers GND"}],calcul:{titre:"La résistance de la LED",lignes:["R = (U − U_LED) / I","Pour une LED rouge sur l'Uno, à 15 mA : R = (5 − 2) / 0,015 = 200 Ω.","On prend la valeur normalisée au-dessus : 220 Ω (rouge, rouge, marron)."]},branchement:{carte:"uno",fils:[{de:"anode",vers:"D9",couleur:"orange"},{de:"cathode",vers:"GND",couleur:"noir"}],serie:[{borne:"anode",valeur:220}],texte:"D9, une résistance de 220 Ω, l'anode (patte longue) ; la cathode au GND."},programme:{titre:"La LED clignote",source:`// La LED sur D9, avec sa r\xe9sistance de 220 Ω.
const int LED = 9;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, HIGH);
  delay(500);
  digitalWrite(LED, LOW);
  delay(500);
}
`},essai:{reglages:[]},pieges:["Sans résistance, la LED grille, et la broche peut s'abîmer.","À l'envers, elle ne s'allume pas (et ne s'abîme pas, sous 5 V) : la patte longue vers la broche.","Une LED bleue ou blanche sur une carte en 3,3 V : il reste à peine 0,1 V pour la résistance, elle brille peu.","Pour régler sa lumière, analogWrite sur une broche MLI (~ sur l'Uno), pas une tension."],sources:[{titre:"Kingbright, L-53LID (LED rouge de 5 mm) : 2 V à 20 mA, 30 mA au plus, 5 V en inverse",url:"https://www.kingbrightusa.com/images/catalog/SPEC/L-53LID.pdf"},F]},"led-rgb":{titre:"LED RGB à cathode commune",resume:"Trois LED dans un boîtier : rouge, verte et bleue, leurs cathodes reliées à la patte la plus longue. Chaque couleur a sa broche et sa résistance ; analogWrite règle chacune de 0 à 255, et l'œil mélange : rouge et vert donnent du jaune.",grandeurs:[{nom:"Tensions",valeur:"rouge 2,0 V ; vert 3,2 V ; bleu 3,2 V (à 20 mA)"},{nom:"Courant par couleur",valeur:"20 mA au plus"},{nom:"Patte commune",valeur:"la plus longue (la 2e) : la cathode, vers GND"},{nom:"Ordre des pattes",valeur:"rouge, commun, vert, bleu"}],broches:[{borne:"R",role:"l'anode du rouge"},{borne:"commun",role:"les trois cathodes, vers GND (la patte la plus longue)"},{borne:"G",role:"l'anode du vert"},{borne:"B",role:"l'anode du bleu"}],calcul:{titre:"Une résistance par couleur",lignes:["Rouge : R = (5 − 2,0) / 0,015 = 200 Ω → 220 Ω.","Vert et bleu : R = (5 − 3,2) / 0,015 = 120 Ω → 150 Ω (ou 220 Ω, un peu moins lumineux).","Une seule résistance sur le commun : les couleurs se volent le courant, le mélange est faux."]},branchement:{carte:"uno",fils:[{de:"R",vers:"D9",couleur:"rouge"},{de:"commun",vers:"GND",couleur:"noir"},{de:"G",vers:"D10",couleur:"vert"},{de:"B",vers:"D11",couleur:"bleu"}],serie:[{borne:"R",valeur:220},{borne:"G",valeur:220},{borne:"B",valeur:220}],texte:"R sur D9, G sur D10, B sur D11, chacune avec 220 Ω ; le commun (la patte longue) au GND. D9 à D11 sont des broches MLI."},programme:{titre:"Mélanger les couleurs",source:`// La LED RGB : R sur D9, G sur D10, B sur D11 (des broches MLI, marqu\xe9es ~).
void couleur(int r, int v, int b) {
  analogWrite(9, r);
  analogWrite(10, v);
  analogWrite(11, b);
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  couleur(255, 0, 0);    Serial.println("rouge");  delay(800);
  couleur(0, 255, 0);    Serial.println("vert");   delay(800);
  couleur(0, 0, 255);    Serial.println("bleu");   delay(800);
  couleur(255, 160, 0);  Serial.println("jaune");  delay(800);
  couleur(255, 0, 255);  Serial.println("magenta"); delay(800);
}
`},essai:{reglages:[]},pieges:["Anode commune ou cathode commune ? Sur une anode commune, le commun va au 5V et la couleur s'allume à l'état bas : analogWrite(9, 255 − r).","Les broches doivent être des broches MLI (~ sur l'Uno : 3, 5, 6, 9, 10, 11) : ailleurs, analogWrite ne fait que tout ou rien.","Une résistance par couleur, pas une seule sur le commun."],sources:[{titre:"SparkFun, LED RGB à cathode commune (YSL-R596CR3G4B5C-C10) : rouge 2,0 V, vert et bleu 3,2 V à 20 mA",url:"https://cdn.sparkfun.com/datasheets/Components/LED/YSL-R596CR3G4B5C-C10.pdf"},F]},ws2812:{titre:"LED adressables WS2812",resume:"Des LED RGB qui ont chacune leur petite puce : on les branche en chaîne sur un seul fil de données, et on donne une couleur à chacune. La première lit sa couleur, transmet le reste à la suivante. Une bibliothèque s'en charge.",grandeurs:[{nom:"Alimentation",valeur:"5 V (3,5 à 5,3 V)"},{nom:"Courant",valeur:"jusqu'à 60 mA par LED en blanc à fond (20 mA par couleur)"},{nom:"Couleur",valeur:"24 bits par LED : 8 pour le vert, 8 pour le rouge, 8 pour le bleu (dans cet ordre)"},{nom:"Données",valeur:"un fil, 800 kbit/s ; chaque LED renvoie la suite sur DOUT"},{nom:"Niveau des données",valeur:"l'état haut à 0,7 × Vdd au moins : 3,5 V sous 5 V",note:"Une carte en 3,3 V est juste en dessous : ça marche le plus souvent, pas toujours."}],broches:[{borne:"5V",role:"alimentation",niveau:"5 V"},{borne:"GND",role:"masse"},{borne:"DIN",role:"l'entrée des données, depuis la carte",niveau:"numérique"},{borne:"DOUT",role:"la sortie des données, vers la bande suivante",niveau:"numérique"}],calcul:{titre:"Le courant de la bande",lignes:["I = nombre de LED × 60 mA en blanc à fond : 8 LED, 480 mA.","L'USB d'un ordinateur donne 500 mA : au-delà de quelques LED, une alimentation de 5 V à part, masse commune.","À un quart de la luminosité, le courant est divisé par 4 environ."]},branchement:{carte:"uno",fils:[{de:"5V",vers:"5V",couleur:"rouge"},{de:"DIN",vers:"D6",couleur:"vert"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"5V au 5V, GND au GND, DIN sur D6 (une résistance de 300 à 500 Ω sur le fil de données est conseillée)."},programme:{titre:"Allumer les LED une à une",bibliotheque:"Adafruit NeoPixel",source:`// 8 LED WS2812 : DIN sur D6. Biblioth\xe8que \xab Adafruit NeoPixel \xbb.
#include <Adafruit_NeoPixel.h>

Adafruit_NeoPixel bande(8, 6, NEO_GRB + NEO_KHZ800);

void setup() {
  bande.begin();
  bande.setBrightness(40);   // sur 255 : moins de courant
}

void loop() {
  for (int i = 0; i < 8; i++) {
    bande.clear();
    bande.setPixelColor(i, bande.Color(0, 120, 255));
    bande.show();
    delay(150);
  }
}
`},pieges:["Les LED à fond sur l'USB : la carte redémarre, ou le port USB se coupe. setBrightness, ou une alimentation à part.","Le sens compte : les données entrent par DIN (flèche imprimée sur la bande), jamais par DOUT.","Un condensateur de 1 000 µF entre 5V et GND, à l'entrée de la bande, protège la première LED.","NEO_GRB : l'ordre des couleurs de la WS2812. Une bande qui affiche vert pour rouge n'est pas dans le bon ordre."],sources:[{titre:"Worldsemi, WS2812B : 3,5 à 5,3 V, 24 bits, 800 kbit/s, l'état haut à 0,7 Vdd",url:"https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf"},{titre:"Adafruit, NeoPixel Überguide : 60 mA par LED, le condensateur et la résistance conseillés",url:"https://learn.adafruit.com/adafruit-neopixel-uberguide"},j]},buzzer:{titre:"Buzzer",resume:"Un petit haut-parleur. Le buzzer actif a son oscillateur : alimenté, il sonne, toujours sur la même note. Le passif n'en a pas : il faut lui envoyer la note avec tone(). Les deux ont un + (la patte longue).",grandeurs:[{nom:"Alimentation",valeur:"3,5 à 5,5 V (5 V en général)"},{nom:"Courant",valeur:"30 mA au plus"},{nom:"Note (actif)",valeur:"2,3 kHz environ"},{nom:"Niveau sonore",valeur:"85 dB environ, à 10 cm"},{nom:"Reconnaître",valeur:"l'actif a le dessous fermé (résine noire) ; le passif montre son circuit"}],broches:[{borne:"+",role:"la patte longue, vers la broche"},{borne:"-",role:"vers GND"}],calcul:{titre:"La note d'un buzzer passif",lignes:["tone(8, f) envoie un signal carré de fréquence f : tone(8, 440) joue le la.","Une octave plus haut, la fréquence double : 880 Hz.","noTone(8) arrête le son."]},branchement:{carte:"uno",fils:[{de:"+",vers:"D8",couleur:"orange"},{de:"-",vers:"GND",couleur:"noir"}],texte:"Le + sur D8, le − au GND."},programme:{titre:"Un bip par seconde (buzzer actif)",source:`// Le buzzer actif : + sur D8. Aliment\xe9, il sonne.
const int BUZZER = 8;

void setup() {
  pinMode(BUZZER, OUTPUT);
}

void loop() {
  digitalWrite(BUZZER, HIGH);   // bip
  delay(200);
  digitalWrite(BUZZER, LOW);
  delay(800);
  // Un buzzer passif : tone(BUZZER, 440); delay(200); noTone(BUZZER);
}
`},essai:{reglages:[]},pieges:["Un buzzer passif branché comme un actif ne fait qu'un petit clic : il lui faut tone().","tone() sur l'Uno empêche analogWrite sur D3 et D11 pendant qu'il joue (ils partagent un minuteur).","Le + à la patte longue : à l'envers, l'actif ne sonne pas."],sources:[{titre:"Fiche d'un buzzer actif de 5 V courant (TMB12A05) : 2,3 kHz environ, 30 mA au plus, 85 dB à 10 cm"},{titre:"Arduino, référence de tone() : le minuteur partagé avec D3 et D11 sur l'Uno",url:"https://docs.arduino.cc/language-reference/en/functions/advanced-io/tone/"},F]},servomoteur:{titre:"Servomoteur (SG90)",resume:"Un petit moteur, un réducteur et une électronique qui le tient à l'angle qu'on lui donne, de 0 à 180°. La consigne est une impulsion répétée toutes les 20 ms : sa durée donne l'angle. La bibliothèque Servo l'envoie ; il ne reste qu'à écrire l'angle.",grandeurs:[{nom:"Alimentation",valeur:"4,8 à 6 V"},{nom:"Courant",valeur:"200 mA environ en mouvement ; jusqu'à 700 mA bloqué",note:"Trop pour la carte : une alimentation externe."},{nom:"Couple",valeur:"1,8 kg·cm, soit 0,18 N·m (sous 4,8 V)"},{nom:"Vitesse",valeur:"0,1 s pour 60° (sous 4,8 V)"},{nom:"Consigne",valeur:"une impulsion toutes les 20 ms (50 Hz) ; 500 µs pour 0°, 2 400 µs pour 180° (ce modèle)"},{nom:"Fils",valeur:"marron : GND ; rouge : V+ ; orange : signal"},{nom:"Masse",valeur:"9 g"}],broches:[{borne:"signal",role:"la consigne (fil orange)",niveau:"3,3 ou 5 V"},{borne:"V+",role:"l'alimentation (fil rouge), externe",niveau:"4,8 à 6 V"},{borne:"GND",role:"la masse (fil marron), commune avec la carte"}],calcul:{titre:"L'impulsion, et la force au bout du palonnier",lignes:["t = 500 + θ × (2 400 − 500) / 180 µs : pour θ = 90°, t = 1 450 µs.","Le couple de 0,18 N·m au bout d'un palonnier de 2 cm : F = C / r = 0,18 / 0,02 = 9 N.","Au double du bras (4 cm), la force est divisée par deux : 4,5 N."]},branchement:{carte:"uno",fils:[{de:"signal",vers:"D9",couleur:"orange"},{de:"GND",vers:"GND",couleur:"marron"}],texte:"Le signal (orange) sur D9, la masse (marron) au GND. Le V+ (rouge) sur une alimentation externe de 5 V, dont le − va aussi au GND de la carte."},programme:{titre:"Balayer de 0 à 180°",source:`// Le servomoteur : le signal sur D9, de 500 \xb5s (0\xb0) \xe0 2 400 \xb5s (180\xb0).
#include <Servo.h>

Servo servo;

void setup() {
  servo.attach(9, 500, 2400);
}

void loop() {
  for (int angle = 0; angle <= 180; angle += 10) {
    servo.write(angle);
    delay(150);
  }
  for (int angle = 180; angle >= 0; angle -= 10) {
    servo.write(angle);
    delay(150);
  }
}
`},essai:{reglages:[]},pieges:["Alimenté par la carte, il la fait redémarrer quand il force : une alimentation externe, et la masse commune (ton README).","Sans la masse commune, le signal n'a pas de référence : le servomoteur tremble ou ne bouge pas.","servo.attach(9) seul suppose 544 à 2 400 µs : l'angle 0 n'est pas atteint. attach(9, 500, 2400) pour ce modèle.","Ne force pas le palonnier à la main : les pignons en plastique cassent.","Sur un ESP32, la bibliothèque est ESP32Servo.h."],sources:[{titre:"TowerPro, SG90 : 4,8 V, 1,8 kg·cm, 0,1 s/60°, 20 ms, les couleurs des fils",url:"http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf"},{titre:"Arduino, bibliothèque Servo : attach(broche, min, max), 544 à 2 400 µs par défaut",url:"https://docs.arduino.cc/libraries/servo/"},F]},"moteur-cc":{titre:"Moteur à courant continu (motoréducteur « TT »)",resume:"Le motoréducteur jaune des robots : un petit moteur à courant continu et un réducteur de 1:48 dans un boîtier. La tension fixe sa vitesse, son signe fixe le sens. Il demande bien plus de courant qu'une broche n'en donne : il se commande par un pont en H (L298N).",grandeurs:[{nom:"Tension",valeur:"3 à 6 V"},{nom:"Réduction",valeur:"1:48"},{nom:"Vitesse de sortie",valeur:"200 tr/min environ sous 6 V, à vide"},{nom:"Courant",valeur:"150 mA environ en marche, jusqu'à 1 A bloqué (ordre de grandeur, à mesurer sur le tien)"},{nom:"Arbre",valeur:"double méplat, des deux côtés"}],broches:[{borne:"1",role:"une cosse du moteur"},{borne:"2",role:"l'autre cosse ; la tension inversée, il tourne dans l'autre sens"}],calcul:{titre:"La puissance à la sortie du réducteur",lignes:["ω = 2π × n / 60 : à 200 tr/min, ω ≈ 21 rad/s.","P = C × ω : avec un couple de 0,1 N·m (par exemple), P ≈ 2,1 W.","Le réducteur divise la vitesse par 48 et multiplie le couple, au rendement près."]},pieges:["Jamais sur une broche de la carte : elle donne 40 mA au plus, le moteur en demande des centaines. Un pont en H, ou un transistor et sa diode.","Au démarrage et bloqué, il demande bien plus qu'en marche : l'alimentation doit le tenir.","Un condensateur de 100 nF soudé entre ses cosses réduit les parasites qui perturbent la carte."],sources:[{titre:"Adafruit, DC Gearbox « TT Motor » : 3 à 6 V, 1:48, 200 tr/min",url:"https://www.adafruit.com/product/3777"},j]},"pont-h":{titre:"Pont en H L298N",resume:"Le module qui commande deux moteurs à courant continu dans les deux sens. Pour chaque moteur, deux entrées (IN1, IN2) choisissent le sens, et ENA règle la vitesse par MLI. Les moteurs prennent leur courant sur l'alimentation 12V, pas sur la carte.",grandeurs:[{nom:"Alimentation des moteurs",valeur:"5 à 35 V sur la borne 12V (le L298 tient jusqu'à 46 V)"},{nom:"Courant",valeur:"2 A par moteur en continu"},{nom:"Chute de tension",valeur:"environ 2 V (de 1,8 à 3,2 V sous 1 A)",note:"Un moteur de 6 V a besoin de 8 V environ."},{nom:"Logique",valeur:"5 V ; le module la fournit (régulateur 78M05) si le cavalier est en place et 12V ne dépasse pas 12 V"},{nom:"Commande",valeur:"IN1, IN2 : le sens du moteur A ; ENA : sa marche et sa vitesse (MLI). IN3, IN4, ENB : le moteur B"},{nom:"Dissipation",valeur:"25 W au plus, d'où le radiateur"}],broches:[{borne:"IN1",role:"sens du moteur A",niveau:"5 V (3,3 V suffit)"},{borne:"IN2",role:"sens du moteur A",niveau:"5 V (3,3 V suffit)"},{borne:"IN3",role:"sens du moteur B",niveau:"5 V"},{borne:"IN4",role:"sens du moteur B",niveau:"5 V"},{borne:"ENA",role:"marche et vitesse du moteur A (MLI) ; sans cavalier",niveau:"5 V"},{borne:"ENB",role:"marche et vitesse du moteur B (MLI) ; sans cavalier",niveau:"5 V"},{borne:"OUT1",role:"moteur A"},{borne:"OUT2",role:"moteur A"},{borne:"OUT3",role:"moteur B"},{borne:"OUT4",role:"moteur B"},{borne:"12V",role:"l'alimentation des moteurs",niveau:"5 à 35 V"},{borne:"GND",role:"masse, commune avec la carte"},{borne:"5V",role:"sortie 5 V du régulateur (ou entrée 5 V sans le cavalier)"}],calcul:{titre:"Le sens et la tension du moteur",lignes:["IN1 = 1, IN2 = 0 : il tourne dans un sens ; IN1 = 0, IN2 = 1 : dans l'autre ; IN1 = IN2 : il freine.","Avec ENA en MLI, de rapport α : U_moteur ≈ α × (U_12V − 2).","Sous 9 V, à α = 70 % : U ≈ 0,7 × 7 = 4,9 V."]},branchement:{carte:"uno",fils:[{de:"ENA",vers:"D10",couleur:"violet"},{de:"IN1",vers:"D8",couleur:"jaune"},{de:"IN2",vers:"D7",couleur:"vert"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"ENA sur D10 (MLI, cavalier ENA retiré), IN1 sur D8, IN2 sur D7, GND au GND. Le moteur sur OUT1 et OUT2, l'alimentation des moteurs sur 12V et GND."},programme:{titre:"Avancer, s'arrêter, reculer",source:`// Le L298N : ENA sur D10, IN1 sur D8, IN2 sur D7.
const int ENA = 10;
const int IN1 = 8;
const int IN2 = 7;

void setup() {
  Serial.begin(9600);
  pinMode(ENA, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
}

void loop() {
  Serial.println("avance \xe0 70 %");
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  analogWrite(ENA, 178);   // 178 / 255 = 70 %
  delay(2000);

  Serial.println("arr\xeat");
  analogWrite(ENA, 0);
  delay(1000);

  Serial.println("recule \xe0 70 %");
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  analogWrite(ENA, 178);
  delay(2000);

  Serial.println("arr\xeat");
  analogWrite(ENA, 0);
  delay(1000);
}
`},essai:{reglages:[],lecture:e=>{let r=e("IN1").niveau,t=e("IN2").niveau,a=e("ENA"),n=null!==a.mli?a.mli/255:a.niveau;return 0===n?"ENA à 0 : le moteur A est arrêté.":r===t?"IN1 = IN2 : le moteur A est freiné.":`Le moteur A tourne dans le sens ${r?"1 (IN1 = 1)":"2 (IN2 = 1)"}, \xe0 ${Math.round(100*n)} % de la tension.`}},pieges:["Le cavalier ENA en place force le moteur à pleine vitesse : retire-le pour régler la vitesse par MLI.","Sans la masse commune entre la carte et le module, IN1 et IN2 n'ont pas de référence.","Au-dessus de 12 V sur 12V, retire le cavalier du régulateur et donne 5 V à la borne 5V.","La chute de 2 V : un moteur de 6 V sous 6 V tourne au ralenti.","Le radiateur chauffe : n'y touche pas après un essai à fort courant."],sources:[{titre:"STMicroelectronics, L298 : 46 V, 2 A par voie, tensions de saturation, 25 W",url:"https://www.st.com/resource/en/datasheet/l298.pdf"},j]},"moteur-pas-a-pas":{titre:"Moteur pas à pas 28BYJ-48",resume:"Un moteur qui avance d'un pas à chaque impulsion, sans capteur : on sait où il est en comptant les pas. Le 28BYJ-48 a quatre bobines et un réducteur de 1/64 environ : 2 048 pas par tour en pas complets. Il se branche sur sa carte ULN2003, jamais sur la carte Arduino.",grandeurs:[{nom:"Tension",valeur:"5 V"},{nom:"Bobines",valeur:"4 phases, unipolaire, 5 fils (le rouge est le commun) ; 50 Ω par bobine"},{nom:"Courant",valeur:"100 mA environ par bobine (5 V / 50 Ω)"},{nom:"Pas",valeur:"5,625° au moteur en demi-pas ; réduction de 1/64 environ (63,68 exactement)"},{nom:"Pas par tour",valeur:"2 048 en pas complets, 4 096 en demi-pas (2 038 et 4 076 exactement)"},{nom:"Couple",valeur:"34,3 mN·m au moins (300 gf·cm)"}],broches:[{borne:"prise",role:"la prise blanche à 5 fils, sur la carte ULN2003 : bleu, rose, jaune, orange, rouge (+5 V)"}],calcul:{titre:"Du nombre de pas à l'angle et à la vitesse",lignes:["Un pas complet à la sortie : 360 / 2 048 ≈ 0,176°.","À 500 pas par seconde : 500 × 60 / 2 048 ≈ 15 tr/min, à peu près son maximum.","Pour tourner de 90° : 2 048 / 4 = 512 pas."]},pieges:["La réduction n'est pas exactement 1/64 : sur un tour, 2 048 pas dépassent un peu. Sur dix tours, ça se voit.","Trop vite (plus de 15 tr/min), il vibre et ne tourne plus : il manque des pas.","Il chauffe à l'arrêt si une bobine reste alimentée : coupe les quatre sorties quand il a fini."],sources:[{titre:"Fiche du 28BYJ-48 (5 V) : 4 phases, 5,625°/64, 50 Ω, 300 gf·cm",url:"https://www.mouser.com/datasheet/2/758/stepd-01-data-sheet-1143075.pdf"},j]},"driver-pas-a-pas":{titre:"Carte de commande ULN2003",resume:"La carte qui alimente les quatre bobines du 28BYJ-48 : la puce ULN2003 contient sept transistors (Darlington) qui laissent passer le courant que la carte Arduino ne peut pas donner. Quatre LED (A à D) montrent quelle bobine est alimentée.",grandeurs:[{nom:"Puce",valeur:"ULN2003A : 7 transistors Darlington, 500 mA et 50 V chacun"},{nom:"Diodes de roue libre",valeur:"intégrées : elles protègent des surtensions des bobines"},{nom:"Entrées",valeur:"IN1 à IN4, en 5 V ou en 3,3 V"},{nom:"Alimentation du moteur",valeur:"5 V pour le 28BYJ-48 de 5 V (la carte accepte 5 à 12 V)"},{nom:"LED",valeur:"A, B, C, D : une par bobine"}],broches:[{borne:"IN1",role:"bobine A (fil bleu)",niveau:"5 ou 3,3 V"},{borne:"IN2",role:"bobine B (fil rose)",niveau:"5 ou 3,3 V"},{borne:"IN3",role:"bobine C (fil jaune)",niveau:"5 ou 3,3 V"},{borne:"IN4",role:"bobine D (fil orange)",niveau:"5 ou 3,3 V"},{borne:"+",role:"l'alimentation du moteur",niveau:"5 V"},{borne:"-",role:"masse, commune avec la carte"},{borne:"moteur",role:"la prise du 28BYJ-48"}],calcul:{titre:"La séquence des pas",lignes:["En pas complets « une phase » : A, puis B, puis C, puis D, et on recommence : 4 pas.","512 fois la séquence : 2 048 pas, un tour.","Avec 3 ms par pas : 2 048 × 3 ms ≈ 6,1 s par tour, 10 tr/min environ."]},branchement:{carte:"uno",fils:[{de:"IN1",vers:"D8",couleur:"bleu"},{de:"IN2",vers:"D9",couleur:"violet"},{de:"IN3",vers:"D10",couleur:"jaune"},{de:"IN4",vers:"D11",couleur:"orange"},{de:"-",vers:"GND",couleur:"noir"}],texte:"IN1 à IN4 sur D8 à D11, le − au GND ; le + sur une alimentation de 5 V (le 5V de l'Uno suffit pour un essai court). Le moteur dans la prise blanche."},programme:{titre:"Un tour, puis une pause",source:`// La carte ULN2003 : IN1 \xe0 IN4 sur D8 \xe0 D11. Un pas : une bobine aliment\xe9e.
void pas(int a, int b, int c, int d) {
  digitalWrite(8, a);
  digitalWrite(9, b);
  digitalWrite(10, c);
  digitalWrite(11, d);
  delay(3);
}

void setup() {
  Serial.begin(9600);
  for (int broche = 8; broche <= 11; broche++) pinMode(broche, OUTPUT);
}

void loop() {
  Serial.println("un tour : 2048 pas");
  for (int i = 0; i < 512; i++) {
    pas(1, 0, 0, 0);
    pas(0, 1, 0, 0);
    pas(0, 0, 1, 0);
    pas(0, 0, 0, 1);
  }
  pas(0, 0, 0, 0);   // plus rien d'aliment\xe9 : il ne chauffe pas
  delay(1000);
}
`},essai:{reglages:[],lecture:e=>{let r=["IN1","IN2","IN3","IN4"].filter(r=>1===e(r).niveau).map(e=>"ABCD"[Number(e[2])-1]);return r.length?`Bobine${r.length>1?"s":""} aliment\xe9e${r.length>1?"s":""} : ${r.join(", ")}.`:"Aucune bobine alimentée."}},pieges:["La bibliothèque Stepper d'Arduino attend les broches dans l'ordre IN1, IN3, IN2, IN4 : dans l'ordre naturel, le moteur vibre sans tourner.","Le + sur le 5V de l'Uno par l'USB : 200 mA pour le moteur, ça passe pour un essai, pas pour un projet.","Les LED A à D clignotent trop vite pour l'œil : ralentis (delay(200)) pour voir la séquence."],sources:[{titre:"Texas Instruments, ULN2003A : 7 Darlington, 500 mA, 50 V, diodes intégrées",url:"https://www.ti.com/lit/ds/symlink/uln2003a.pdf"},{titre:"Arduino, bibliothèque Stepper",url:"https://docs.arduino.cc/libraries/stepper/"},j]},relais:{titre:"Module relais 5 V",resume:"Un interrupteur commandé par un électroaimant : la carte alimente la bobine (par le transistor du module), le contact bascule et coupe un autre circuit, séparé de la carte. COM est le commun, NO est ouvert au repos, NC fermé au repos.",grandeurs:[{nom:"Relais",valeur:"SRD-05VDC-SL-C : bobine de 5 V"},{nom:"Courant de la bobine",valeur:"70 à 90 mA selon la version",note:"Plus que les 40 mA d'une broche : le module a son transistor."},{nom:"Contact",valeur:"10 A sous 250 V alternatif, 10 A sous 30 V continu"},{nom:"Temps",valeur:"10 ms au plus pour coller, 5 ms pour retomber"},{nom:"Commande",valeur:"IN : à l'état bas sur la plupart des modules à optocoupleur",note:"Certains modules collent à l'état haut : regarde la LED du module."},{nom:"Protection",valeur:"une diode de roue libre sur la bobine, sur le module"}],broches:[{borne:"VCC",role:"alimentation du module",niveau:"5 V"},{borne:"GND",role:"masse"},{borne:"IN",role:"la commande",niveau:"5 V (3,3 V suffit souvent)"},{borne:"COM",role:"le commun du contact"},{borne:"NO",role:"relié à COM quand le relais est collé"},{borne:"NC",role:"relié à COM au repos"}],calcul:{titre:"Pourquoi un transistor",lignes:["La bobine fait 70 Ω environ : I = 5 / 70 ≈ 71 mA.","Une broche donne 20 mA conseillés, 40 mA au plus : elle ne peut pas l'alimenter seule.","Le transistor du module laisse passer ces 71 mA ; la broche ne fournit que quelques mA."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"GND",vers:"GND",couleur:"noir"},{de:"IN",vers:"D7",couleur:"jaune"}],texte:"VCC au 5V, GND au GND, IN sur D7. Le circuit commandé passe par COM et NO."},programme:{titre:"Coller et décoller toutes les 2 s",source:`// Le module relais : IN sur D7. Sur la plupart des modules, il colle \xe0 l'\xe9tat bas.
const int RELAIS = 7;

void setup() {
  Serial.begin(9600);
  digitalWrite(RELAIS, HIGH);   // au repos d\xe8s le d\xe9marrage
  pinMode(RELAIS, OUTPUT);
}

void loop() {
  digitalWrite(RELAIS, LOW);
  Serial.println("coll\xe9 : COM reli\xe9 \xe0 NO");
  delay(2000);
  digitalWrite(RELAIS, HIGH);
  Serial.println("au repos : COM reli\xe9 \xe0 NC");
  delay(2000);
}
`},essai:{reglages:[],lecture:e=>0===e("IN").niveau?"IN à l'état bas : le relais est collé, COM est relié à NO.":"IN à l'état haut : le relais est au repos, COM est relié à NC."},pieges:["Pas de 230 V en TP : le relais commande une très basse tension (une lampe de 12 V, un moteur), jamais le secteur en classe.","Le module colle à l'état bas : digitalWrite(RELAIS, LOW) le fait coller. Le programme semble inversé.","Au démarrage, une broche en sortie est à l'état bas : le relais colle une fraction de seconde. digitalWrite(HIGH) avant pinMode.","Un moteur sur le contact fait des étincelles : le contact s'use."],sources:[{titre:"Songle, SRD-05VDC-SL-C : bobine de 5 V, 10 A 250 V~, 10 A 30 V=, temps de collage",url:"https://www.circuitbasics.com/wp-content/uploads/2015/11/SRD-05VDC-SL-C-Datasheet.pdf"},j]},lcd:{titre:"Afficheur LCD 16 × 2 (I²C)",resume:"Deux lignes de seize caractères, rétroéclairées. Le module I²C collé au dos (une puce PCF8574) réduit le câblage à quatre fils : deux pour l'alimentation, SDA et SCL. Il se commande avec une bibliothèque : on place le curseur, on écrit.",grandeurs:[{nom:"Affichage",valeur:"16 caractères × 2 lignes, de 5 × 8 points"},{nom:"Contrôleur",valeur:"HD44780 (ou compatible)"},{nom:"Interface",valeur:"I²C par une puce PCF8574 : adresse 0x27, ou 0x3F pour une PCF8574A"},{nom:"Alimentation",valeur:"5 V"},{nom:"Courant",valeur:"25 mA environ, rétroéclairage allumé"},{nom:"Réglages",valeur:"le contraste, au potentiomètre du dos ; le rétroéclairage, au cavalier"}],broches:[{borne:"GND",role:"masse"},{borne:"VCC",role:"alimentation",niveau:"5 V"},{borne:"SDA",role:"données I²C",niveau:"tirée à 5 V par le module"},{borne:"SCL",role:"horloge I²C",niveau:"tirée à 5 V par le module"}],branchement:{carte:"uno",fils:[{de:"GND",vers:"GND",couleur:"noir"},{de:"VCC",vers:"5V",couleur:"rouge"},{de:"SDA",vers:"SDA",couleur:"bleu"},{de:"SCL",vers:"SCL",couleur:"jaune"}],texte:"GND au GND, VCC au 5V, SDA et SCL sur les bornes SDA et SCL de l'Uno."},programme:{titre:"Écrire un texte et un compteur",bibliotheque:"LiquidCrystal I2C (Frank de Brabander)",source:`// L'afficheur LCD en I\xb2C, \xe0 l'adresse 0x27. Biblioth\xe8que \xab LiquidCrystal I2C \xbb.
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);   // colonne 0, ligne 0
  lcd.print("Meca et Cie");
}

void loop() {
  lcd.setCursor(0, 1);
  lcd.print(millis() / 1000);
  lcd.print(" s   ");
  delay(500);
}
`},pieges:["L'écran s'allume mais reste vide : tourne le potentiomètre du contraste, au dos.","Rien du tout : l'adresse est peut-être 0x3F. Un programme « scanner I²C » la trouve.","Pas d'accents : « é » s'affiche comme un signe étrange. Écris sans accent, ou crée le caractère.","Sur une carte en 3,3 V, le module tire SDA et SCL à 5 V : un adaptateur de niveaux, ou un module en 3,3 V."],sources:[{titre:"Hitachi, HD44780 : le contrôleur, ses caractères de 5 × 8 points",url:"https://www.sparkfun.com/datasheets/LCD/HD44780.pdf"},{titre:"Texas Instruments, PCF8574 : l'interface I²C, ses adresses",url:"https://www.ti.com/lit/ds/symlink/pcf8574.pdf"},F]},oled:{titre:"Écran OLED 0,96 pouce (I²C)",resume:"Un petit écran de 128 × 64 points, chacun allumé ou éteint, sans rétroéclairage : chaque point éclaire lui-même. Il dessine du texte, des courbes, des images. Il parle en I²C et se commande avec une bibliothèque : on dessine en mémoire, puis on envoie l'image.",grandeurs:[{nom:"Définition",valeur:"128 × 64 points, une couleur (blanc, bleu, ou jaune et bleu)"},{nom:"Contrôleur",valeur:"SSD1306"},{nom:"Liaison",valeur:"I²C, adresse 0x3C (0x3D sur certains modules)"},{nom:"Alimentation",valeur:"3,3 à 5 V (le module a son régulateur)"},{nom:"Courant",valeur:"20 mA environ, selon les points allumés"},{nom:"Mémoire",valeur:"l'image fait 128 × 64 / 8 = 1 024 octets dans la carte",note:"La moitié des 2 Ko de l'Uno."}],broches:[{borne:"GND",role:"masse"},{borne:"VCC",role:"alimentation",niveau:"3,3 à 5 V"},{borne:"SCL",role:"horloge I²C"},{borne:"SDA",role:"données I²C"}],branchement:{carte:"uno",fils:[{de:"GND",vers:"GND",couleur:"noir"},{de:"VCC",vers:"5V",couleur:"rouge"},{de:"SCL",vers:"SCL",couleur:"jaune"},{de:"SDA",vers:"SDA",couleur:"bleu"}],texte:"GND au GND, VCC au 5V, SCL et SDA sur les bornes SCL et SDA de l'Uno. Attention, l'ordre des broches change selon les modules."},programme:{titre:"Écrire en gros",bibliotheque:"Adafruit SSD1306 et Adafruit GFX",source:`// L'\xe9cran OLED en I\xb2C, \xe0 l'adresse 0x3C. Biblioth\xe8ques \xab Adafruit SSD1306 \xbb et \xab Adafruit GFX \xbb.
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 ecran(128, 64, &Wire, -1);

void setup() {
  if (!ecran.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    while (true) {}   // \xe9cran absent
  }
  ecran.clearDisplay();
  ecran.setTextSize(2);
  ecran.setTextColor(SSD1306_WHITE);
  ecran.setCursor(0, 0);
  ecran.println("Meca");
  ecran.println("et Cie");
  ecran.display();   // envoie l'image \xe0 l'\xe9cran
}

void loop() {}
`},pieges:["Rien ne s'affiche : il manque ecran.display(). On dessine en mémoire, display() envoie l'image.","Au dos, l'adresse est parfois écrite 0x78 : c'est 0x3C décalé d'un bit. Dans le programme, écris 0x3C.","L'ordre des broches change selon les modules (GND et VCC inversés) : lis la sérigraphie avant de brancher.","Sur l'Uno, l'image prend la moitié de la mémoire : un gros programme plante sans prévenir."],sources:[{titre:"Solomon Systech, SSD1306 : 128 × 64, adresses 0x3C et 0x3D",url:"https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf"},{titre:"Adafruit, Monochrome OLED Breakouts : la bibliothèque, display()",url:"https://learn.adafruit.com/monochrome-oled-breakouts"},j]},"sept-segments":{titre:"Afficheur 7 segments à cathode commune",resume:"Huit LED dans un boîtier : sept segments (a à g) qui dessinent les chiffres, et le point (DP). Sur un afficheur à cathode commune, les cathodes sont reliées au commun, à GND ; chaque segment s'allume quand sa broche passe à l'état haut, avec sa résistance.",grandeurs:[{nom:"Segments",valeur:"a à g, et le point DP"},{nom:"Tension par segment",valeur:"2 V environ (rouge)"},{nom:"Courant par segment",valeur:"20 mA au plus ; 10 à 15 mA suffisent"},{nom:"Commun",valeur:"deux broches, reliées à l'intérieur (3 et 8)"},{nom:"Référence courante",valeur:"5161AS (cathode commune) ; 5161BS : anode commune"}],broches:[{borne:"a",role:"le segment du haut"},{borne:"b",role:"en haut à droite"},{borne:"c",role:"en bas à droite"},{borne:"d",role:"le segment du bas"},{borne:"e",role:"en bas à gauche"},{borne:"f",role:"en haut à gauche"},{borne:"g",role:"le segment du milieu"},{borne:"DP",role:"le point"},{borne:"commun",role:"les cathodes, vers GND (deux broches)"}],calcul:{titre:"Une résistance par segment",lignes:["R = (5 − 2) / 0,015 = 200 Ω → 220 Ω, une par segment.","Une seule résistance sur le commun : le 1 (deux segments) brille bien plus que le 8 (sept segments).","Le chiffre 2 allume a, b, g, e et d."]},branchement:{carte:"uno",fils:[{de:"a",vers:"D2",couleur:"rouge"},{de:"b",vers:"D3",couleur:"orange"},{de:"c",vers:"D4",couleur:"jaune"},{de:"d",vers:"D5",couleur:"vert"},{de:"e",vers:"D6",couleur:"bleu"},{de:"f",vers:"D7",couleur:"violet"},{de:"g",vers:"D8",couleur:"gris"},{de:"commun",vers:"GND",couleur:"noir"}],serie:["a","b","c","d","e","f","g"].map(e=>({borne:e,valeur:220})),texte:"Les segments a à g sur D2 à D8, chacun avec 220 Ω ; un commun au GND."},programme:{titre:"Compter de 0 à 9",source:`// L'afficheur 7 segments : a \xe0 g sur D2 \xe0 D8. Un bit par segment (g f e d c b a).
const byte CHIFFRES[10] = {
  0b0111111, 0b0000110, 0b1011011, 0b1001111, 0b1100110,
  0b1101101, 0b1111101, 0b0000111, 0b1111111, 0b1101111
};

void afficher(int chiffre) {
  for (int s = 0; s < 7; s++) {
    digitalWrite(2 + s, (CHIFFRES[chiffre] >> s) & 1);
  }
}

void setup() {
  for (int broche = 2; broche <= 8; broche++) pinMode(broche, OUTPUT);
}

void loop() {
  for (int c = 0; c <= 9; c++) {
    afficher(c);
    delay(1000);
  }
}
`},essai:{reglages:[]},pieges:["Cathode commune ou anode commune : sur une anode commune, le commun va au 5V et le segment s'allume à l'état bas. Lis la référence.","Une seule résistance sur le commun : les chiffres n'ont pas tous la même luminosité.","Sept broches pour un chiffre : pour quatre chiffres, un afficheur à multiplexage (ou un module TM1637)."],sources:[{titre:"Kingbright, SC56-11 (afficheur de 14 mm à cathode commune) : brochage, 2 V, 20 mA par segment",url:"https://www.kingbrightusa.com/images/catalog/SPEC/SC56-11EWA.pdf"},F]},resistance:{titre:"Résistance",resume:"Le composant qui limite le courant, ou partage une tension (pont diviseur). Sa valeur est peinte en anneaux de couleur : deux chiffres, un multiplicateur, une tolérance. Celles des platines d'essai dissipent 1/4 W au plus.",grandeurs:[{nom:"Puissance",valeur:"1/4 W (0,25 W) au plus"},{nom:"Tolérance",valeur:"±5 % (anneau or) ; ±1 % (marron) pour les résistances à couche métallique"},{nom:"Valeurs",valeur:"les séries normalisées : E12 (10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82) ou E24"},{nom:"Code des couleurs",valeur:"noir 0, marron 1, rouge 2, orange 3, jaune 4, vert 5, bleu 6, violet 7, gris 8, blanc 9"}],broches:[{borne:"1",role:"une patte (pas de sens)"},{borne:"2",role:"l'autre patte"}],calcul:{titre:"Lire les anneaux, vérifier la puissance",lignes:["Rouge, rouge, marron, or : 2, 2, × 10, ±5 % : 220 Ω ±5 %.","Marron, noir, orange : 1, 0, × 1 000 : 10 kΩ.","P = U² / R : 5 V aux bornes de 220 Ω donnent 0,11 W, sous les 0,25 W."]},pieges:["Les anneaux se lisent depuis le côté opposé à l'anneau or ou argent.","Une résistance trop petite chauffe : vérifie P = U² / R avant de la mettre aux bornes d'une alimentation.","220 Ω et 2,2 kΩ se ressemblent (rouge, rouge, marron ou rouge, rouge, rouge) : l'ohmmètre tranche."],sources:[{titre:"IEC 60062 : le code des couleurs ; IEC 60063 : les séries E12 et E24"},F]},alimentation:{titre:"Alimentation externe",resume:"Ce qui donne l'énergie aux composants gourmands (moteurs, servomoteurs, bandes de LED) sans passer par la carte : une alimentation de laboratoire, un bloc secteur, des piles. La règle d'or : son − relié au GND de la carte, la masse commune.",grandeurs:[{nom:"Tension",valeur:"réglée dans l'atelier (5 V par défaut)"},{nom:"Courant",valeur:"celui que demandent les composants, avec de la marge"},{nom:"Exemples",valeur:"alimentation de laboratoire (tension et courant limités) ; bloc USB de 5 V, 2 A ; 4 piles AA, 6 V"},{nom:"Masse",valeur:"le − relié au GND de la carte"}],broches:[{borne:"+",role:"la borne rouge, vers les composants à alimenter"},{borne:"-",role:"la borne noire, reliée au GND de la carte"}],calcul:{titre:"Choisir son alimentation",lignes:["I = la somme des courants : un servomoteur (700 mA bloqué) et 8 LED WS2812 (480 mA) : 1,2 A au moins.","Une alimentation de laboratoire limite son courant : règle la limite un peu au-dessus, elle protège le montage."]},branchement:{carte:"uno",fils:[{de:"-",vers:"GND",couleur:"noir"}],texte:"Le − au GND de la carte (la masse commune) ; le + seulement vers les composants qu'elle alimente."},pieges:["Sans la masse commune, les signaux de la carte n'ont pas de référence pour le composant : rien ne marche, ou mal.","Le + de l'alimentation externe ne va jamais sur une broche de la carte, ni sur son 5V quand l'USB est branché.","Une tension au-dessus de ce que demande le composant l'abîme : 5 V pour un servomoteur, pas 12 V."],sources:[{titre:"Le règlement de sécurité de ta salle : très basse tension seulement en TP"},j]},platine:{titre:"Platine d'essai",resume:"La plaque à trous où l'on monte un circuit sans soudure. Sous les trous, des lamelles relient les trous a à e d'une même colonne, et f à j ; la rigole du milieu les sépare. Les lignes rouges et bleues des bords amènent le + et le − sur toute la longueur.",grandeurs:[{nom:"Demi-platine",valeur:"400 points : 30 colonnes de 10 trous, et 4 lignes d'alimentation"},{nom:"Platine pleine",valeur:"830 points : 63 colonnes de 10 trous, et 4 lignes d'alimentation"},{nom:"Pas",valeur:"2,54 mm (un dixième de pouce), celui des broches"},{nom:"Liaisons",valeur:"a à e reliés dans une colonne ; f à j aussi ; une ligne + ou − sur sa longueur"},{nom:"Fils",valeur:"fils rigides ou fils Dupont, de 0,3 à 0,8 mm de diamètre"}],broches:[{borne:"a1 à j30",role:"les trous : a à e reliés par colonne, f à j aussi"},{borne:"+haut",role:"ligne d'alimentation +, en haut"},{borne:"-haut",role:"ligne d'alimentation −, en haut"},{borne:"+bas",role:"ligne d'alimentation +, en bas"},{borne:"-bas",role:"ligne d'alimentation −, en bas"}],pieges:["Les deux pattes d'un composant dans la même colonne (a à e) sont court-circuitées : il ne sert à rien.","Sur certaines grandes platines, les lignes d'alimentation sont coupées au milieu : un pont de fil les relie.","Un bouton ou une puce se pose à cheval sur la rigole du milieu.","Les lignes du haut et du bas ne sont pas reliées entre elles : deux fils (+ et −) les relient."],sources:[{titre:"Les platines de 400 et 830 points du commerce : 2,54 mm, liaisons par colonnes et par lignes"},j]}};var W=e.i(77881);function _(e,r,t,a,n,s=0){if(t<=0||n<=a)return[];let i=a=>2*(e+t*(a-r)/1e9)-s,l=[];for(let o=Math.floor(i(a))+1;o<=Math.floor(i(n))&&l.length<2e5;o+=1){let a=r+((o+s)/2-e)/t*1e9;l.push({t:a,niveau:+((o%2+2)%2==0)})}return l}let X=`// Mesurer une distance avec le HC-SR04 : Trig sur D9, Echo sur D10.
const int TRIG = 9;
const int ECHO = 10;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}

void loop() {
  // Une impulsion de 10 \xb5s sur Trig d\xe9clenche la mesure.
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  // Echo reste \xe0 l'\xe9tat haut le temps de l'aller-retour (\xb5s).
  unsigned long duree = pulseIn(ECHO, HIGH);
  float distance = duree / 58.0;   // formule du fabricant : \xb5s / 58 = cm

  Serial.print("Distance : ");
  Serial.print(distance, 1);
  Serial.println(" cm");
  delay(100);   // plus de 60 ms entre deux mesures
}
`,K={uno:{titre:"Arduino Uno R3",resume:"La carte de référence d'Arduino : un microcontrôleur ATmega328P à 16 MHz, des broches en 5 V, une prise USB pour téléverser et alimenter. Robuste et très documentée, c'est la carte des premiers montages ; ses connecteurs sont devenus un standard (les cartes d'extension, l'UNO Q).",grandeurs:[{nom:"Microcontrôleur",valeur:"ATmega328P (AVR, 8 bits), 16 MHz"},{nom:"Mémoire du programme",valeur:"32 Ko de flash, dont 0,5 Ko pour le chargeur de démarrage"},{nom:"Mémoire des variables",valeur:"2 Ko de SRAM",note:"Un tableau de 1 000 int (2 octets chacun) la remplit."},{nom:"Mémoire qui reste hors tension",valeur:"1 Ko d'EEPROM"},{nom:"Tension des broches",valeur:"5 V"},{nom:"Alimentation",valeur:"par l'USB (5 V), ou 7 à 12 V sur la prise jack ou VIN",note:"6 à 20 V au plus ; sous 7 V, le 5 V baisse ; au-dessus de 12 V, le régulateur chauffe."},{nom:"Courant par broche",valeur:"20 mA conseillés, 40 mA au plus",note:"40 mA est une valeur limite : au-delà, la broche s'abîme."},{nom:"Courant de toutes les broches",valeur:"200 mA au plus"},{nom:"Broches numériques",valeur:"14 (D0 à D13), dont 6 en MLI : 3, 5, 6, 9, 10, 11 (marquées ~)"},{nom:"Entrées analogiques",valeur:"6 (A0 à A5), sur 10 bits : 0 à 1 023 pour 0 à 5 V",note:"Un point vaut 5 / 1 024 ≈ 4,9 mV."},{nom:"Liaisons",valeur:"série : D0 (RX), D1 (TX) ; I²C : A4 (SDA), A5 (SCL) ; SPI : D10 à D13"},{nom:"Interruptions externes",valeur:"D2 et D3"},{nom:"LED",valeur:"L sur D13 (LED_BUILTIN) ; ON ; TX et RX (la liaison USB)"},{nom:"Dimensions",valeur:"68,6 × 53,4 mm, 25 g"}],broches:[{borne:"D0",role:"RX : réception de la liaison série (téléversement, moniteur)",niveau:"5 V"},{borne:"D1",role:"TX : émission de la liaison série",niveau:"5 V"},{borne:"D2",role:"numérique ; interruption externe 0",niveau:"5 V"},{borne:"D3",role:"numérique ; MLI ; interruption externe 1",niveau:"5 V"},{borne:"D4",role:"numérique",niveau:"5 V"},{borne:"D5",role:"numérique ; MLI",niveau:"5 V"},{borne:"D6",role:"numérique ; MLI",niveau:"5 V"},{borne:"D7",role:"numérique",niveau:"5 V"},{borne:"D8",role:"numérique",niveau:"5 V"},{borne:"D9",role:"numérique ; MLI",niveau:"5 V"},{borne:"D10",role:"numérique ; MLI ; SS (SPI)",niveau:"5 V"},{borne:"D11",role:"numérique ; MLI ; MOSI (SPI)",niveau:"5 V"},{borne:"D12",role:"numérique ; MISO (SPI)",niveau:"5 V"},{borne:"D13",role:"numérique ; SCK (SPI) ; LED L",niveau:"5 V"},{borne:"A0 à A3",role:"entrées analogiques (10 bits), ou numériques 14 à 17",niveau:"0 à 5 V"},{borne:"A4",role:"entrée analogique ; SDA (I²C), reliée à la borne SDA",niveau:"0 à 5 V"},{borne:"A5",role:"entrée analogique ; SCL (I²C), reliée à la borne SCL",niveau:"0 à 5 V"},{borne:"AREF",role:"référence du convertisseur analogique (analogReference(EXTERNAL))"},{borne:"IOREF",role:"donne la tension des broches (5 V) aux cartes d'extension"},{borne:"RESET",role:"remet la carte à zéro quand on la met à l'état bas"},{borne:"3V3",role:"sortie 3,3 V, 50 mA au plus"},{borne:"5V",role:"sortie 5 V (ou entrée, si la carte n'a ni USB ni jack)"},{borne:"GND",role:"masse, 0 V (trois bornes, reliées)"},{borne:"VIN",role:"entrée 7 à 12 V (celle de la prise jack)"}],calcul:{titre:"La résistance d'une LED sur une broche",lignes:["R = (U − U_LED) / I","Pour une LED rouge : R = (5 − 2) / 0,015 = 200 Ω","On prend la valeur normalisée au-dessus : 220 Ω (rouge, rouge, marron)."]},branchement:{carte:"uno",fils:[],texte:"La LED L est déjà sur la carte, reliée à D13 : le programme Blink la fait clignoter sans aucun fil."},programme:{titre:"Blink : la LED L clignote",source:`// La LED L de la carte clignote : allum\xe9e 1 s, \xe9teinte 1 s.
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);   // LED_BUILTIN : la broche 13
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
`},pieges:["D0 et D1 servent au téléversement : un montage branché dessus peut l'empêcher.","Jamais de moteur, de servomoteur ou de relais nu sur une broche : 20 mA conseillés, 40 mA au plus.","Une entrée non branchée est « en l'air » : elle lit n'importe quoi. INPUT_PULLUP, ou une résistance de tirage de 10 kΩ.","Un int fait 16 bits sur l'Uno : 1000 * 60 donne −5 536. Le simulateur fait comme la carte, et le signale.","analogRead donne un nombre de 0 à 1 023, pas des volts : U ≈ valeur × 5 / 1 023, comme dans ton banc thermique.","Sur l'Uno, A6 et A7 n'existent pas (ils sont sur la Nano)."],sources:[{titre:"Arduino, UNO R3, manuel A000066 (2024) : mémoires, tensions d'entrée (VIN 6 à 20 V au plus, USB 5,5 V au plus)",url:"https://docs.arduino.cc/resources/datasheets/A000066-datasheet.pdf"},{titre:"Arduino, page de l'UNO R3 : 14 broches numériques dont 6 MLI, 6 entrées analogiques, 1 Ko d'EEPROM",url:"https://docs.arduino.cc/hardware/uno-rev3/"},{titre:"Microchip, fiche technique de l'ATmega328P : valeurs limites (40 mA par broche, 200 mA en tout)",url:"https://www.microchip.com/en-us/product/atmega328p"},{titre:"Cœur Arduino AVR 1.8.7 de ton poste, variants/standard/pins_arduino.h : A0 = 14, SDA = 18, SCL = 19, SS = 10, MOSI = 11, MISO = 12, SCK = 13, LED_BUILTIN = 13"},{titre:"Dessin : wokwi-elements (licence MIT, © Uri Shaked)",url:"https://github.com/wokwi/wokwi-elements"}]},"hc-sr04":{titre:"Capteur de distance à ultrasons HC-SR04",resume:"Il envoie une salve d'ultrasons à 40 kHz et attend l'écho renvoyé par l'obstacle. La durée de l'aller-retour donne la distance, de 2 cm à 4 m. C'est la mesure de distance la plus courante au lycée : simple à brancher, et le calcul est celui de la physique, d = c × t / 2.",grandeurs:[{nom:"Alimentation",valeur:"5 V continu"},{nom:"Courant",valeur:"15 mA"},{nom:"Ultrasons",valeur:"40 kHz, une salve de 8 périodes"},{nom:"Étendue de mesure",valeur:"2 cm à 4 m"},{nom:"Précision",valeur:"3 mm (fabricant)",note:"Sur un obstacle plan et lisse d'au moins 0,5 m²."},{nom:"Angle de mesure",valeur:"15°"},{nom:"Déclenchement",valeur:"une impulsion d'au moins 10 µs sur Trig"},{nom:"Réponse",valeur:"Echo à l'état haut pendant l'aller-retour des ultrasons, en 5 V"},{nom:"Cadence",valeur:"une mesure toutes les 60 ms au plus vite"},{nom:"Dimensions",valeur:"45 × 20 × 15 mm"}],broches:[{borne:"VCC",role:"alimentation",niveau:"5 V"},{borne:"Trig",role:"entrée : l'impulsion qui déclenche la mesure",niveau:"5 V (3,3 V suffit)"},{borne:"Echo",role:"sortie : à l'état haut pendant l'aller-retour",niveau:"5 V"},{borne:"GND",role:"masse, 0 V"}],calcul:{titre:"De la durée de l'écho à la distance",lignes:["Les ultrasons font l'aller et le retour : d = c × t / 2.","À 20 °C, c = 343 m/s : 1 cm d'aller-retour prend 2 × 0,01 / 343 = 58,3 µs.","D'où la formule du fabricant : d (cm) = t (µs) / 58, qui suppose c = 345 m/s.","La vitesse du son suit la température : c ≈ 331,3 + 0,606 θ (θ en °C)."]},branchement:{carte:"uno",fils:[{de:"VCC",vers:"5V",couleur:"rouge"},{de:"Trig",vers:"D9",couleur:"jaune"},{de:"Echo",vers:"D10",couleur:"vert"},{de:"GND",vers:"GND",couleur:"noir"}],texte:"VCC au 5V, GND au GND, Trig sur D9, Echo sur D10. Branche GND en premier (conseil du fabricant)."},programme:{titre:"Afficher la distance au moniteur série",source:X},pieges:["Echo sort en 5 V : sur une carte en 3,3 V (ESP32, UNO Q), un pont diviseur (1 kΩ et 2 kΩ) sur Echo, ou un module en 3,3 V.","Sans impulsion sur Trig, rien ne revient : pulseIn attend 1 s, puis rend 0. La distance affichée vaut alors 0.","Deux mesures à moins de 60 ms d'écart : l'écho de la première fausse la seconde.","Un obstacle mou (un pull), petit ou incliné renvoie mal les ultrasons : la mesure est fausse, ou absente.","La formule µs / 58 suppose 345 m/s : à 20 °C (343 m/s), la distance est surestimée de 0,5 %. Un bon sujet de physique.","La fiche du fabricant écrit « Working Frequency 40Hz » : il faut lire 40 kHz, la fréquence des ultrasons."],sources:[{titre:"ElecFreaks, Ultrasonic Ranging Module HC-SR04 (fiche technique)",url:"https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf"},{titre:"Dessin : wokwi-elements (licence MIT, © Uri Shaked)",url:"https://github.com/wokwi/wokwi-elements"}]},...f,...A,...R,"usb-pc":{titre:"Câble USB du PC",resume:"La source de tous les premiers montages : le câble qui relie la carte à l'ordinateur la programme (le téléversement) et l'alimente en même temps, en 5 V. Le port du PC ne donne qu'un courant limité : assez pour la carte, des LED et des capteurs, pas pour un moteur.",grandeurs:[{nom:"Tension",valeur:"5 V (de 4,75 à 5,25 V au port)"},{nom:"Courant au plus",valeur:"500 mA sur un port USB 2.0, 900 mA sur un port USB 3",note:"Au-delà, le PC coupe le port ; l'Uno a son propre fusible de 500 mA."},{nom:"Données",valeur:"le téléversement et le moniteur série passent par le même câble"},{nom:"Fiches",valeur:"USB-A côté PC ; côté carte, USB-B (Uno), mini-USB (Nano), micro-USB ou USB-C (ESP32)"}],broches:[{borne:"fiche",role:"la fiche du câble : dans la prise USB de la carte"}],calcul:{titre:"Ce que la carte peut tirer du port",lignes:["Un port USB 2.0 donne 500 mA au plus.","Une Uno (45 mA), un HC-SR04 (15 mA) et trois LED (3 × 15 mA) : 45 + 15 + 45 = 105 mA. Il reste de la marge.","Un servomoteur qui force demande jusqu'à 700 mA : c'est plus que le port. La carte redémarre, ou le PC coupe le port."]},branchement:{carte:"uno",fils:[{de:"fiche",vers:"prise USB",couleur:"noir"}],texte:"La fiche USB-B dans la prise USB de l'Uno, l'autre bout dans le PC."},pieges:["Un câble « de charge seulement » n'a pas les fils des données : la carte s'allume, mais le PC ne la voit pas (pas de port dans l'Arduino IDE).","Un hub USB sans alimentation partage ses 500 mA entre tous ses ports.","Un moteur ou un servomoteur sur le 5V de la carte fait chuter la tension du port : la carte redémarre sans prévenir.","Un câble long et fin fait perdre plusieurs dixièmes de volt : la carte reçoit moins de 5 V."],sources:[{titre:"USB Implementers Forum, Universal Serial Bus Specification 2.0, §7.2.1 : 100 mA par unité de charge, 5 unités au plus (500 mA) ; 4,75 à 5,25 V au port"},{titre:"USB Implementers Forum, USB 3.2 Specification : 150 mA par unité de charge, 6 unités au plus (900 mA)"},{titre:"Arduino, UNO R3 : un polyfusible réarmable protège le port USB du PC, il coupe au-delà de 500 mA",url:"https://docs.arduino.cc/hardware/uno-rev3/"},N]},"bloc-usb":{titre:"Bloc secteur USB (chargeur)",resume:"Un chargeur de téléphone : il transforme le 230 V du secteur en 5 V sur une prise USB. Il alimente la carte comme le PC, sans téléverser, et donne souvent plus de courant (1 à 3 A). C'est la source d'un montage qui reste branché, au mur.",grandeurs:[{nom:"Entrée",valeur:"230 V alternatif, le secteur"},{nom:"Sortie",valeur:"5 V continu"},{nom:"Courant",valeur:"celui écrit dessus : 1 A, 2 A, jusqu'à 3 A en USB-C",note:"Un chargeur USB-C rapide donne 5 V tant que la carte ne demande pas plus."},{nom:"Puissance",valeur:"P = U × I : 5 V × 2 A = 10 W"}],broches:[{borne:"fiche",role:"la fiche USB : dans la prise USB de la carte"}],calcul:{titre:"La puissance que donne le bloc",lignes:["P = U × I.","Un bloc de 5 V et 2 A : P = 5 × 2 = 10 W.","Une Uno seule consomme P = 5 × 0,045 ≈ 0,23 W : le bloc est très large."]},branchement:{carte:"uno",fils:[{de:"fiche",vers:"prise USB",couleur:"noir"}],texte:"Le câble du bloc dans la prise USB de l'Uno, le bloc dans une prise de courant."},pieges:["Il alimente, il ne programme pas : pour téléverser, il faut le câble du PC.","Un chargeur très bon marché donne un 5 V qui ondule : les mesures analogiques en souffrent.","Le courant écrit sur le bloc est ce qu'il peut donner, pas ce qu'il donne : la carte ne prend que ce dont elle a besoin."],sources:[{titre:"USB Implementers Forum, Battery Charging Specification 1.2 : un chargeur dédié (DCP) donne jusqu'à 1,5 A sous 5 V"},{titre:"USB Implementers Forum, USB Type-C Specification : 5 V, et 1,5 A ou 3 A annoncés par la prise"},N]},"batterie-usb":{titre:"Batterie externe USB",resume:"La batterie de téléphone : des cellules lithium et un convertisseur qui donne 5 V sur une prise USB. Elle rend le montage autonome (un robot, une mesure dehors). Sa capacité est écrite pour ses cellules à 3,7 V : à 5 V, il en reste environ les deux tiers.",grandeurs:[{nom:"Sortie",valeur:"5 V, 1 à 2,1 A le plus souvent"},{nom:"Capacité écrite",valeur:"celle de ses cellules, à 3,6 ou 3,7 V : 10 000 mAh par exemple"},{nom:"Capacité à 5 V",valeur:"environ capacité × 3,7 / 5 × 0,85",note:"0,85 : le rendement du convertisseur, de 80 à 90 % selon le modèle."},{nom:"Coupure automatique",valeur:"beaucoup se coupent quand on tire trop peu de courant, souvent sous 50 à 100 mA",note:"La valeur dépend du modèle : à mesurer sur la tienne."}],broches:[{borne:"fiche",role:"la fiche USB : dans la prise USB de la carte"}],calcul:{titre:"L'autonomie d'une Uno sur une batterie de 10 000 mAh",lignes:["À 5 V : 10 000 × 3,7 / 5 × 0,85 ≈ 6 300 mAh.","Une Uno seule consomme environ 45 mA : 6 300 / 45 ≈ 140 h, presque six jours.","Mais 45 mA, c'est peut-être sous le seuil de coupure de la batterie : elle peut s'éteindre au bout de 30 s."]},branchement:{carte:"uno",fils:[{de:"fiche",vers:"prise USB",couleur:"noir"}],texte:"Le câble de la batterie dans la prise USB de l'Uno."},pieges:["La coupure automatique : une carte qui consomme peu (une ESP32 en veille, une Uno seule) voit sa batterie s'éteindre toute seule. Certains modèles ont un mode « faible courant ».","La capacité écrite n'est pas celle qu'on a à 5 V : compte environ les deux tiers.","Elle se recharge par son autre prise : pas en même temps qu'elle alimente, sur beaucoup de modèles."],sources:[{titre:"Batteries externes courantes : capacité donnée pour leurs cellules lithium (3,6 ou 3,7 V), rendement de la conversion vers 5 V de 80 à 90 %, coupure sous un faible courant (valeur selon le modèle)"},U,N]},"bloc-jack":{titre:"Bloc secteur à fiche jack",resume:"Le bloc qui se branche dans la prise jack de l'Uno : 9 V ou 12 V, + au centre de la fiche. La carte abaisse la tension à 5 V avec son régulateur linéaire, qui transforme la différence en chaleur : à 12 V, il chauffe vite.",grandeurs:[{nom:"Tension",valeur:"9 V ou 12 V continu ; l'Uno accepte 7 à 12 V (6 à 20 V au plus)"},{nom:"Fiche",valeur:"jack 5,5 × 2,1 mm, + au centre"},{nom:"Courant",valeur:"1 A le plus souvent"},{nom:"Chaleur du régulateur",valeur:"P = (U − 5 V) × I",note:"Au-delà de 1 W environ, le régulateur de l'Uno se coupe pour ne pas griller."}],broches:[{borne:"fiche",role:"la fiche jack : dans la prise jack de l'Uno"}],calcul:{titre:"Ce que chauffe le régulateur de l'Uno",lignes:["Le régulateur garde 5 V et dissipe le reste : P = (U − 5) × I.","Sous 9 V, avec 100 mA : P = (9 − 5) × 0,1 = 0,4 W. Il est tiède.","Sous 12 V, avec 200 mA : P = (12 − 5) × 0,2 = 1,4 W. Il est brûlant, et il peut se couper."]},branchement:{carte:"uno",fils:[{de:"fiche",vers:"prise jack",couleur:"noir"}],texte:"La fiche jack dans la prise jack de l'Uno : le 9 V arrive aussi sur VIN."},pieges:["Un bloc à « − au centre » existe : la diode de l'Uno protège la carte, mais elle ne marche pas. Regarde le symbole de polarité sur le bloc.","Un bloc non régulé donne plus que sa tension à vide : un « 9 V » peut mesurer 12 V sans charge.","Sous 7 V, le régulateur ne donne plus 5 V : la carte redémarre ou fait n'importe quoi.","Seule l'Uno a une prise jack : les autres cartes se branchent sur VIN ou sur 5V."],sources:[q,{titre:"onsemi, NCP1117 : le régulateur 5 V de l'Uno, 1 A, une chute de 1,1 V environ à 800 mA",url:"https://www.onsemi.com/pdf/datasheet/ncp1117-d.pdf"},N]},"pile-9v":{titre:"Pile 9 V (6LR61)",resume:"La pile rectangulaire, avec son coupleur à pressions : à fiche jack pour la prise de l'Uno, ou à deux fils pour VIN. Elle rend la carte autonome quelques heures. Elle a peu de capacité et ne tient pas un fort courant : jamais pour un moteur.",grandeurs:[{nom:"Tension",valeur:"9 V neuve, elle baisse en se vidant ; vide vers 6 V pour une Uno (sous 7 V, plus de 5 V)"},{nom:"Capacité",valeur:"environ 500 mAh",note:"De l'ordre de 600 mAh à 25 mA (fiche Energizer 522), bien moins à fort courant."},{nom:"Énergie",valeur:"E = U × Q ≈ 9 × 0,5 = 4,5 Wh"},{nom:"Coupleur",valeur:"à fiche jack (+ au centre), ou à deux fils (rouge +, noir −)"}],broches:[{borne:"fiche",role:"avec le coupleur à jack : dans la prise jack de l'Uno"},{borne:"+",role:"avec le coupleur à fils : le fil rouge, sur VIN"},{borne:"-",role:"avec le coupleur à fils : le fil noir, sur GND"}],calcul:{titre:"L'autonomie : Q / I",lignes:["Une Uno seule (45 mA) : 500 / 45 ≈ 11 h.","La même avec un HC-SR04 et trois LED (105 mA) : 500 / 105 ≈ 5 h.","Avec un servomoteur (200 mA en mouvement) : moins de 2 h, et la tension s'effondre dès qu'il force."]},branchement:{carte:"uno",fils:[{de:"fiche",vers:"prise jack",couleur:"noir"}],texte:"Le coupleur à fiche jack dans la prise jack de l'Uno (avec le coupleur à fils : rouge sur VIN, noir sur GND)."},pieges:["Le régulateur de l'Uno gaspille 4 V sur 9 : près de la moitié de la pile part en chaleur.","Elle ne tient pas un moteur : sa résistance interne fait chuter la tension sous le courant.","Les deux pressions du coupleur se branchent dans un seul sens ; à l'envers sur VIN, la carte grille."],sources:[{titre:"Energizer, fiche technique de la pile 522 (6LR61) : 9 V, capacité de l'ordre de 600 mAh à 25 mA jusqu'à 4,8 V",url:"https://data.energizer.com/pdfs/522.pdf"},q,N]},"piles-aa":{titre:"Coupleur de piles AA",resume:"Un boîtier de 4 ou 6 piles AA en série, avec ses deux fils. Les tensions s'additionnent (1,5 V par pile alcaline) : 4 piles font 6 V, 6 piles 9 V. Bien plus de capacité qu'une pile 9 V : c'est la source des robots et des montages qui tournent longtemps.",grandeurs:[{nom:"Tension",valeur:"1,5 V par pile alcaline, en série : 6 V (4 piles), 9 V (6 piles)",note:"1,2 V par pile rechargeable NiMH : 4,8 V et 7,2 V."},{nom:"Capacité",valeur:"environ 2 500 mAh, celle d'une pile (en série, les capacités ne s'ajoutent pas)"},{nom:"Énergie",valeur:"E = U × Q : 6 × 2,5 = 15 Wh pour 4 piles, trois fois une pile 9 V"},{nom:"Où le brancher",valeur:"6 piles (9 V) sur VIN ; 4 piles (6 V) : trop peu pour VIN de l'Uno (7 V), trop pour le 5V"}],broches:[{borne:"+",role:"le fil rouge : VIN (6 piles), ou le + des moteurs"},{borne:"-",role:"le fil noir : GND"}],calcul:{titre:"En série, les tensions s'additionnent",lignes:["U = n × 1,5 V : 4 piles, 6 V ; 6 piles, 9 V.","Q reste celle d'une pile : 2 500 mAh.","Une Uno seule sur 6 piles : 2 500 / 45 ≈ 55 h, plus de deux jours."]},branchement:{carte:"uno",fils:[{de:"+",vers:"VIN",couleur:"rouge"},{de:"-",vers:"GND",couleur:"noir"}],texte:"Avec 6 piles : le rouge sur VIN, le noir sur GND."},pieges:["4 piles font 6 V neuves, 4,4 V usées : sur VIN, l'Uno n'a plus ses 5 V ; sur 5V, c'est trop (et 6,4 V neuves grillent une carte en 5 V seulement).","Une pile mise à l'envers dans le boîtier retranche sa tension au lieu de l'ajouter.","Pour des moteurs, c'est bien : mais leur − va au GND de la carte (la masse commune)."],sources:[{titre:"Energizer, fiche technique de la pile E91 (LR6, AA) : 1,5 V, de 2 000 à 3 000 mAh selon le courant",url:"https://data.energizer.com/pdfs/e91.pdf"},q,N]},"batterie-lithium":{titre:"Batterie lithium 3,7 V (LiPo, 18650)",resume:"Un élément lithium : en sachet plat (LiPo, avec sa prise JST) ou en cylindre 18650. Léger et rechargeable, il donne 3,7 V en moyenne. C'est la batterie des cartes qui ont leur chargeur (le Feather HUZZAH32, la XIAO) ; trop peu pour VIN d'une Uno.",grandeurs:[{nom:"Tension",valeur:"3,7 V en moyenne ; 4,2 V chargée ; vide vers 3,0 V"},{nom:"Capacité",valeur:"de 100 mAh (petite LiPo) à 3 500 mAh (18650)"},{nom:"Énergie",valeur:"E = U × Q : 3,7 V × 1 Ah = 3,7 Wh"},{nom:"Prise",valeur:"JST-PH 2 broches (LiPo) ; un support à deux fils (18650)",note:"Le sens du + dans la prise JST change d'un fabricant à l'autre : vérifie avant de brancher."}],broches:[{borne:"+",role:"le fil rouge : BAT du Feather (ou l'entrée d'un chargeur, d'un élévateur 5 V)"},{borne:"-",role:"le fil noir : GND"}],calcul:{titre:"L'autonomie d'un Feather HUZZAH32",lignes:["Une LiPo de 1 000 mAh, une carte qui consomme 50 mA (sans Wi-Fi) : 1 000 / 50 = 20 h.","En Wi-Fi, 120 mA en moyenne : 1 000 / 120 ≈ 8 h.","En veille profonde, quelques dizaines de µA : des semaines."]},branchement:{carte:"feather-esp32",fils:[{de:"+",vers:"BAT",couleur:"rouge"},{de:"-",vers:"GND",couleur:"noir"}],texte:"Dans la prise JST du Feather : le + sur BAT, le − sur GND. L'USB la recharge."},pieges:["Jamais en court-circuit, jamais percée : elle chauffe, elle peut prendre feu.","Elle se recharge avec un chargeur fait pour elle (celui du Feather, un module TP4056), pas en direct sur un 5 V.","3,7 V, c'est trop peu pour VIN de l'Uno, et pour le 5V d'une ESP32 (son régulateur a besoin de plus de 3,3 V + sa chute).","Vidée sous 3,0 V, elle s'abîme : une batterie protégée coupe avant."],sources:[U,{titre:"Adafruit, HUZZAH32 ESP32 Feather : chargeur de batterie lithium intégré, prise JST",url:"https://learn.adafruit.com/adafruit-huzzah32-esp32-feather"},N]},...T,...w,...H};function Z(e,r){let a=e.bornes.find(e=>e.nom===r);if(!a)return[];let n=e=>e.conseil[0]===e.conseil[1]?`${(0,t.f)(e.conseil[0],2)} V`:`${(0,t.f)(e.conseil[0],2)} \xe0 ${(0,t.f)(e.conseil[1],2)} V conseill\xe9s`,s=e.alimentation.entrees.find(e=>e.borne===r);switch(a.sorte){case"masse":return["masse, 0 V"];case"prise":if("prise USB"===r)return[`la prise ${e.alimentation.usb} : le 5 V du PC ou d'un chargeur, et le t\xe9l\xe9versement`];return s?[`${s.texte}, ${n(s)}`]:["une prise d'alimentation"];case"alim":if(s)return[`alimentation : ${s.texte}, ${n(s)}`];if("VIN"===r)return["alimentation : l'entrée de la prise jack (7 à 12 V)"];if("IOREF"===r)return[`la tension des broches (${(0,t.f)(e.tension,1)} V), pour les cartes d'extension`];return[a.tension?`alimentation ${(0,t.f)(a.tension,1)} V`:"alimentation"];case"autre":return[{AREF:"référence du convertisseur analogique",RESET:"remise à zéro (à l'état bas)",RST:"remise à zéro (à l'état bas)",EN:"mise en marche (à l'état bas : la carte s'arrête)"}[r.replace(/\.\d+$/,"")]??"borne de la carte"]}let i=a.broche,l=[`broche ${i} dans le programme`],o=Object.entries(e.analogiques).find(([,e])=>e===i)?.[0];for(let[r,t]of(o?l.push(`entr\xe9e analogique ${o}`):e.adc.includes(i)&&l.push("entrée analogique"),e.entreesSeules.includes(i)?l.push("entrée seulement"):("toutes"===e.mli||e.mli.includes(i))&&l.push("sortie MLI (analogWrite)"),e.sda===i&&l.push("SDA (bus I²C)"),e.scl===i&&l.push("SCL (bus I²C)"),Object.entries(e.alias)))t===i&&["SS","MOSI","MISO","SCK"].includes(r)&&l.push(`${r} (bus SPI)`);"avr"===e.famille&&0===i&&l.push("RX (liaison série)"),"avr"===e.famille&&1===i&&l.push("TX (liaison série)"),("toutes"===e.interruptions||e.interruptions?.includes(i))&&l.push("interruption externe"),e.ledIntegree===i&&l.push("LED de la carte (LED_BUILTIN)");let u=e.aEviter[i];return u&&l.push(`attention : ${u.replace(/^[^:]*: /,"")}`),l}function Y(e,r,t=.35){let a=new n(9,10);a.distance=e,a.temperature=r;let s=(0,W.r)(X,"uno",{impulsion:(e,r,t,n)=>a.impulsion(e,r,t,n)});return s.ok?((0,W.h)(s.sim,t),{lignes:s.sim.etat.sortieSerie.split("\r\n").filter(e=>""!==e),dureeEcho:a.dureeEcho()}):{lignes:[`Ligne ${s.erreur.ligne} : ${s.erreur.message}`],dureeEcho:0}}a.v.uno},17251,e=>{"use strict";var r=e.i(11382),t=e.i(78056),a=e.i(54105),n=e.i(88826),s=e.i(68217),i=e.i(77562),l=e.i(82492),o=e.i(13056),u=e.i(42203),c=e.i(40192),d=e.i(22219),d=d,m=e.i(7372);let p=r.z.object({x:t.z.number(),y:t.z.number()}),h={id:a.z.string(),repere:a.z.string(),position:p,rotation:n.z.union([s.z.literal(0),s.z.literal(90),s.z.literal(180),s.z.literal(270)]),systeme:a.z.string().optional()},f=e=>r.z.object({...h,sorte:s.z.literal(e)}),g=["rouge","vert","jaune","orange","bleu","blanc"],b=["cathode","anode"],v=i.z.discriminatedUnion("sorte",[f("bouton"),f("interrupteur"),f("fin-de-course"),r.z.object({...h,sorte:s.z.literal("potentiometre"),valeur:t.z.number().positive()}),f("joystick"),f("ldr"),f("lm35"),f("tmp36"),r.z.object({...h,sorte:s.z.literal("dht"),modele:l.z.enum(["DHT11","DHT22"])}),r.z.object({...h,sorte:s.z.literal("bmp280"),adresse:n.z.union([s.z.literal(118),s.z.literal(119)])}),f("hc-sr04"),f("pir"),f("obstacle-ir"),f("suiveur-ligne"),f("as5600"),f("effet-hall"),r.z.object({...h,sorte:s.z.literal("hx711"),portee:t.z.number().positive()}),r.z.object({...h,sorte:s.z.literal("mpu6050"),adresse:n.z.union([s.z.literal(104),s.z.literal(105)])}),f("ky-040"),r.z.object({...h,sorte:s.z.literal("ina219"),adresse:n.z.union([s.z.literal(64),s.z.literal(65),s.z.literal(68),s.z.literal(69)])}),f("vl53l0x"),f("inductif"),f("capacitif"),f("ils"),f("fourche-optique"),f("ds18b20"),f("max6675"),f("debitmetre"),f("pression"),r.z.object({...h,sorte:s.z.literal("acs712"),calibre:n.z.union([s.z.literal(5),s.z.literal(20),s.z.literal(30)])}),f("diviseur"),f("vibration"),f("son"),f("couleur"),f("clavier"),f("rfid"),r.z.object({...h,sorte:s.z.literal("led"),couleur:l.z.enum(g)}),r.z.object({...h,sorte:s.z.literal("led-rgb"),commun:l.z.enum(b)}),r.z.object({...h,sorte:s.z.literal("ws2812"),nombre:t.z.number().int().positive()}),r.z.object({...h,sorte:s.z.literal("buzzer"),actif:o.z.boolean()}),r.z.object({...h,sorte:s.z.literal("servomoteur"),impulsion0:t.z.number().positive(),impulsion180:t.z.number().positive()}),f("moteur-cc"),f("pont-h"),f("moteur-pas-a-pas"),f("driver-pas-a-pas"),f("relais"),f("nema17"),f("a4988"),f("motoreducteur-codeur"),f("servo-continu"),f("tb6612"),f("mosfet"),f("electrovanne"),f("pompe"),f("ventilateur"),f("electroaimant"),f("solenoide"),r.z.object({...h,sorte:s.z.literal("lcd"),adresse:n.z.union([s.z.literal(39),s.z.literal(63)])}),r.z.object({...h,sorte:s.z.literal("oled"),adresse:n.z.union([s.z.literal(60),s.z.literal(61)])}),r.z.object({...h,sorte:s.z.literal("sept-segments"),commun:l.z.enum(b)}),f("tm1637"),f("max7219"),r.z.object({...h,sorte:s.z.literal("usb-pc"),port:l.z.enum(["usb2","usb3"])}),r.z.object({...h,sorte:s.z.literal("bloc-usb"),courant:t.z.number().positive()}),r.z.object({...h,sorte:s.z.literal("batterie-usb"),capacite:t.z.number().positive()}),r.z.object({...h,sorte:s.z.literal("bloc-jack"),tension:t.z.number().positive()}),r.z.object({...h,sorte:s.z.literal("pile-9v"),raccord:l.z.enum(["jack","fils"])}),r.z.object({...h,sorte:s.z.literal("piles-aa"),nombre:n.z.union([s.z.literal(4),s.z.literal(6)])}),r.z.object({...h,sorte:s.z.literal("batterie-lithium"),forme:l.z.enum(["lipo","18650"]),capacite:t.z.number().positive()}),r.z.object({...h,sorte:s.z.literal("resistance"),valeur:t.z.number().positive()}),f("diode"),r.z.object({...h,sorte:s.z.literal("alimentation"),tension:t.z.number().positive()}),r.z.object({...h,sorte:s.z.literal("platine"),taille:l.z.enum(["demi","pleine"])})]),x=r.z.object({element:a.z.string(),borne:a.z.string()}),y=["rouge","noir","orange","jaune","vert","bleu","violet","gris","blanc","marron"],D=r.z.object({id:a.z.string(),de:x,vers:x,couleur:l.z.enum(y),coudes:u.z.array(p)}),V=r.z.object({cle:a.z.string(),acceptees:u.z.array(a.z.string())}),S=r.z.object({id:a.z.string(),debut:t.z.number().int().nonnegative(),fin:t.z.number().int().nonnegative(),acceptees:u.z.array(a.z.string())}),C=r.z.object({mode:l.z.enum(["prof","eleve"]),code:u.z.array(S),fils:u.z.array(a.z.string()),filsEleve:u.z.array(D),broches:u.z.array(V),intrus:u.z.array(a.z.string()),reponses:c.z.record(a.z.string(),a.z.string())}),A=r.z.object({carte:l.z.enum(m.b),positionCarte:p,rotationCarte:n.z.union([s.z.literal(0),s.z.literal(90),s.z.literal(180),s.z.literal(270)]),composants:u.z.array(v),fils:u.z.array(D),circuit:a.z.string().optional(),programme:r.z.object({source:a.z.string(),blocs:c.z.record(a.z.string(),d.unknown()).optional()}),sujet:C.optional()}),L=`void setup() {
  // Ce qui se fait une fois, au d\xe9marrage.
}

void loop() {
  // Ce qui se r\xe9p\xe8te, sans fin.
}
`;e.s(["A",0,b,"q",0,y,"I",0,g,"G",0,"carte","b",0,L,"L",0,A,"V",0,function(){return{carte:"uno",positionCarte:{x:0,y:0},rotationCarte:0,composants:[],fils:[],programme:{source:L}}},"v",0,function(e){return e.composants.every(e=>["usb-pc","bloc-usb","batterie-usb","bloc-jack","pile-9v","piles-aa","batterie-lithium"].includes(e.sorte))}],17251)},95966,e=>{"use strict";var r=e.i(75379);function t(e,r){let{nom:t,feminin:a}=function(e,r){let t=e=>({nom:e,feminin:!1}),a=e=>({nom:e,feminin:!0});switch(e){case"source":return a("source de pression");case"sectionnement":return a("vanne de sectionnement");case"regulateur":return t("régulateur de pression");case"manometre":return t("manomètre");case"reservoir":return t("réservoir");case"pompe":return a("pompe");case"limiteur-pression":return t("limiteur de pression");case"reducteur-debit":return t("pneumatique"===r?"réducteur de débit":"limiteur de débit");case"clapet-anti-retour":return t("clapet anti-retour");case"clapet-pilote":return t("clapet piloté");case"clapet-parachute":return t("clapet parachute");case"verin":return t("vérin");default:return t(e)}}(e.sorte,r),n=e.repere.trim();return`${a?"la":"le"} ${t}${n?` ${n}`:""}`}let a={bouton:{seule:()=>"à commande manuelle par bouton-poussoir",adjectif:()=>"manuelle"},levier:{seule:()=>"à commande manuelle par levier",adjectif:()=>"manuelle"},pedale:{seule:()=>"à commande manuelle par pédale",adjectif:()=>"manuelle"},poussoir:{seule:()=>"à commande mécanique par poussoir",adjectif:()=>"mécanique"},galet:{seule:()=>"à commande mécanique par galet",adjectif:()=>"mécanique"},pilotage:{seule:e=>`\xe0 commande ${e}`,adjectif:e=>e},bobine:{seule:e=>"pneumatique"===e?"à commande électropneumatique":"à commande électrique",adjectif:e=>"pneumatique"===e?"électropneumatique":"électrique"}},n={ferme:()=>"centre fermé",ouvert:()=>"centre ouvert",echappement:e=>"pneumatique"===e?"centre à l'échappement":"centre A et B au réservoir",pression:()=>"centre sous pression",tandem:()=>"centre tandem"};function s(e){return"rentre"===e?"tige rentrée":"sorti"===e?"tige sortie":`\xe0 ${(0,r.f)(e)} mm de la tige rentr\xe9e`}e.s(["a",0,function(e){return e.startsWith("le ")?`au ${e.slice(3)}`:e.startsWith("les ")?`aux ${e.slice(4)}`:`\xe0 ${e}`},"f",0,function(e,a){let n=e=>(0,r.f)(e,2);switch(e.sorte){case"source":return`${n(e.pression)} bar`;case"regulateur":return`r\xe9gl\xe9 \xe0 ${n(e.pression)} bar`;case"pressostat":return`seuil \xe0 ${n(e.seuil)} bar`;case"reservoir":return e.volume?`${n(e.volume)} L`:"";case"pompe":{let r=[e.puissance?`${n(e.puissance)} kW`:"",e.vitesse?`${n(e.vitesse)} tr/min`:""].filter(Boolean).join(" à ");return`${n(e.debit)} L/min${r?`, moteur ${r}`:""}`}case"limiteur-pression":return`tar\xe9 \xe0 ${n(e.tarage)} bar`;case"reducteur-debit":return`ouvert \xe0 ${n(e.ouverture)} %`;case"verin":return`\xd8 ${n(e.alesage)}, tige \xd8 ${n(e.tige)}, course ${n(e.course)} mm${e.amortissement?", amortissement réglable":""}`;case"moteur":return`cylindr\xe9e ${n(e.cylindree)} cm\xb3/tr`;case"capteur":{let r=a.composants.find(r=>r.id===e.verin);return r?`${t(r,a.fluide).replace(/^le /,"")}, ${s(e.endroit)}`:""}case"distributeur":{let r=[...e.gauche,...e.droite].flatMap(e=>"bobine"===e.sorte&&e.repere.trim()?[e.repere.trim()]:[]);return r.length>0?`bobine${r.length>1?"s":""} ${r.join(" et ")}`:""}default:return""}},"Y",0,function(e){return e.startsWith("le ")?`du ${e.slice(3)}`:e.startsWith("les ")?`des ${e.slice(4)}`:`de ${e}`},"o",0,function(e,r){switch(e.sorte){case"source":return"Source de pression";case"sectionnement":return"Vanne de sectionnement cadenassable";case"filtre":return e.clapet?"Filtre avec clapet de dérivation":"Filtre";case"regulateur":return"Régulateur de pression";case"lubrificateur":return"Lubrificateur";case"manometre":return"Manomètre";case"pressostat":return"Pressostat";case"silencieux":return"Silencieux d'échappement";case"reservoir":return"Réservoir";case"pompe":return"Pompe à cylindrée fixe";case"limiteur-pression":return"Limiteur de pression";case"robinet":return"Robinet";case"distributeur":{let t=[e.gauche,e.droite].filter(e=>e.some(e=>"ressort"===e.sorte)).length,s=[`Distributeur ${e.voies}/${e.positions}`];2===e.positions?s.push(t>0?"monostable":"bistable"):e.centre&&s.push(n[e.centre](r));let i=function(e,r){let t=[...new Set(e.map(e=>e.sorte))].filter(e=>"ressort"!==e);if(0===t.length)return"";if(1===t.length)return a[t[0]].seule(r);let n=[...new Set(t.map(e=>a[e].adjectif(r)))];return`\xe0 commande ${n.join(" et ")}`}([...e.gauche,...e.droite],r);i&&s.push(i);let l=s.join(" ");if(2===e.positions&&1===t)return`${l}, rappel par ressort`;if(3===e.positions&&2===t)return`${l}, centrage par ressorts`;return l}case"reducteur-debit":return`${"pneumatique"===r?"Réducteur":"Limiteur"} de d\xe9bit ${e.unidirectionnel?"unidirectionnel":"bidirectionnel"}`;case"clapet-anti-retour":return"Clapet anti-retour";case"clapet-pilote":return e.double?"Double clapet piloté":"Clapet piloté";case"clapet-parachute":return"Clapet parachute";case"coupleur":return"Coupleur rapide";case"verin":return`V\xe9rin ${e.effet.sorte} effet simple tige`;case"moteur":return`Moteur ${r} \xe0 ${e.bidirectionnel?"deux sens":"un sens"} de rotation`;case"capteur":return"magnetique"===e.detection?"Détecteur magnétique":"Capteur de fin de course à galet";case"raccord":return"Raccord"}},"W",0,t,"C",0,s])}]);