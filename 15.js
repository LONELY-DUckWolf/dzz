
//1



const w = [23, 32, 3, 32, 3, 2];

const sum = w.reduce((totalSum, number) => {
    return totalSum + number

}, 0)

console.log(sum);

//2

const players = [
    { name: 'player-1', fname: 'Mango', },
    { name: 'player-2', fname: 'Poly', },
    { name: 'player-3', fname: 'Kiwi', },
    { name: 'player-4', fname: 'Ajax', },
    { name: 'player-5', fname: 'Chelsy', },
  ]

  const fnameName = (players, fName) => {
    return players.reduce((rap, { name, fname }) => {
      if (fname.includes(fName)) {
        rap.push(name);
      }
      return rap;
    }, []);
  };

  console.log(fnameName(players, 'Mango'))


//3

const rexs = [
    { name: 'player-1', fname: ['arab', 'aziat'], },
    { name: 'player-2', fname: ['arab' ], },
    { name: 'player-3', fname: ['arab', 'water', 'riba'], },
    { name: 'player-4', fname: ['arab', 'andertale'], },
    { name: 'player-5', fname: ['arab', 'mugamammed'], },
  ]

  
  const rexContttt = rexs.reduce((rexCount, rex) => {
    rexCount.push(rex.fname.length + " " + rex.name)
    return rexCount
  }, [])
  const rexing = rexContttt.sort()

  console.log(rexing);

//4

const abus = [
    { name: 'player-1', skills: ['Mango',  'unity'] , },
    { name: 'player-2', skills: ['Poly',   'blender'], },
    { name: 'player-3', skills: ['Kiwi',   'blender'],},
    { name: 'player-4', skills: ['Ajax',   'montaj'], },
    { name: 'player-5', skills: ['Chelsy', 'shinomontaj'], },
  ]



  const alesSkills = abus.reduce((kap, abu) => {
    abu.skills.forEach((skill) => {
      if (!kap.includes(skill)) {
        kap.push(skill);
      }
    });
    return kap;
  }, []);
  
  console.log(
    alesSkills.sort((prevName, nextName) => {
      return prevName.localeCompare(nextName);
    })
  );