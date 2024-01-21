const center = document.getElementById('center');

const apiUrl = 'https://www.godzillapi.com/api'

let monstersList = null;

async function getMonsters () {
  const response = await fetch(`${apiUrl}/monsters`);
  monstersList = await response.json();
  monstersList.forEach(monsterElement => {
    console.log('monsterElement :>> ', monsterElement);
    const kaijuCardTemplate = `
    <div class="Godzilla">
      <img id="img" src="${monsterElement.img}" width="500px" height="200px" alt="monster preview"/>
      <h3 id="flex-item-1">${monsterElement.name}</h3>
      <h4 >${monsterElement.firstAppearance}</h4>
      ${monsterElement.ability}
    </div>
    `

  center.innerHTML += kaijuCardTemplate
  });
}

getMonsters()

