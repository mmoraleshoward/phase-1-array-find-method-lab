// code your solution here
function superbowlWin(stats) {
   let whatYear = stats.find(({result}) => result === 'W');
   if (whatYear){
    return whatYear["year"];
   }
}

