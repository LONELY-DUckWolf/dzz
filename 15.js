//1

const americans = [
  { name: 'joBayden', balance: 30000000, skills: ['fall on stairs'], friendsCount: 2, friendsName: ['a', 'b'] },
  { name: 'trump', balance: 888888888888, skills: ['be with out hear'], friendsCount: 5, friendsName: ['k', 'd'] },
  { name: 'ilonMask', balance: 20000000000, skills: ['miliorder', 'filantrop', 'playboy'], friendsCount: 7, friendsName: ['a', 'c'] }

  ];

  const balance = americans.reduce((totalbalance, american) => totalbalance + american.balance, 0);
  console.log(balance); 


//2

const friendsName = (americans, friendsNAme) => {
  return americans.reduce((rap, { name, friendsName }) => {
    if (friendsName.includes(friendsNAme)) {
      rap.push(name);
    }
    return rap;
  }, []);
};

console.log(friendsName(americans, 'a'))


//3

  const sortByActiveDays = (a, b) => a.friendsCount - b.friendsCount;
  console.log(americans.sort(sortByActiveDays));
  


//4
const americanS = [
  { name: 'joBayden', balance: 30000000, skills: ['fall on stairs'], friendsCount: 2, friendsName: ['a', 'b'] },
  { name: 'trump', balance: 888888888888, skills: ['be with out hear'], friendsCount: 5, friendsName: ['k', 'd'] },
  { name: 'ilonMask', balance: 20000000000, skills: ['miliorder', 'filantrop', 'playboy'], friendsCount: 7, friendsName: ['a', 'c'] }

  ];

  const skillsAll = americanS.reduce((pal, americans) => {
    americans.skills.forEach((skill) => {
      if (!pal.includes(skill)) {
        pal.push(skill);
      }
    });
    return pal;
  }, []);

console.log(skillsAll.sort((firstFriend, endFriend) => {
  return firstFriend.localeCompare(endFriend);
})
);